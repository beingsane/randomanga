import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import { Logger } from 'winston';
import { Container } from 'typedi';
import MangaService from '../../services/manga';
import { IMangaSearchDTO } from '../../interfaces/IManga';

const route = Router();

export default (app: Router) => {
  app.use('/manga', route);
  route.get(
    '/daily',
    middlewares.isLogged,
    middlewares.attachCurrentUser,
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      try {
        const mangaServiceInstance = Container.get(MangaService);
        const manga = await mangaServiceInstance.getRandomDaily(req.currentUser ? req.currentUser : null);
        res.json({ manga }).status(200);
      } catch (e) {
        console.error(e);
        res.status(502).json({
          errors: {
            message: 'A server error occured while fetching daily manga. ',
          },
        });
      }
    },
  );
  route.get('/:al_id/related', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    logger.silly('Searching for related manga');
    try {
      const mangaServiceInstance = Container.get(MangaService);
      const manga = await mangaServiceInstance.getMangaRelations({
        al_id: Number(req.params.al_id),
      } as IMangaSearchDTO);
      res.json({ manga }).status(200);
    } catch (e) {
      logger.error('🔥 error: %o', e);
      return next(e);
    }
  });
  route.get('/:al_id', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    logger.silly(`Searching for manga with id: ${req.params.al_id}`);
    try {
      const mangaServiceInstance = Container.get(MangaService);
      const manga = await mangaServiceInstance.getManga({ al_id: Number(req.params.al_id) } as IMangaSearchDTO);

      res.json({ manga }).status(200);
    } catch (e) {
      logger.error('🔥 error: %o', e);
      return next(e);
    }
  });
  route.post(
    '/:al_id/likes',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      //logger.silly(`Invoked like for manga with id: ${req.params.al_id}`);
      try {
        const al_id = Number(req.params.al_id);
        const mangaServiceInstance = Container.get(MangaService);
        await mangaServiceInstance.likeManga({ al_id: al_id }, req.currentUser);
        res.sendStatus(200);
      } catch (e) {
        res
          .json({
            errors: {
              messages: 'An error occured. Manga id is invalid',
            },
          })
          .status(502);
      }
    },
  );
  route.get(
    '/:al_id/likes',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      try {
        const al_id = Number(req.params.al_id);
        const mangaServiceInstance = Container.get(MangaService);
        const status = await mangaServiceInstance.getLikeStatus({ al_id }, req.currentUser);
        res.json({ like_status: status }).status(200);
      } catch (e) {
        res
          .json({
            errors: {
              message: e.message,
            },
          })
          .status(400);
      }
    },
  );
  route.delete(
    '/:al_id/likes',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      //logger.silly(`Invoked unlike for manga with id: ${req.params.al_id}`);
      try {
        const al_id = Number(req.params.al_id);
        const mangaServiceInstance = Container.get(MangaService);
        await mangaServiceInstance.unlikeManga({ al_id: al_id }, req.currentUser);
        res.sendStatus(200);
      } catch (e) {
        res
          .json({
            errors: {
              messages: 'An error occured. Manga id is invalid',
            },
          })
          .status(502);
      }
    },
  );
};
