export interface NewsFeedItem {
  title: string;
  image?: string | null;
  subtitle?: string | null;
  content?: string | null;
  type?: 'internal';
}

const newsFeed: NewsFeedItem[] = [
  {
    title: '2 новых заказа сегодня',
    subtitle: 'cskeleto.dev на Наймиксе',
    type: 'internal',
  },
  {
    title: 'Власти Москвы разработали меры поддержки для начинающих самозанятых',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/9/05/756177835230059.jpg',
    subtitle: 'РБК, Общество, 07 апр, 11:20',
    content:
      'Число легальных самозанятых в России приблизилось к 1,5 млн человек. Счетная палата видит в новом налоговом режиме потенциал для вывода предпринимателей из тени, но для этого, по мнению аудиторов, нужны дополнительные стимулы',
  },
  {
    title: 'МЭР предложило сообщать самозанятым о поддержке через портал госуслуг',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/1/13/756148417930131.jpg',
    subtitle: 'РБК, Общество, 04 мар, 09:58',
    content:
      'По данным ФНС, число зарегистрировавшихся самозанятых в России достигло 1 млн человек. Налоговики увидели ₽130 млрд их доходов, выведенных из серой зоны. Ряд фирм переводят в самозанятые сотрудников, получавших зарплату в конверте',
  },
  {
    title: 'В России сменились категории самозанятых с самым большим оборотом',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/1/54/756111523492541.jpg',
    subtitle: 'РБК, Экономика, 21 янв, 00:10',
    content:
      'Приложение для новой платформы можно будет скачать в Google Play и AppStore. Оно предназначено для помощи в оформлении статуса самозанятого, ведения бухгалтерии и уплаты налогов',
  },
  {
    title: 'Путин не исключил дополнительную поддержку самозанятых',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/2/44/756082151369442.jpg',
    subtitle: 'РБК, Экономика, 17 дек 2020, 17:15',
    content:
      'Доля россиян, допускающих в ряде случаев уход от налогов, выросла из-за кризиса до 45%, показало исследование ЦСР. Эксперты связывают это со снижением доходов населения (о нем говорят 60% опрошенных) и тревогой по поводу будущего',
  },
  {
    title: 'Счетная палата предложила варианты улучшения налога для самозанятых',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/4/84/756075209416844.jpg',
    subtitle: 'РБК, Экономика, 10 дек 2020, 00:00',
    content:
      'Из-за сложностей с процедурой оформления рабочих цифровых пропусков столичные таксисты притворяются сотрудниками агрегаторов такси и ретейлеров. Это может привести к аннулированию всех пропусков, легально выданных таким компаниям',
  },
  {
    title: 'Путин назвал обоснованными претензии граждан к государству',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/8/57/756057844486578.jpg',
    subtitle: 'РБК, Политика, 19 ноя 2020, 14:39',
    content:
      'Глава Татарстана предложил премьеру включить в список получающих пособие по безработице индивидуальных предпринимателей и самозанятых. Вторые должны получить помощь в том случае, если они ранее платили налоги, считает он',
  },
  {
    title: 'В Госдуме предложили освободить часть самозанятых от налога',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/0/26/755995473131260.jpg',
    subtitle: 'РБК, Экономика, 08 сен 2020, 09:52',
    content:
      'В марте 2020 года вступают в силу законы, касающиеся ввоза лекарств в страну, деятельности самозанятых и других сфер жизни. Главные изменения законодательства — в обзоре РБК',
  },
  {
    title: 'ФНС сообщила о ₽130 млрд выведенных из тени доходов самозанятых',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/3/09/755985330405093.jpg',
    subtitle: 'РБК, Экономика, 28 авг 2020, 00:00',
    content:
      'Сейчас эксперимент со специальным налоговым режимом действует в Москве, Московской и Калужской областях, а также Татарстане. Еще в 19 регионах он начнет действовать с 1 января 2020 года',
  },
  {
    title: '«Яндекс» объявил о запуске платформы для самозанятых',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/0/62/755971370217620.jpg',
    subtitle: 'РБК, Общество, 11 авг 2020, 12:00',
    content:
      'Вместо того чтобы использовать бюджетные резервы для стимулирования роста, правительство вводит новые налоги, обременительные для граждан, но не дающие больших доходов казне',
  },
  {
    title: 'Мишустин подписал постановление о возврате налога самозанятым за 2019 год',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/1/11/755907694281111.jpg',
    subtitle: 'РБК, Финансы, 29 мая 2020, 19:31',
    content:
      'Ранее глава Минфина сообщил, что в первой половине 2020 года налоговый режим для самозанятых может появиться еще в 13 регионах, а к 1 июля распространиться на все субъекты России',
  },
  {
    title: 'Почти половина россиян посчитала допустимым уход от налогов в кризис',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/5/83/755904019374835.jpg',
    subtitle: 'РБК, Экономика, 26 мая 2020, 07:00',
    content:
      'В соответствии с законопроектом с 1 января 2020 года эксперимент планируют запустить в Санкт-Петербурге, 12 областях, трех автономных округах, двух краях и одной республике',
  },
  {
    title: 'Агрегаторы столкнулись с угрозой отмены пропусков из-за уловки таксистов',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/7/64/755903881285647.jpg',
    subtitle: 'РБК, Технологии и медиа, 25 мая 2020, 09:02',
    content:
      'В новой схеме пенсионных накоплений (гарантированный пенсионный план) смогут участвовать не только наемные работники, но и самозанятые, уточнил Минфин. Особенности налоговых льгот для них будут обсуждаться отдельно',
  },
  {
    title: 'В Москве самозанятым вернут 495 млн руб. налогов за прошлый год',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/5/03/755897840174035.jpg',
    subtitle: 'РБК, Общество, 18 мая 2020, 09:29',
    content:
      'С 2020 года ФНС будет выявлять предприятия, которые в попытках сэкономить на страховых взносах и налогах нанимают самозанятых вместо штатных сотрудников. Им будут доначислять НДФЛ и страховые взносы, сообщил Силуанов',
  },
  {
    title: 'Минниханов попросил Мишустина поддержать пособием самозанятых и ИП',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/8/42/755872349284428.jpeg',
    subtitle: 'РБК, Общество, 18 апр 2020, 21:20',
    content: 'С нового года, по словам Антона Силаунова, присоединиться к эксперименту смогут регионы-доноры',
  },
  {
    title: 'В ФНС перечислили самые популярные виды деятельности самозанятых',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/3/84/755837490850843.jpeg',
    subtitle: 'РБК, Экономика, 09 мар 2020, 12:44',
    content:
      'Перечень профессий должен быть фиксированным, чтобы распространять этот механизм на российские субъекты, считает он. По его словам, некоторые предприятия стали нанимать сотрудников как самозанятых',
  },
  {
    title: 'Что изменится в российских законах в марте 2020 года',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/4/83/755828882874834.jpeg',
    subtitle: 'РБК, Общество, 01 мар 2020, 00:00',
    content:
      'Специальный налоговый режим для самозанятых нужно опробовать сперва в регионах-донорах и городах-миллионниках, а не распространять сразу на всю страну, считает замглавы Минфина Илья Трунин',
  },
  {
    title: 'Самозанятые заплатили свыше 1 млрд руб. налогов в 2019 году',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/2/57/755771164949572.jpeg',
    subtitle: 'РБК, Экономика, 23 дек 2019, 18:01',
    content:
      'В России растет неформальная занятость: к середине 2019 года доля работающих неофициально достигла 21,3%. Эксперты связывают это с сокращением малого бизнеса и миграцией предпринимателей в ИП или самозанятых',
  },
  {
    title: 'Путин ввел налог для самозанятых в 19 регионах России',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/4/70/755764104063704.jpeg',
    subtitle: 'РБК, Экономика, 15 дек 2019, 14:30',
    content:
      'Согласно письму регулятора, банкам надо выявлять среди клиентов самозанятых, чтобы избежать необоснованных блокировок счетов, следует из письма регулятора',
  },
  {
    title: 'Погоня за малым рублем: почему российской экономике вредны новые налоги',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/7/71/755734642024717.jpeg',
    subtitle: 'РБК, Экономика, 21 ноя 2019, 14:36',
    content:
      'Самозанятые могут моментально сняться с учета и перестать быть плательщиками налога на профессиональный доход, пояснили РБК в Федеральной налоговой службе. Отказ от регистрации предусмотрен в приложении «Мой налог»',
  },
  {
    title: 'Силуанов назвал число зарегистрировавшихся самозанятыми предпринимателей',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/4/99/755724533266994.jpeg',
    subtitle: 'РБК, Экономика, 11 ноя 2019, 12:00',
    content: 'В ближайшие несколько лет вводить надзор за самозанятыми не нужно, заявил первый вице-премьер',
  },
  {
    title: 'Минфин назвал возможный срок ввода налога для самозанятых по всей России',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/6/08/755723824204086.jpeg',
    subtitle: 'РБК, Экономика, 01 ноя 2019, 14:46',
    content:
      'Налоговая служба призвала самозанятых предупредить банки о своем статусе, чтобы избежать блокировки счета из-за подозрительных операций',
  },
  {
    title: 'Минфин предложил ввести налоговый режим для самозанятых еще в 19 регионах',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/3/62/755718278494623.jpeg',
    subtitle: 'РБК, Экономика, 30 окт 2019, 19:05',
    content:
      'Подтолкнуть самозанятых к легализации могут не репрессивные меры, а успешные примеры коллег и удобная уплата налогов в режиме онлайн',
  },
  {
    title: 'Новая система пенсионных накоплений охватит самозанятых',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/8/59/755717932279598.jpeg',
    subtitle: 'РБК, Экономика, 30 окт 2019, 00:00',
    content: null,
  },
  {
    title: 'Силуанов предупредил об ответственности для нанимающих самозанятых фирм',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/3/61/755701853970613.jpeg',
    subtitle: 'РБК, Экономика, 23 окт 2019, 13:37',
    content: null,
  },
  {
    title: 'К эксперименту с самозанятыми подключат 13 новых регионов',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/7/12/755683785192127.jpeg',
    subtitle: 'РБК, Бизнес, 23 окт 2019, 03:59',
    content: null,
  },
  {
    title: 'Матвиенко предложила распространить налог на самозанятых на всю Россию',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/8/84/755676143530848.jpeg',
    subtitle: 'РБК, Политика, 04 окт 2019, 16:05',
    content: null,
  },
  {
    title: 'Силуанов предложил ограничить число профессий для самозанятых',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/1/27/755593079440271.jpeg',
    subtitle: 'РБК, Экономика, 04 окт 2019, 13:01',
    content: null,
  },
  {
    title: 'Минфин предложил расширить налоговый режим самозанятых на регионы-доноры',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/9/03/755591553849039.jpeg',
    subtitle: 'РБК, Экономика, 13 сен 2019, 15:02',
    content: null,
  },
  {
    title: 'Росстат сообщил о росте неформальной занятости в России',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/5/57/755549030948575.jpeg',
    subtitle: 'РБК, Экономика, 05 сен 2019, 00:02',
    content: null,
  },
  {
    title: 'Эксперты оценили число самозанятых россиян',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/6/21/755532668137216.jpeg',
    subtitle: 'РБК, Экономика, 29 авг 2019, 00:35',
    content: null,
  },
  {
    title: 'СМИ узнали о разрешении самозанятым заниматься организацией похорон',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/6/41/755525757048416.jpeg',
    subtitle: 'РБК, Общество, 03 июл 2019, 08:19',
    content: null,
  },
  {
    title: 'Минэкономразвития предложило оказывать самозанятым господдержку',
    image: null,
    subtitle: 'РБК, Экономика, 15 июн 2019, 11:36',
    content: null,
  },
  {
    title: 'ЦБ рекомендовал банкам составлять «досье» на самозанятых',
    image: null,
    subtitle: 'РБК, Экономика, 31 мая 2019, 15:56',
    content: null,
  },
  {
    title: 'Налоговая служба пояснила порядок отказа от статуса самозанятого',
    image: null,
    subtitle: 'РБК, Экономика, 30 мая 2019, 00:24',
    content: null,
  },
  {
    title: 'Силуанов предложил не вводить надзор за самозанятыми',
    image: null,
    subtitle: 'РБК, Экономика, 10 апр 2019, 16:28',
    content: null,
  },
  {
    title: 'ФНС ответила на сообщения о блокировках счетов самозанятых',
    image: null,
    subtitle: 'РБК, Экономика, 22 мар 2019, 17:56',
    content: null,
  },
  {
    title: 'Налоговая услуга: как заставить самозанятых выйти из тени',
    image: null,
    subtitle: 'РБК, Экономика, 15 мар 2019, 10:31',
    content: null,
  },
  {
    title: 'ФНС назвала число зарегистрировавшихся самозанятых россиян',
    image: null,
    subtitle: 'РБК, Общество, 14 мар 2019, 10:58',
    content: null,
  },
  {
    title: 'Силуанов подсчитал зарегистрировавшихся в качестве самозанятых россиян',
    image: null,
    subtitle: 'РБК, Общество, 20 фев 2019, 12:12',
    content: null,
  },
  {
    title: 'Власти допустили ввод налога на самозанятых по всей стране в 2020 году',
    image: null,
    subtitle: 'РБК, Экономика, 19 фев 2019, 22:36',
    content: null,
  },
];

export default newsFeed;
