const tags = [
    {
        category: 'Technical',
        tags: [
            '4-koma',
            'Achromatic',
            'Advertisement',
            'Anthology',
            'CGI',
            'Episodic',
            'Flash',
            'Full CGI',
            'Full Color',
            'No Dialogue',
            'POV',
            'Puppetry',
            'Rotoscoping',
            'Stop Motion',
        ],
    },
    {
        category: 'Setting-Time',
        tags: [
            'Achronological Order',
            'Anachronism',
            'Dystopian',
            'Historical',
            'Time Skip',
        ],
    },
    {
        category: 'Theme-Arts',
        tags: [
            'Acting',
            'Calligraphy',
            'Classic Literature',
            'Drawing',
            'Fashion',
            'Food',
            'Photography',
            'Rakugo',
            'Writing',
        ],
    },
    {
        category: 'Setting-Universe',
        tags: [
            'Afterlife',
            'Alternate Universe',
            'Augmented Reality',
            'Omegaverse',
            'Post-Apocalyptic',
            'Space',
            'Urban Fantasy',
            'Virtual World',
        ],
    },
    {
        category: 'Theme-Romance',
        tags: [
            'Age Gap',
            'Bisexual',
            "Boys' Love",
            'Harem',
            'Love Triangle',
            'Reverse Harem',
            "Teens' Love",
            'Yuri',
        ],
    },
    {
        category: 'Cast-Traits',
        tags: [
            'Age Regression',
            'Agender',
            'Aliens',
            'Amnesia',
            'Artificial Intelligence',
            'Asexual',
            'Butler',
            'Centaur',
            'Chimera',
            'Chuunibyou',
            'Cosplay',
            'Crossdressing',
            'Delinquents',
            'Demons',
            'Detective',
            'Dinosaurs',
            'Dissociative Identities',
            'Dragons',
            'Dullahan',
            'Elf',
            'Ghost',
            'Goblin',
            'Gods',
            'Gyaru',
            'Hikikomori',
            'Idol',
            'Kemonomimi',
            'Kuudere',
            'Maids',
            'Mermaid',
            'Monster Girl',
            'Nekomimi',
            'Ninja',
            'Nudity',
            'Nun',
            'Oiran',
            'Ojou-sama',
            'Pirates',
            'Robots',
            'Samurai',
            'Shrine Maiden',
            'Skeleton',
            'Succubus',
            'Tanned Skin',
            'Teacher',
            'Tsundere',
            'Twins',
            'Vampire',
            'Vikings',
            'Werewolf',
            'Witch',
            'Yandere',
            'Zombie',
        ],
    },
    {
        category: 'Sexual Content',
        tags: [
            'Ahegao',
            'Amputation',
            'Anal Sex',
            'Armpits',
            'Ashikoki',
            'Asphyxiation',
            'Blackmail',
            'Bondage',
            'Boobjob',
            'Cunnilingus',
            'Defloration',
            'Exhibitionism',
            'Facial',
            'Feet',
            'Fellatio',
            'Flat Chest',
            'Futanari',
            'Group Sex',
            'Handjob',
            'Human Pet',
            'Incest',
            'Irrumatio',
            'Lactation',
            'Large Breasts',
            'Masturbation',
            'MILF',
            'Nakadashi',
            'Netorare',
            'Netorase',
            'Netori',
            'Pregnant',
            'Prostitution',
            'Public Sex',
            'Rape',
            'Rimjob',
            'Sadism',
            'Scat',
            'Sex Toys',
            'Sumata',
            'Sweat',
            'Tentacles',
            'Threesome',
            'Urination',
            'Virginity',
            'Vore',
            'Voyeur',
        ],
    },
    {
        category: 'Theme-Game-Sport',
        tags: [
            'Airsoft',
            'American Football',
            'Athletics',
            'Badminton',
            'Baseball',
            'Basketball',
            'Boxing',
            'Cheerleading',
            'Cycling',
            'Fishing',
            'Fitness',
            'Football',
            'Golf',
            'Ice Skating',
            'Lacrosse',
            'Rugby',
            'Scuba Diving',
            'Skateboarding',
            'Surfing',
            'Swimming',
            'Table Tennis',
            'Tennis',
            'Volleyball',
            'Wrestling',
        ],
    },
    {
        category: 'Theme-Other',
        tags: [
            'Animals',
            'Astronomy',
            'Autobiographical',
            'Biographical',
            'Body Horror',
            'Cannibalism',
            'Chibi',
            'Cosmic Horror',
            'Crime',
            'Crossover',
            'Death Game',
            'Denpa',
            'Drugs',
            'Economics',
            'Educational',
            'Environmental',
            'Ero Guro',
            'Gambling',
            'Gender Bending',
            'Gore',
            'LGBTQ+ Themes',
            'Lost Civilization',
            'Medicine',
            'Memory Manipulation',
            'Meta',
            'Noir',
            'Otaku Culture',
            'Pandemic',
            'Philosophy',
            'Politics',
            'Reincarnation',
            'Slavery',
            'Software Development',
            'Survival',
            'Terrorism',
            'War',
        ],
    },
    {
        category: 'Cast-Main Cast',
        tags: [
            'Anti-Hero',
            'Ensemble Cast',
            'Female Protagonist',
            'Male Protagonist',
            'Office Lady',
            'Primarily Adult Cast',
            'Primarily Child Cast',
            'Primarily Female Cast',
            'Primarily Male Cast',
            'Villainess',
        ],
    },
    {
        category: 'Theme-Action',
        tags: [
            'Archery',
            'Battle Royale',
            'Espionage',
            'Fugitive',
            'Guns',
            'Martial Arts',
            'Swordplay',
        ],
    },
    {
        category: 'Theme-Other-Organisations',
        tags: [
            'Assassins',
            'Cult',
            'Firefighters',
            'Gangs',
            'Mafia',
            'Military',
            'Police',
            'Triads',
            'Yakuza',
        ],
    },
    {
        category: 'Theme-Other-Vehicle',
        tags: [
            'Aviation',
            'Cars',
            'Mopeds',
            'Motorcycles',
            'Ships',
            'Tanks',
            'Trains',
        ],
    },
    {
        category: 'Theme-Arts-Music',
        tags: ['Band', 'Dancing', 'Musical'],
    },
    {
        category: 'Setting-Scene',
        tags: [
            'Bar',
            'Circus',
            'College',
            'Dungeon',
            'Foreign',
            'Language Barrier',
            'Outdoor',
            'Rural',
            'School',
            'School Club',
            'Urban',
            'Work',
        ],
    },
    {
        category: 'Theme-Fantasy',
        tags: [
            'Body Swapping',
            'Cultivation',
            'Fairy Tale',
            'Henshin',
            'Isekai',
            'Kaiju',
            'Magic',
            'Mythology',
            'Shapeshifting',
            'Steampunk',
            'Super Power',
            'Superhero',
            'Wuxia',
            'Youkai',
        ],
    },
    {
        category: 'Theme-Drama',
        tags: [
            'Bullying',
            'Coming of Age',
            'Conspiracy',
            'Rehabilitation',
            'Revenge',
            'Tragedy',
        ],
    },
    {
        category: 'Theme-Game-Card & Board Game',
        tags: ['Card Battle', 'Go', 'Karuta', 'Mahjong', 'Poker', 'Shogi'],
    },
    {
        category: 'Theme-Slice of Life',
        tags: ['Cute Girls Doing Cute Things', 'Family Life', 'Iyashikei'],
    },
    {
        category: 'Theme-Sci-Fi',
        tags: ['Cyberpunk', 'Space Opera', 'Time Manipulation', 'Tokusatsu'],
    },
    {
        category: 'Demographic',
        tags: ['Josei', 'Kids', 'Seinen', 'Shoujo', 'Shounen'],
    },
    {
        category: 'Theme-Comedy',
        tags: ['Parody', 'Satire', 'Slapstick', 'Surreal Comedy'],
    },
    {
        category: 'Theme-Sci-Fi-Mecha',
        tags: ['Real Robot', 'Super Robot'],
    },
    {
        category: 'Theme-Game',
        tags: ['Video Games'],
    },
];

const genres = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Ecchi',
    'Fantasy',
    'Hentai',
    'Horror',
    'Mahou Shoujo',
    'Mecha',
    'Music',
    'Mystery',
    'Psychological',
    'Romance',
    'Sci-Fi',
    'Slice of Life',
    'Sports',
    'Supernatural',
    'Thriller',
];

export { tags, genres };