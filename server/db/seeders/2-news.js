'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'News',
      [
        {
          title: 'Лекция «Пушкиниана Николая Ульянова»',
          text: 'Николай Ульянов рассматривал судьбу Пушкина с позиции личностной трансформации поэта, выражавшейся в повседневных проявлениях. Серия рисунков на тему «Пушкин в жизни» является изобразительной летописью жизни поэта, воплощенной по преимуществу в графике. Вершиной пушкинской «сюиты» стал портрет поэта с его супругой на придворном балу в Аничковом дворце у зеркала. По замыслу художника, «через минуту начнется восхождение по лестнице вверх, в анфиладу дворцовых зал. Эта лестница ведет Пушкина к Черной Речке, к месту его последней встречи с Дантесом».',
          museumId: 16,
          photo: 'http://localhost:3000/newsImages/пушкинлиада.jpg',
          date: new Date('2024-06-06T19:00:00'),
          createdAt: new Date(),
          updatedAt: new Date(),
          title_en: 'Lecture "Pushkiniana of Nikolai Ulyanov"',
          text_en: 'Nikolai Ulyanov considered Pushkin\'s fate from the position of the poet\'s personal transformation, expressed in everyday manifestations. The series of drawings on the theme "Pushkin in life" is a pictorial chronicle of the poet\'s life, embodied mainly in graphics. The pinnacle of the Pushkin "suite" was a portrait of the poet with his wife at a court ball in the Anichkov Palace in front of a mirror. According to the artist\'s idea, "in a minute the ascent up the stairs will begin, into the enfilade of the palace halls. This staircase leads Pushkin to the Black River, to the place of his last meeting with Dantes".',
          title_de: 'Lecture "Pushkiniana of Nikolai Ulyanov"',
          text_de: 'Nikolai Uljanow betrachtete Puschkins Schicksal aus der Perspektive der persönlichen Transformation des Dichters, die sich in alltäglichen Erscheinungen äußerte.“ Die Zeichnungsserie zum Thema „Puschkin im Leben“ ist eine bildliche Chronik des Lebens des Dichters, die hauptsächlich in Grafiken verkörpert wird. Den Höhepunkt der Puschkin-„Suite“ bildete ein Porträt des Dichters mit seiner Frau bei einem Hofball im Anitschkow-Palast vor einem Spiegel. Nach der Idee des Künstlers "beginnt in einer Minute der Aufstieg über die Treppe, in die Enfilade der Palastsäle. Diese Treppe führt Puschkin zum Schwarzen Fluss, zum Ort seiner letzten Begegnung mit Dantes".',
        },
        {
          title: 'Лекция «Художники из рода Васнецовых»',
          text: 'Лекция знакомит с историей художественных ветвей рода Васнецовых, начиная с XVII века по настоящее время, а также с жизнью и творчеством как профессиональных художников, начиная со знаменитых академиков Российской академии художеств Виктора Михайловича (1848–1926), Аполлинария Михайловича (1856–1933) и Андрея Владимировича Васнецовых (1924–2009), так и членов Союза художников: Татьяной Викторовной (1879–1961), Любовью Аркадьевной (1899–1987), Фёдором Андреевичем (1959–1996) и самым молодым из этой ветви – Андреем Михайловичем (р. 2000) Васнецовыми.',
          museumId: 16,
          photo: 'http://localhost:3000/newsImages/васнецовы.jpg',
          date: new Date('2024-06-07T19:00:00'),
          createdAt: new Date(),
          updatedAt: new Date(),
          title_en: 'Lecture "Artists from the Vasnetsov Family"',
          text_en: 'The lecture introduces the history of the artistic branches of the Vasnetsov family, from the 17th century to the present day, as well as the life and work of professional artists, starting with the famous academicians of the Russian Academy of Arts Viktor Mikhailovich (1848–1926), Apollinary Mikhailovich (1856–1933), and Andrey Vladimirovich Vasnetsovs (1924–2009), as well as members of the Union of Artists: Tatyana Viktorovna (1879–1961), Lyubov Arkadyevna (1899–1987), Fyodor Andreevich (1959–1996), and the youngest of this branch – Andrey Mikhailovich (b. 2000) Vasnetsovs.',
          title_de: 'Vortrag "Künstler aus der Familie Vasnetsov"',
          text_de: 'Der Vortrag führt in die Geschichte der künstlerischen Zweige der Familie Vasnetsov ein, beginnend im 17. Jahrhundert bis heute, sowie in das Leben und Werk professioneller Künstler, beginnend mit den berühmten Akademikern der Russischen Akademie der Künste Viktor Michailowitsch (1848–1926), Apollinarij Michailowitsch (1856–1933) und Andrei Wladimirowitsch Vasnetsovs (1924–2009), sowie Mitglieder der Künstlerunion: Tatjana Wiktorowna (1879–1961), Ljubow Arkadjewna (1899–1987), Fjodor Andrejewitsch (1959–1996) und der jüngste dieser Zweige – Andrej Michailowitsch (geb. 2000) Vasnetsovs.',
        },
        {
          title:
            'Выставка «История создания памятника императору Александру II в Московском Кремле»',
          text: 'Выставка познакомит посетителей с историей создания памятника Александру II, который находился напротив Николаевского дворца, где родился император, и был снесен после переезда советского правительства в Кремль в 1918 году. Замысел строительства монумента отражал настроения этого времени в обществе, активно поддерживающего идеи возведения памятника, который строился на народные деньги.',
          museumId: 27,
          photo: 'http://localhost:3000/newsImages/памятникАлександру2.jpg',
          date: new Date('2024-06-08T19:00:00'),
          createdAt: new Date(),
          updatedAt: new Date(),
          title_en: 'Exhibition "The History of the Creation of the Monument to Emperor Alexander II in the Moscow Kremlin"',
          text_en: 'The exhibition will introduce visitors to the history of the creation of the monument to Alexander II, which was located opposite the Nikolaev Palace, where the emperor was born, and was demolished after the Soviet government moved to the Kremlin in 1918. The idea of building the monument reflected the sentiments of the time in society, actively supporting the idea of erecting the monument, which was built with public funds.',
          title_de: 'Ausstellung "Die Geschichte der Entstehung des Denkmals für Kaiser Alexander II. im Moskauer Kreml"',
          text_de: 'Die Ausstellung wird die Besucher mit der Geschichte der Errichtung des Denkmals für Alexander II. bekannt machen, das gegenüber dem Nikolauspalast, dem Geburtsort des Kaisers, stand und nach dem Umzug der Sowjetregierung in den Kreml im Jahr 1918 abgerissen wurde. Die Idee des Denkmals spiegelte die damaligen gesellschaftlichen Stimmungen wider und fand breite Unterstützung. Das Denkmal wurde mit öffentlichen Geldern errichtet.',
        },
        {
          title: 'Новые загадки картин Леонардо да Винчи',
          text: 'На выставке будут экспонироваться две картины, связанные с именем Леонардо да Винчи и его учениками: «Мадонна в скалах» и «Битва при Ангиари» — из собрания Музея христианской культуры в Санкт-Петербурге и картина «Ангел» из собрания Государственного Эрмитажа. Эрмитажное произведение некогда считалось шедевром Леонардо, упомянутым в его жизнеописании, составленном Джорджо Вазари, но было испорчено неудачными реставрациями.',
          museumId: 1,
          photo: 'http://localhost:3000/newsImages/леонардопитер.jpg',
          date: new Date('2024-06-06T16:00:00'),
          createdAt: new Date(),
          updatedAt: new Date(),
          title_en: 'New Mysteries of Leonardo da Vinci\'s Paintings',
          text_en: 'The exhibition will feature two paintings associated with the name of Leonardo da Vinci and his students: "Madonna of the Rocks" and "The Battle of Anghiari" from the collection of the Museum of Christian Culture in St. Petersburg and the painting "Angel" from the collection of the State Hermitage Museum. The Hermitage work was once considered a masterpiece by Leonardo, mentioned in his biography by Giorgio Vasari, but was damaged by unsuccessful restorations.',
          title_de: 'Neue Rätsel von Leonardo da Vincis Gemälden',
          text_de: 'In der Ausstellung werden zwei Gemälde gezeigt, die mit dem Namen Leonardo da Vinci und seinen Schülern verbunden sind: "Madonna in der Felsenlandschaft" und "Die Schlacht von Anghiari" aus der Sammlung des Museums für christliche Kultur in Sankt Petersburg und das Gemälde "Engel" aus der Sammlung der Eremitage. Das Eremitage-Werk galt einst als Meisterwerk von Leonardo, das in seiner Biografie von Giorgio Vasari erwähnt wird, wurde jedoch durch misslungene Restaurierungen beschädigt.',
        },
        {
          title: 'Рисунки и акварели передвижников',
          text: 'В залах выставки «Рисунки и акварели передвижников» можно увидеть графические произведения, созданные как патриархами Товарищества передвижных художественных выставок (1870–1923), так и художниками младшего поколения. ТПХВ объединило художников, убежденных в том, что искусство способно влиять на духовный мир людей. Показ выставок во многих городах позволял приобщить к искусству больше публики.',
          museumId: 2,
          photo: 'http://localhost:3000/newsImages/передвижникипитер.jpg',
          date: new Date('2024-06-07T18:30:00'),
          createdAt: new Date(),
          updatedAt: new Date(),
          title_en: 'Drawings and Watercolors of the Itinerants',
          text_en: 'In the halls of the exhibition "Drawings and Watercolors of the Itinerants", you can see graphic works created by the patriarchs of the Association of Traveling Art Exhibitions (1870–1923) and by younger generation artists. The Association united artists who were convinced that art could influence the spiritual world of people. Showing exhibitions in many cities allowed more people to be introduced to art.',
          title_de: 'Zeichnungen und Aquarelle der Wanderkünstler',
          text_de: 'In den Sälen der Ausstellung "Zeichnungen und Aquarelle der Wanderkünstler" können Sie grafische Werke sehen, die sowohl von den Patriarchen der Gesellschaft für reisende Kunstausstellungen (1870–1923) als auch von Künstlern der jüngeren Generation geschaffen wurden. Die Gesellschaft vereinte Künstler, die davon überzeugt waren, dass Kunst die spirituelle Welt der Menschen beeinflussen kann. Die Ausstellungen in vielen Städten ermöglichten es, mehr Menschen an die Kunst heranzuführen.',
        },
        {
          title: 'Война и мир Порт-Артура',
          text: 'В Центральном военно-морском музее имени императора Петра Великого с 21 марта начнет работать новая временная выставка «Война и мир Порт-Артура», посвященная 120-летию начала Русско-японской войны. Кураторы Марина Круглова и Маргарита Смыслова подготовили выставку, показывающую не ужасы войны, бои и разрушения, а личное пространство людей, живших в этой войне, что очень подробно и тщательно запечатлено в уникальных музейных коллекциях фотодокументов.',
          museumId: 10,
          photo: 'http://localhost:3000/newsImages/портартурапитер.jpg',
          date: new Date('2024-06-08T17:00:00'),
          createdAt: new Date(),
          updatedAt: new Date(),
          title_en: 'War and Peace of Port Arthur',
          text_en: 'The Central Naval Museum named after Emperor Peter the Great will host a new temporary exhibition "War and Peace of Port Arthur" from March 21, dedicated to the 120th anniversary of the beginning of the Russo-Japanese War. Curators Marina Kruglova and Margarita Smyslova have prepared an exhibition that shows not the horrors of war, battles, and destruction, but the personal space of people living in this war, which is very detailed and carefully captured in unique museum collections of photo documents.',
          title_de: 'Krieg und Frieden von Port Arthur',
          text_de: 'Das Zentrale Marinemuseum benannt nach Kaiser Peter dem Großen wird ab dem 21. März eine neue temporäre Ausstellung "Krieg und Frieden von Port Arthur" zeigen, die dem 120. Jahrestag des Beginns des Russisch-Japanischen Krieges gewidmet ist. Die Kuratoren Marina Kruglowa und Margarita Smyslowa haben eine Ausstellung vorbereitet, die nicht die Schrecken des Krieges, Kämpfe und Zerstörungen zeigt, sondern den persönlichen Raum der Menschen, die in diesem Krieg lebten, der sehr detailliert und sorgfältig in einzigartigen Museums-Sammlungen von Fotodokumenten festgehalten ist.',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News', null, {});
  },
};
