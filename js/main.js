const catalogItems = [
    {
        main_photo_path: 'img/games/activity/main.jpeg',
        slides: [
            'img/games/activity/1.jpeg',
            'img/games/activity/2.jpeg',
            'img/games/activity/3.jpeg',
            'img/games/activity/4.jpeg',
            'img/games/activity/5.jpeg',
            'img/games/activity/6.jpeg',
            'img/games/activity/7.jpeg',
            'img/games/activity/8.jpeg',
        ],
        short_description: 'Activity Original',
        description: 'Это креативная игра, основанная на обмене идеями и ассоциациями. Играя, мы используем ежедневные формы общения: речь, рисунок, мимику и жесты. Чем дальше, тем сложнее, а тот, кто станет победителем, может определяться в последний момент.<br><br>Количество игроков: 3 - 16',
        per_hour: 15,
        per_day: 79
    },
    {
        main_photo_path: 'img/games/alias/main.jpeg',
        slides: [
            'img/games/alias/1.jpeg',
            'img/games/alias/2.jpeg',
            'img/games/alias/3.jpeg',
            'img/games/alias/4.jpeg',
            'img/games/alias/5.jpeg',
            'img/games/alias/6.jpeg',
            'img/games/alias/7.jpeg',
            'img/games/alias/8.jpeg',
            'img/games/alias/9.jpeg',
        ],
        short_description: 'Alias: Дамы против Джентльменов',
        description: 'В этой увлекательной версии классической игры на объяснение слов женщины состязаются с мужчинами. Объясняйте слова своей команде, не называя их напрямую каждое правильно угаданное слово на шаг приближает вас к победе!<br><br>Количество игроков: от 4',
        per_hour: 15,
        per_day: 67
    },
    {
        main_photo_path: 'img/games/catan/main.jpeg',
        slides: [
            'img/games/catan/1.jpeg',
            'img/games/catan/2.jpeg',
            'img/games/catan/3.jpeg',
            'img/games/catan/4.jpeg',
            'img/games/catan/5.jpeg',
            'img/games/catan/6.jpeg',
            'img/games/catan/7.jpeg',
        ],
        short_description: 'Catan: колонизаторы',
        description: 'Перед отважными колонизаторами простирается новая земля - огромный остров под названием Катан. Здесь им предстоит осваивать территорию, добывая сырьё, прокладывать дороги и возводить города, торговать и бороться с разбойниками. Кому из поселенцев удастся создать самое могущественное государство? Ответ зависит только от вас.<br><br>Количество игроков: 3 - 4',
        per_hour: 15,
        per_day: 179
    },
    {
        main_photo_path: 'img/games/jenga/main.jpeg',
        slides: [
            'img/games/jenga/1.jpeg',
            'img/games/jenga/2.jpeg',
            'img/games/jenga/3.jpeg',
            'img/games/jenga/4.jpeg',
            'img/games/jenga/5.jpeg',
            'img/games/jenga/6.jpeg',
        ],
        short_description: 'Jenga',
        description: 'Игра на ловкость рук, которую вы наверняка неоднократно видели в сериалах и фильмах. Легендарнейший хит среди себе подобных – Jenga является настоящей классикой мира настольных игр!',
        per_hour: 15,
        per_day: 87
    },
    {
        main_photo_path: 'img/games/mistakos/main.webp',
        slides: [
            'img/games/mistakos/1.webp',
            'img/games/mistakos/2.webp',
        ],
        short_description: 'Mistakos extra',
        description: 'Цель игры состоит в том, чтобы избавиться от своих стульев. Равномерно разделить стулья между игроками. Игроки должны ставить стулья один на другой таким образом, чтобы конструкция из стульев не упала. Только один стул в основании должен касаться стола, все последующие ставятся на него. Взрослые игроки собирают стулья одной рукой, а дети двумя. Если стулья упадут во время хода игрока, он должен забрать себе все стулья, которые упали. Игроки ходят по часовой стрелке. Победителем считается тот, кто первый избавится от всех своих стульев.',
        per_hour: 15,
        per_day: 55
    },
    {
        main_photo_path: 'img/games/monopoly-fortnite/main.jpeg',
        slides: [
            'img/games/monopoly-fortnite/1.jpeg',
            'img/games/monopoly-fortnite/2.jpeg',
            'img/games/monopoly-fortnite/3.jpeg',
        ],
        short_description: 'Monopoly Fortnite',
        description: 'Вариация известной игры о торговле недвижимостью выполненная в стиле компьютерной игры Fortnite. В отличии от классической версии монополии, игрокам предстоит сразиться по правилам батл рояля. Для победы необходимо устранить всех оппонентов.',
        per_hour: 15,
        per_day: 118
    },
    {
        main_photo_path: 'img/games/monopoly-scam/main.jpeg',
        slides: [
            'img/games/monopoly-scam/1.jpeg',
            'img/games/monopoly-scam/2.jpeg',
            'img/games/monopoly-scam/3.jpeg',
            'img/games/monopoly-scam/4.jpeg',
            'img/games/monopoly-scam/5.jpeg',
            'img/games/monopoly-scam/6.jpeg',
            'img/games/monopoly-scam/7.jpeg',
            'img/games/monopoly-scam/8.jpeg',
            'img/games/monopoly-scam/9.jpeg',
        ],
        short_description: 'Monopoly большая афера',
        description: 'Жульничай, чтобы опередить соперников и старайся поймать других игроков с поличным, пока покупаешь собственность, cобираешь ренту и приумножаешь своё богатство! Игра заканчивается, когда куплена вся собственность, и все игроки вернулись на клетку "ВПЕРЕД". Побеждает игрок, у которого больше всех денег!<br><br>Однако, ПОДОЖДИ В игре допускается произвол. Карточки "Афера" и тайные карточки "Шанс" и "Общественная казна" говорят, когда и как провернуть аферу. Любое другое жульничество не разрешается!',
        per_hour: 15,
        per_day: 139
    },
    {
        main_photo_path: 'img/games/monopoly-cards/main.jpeg',
        slides: [
            'img/games/monopoly-cards/1.jpeg',
            'img/games/monopoly-cards/2.jpeg',
            'img/games/monopoly-cards/3.jpeg',
            'img/games/monopoly-cards/4.jpeg',
            'img/games/monopoly-cards/5.jpeg',
            'img/games/monopoly-cards/6.jpeg',
            'img/games/monopoly-cards/7.jpeg',
        ],
        short_description: 'Monopoly бонусы без границ',
        description: 'Вариация известной игры о торговле недвижимостью, где все банковские операции осуществляются через специальный терминал. Каждый игрок получает банковскую карту, куда зачисляются все его средства и хранится информация о его приобретениях.',
        per_hour: 15,
        per_day: 199
    },
    {
        main_photo_path: 'img/games/monopoly-voice/main.jpeg',
        slides: [
            'img/games/monopoly-voice/1.jpeg',
            'img/games/monopoly-voice/2.jpeg',
            'img/games/monopoly-voice/3.jpeg',
        ],
        short_description: 'Monopoly голосовое управление',
        description: 'Покупайте, продавайте, мечтайте и побеждайте вместе с мистером Монополия, который будет вашим банкиром! Ходите по полю, покупайте недвижимость и получайте ренту. Игра заканчивается, когда один игрок становится банкротом. Тогда побеждает игрок, заработавший больше денег и владеющий самой дорогой недвижимостью!<br><br>Управление ходом игры осуществляется голосом. Игроки общаются напрямую с мистером Монополия, отдавая ему различные команды.',
        per_hour: 15,
        per_day: 194
    },
    {
        main_photo_path: 'img/games/pandemic/main.jpeg',
        slides: [
            'img/games/pandemic/1.jpeg',
            'img/games/pandemic/2.jpeg',
            'img/games/pandemic/3.jpeg',
            'img/games/pandemic/4.jpeg',
            'img/games/pandemic/5.jpeg',
            'img/games/pandemic/6.jpeg',
        ],
        short_description: 'Pandemic',
        description: 'Вы готовы спасти человечество?<br><br>В составе обученной команды специалистов вам нужно изобрести лекарства от четырех смертельных болезней, пока они не охватили весь мир. Вам и вашей команде предстоит путешествовать по миру, гасить очаги болезни и искать ресурсы для изобретения лекарств. Придется работать сообща, ведь Пандемия - кооперативная игра, в которой все игроки или выигрывают, или проигрывают вместе. Время идёт, постоянно случаются эпидемии и вспышки болезней. Успеете ли вы вовремя изобрести лекарства? Судьба человечества в ваших руках!',
        per_hour: 15,
        per_day: 175
    },
    {
        main_photo_path: 'img/games/scrabble/main.jpeg',
        slides: [
            'img/games/scrabble/main.jpeg',
            'img/games/scrabble/1.jpeg',
        ],
        short_description: 'Scrabble',
        description: 'Создавайте новые связи - со словами, друзьями и членами семьи - благодаря этой новой и увлекательной игре. Используйте фишки с буквами для создания слов, пересекая слова, которые уже есть на доске. Пересекайте призовые квадраты, чтобы максимально увеличить количество очков. Игрок, набравший наибольшее количество очков, становится победителем!',
        per_hour: 15,
        per_day: 110
    },
    {
        main_photo_path: 'img/games/small-world/main.jpeg',
        slides: [
            'img/games/small-world/1.jpeg',
            'img/games/small-world/2.jpeg',
            'img/games/small-world/3.jpeg',
            'img/games/small-world/4.jpeg',
            'img/games/small-world/5.jpeg',
            'img/games/small-world/6.jpeg',
            'img/games/small-world/7.jpeg',
            'img/games/small-world/8.jpeg',
        ],
        short_description: 'Small World: подземный мир',
        description: 'Перед вами альтернативная версия настольной игры Small World. Станьте во главе сказочного народа и постарайтесь вместе с ним захватить подземный мир. Вам в помощь серебряные молоты дварфов и грохочущие вулканы, ужасный Великий Древний и несокрушимый Балрог, придверный коврик-самолёт и призрак Лары Крофт, расхитительницы гробниц. Знакомый игровой процесс Small World разнообразят новые народы, способности и интересные нововведения: древние постройки и реликвии.',
        per_hour: 78,
        per_day: 225
    },
    {
        main_photo_path: 'img/games/uno/main.jpeg',
        slides: [
            'img/games/uno/main.jpeg',
            'img/games/uno/1.jpeg',
            'img/games/uno/2.jpeg',
        ],
        short_description: 'Uno',
        description: 'Определенно, одна из самых популярных настольных игр. Она является обязательной составляющей любой игротеки, забава на все времена и пространства, нестареющая классика мира карточных игр! Правила Уно объясняются за минуту, а наслаждаться игрой можно часами!',
        per_hour: 5,
        per_day: 25
    },
    {
        main_photo_path: 'img/games/dos/main.jpeg',
        slides: [
            'img/games/dos/1.jpeg',
            'img/games/dos/2.jpeg',
            'img/games/dos/3.jpeg',
            'img/games/dos/4.jpeg',
            'img/games/dos/5.jpeg',
            'img/games/dos/6.jpeg',
            'img/games/dos/7.jpeg',
        ],
        short_description: 'Dos',
        description: 'Определенно, одна из самых популярных настольных игр. Она является обязательной составляющей любой игротеки, забава на все времена и пространства, нестареющая классика мира карточных игр! Правила Уно объясняются за минуту, а наслаждаться игрой можно часами!',
        per_hour: 5,
        per_day: 25
    },
    {
        main_photo_path: 'img/games/atlantida/main.jpeg',
        slides: [
            'img/games/atlantida/1.jpeg',
            'img/games/atlantida/2.jpeg',
            'img/games/atlantida/3.jpeg',
            'img/games/atlantida/4.jpeg',
            'img/games/atlantida/5.jpeg',
            'img/games/atlantida/6.jpeg',
            'img/games/atlantida/7.jpeg',
            'img/games/atlantida/8.jpeg',
        ],
        short_description: 'Атлантида',
        description: 'Группы исследователей решили узнать все тайны затонувшего легендарного города. Но сначала необходимо найти водолазов, которые должны погрузиться под воду, и зарезервировать места для найденных сокровищ на грузовых суднах. До того, как начнется приближающийся ураган, нужно собрать, как можно больше сокровищ, так как с приходом урагана все исследовательские работы будут прекращены. Только тот из игроков, кто сможет погрузить самые ценные сокровища на кораблях и в конечном итоге получит наибольшее количество очков, станет победителем игры!',
        per_hour: 15,
        per_day: 78
    },
    {
        main_photo_path: 'img/games/heroes/main.webp',
        slides: [
            'img/games/heroes/main.webp',
            'img/games/heroes/1.webp',
            'img/games/heroes/2.webp',
            'img/games/heroes/3.webp',
        ],
        short_description: 'Герои и Сокровища',
        description: 'Вам выпал шанс присоединиться к безумному приключению! в распоряжении каждого игрока есть два отважных героя. Сражайтесь с обитателями таинственного подземелья и прокачивайте своих героев: каждый новый побеждённый монстр делает героя еще сильнее. Спуститесь в самое сердце каменного подземелья и одолейте коварного дракона, а победителем станет тот, кто унесет больше всех золота. Количество игроков: 3 - 5',
        per_hour: 15,
        per_day: 67
    },
    {
        main_photo_path: 'img/games/dixit/main.jpeg',
        slides: [
            'img/games/dixit/1.jpeg',
            'img/games/dixit/2.jpeg',
            'img/games/dixit/3.jpeg',
            'img/games/dixit/4.jpeg',
            'img/games/dixit/5.jpeg',
        ],
        short_description: 'Диксит: одиссея',
        description: 'В свой ход вы становитесь рассказчиком. Вы выбираете одну карту, придумываете для неё ассоциацию, а затем произносите подходящую подсказку. Задача остальных игроков: найти вашу карту среди остальных.',
        per_hour: 15,
        per_day: 165
    },
    {
        main_photo_path: 'img/games/g-of-t/main.jpeg',
        slides: [
            'img/games/g-of-t/1.jpeg',
            'img/games/g-of-t/2.jpeg',
            'img/games/g-of-t/3.jpeg',
            'img/games/g-of-t/4.jpeg',
            'img/games/g-of-t/5.jpeg',
            'img/games/g-of-t/6.jpeg',
            'img/games/g-of-t/7.jpeg',
            'img/games/g-of-t/8.jpeg',
            'img/games/g-of-t/9.jpeg',
        ],
        short_description: 'Игра престолов',
        description: 'Это стратегическая настольная игра по мотивам книжного Джорджа Мартина и одноимённого телесериала. Каждый игрок берет под начало один из Великих Домов Вестероса и вступает в эпическую борьбу за право восседать на Железном троне. Захватывайте замки и крепости, обороняйте свои вотчины и нападайте на земли соседей, заключайте и разрывайте договоры, отражайте нашествия одичалых и помните: в игре престолов либо побеждают, либо погибают!<br><br>К основной игре есть дополнение “Мать Драконов”, которое добавляет в игру два дома: Таргариен и Аррен',
        per_hour: 75,
        per_day: 245
    },
    {
        main_photo_path: 'img/games/mafia/main.jpeg',
        slides: [

            'img/games/mafia/2.jpeg',
            'img/games/mafia/3.jpeg',
            'img/games/mafia/4.jpeg',
            'img/games/mafia/5.jpeg',
            'img/games/mafia/6.jpeg',
            'img/games/mafia/7.jpeg',
        ],
        short_description: 'Мафия: вся семья в сборе',
        description: 'Это всемирно известная игра, в которой жители города пытаются вычислить и нейтрализовать преступников, гангстеры по одному отстреливают простых обывателей. Вступите в бескомпромиссную борьбу за город и приведите свою сторону к победе!',
        per_hour: 15,
        per_day: 95
    },
    {
        main_photo_path: 'img/games/morn/main.jpeg',
        slides: [
            'img/games/morn/1.jpeg',
            'img/games/morn/2.jpeg',
            'img/games/morn/3.jpeg',
            'img/games/morn/4.jpeg',
            'img/games/morn/5.jpeg',
            'img/games/morn/6.jpeg',
            'img/games/morn/7.jpeg',
            'img/games/morn/8.jpeg',
            'img/games/morn/9.jpeg',
            'img/games/morn/10.jpeg',
            'img/games/morn/11.jpeg',
        ],
        short_description: 'Морн: страна вечной юности',
        description: 'Отправьтесь в горы Морн, страну мифов и легенд, чтобы в роли храброго юноши и его друзей клуриконов вступить в нервный бой, защищая волшебные земли.<br>Собирайте обереги, чтобы изгнать из Морна легендарные Кошмары: Баньши, Водяного Дуллахана и Подменыша.<br>Ищите предметы и артефакты, чтобы одолеть врагов в бою. Если вы справитесь со всеми опасностями, то получите шанс спасти страну Морн и мир людей в последней битве с Морноедом.',
        per_hour: 75,
        per_day: 285
    },
    {
        main_photo_path: 'img/games/rick-and-morty/main.jpeg',
        slides: [
            'img/games/rick-and-morty/1.jpeg',
            'img/games/rick-and-morty/2.jpeg',
            'img/games/rick-and-morty/3.jpeg',
            'img/games/rick-and-morty/4.jpeg',
            'img/games/rick-and-morty/5.jpeg',
            'img/games/rick-and-morty/6.jpeg',
            'img/games/rick-and-morty/7.jpeg',
        ],
        short_description: 'Рик и Морти: анатомический парк 18+',
        description: 'Всем фанатом "Рик и Морти" предлагаем настолько же безумную стратегическую игру, насколько безумен и Рик Санчез! Игра создана по мотивам "s1e3" мультсериала "Рик и Морти", в котором Рик решил построить парк аттракционов в теле бездомного Рубена, но теперь эта задача ляжет на плечи игроков. Игрокам предстоит двигать внутренние органы, планировать застройку, а также бороться с реакциями организма и болезнями. И лучше не медлить, арендодатель из Рубена не очень, его в любой момент инфаркт хватит!',
        per_hour: 15,
        per_day: 93
    },
    {
        main_photo_path: 'img/games/robinson/main.jpeg',
        slides: [
            'img/games/robinson/1.jpeg',
            'img/games/robinson/2.jpeg',
            'img/games/robinson/3.jpeg',
            'img/games/robinson/4.jpeg',
            'img/games/robinson/5.jpeg',
            'img/games/robinson/6.jpeg',
            'img/games/robinson/7.jpeg',
            'img/games/robinson/8.jpeg',
            'img/games/robinson/9.jpeg',
            'img/games/robinson/10.jpeg',
            'img/games/robinson/11.jpeg',
            'img/games/robinson/12.jpeg',
            'img/games/robinson/13.jpeg',
            'img/games/robinson/14.jpeg',
            'img/games/robinson/15.jpeg',
            'img/games/robinson/16.jpeg',
            'img/games/robinson/17.jpeg',
            'img/games/robinson/18.jpeg',
        ],
        short_description: 'Робинзон Крузо',
        description: 'Это увлекательное настольное приключение на затерянном острове. Совместными усилиями вам предстоит обустраивать жилище, изготавливать инструменты, исследовать окрестности, защищаться от диких животных. Вам доступны семь сценариев, каждый из которых отдельная история с особыми целями и условиями. Вам понадобятся смекалка, взаимовыручка и немного удачи - тогда никакие превратности судьбы не остановят вас на пути к победе!',
        per_hour: 75,
        per_day: 259
    },
    {
        main_photo_path: 'img/games/svintus/main.jpeg',
        slides: [
            'img/games/svintus/1.jpeg',
            'img/games/svintus/2.jpeg',
            'img/games/svintus/3.jpeg',
            'img/games/svintus/4.jpeg',
            'img/games/svintus/5.jpeg',
            'img/games/svintus/6.jpeg',
        ],
        short_description: 'Свинтус',
        description: 'Простая, веселая и быстрая карточная игра, одна из самых продаваемых на территории России! Цель игры предельно проста избавьтесь от всех своих карт первым. И средств достижения победы хоть отбавляй в этом помогут специальные свинские карты.',
        per_hour: 5,
        per_day: 25
    },
    {
        main_photo_path: 'img/games/svintus-2/main.jpeg',
        slides: [
            'img/games/svintus-2/1.jpeg',
            'img/games/svintus-2/2.jpeg',
            'img/games/svintus-2/3.jpeg',
            'img/games/svintus-2/4.jpeg',
            'img/games/svintus-2/5.jpeg',
            'img/games/svintus-2/6.jpeg',
            'img/games/svintus-2/7.jpeg',
            'img/games/svintus-2/8.jpeg',
            'img/games/svintus-2/9.jpeg',
            'img/games/svintus-2/10.jpeg',
        ],
        short_description: 'Свинтус правила этикета',
        description: 'Расширенный вариант классической игры. Новые змеиные карты этикета позволяют наказывать за самые разные действия - теперь вам придется следить за своей речью, жестами, взглядами... Так что заряд параноидального веселья вашей компании обеспечен!',
        per_hour: 6,
        per_day: 27
    },
    {
        main_photo_path: 'img/games/fants/main.jpeg',
        slides: [
            'img/games/fants/1.jpeg',
            'img/games/fants/2.jpeg',
            'img/games/fants/3.jpeg',
            'img/games/fants/4.jpeg',
        ],
        short_description: 'Фанты',
        description: 'Испытываете трудности в придумывании оригинальных и смешных заданий для игры в любимые Фанты? Ваши друзья уже со слезами на глазах отказываются петь песни и отжиматься? Не беда, теперь у вас есть универсальный выход из этой ситуации – колода карт для игры в Фанты спасет вас от мучительных раздумий и сделает вашу вечеринку зажигательной, смешной и, конечно же, безумно веселой!',
        per_hour: 5,
        per_day: 20
    },
    {
        main_photo_path: 'img/games/civilization/main.jpeg',
        slides: [
            'img/games/civilization/1.jpeg',
            'img/games/civilization/2.jpeg',
            'img/games/civilization/3.jpeg',
            'img/games/civilization/4.jpeg',
            'img/games/civilization/5.jpeg',
            'img/games/civilization/6.jpeg',
            'img/games/civilization/7.jpeg',
            'img/games/civilization/8.jpeg',
            'img/games/civilization/9.jpeg',
            'img/games/civilization/10.jpeg',
        ],
        short_description: 'Цивилизация: Новый рассвет',
        description: 'Игра воссоздает культовую серию компьютерных игр в форме настольной стратегии. В этой динамической и лёгкой в освоении игре вы поведете народы к процветанию, сражаясь за территорию, технологии и чудеса света.<br><br>К основной игре идёт дополнение "Терра Инкогнита", которое добавляет новые фрагменты поля, строения и многое другое.',
        per_hour: 75,
        per_day: 275
    },
];

let loadCatalog = function () {
    let catalog = '';
    let catalogItemTemplate = document.getElementById('catalog-item').innerHTML;
    catalogItems.forEach(function (catalogItem, index) {
        catalog += catalogItemTemplate
            .replace(/{{catalog_item_id}}/g, `${index}`)
            .replace(/{{main_photo_path}}/g, catalogItem.main_photo_path)
            .replace(/{{short_description}}/g, catalogItem.short_description)
            .replace(/{{per_hour}}/g, catalogItem.per_hour)
            .replace(/{{per_day}}/g, catalogItem.per_day);
    });

    document.getElementById('catalog').innerHTML = catalog;
};

let openModalCatalogItem = function () {
    const catalogItemIndex = this.getAttribute('id');
    const catalogItem = catalogItems[catalogItemIndex];
    let modalCatalogItemTemplate = document.getElementById('modal-catalog-item').innerHTML;
    const modal = document.getElementById('modal');

    let slides = '';
    let slideTemplate = document.getElementById('modal-catalog-item-slide').innerHTML;
    catalogItem.slides.forEach((slide) => slides += slideTemplate.replace(/{{slide}}/g, slide));

    modal.querySelector('.catalog-item-wrapper').innerHTML = modalCatalogItemTemplate
        .replace(/{{main_photo_path}}/g, catalogItem.main_photo_path)
        .replace(/{{slides}}/g, slides)
        .replace(/{{description}}/g, catalogItem.description)
        .replace(/{{per_hour}}/g, catalogItem.per_hour)
        .replace(/{{per_day}}/g, catalogItem.per_day);

    modal.parentElement.classList.remove('hidden');

    showSlides(slideIndex);
};

let closeModalCatalogItem = function () {
    const modal = document.getElementById('modal');
    modal.parentElement.classList.add('hidden');
    modal.querySelector('.catalog-item-wrapper').innerHTML = '';
};

document.addEventListener('DOMContentLoaded', function () {
    loadCatalog();

    document
        .getElementById('modal-close')
        .addEventListener('click', closeModalCatalogItem);

    Array
        .from(document.getElementsByClassName('catalog-item'))
        .forEach((catalogItem) => catalogItem.addEventListener('click', openModalCatalogItem));
});