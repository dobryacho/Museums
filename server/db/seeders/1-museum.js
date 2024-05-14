'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Museums',
      [
        {
          name: 'Государственный Эрмитаж',
          description:
            'Эрмитаж - крупный культурный, исторический и художественный комплекс, основанный в 1764 г. по инициативе Екатерины II. Перед посещением Эрмитажа определитесь с приоритетами, экспонатов здесь хватит на 8 лет изучения. Любителей истории привлекут античные залы, ценителям классики понравятся полотна Рембрандта, Рубенса, ван Дейка и других мэтров живописи. Ежегодно в музей привозятся экспонаты с разных точек мира, как современных творцов, так и частные коллекции.',
          location: 'Дворцовая пл., 2',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/1_Эрмитаж.jpg',
          workedTime:
            'вторник, пятница, суббота с 11:00 до 20:00\nсреда, четверг, воскресенье с 11:00 до 18:00',
          holidays: 'без выходных',
          theme: 'Искусство',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Русский музей',
          description:
            'Российский государственный художественный музей в Санкт-Петербурге, крупнейшее в мире собрание русского изобразительного искусства. Выставочный комплекс современного Русского музея включает пять зданий в исторических районах Санкт-Петербурга: Михайловский дворец с корпусом Бенуа, Михайловский (Инженерный) замок, Мраморный дворец, Строгановский дворец и Летний дворец Петра I.',
          location: 'ул. Инженерная, 4',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/2_РусскийМузей.jpg',
          workedTime:
            'понедельник с 10:00 до 20:00\nсреда, пятница, суббота, воскресенье с 10:00 до 18:00',
          holidays: 'четверг',
          theme: 'Искусство',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Музей современного искусства Эрарта',
          description:
            'Эрарта – место, в котором можно встретиться со смелыми экспериментами, инновационными технологиями и необычными, а подчас и шокирующими объектами contemporary art.В России это самый большой музей современного искусства, пребывающий в частной собственности. В нем представлено около 3 тысяч работ известных мировых художников, уникальных авторских проектов и прочих художественных экспозиций. На территории Эрарты работает кинозал, ресторан, сувенирный магазин, проводятся интерактивные развлечения для детей и театральные постановки.',
          location: '29-я линия Васильевского острова, дом 2',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/3_Эрарта.jpg',
          workedTime: 'понедельник, среда, воскресенье с 10:00 до 22:00',
          holidays: 'вторник, четверг, пятница, суббота',
          theme: 'Искусство',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Гранд Макет Россия',
          description:
            'Россия в миниатюре, расположившаяся на площади 800 кв. м, позволяет оценить богатство, красоту и уникальность нашей страны. Изначально музей, созданный за личные деньги одного из местных предпринимателей, должен был отображать только сам Санкт-Петербург. Однако уж на этапе проектирования было решено воссоздать в миниатюре практически всю Россию. Кроме Северной столицы здесь есть Сибирь, Зауралье, Каспий, Сочи и Камчатка, Уральский хребет, Москва, Тайга и Дальний Восток. Сам макет создан в формате единой интерактивной системы, которая передает смену традиций и ландшафтов. Кроме главных российских достопримечательностей на нем можно увидеть сцены из обычной жизни.',
          location: 'улица Цветочная, 16 Л',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/4_ГрандМакет.jpg',
          workedTime: 'ежедневно с 10:00 до 22:00',
          holidays: 'без выходных',
          theme: 'Наука и техника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Кунсткамера',
          description:
            'Кабинет редкостей или Музей антропологии и этнографии им. Петра Великого был открыт в 1714 году. В основу собрания легла коллекция необычных вещей Петра I, экспонаты свозились со всех концов России. Разнообразные анатомические, зоологические, минералогические и прочие раритеты, которые, по мнению царя, представляли ценность для науки.',
          location: 'Университетская набережная, 3',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/5_Кунсткамера.jpg',
          workedTime: 'ежедневно с 11:00 до 18:00',
          holidays: 'без выходных',
          theme: 'Энтография',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Зоологический музей ЗИН РАН',
          description:
            'Один из крупнейших зоологических музеев мира. Был основан в 1832 году путем отделения от знаменитой Кунсткамеры. Первые экспозиции состояли из раковин, спиртовых препаратов, кораллов и материалов остеологии, но за практически двух вековую историю эта незначительная коллекция выросла в несколько раз и начала занимать больше 3 десятков залов. Каждый из них посвящен отдельным видам животного мира – насекомым, китообразным, рыбам, земноводным, млекопитающим и другим.',
          location: 'Университетская набережная, дом 1',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/6_Зоологический.jpg',
          workedTime: 'понедельник, среда, воскресенье с 11:00 до 18:00',
          holidays: 'вторник, четверг, пятница, суббота',
          theme: 'Природа и животные',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Музей железных дорог России',
          description:
            'Уникальный научно-технический музей, коллекция которого включает в себя 44 инсталляции и 118 экспонатов подвижных составов. В железнодорожном музее хранятся старинные паро-, тепло- и электровозы, а также другая техника, бороздившая по железным дорогам России. В музее регулярно устраивают экскурсии, показы тематического кино и программы для детей, а благодаря реалистичному тренажеру каждый из вас может почувствовать себя настоящим машинистом.',
          location: 'Библиотечный переулок 4, корпус 2',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/7_МузейЖелезныхДорог.jpg',
          workedTime:
            'понедельник, вторник, пятница, воскресенье с 10:30 до 18:00',
          holidays: 'среда, суббота',
          theme: 'Наука и техника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Юсуповский дворец',
          description:
            'Резиденция пяти поколений династии князей Юсуповых считается одним из лучших дворцов Петербурга. Она известна не только роскошными интерьерами парадных залов, но и скандальным историческим прошлым: именно в здешнем подвале был убит «злой гений царской семьи» Григорий Распутин.',
          location: 'Набережная реки Мойки, 94',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/8_ЮсуповскийДворец.jpg',
          workedTime: 'вторник - пятница с 10:00 до 19:30',
          holidays: 'понедельник, суббота, воскресенье',
          theme: 'Архитектура',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Музей Пушкина',
          description:
            'В рейтинг лучших музеев СПб входит и мемориальная квартира Пушкина, с которой связана не только трагическая судьба великого поэта, но и становление всей русской литературы. Именно в этом месте Александр Сергеевич провел последние месяцы своей жизни и именно тут скончался после дуэли с Дантесом. Интерьер этой квартиры максимально повторяет реальную обстановку. Здесь сохранилось немало предметов, связанных с жизнью и смертью поэта, – прядь его волос, посмертная маска, личные вещи супруги, портреты детей, гравюры, жилет со следами крови и даже диван, на котором умер основоположник русского реализма.',
          location: 'Набережная реки Мойки, 12',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/9_МузейПушкинаСпб.jpg',
          workedTime: 'понедельник, среда, воскресенье с 10:00 до 18:00',
          holidays: 'вторник, четверг, пятница, суббота',
          theme: 'Известные люди',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Военно-морской музей',
          description:
            'Старейший музей России, основанный в начале 18 века по приказу Петра I. Представляет собой крупнейшее хранилище уникальных военно-морских экспонатов. Их здесь больше 700 тысяч! Многие предметы являются личной собственностью самого императора и известных адмиралов. Помимо основной экспозиции, площадь которой составляет около 8 тысяч кв. м., Военно-морской музей имеет 6 филиалов: крепость в Кронштадте, музей Балтийского флота, судно «Михаил Кутузов», Дорога жизни на Ладожском озере, субмарина «Народоволец» и уже известный вам крейсер «Аврора».',
          location: 'площадь Труда, 5',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/10_ВоенноМорскойМузей.jpg',
          workedTime: 'среда - воскресенье с 11:00 до 18:00',
          holidays: 'понедельник, вторник',
          theme: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Российский этнографический музей',
          description:
            'Российский этнографический музей (РЭМ) часто называют главной сокровищницей народной культуры. В его галереях и залах собрана большая коллекция, посвященная костюмам, истории, промыслам и прикладному искусству. В музее представлены все этносы, которые когда-либо жили на Руси, в СССР и современной России - от Дальнего Востока и Забайкалья до Сибири и Урала. Все вещи РЭМа подлинные. Их собирало не одно поколение музейных сотрудников прямо в среде обитания самих народов. Помимо прочего именно здесь находится знаменитый Мраморный зал, считающийся одним из самых красивых в Санкт-Петербурге.',
          location: 'улица Инженерная, дом 4, корпус 1',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/11_ЭтнографическийМузей.jpg',
          workedTime: 'вторник - воскресенье с 10:00 до 21:00',
          holidays: 'понедельник',
          theme: 'Этнография',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Исакиевский собор',
          description:
            'Музей в Исаакиевском соборе появился еще в первой половине 20 в. Поначалу в нем размещалась только одна выставка, посвященная строительству этого здания. Сейчас это целый музейный комплекс, в состав которого входит еще 2 сооружения – Спас на крови и дьяконник храма Воскресения Христова. В основе музейной коллекции лежат графика, мозаика, старинные книги, скульптура и предметы прикладного искусства.',
          location: 'Исаакиевская пл., 4',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/12_ИсаакиевскийСобор.jpg',
          workedTime: 'ежедневно с 10:00 до 18:00',
          holidays: 'без выходных',
          theme: 'Архитектура',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ботанический сад',
          description:
            'Ботанический сад Петра Великого был открыт в 1823 году. В прежние времена в нем выращивали лекарственные растения для полевых и казенных аптек. Сейчас здесь можно увидеть огромную коллекцию экспонатов, собранную трудами выдающихся российских ученых. Это и редкие растения, привезенные с разных уголков земли, и образцы древесины, и сама крупная в мире кувшинка, и собрание семян.',
          location: 'улица профессора Попова, 2',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/13_БотаническийСадСпб.jpg',
          workedTime: 'ежедневно с 10:00 до 17:00',
          holidays: 'без выходных',
          theme: 'Природа и животные',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Музей Фаберже',
          description:
            'Один из лучших частных музеев Питера. Находится во дворце Нарышкиных-Шуваловых, который представляет собой яркий образец русской архитектуры. Экспонаты, собранные в стенах музея, считаются уникальными и не имеют аналогов в мире. Особого внимания среди них заслуживают 9 пасхальных яиц, 2 из которых принадлежат знаменитой компании Фаберже. Кроме этих исторических артефактов в музее представлено собрание драгоценных изделий и прикладного искусства конца 19 – начала 20 веков.',
          location: 'Набережная реки Фонтанки, 21',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/14_МузейФаберже.jpg',
          workedTime: 'ежедневно с 10:00 до 21:00',
          holidays: 'без выходных',
          theme: 'Искусство',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Крейсер Аврора',
          description:
            'Если вы не знаете, какие музеи открыты сейчас, обратите внимание на легендарный крейсер, участвовавший в главных морских битвах І мировой войны и являющийся главным символом великой Октябрьской революции.Боевую службу на борту этого судна несут до этой поры. Впрочем, это не мешает посетителям подниматься в корабельный музей и знакомиться с его уникальными экспонатами. На крейсере можно увидеть старинную радиостанцию, котельное и машинное отделение, письма, приказы, снимки и личные вещи экипажа, под которые выделен отдельный зал.',
          location: 'Петроградская набережная, 2',
          city: 'Санкт-Петербург',
          photo: '../../museumsImages/15_КрейсерАврора.jpg',
          workedTime: 'среда - воскресенье с 11:00 до 18:00',
          holidays: 'понедельник, вторник',
          theme: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Государственная Третьяковская галерея',
          description:
            'В экспозиции музея представлена одна из крупнейших коллекций русского искусства XI – начала XX века. Третьяковская галерея начала свою историю в 1856 году, когда коллекционер и меценат – Павел Михайлович Третьяков, начал собирать свою коллекцию живописи. Через 10 лет состоялось открытие галереи, где собрание Третьякова насчитывало уже 1800 предметов искусства, а вскоре он принял решение отдать галерею в дар городу. На протяжении многих лет росла не только коллекция искусства, но и количество зданий Третьяковки, но историческое здание в Лаврушинском переулке осталось главным центром галереи. Здесь выставлены легендарные творения таких мастеров, как Рублёв, Репин, Куинджи и Васнецов. Именно в Третьяковской галерее у вас будет возможность пересчитать медведей на картине «Утро в сосновом лесу» Шишкина, ознакомится со знаменитой картиной Серова – «Девочка с персиками», и конечно, восхититься мощными стихиями на полотнах Айвазовского.',
          location: 'Лаврушинский переулок, 10',
          city: 'Москва',
          photo: '../../museumsImages/16_ТретьяковскаяГалерея.jpg',
          workedTime: 'вторник, среда, суббота, воскресенье с 10:00 до 18:00',
          holidays: 'понедельник, четверг',
          theme: 'Искусство',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Новая Третьяковка',
          description:
            'На Крымском валу расположено еще одно здание Третьяковской галереи, которое организует крупные выставки российских и международных художников разных эпох. Так за последнее время в галерее выставлялись картины Эдварда Мунка с его знаменитой работой «Крик», великие шедевры Ильи Репина и экспозиция, посвященная творчеству режиссера–философа Андрея Тарковского. На постоянной экспозиции вы можете увидеть сразу два «Черных квадрата» Малевича, ознакомится с творчеством русского авангардиста Владимира Татлина и посмотреть на шедевры Кандинского. Кстати, здание галереи расположено в парке искусств «Музеон», в котором расположено более 800 необычных скульптур. Так что поход в Третьяковскую галерею можно совместить с еще одним интересным местом.',
          location: 'Крымский Вал, 10, Парк искусств «Музеон»',
          city: 'Москва',
          photo: '../../museumsImages/17_НоваяТретьяковка.jpg',
          workedTime:
            'понедельник, среда, четверг, воскресенье с 11:00 до 20:00',
          holidays: 'вторник, суббота',
          theme: 'Искусство',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Государственный музей изобразительных искусств имени А. С. Пушкина',
          description:
            'Государственный музей изобразительных искусств им. А.С. Пушкина известен в первую очередь, крупнейшей коллекцией зарубежного изобразительного искусства в России. У него, как и у Третьяковской галереи есть несколько зданий, но мы остановимся на двух наиболее значимых. В главном здании, которое снаружи выглядит как античный храм, находится основная коллекция музея, включающая в себя искусство Древнего мира, Средневековья и Возрождения, а также полотна европейских художников 17–19 века. Гуляя по музею, у вас будет возможность посетить целые залы, посвященные работам Микеланджело и Рембрандта, посмотреть на античные статуи греческих богов и вдохновится картинами Тициана, Брейгеля и Рубенса.',
          location: 'улица Волхонка, 12 и Волхонка, 14',
          city: 'Москва',
          photo: '../../museumsImages/18_МузейПушкинаМосква.jpg',
          workedTime: 'вторник, пятница, четверг, суббота с 10:00 до 18:00',
          holidays: 'понедельник, среда, воскресенье',
          theme: 'Искусство',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Музей современного искусства Гараж',
          description:
            'Музей, основанный Романов Абрамовичем и Дарьей Жуковой, представляет ведущих современных художников со всего мира. За прошедшие несколько лет музей принимал таких значимых артистов современности, как Такаси Мураками, Яеи Кусама, Павел Пепперштейн и Луиз Буржуа. В данный момент Гараж подготовил грандиозную экспозицию, посвященную проблемам в экологии и вопросам о нашем будущем. Также, в здесь проводятся образовательные курсы, лекции и кинопоказы. В музее работает книжный магазин, где можно приобрести современные и актуальные издания, посвященные российскому и мировому искусству, а также кафе с авторской кухней.',
          location: 'улица Крымский Вал, 9, строение 4. Парк Горького',
          city: 'Москва',
          photo: '../../museumsImages/19_Гараж.jpg',
          workedTime: 'ежедневно с 11:00 до 22:00',
          holidays: 'без выходных',
          theme: 'Искусство',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Московский музей современного искусства',
          description:
            'Московский музей современного искусства или кратко – «MMoMa» стал первым в России музеем, который сосредоточился только на современном искусстве. Это стало возможно благодаря знаменитому скульптору и живописцу – Зурабу Церетели, который выставил на публику свою личную коллекцию, насчитывающую более 2000 работ художников 20 века. В ней были представлены работы Малевича, Шагала и Кандинского, а также картины зарубежных художников – Пикассо, Миро и Дали. Сейчас экспозиции музея представлены в четырех зданиях, а основное здание, в котором размещается постоянная экспозиция и проводятся временные выставки, расположено по адресу – улица Петровка, 25. Также, у здания музея находится необычный двор, в котором можно посмотреть на многие скульптуры самого Зураба Церетели, а вход в него бесплатный',
          location:
            'улица Петровка, 25, Ермолаевский переулок, 17, Гоголевский бульвар, 10 и Тверской бульвар, 9',
          city: 'Москва',
          photo:
            '../../museumsImages/20_МосковскийМузейСовременногоИскусства.jpg',
          workedTime:
            'понедельник - среда, пятница - воскресенье с 12:00 до 20:00',
          holidays: 'четверг',
          theme: 'Искусство',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Государственный исторический музей',
          description:
            'В самом центре столицы, на Красной площади, находится здание Государственного исторического музея, которое сложно не заметить. Краснокирпичное здание, построенное в псевдорусском стиле, напоминает сказочный терем из русских народных сказок. Но если до этого момента вы только любовались им снаружи и не знали что скрывается внутри, то пора уже раскрыть все тайны и заглянуть туда – коллекция музея насчитывает более 5 миллионов предметов, которые рассказывают о политике и культуре России с древнейших времен и до 20 века. Посмотреть стоит на «Родословное древо государей Российских», парадную саблю Наполеона, ископаемые бивни мамонта и залы вpeмeн цapcтвoвaния Eкaтepины Втopoй и Aлeкcaндpa Пepвoгo. Кроме того, в музее выставлены росписи стен и потолков Васнецова, Айвазовского и Репина.',
          location: 'Красная площадь, 1',
          city: 'Москва',
          photo: '../../museumsImages/21_ГосударственныйИсторическийМузей.jpg',
          workedTime:
            'понедельник - пятница с 10:00 до 18:00\n суббота - воскресенье с 10:00 до 21:00',
          holidays: 'без выходных',
          theme: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Музей Москвы',
          description:
            'Постоянная выставка музея посвящена истории Москвы с древнейших времен и до сегодняшних дней. Рассматривая разные археологические находки, предметы быта и одежду разных исторических эпох, фотографии и архивные документы, вы сможете детально проследить за развитием повседневной жизни москвичей и попробовать представить, что ждет столицу России в будущем. Также в музее представлена серия живописи знаменитых художников, например Васнецова и Айвазовского. Кроме постоянной экспозиции, музей показывает документальные фильмы, проводит лекции и организует творческие занятия для детей.',
          location: 'Зубовский бульвар, 12',
          city: 'Москва',
          photo: '../../museumsImages/22_Музей Москвы.jpg',
          workedTime: 'вторник, среда, пятница - воскресенье с 10:00 до 20:00',
          holidays: 'понедельник, четверг',
          theme: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мемориальный музей космонавтики',
          description:
            'В основании величественного монумента «Покорителям космоса», расположился знаменитый Музей космонавтики, открытый к 20-летию полёта в космос Юрия Гагарина. Среди главных экспонатов музея –первый космический скафандр, чучела Белки и Стрелки, оригинальный пульт управления «Луноходом-1» и «Луноходом-2», личные вещи космонавтов и инженеров. Кроме того, есть и интерактивные экспонаты, например тренажер космического корабля, где можно понять – смогли бы вы стать космонавтом, и мини-центр управления полетами, откуда можно понаблюдать за перемещениями МКС. Также при музее работает кинозал, который имитирует кабину настоящего космического корабля, и тематическое кафе, где можно приобрести пищу космонавтов в тюбиках. Мемориальный музей космонавтики.',
          location: 'проспект Мира, 111',
          city: 'Москва',
          photo: '../../museumsImages/23_МемориальныйМузейКосмонавтики.jpg',
          workedTime: 'вторник - воскресенье с 10:00 до 19:00',
          holidays: 'понедельник',
          theme: 'Наука и техника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Московский планетарий',
          description:
            'Московский планетарий является старейшим и одним из крупнейших планетариев в России и Европе. Всего в здании четыре уровня, которые включают в себя – Большой и Малый звездный зал, музеи Лунариум и Урании, астрономическую площадку под открытым небом и обсерваторию с самым большим телескопом в Москве, диаметр которого – 300 мм. Так, у вас будет возможность отправиться в настоящее путешествие по мирам Вселенной и Солнечной системы – вы станете свидетелямивулканического извержения, создадите искусственные облака и торнадо, прокатитесь на космическом велосипеде и увидите 9000 космических тел – от планет до падающих звезд.',
          location: 'улица Садовая-Кудринская, 5, строение 1',
          city: 'Москва',
          photo: '../../museumsImages/24_МосковскийПланетарий.jpg',
          workedTime: 'ежедневно с 10:00 до 21:00',
          holidays: 'без выходных',
          theme: 'Наука и техника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Алмазный фонд',
          description:
            'Формироваться алмазный фонд России начал ещё при Петре I и продолжалось вплоть до 1917 года, когда большое количество шедевров распродали большевики. Всё, что уцелело и было возвращено сейчас можно увидеть, посетив одну из многочисленных экскурсий. В музее всего два зала — большой и малый (исторический). В первой представлено коллекция современных изделий — самоцветы, золотые слитки и ювелирные изделия. В историческом можно рассмотреть драгоценности и регалии царского времени — Большая и Малая императорская короны, скипетр и держава Екатерины II, камень с портретом Александра I, алмазы «Орлов» и «Шах», уникальный цейлонский сапфир, изумруд «Зелёная королева», ордена «Золотого Руна» и Андрея Первозванного, диадема-кокошник Марии Фёдоровны, брошь княгини Александры Иосифовны с огранёнными алмазами и колумбийским изумрудом и др.',
          location: 'ул. Манежная, д. 2-10, соор. 3',
          city: 'Москва',
          photo: '../../museumsImages/25_АлмазныйФонд.jpg',
          workedTime: 'ежедневно с 10:00 до 17:20',
          holidays: 'без выходных',
          theme: 'Искусство',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Музей ГЭС-2',
          description:
            'Свое существование музей начал не так давно, но уже стал постоянной площадкой фонда поддержки современного искусства. Культурное пространство расположилось в здании, где ранее была электростанция и сегодня там проходят лекции и кинопоказы, а также временные выставки и различные мастер-классы, концерты и мероприятия для детей. Здесь же созданы условия для поддержки художественного сообщества.',
          location: 'Болотная наб., 15, корп. 1',
          city: 'Москва',
          photo: '../../museumsImages/26_ГЭС2.jpg',
          workedTime: 'ежедневно с 11:00 до 22:00',
          holidays: 'без выходных',
          theme: 'Искусство',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Оружейная палата',
          description:
            'Московская Оружейная палата расположена в здании, построенном в середине XIX в. в её фондах хранится больше 4 тысяч экспонатов, относящихся к XII-XIX векам. Основную часть коллекции составляют предметы, ранее находившиеся в царской казне, в том числе и являющиеся дарами иностранных послов.',
          location: 'ул. Манежная, д. 2-10, соор. 3',
          city: 'Москва',
          photo: '../../museumsImages/27_ОружейнаяПалата.jpg',
          workedTime: 'ежедневно с 10:00 до 16:30',
          holidays: 'без выходных',
          theme: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Палеонтологический музей имени Ю. А. Орло́ва РАН',
          description:
            'Палеонтологический музей имени Ю. А. Орло́ва РАН — московский музей, один из крупнейших естественно-исторических музеев мира. Был основан в 1937 году, с 1966 года назван в честь зоолога и палеонтолога Юрия Орлова. Музей является частью Палеонтологического института имени А. А. Борисяка.',
          location: 'ул. Профсоюзная, 123',
          city: 'Москва',
          photo: '../../museumsImages/28_ПалеонтологическийМузей.jpg',
          workedTime: 'ежедневно с 10:00 до 18:00',
          holidays: 'без выходных',
          theme: 'Наука и техника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Музей Московских стрельцов (Стрелецкие палаты)',
          description:
            'Стрелецкие палаты — интерактивная познавательная площадка для знатоков и любителей военной истории. На базе музея представлены две постоянные экспозиции: «Московские стрельцы» и «Служилые люди государства Московского». А также есть множество исторических выставок, тематических программ и экскурсий, которые постоянно меняются и обновляются.',
          location: 'Лаврушинский пер., 17, стр. 1',
          city: 'Москва',
          photo: '../../museumsImages/29_СтрелецкиеПалаты.jpg',
          workedTime: 'ежедневно с 10:00 до 17:00',
          holidays: 'без выходных',
          theme: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Музей русского импрессионизма',
          description:
            'Музейный комплекс позволяет посетителям ознакомиться с творчеством своих соотечественников — мастеров импрессионизма, работы которых были незаслуженно позабыты. Для изучения представлена постоянная экспозиция, а также проходят выставки, где можно увидеть картины, хранящиеся в частных коллекциях и государственных собраниях. Музей плотно сотрудничает с Третьяковской галереей и Русским музеем.',
          location: 'Ленинградский просп., 15, стр. 11',
          city: 'Москва',
          photo: '../../museumsImages/30_МузейРусскогоИмпрессионизма.jpg',
          workedTime:
            'понедельник - вторник с 12:00 до 20:00,\n пятница - воскресенье с 11:00 до 20:00',
          holidays: 'среда, четверг',
          theme: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Museums', null, {});
  },
};
