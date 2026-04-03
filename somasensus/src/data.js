export const translations = {
  en: {
    nav: { about: "ABOUT", services: "SERVICES", contact: "CONTACT", booking: "PRICES" },
    hero: { welcome: "WELCOME TO", title: "Soma Sensus", subtitle: "Feel relaxed. Feel supported. Feel rebalanced." },
    aboutYana: {
      title: "Massage Therapist",
      intro: "Yana Belova is a professional massage therapist dedicated to helping clients achieve physical relief and relaxation.",
      subtitle: "🌿 Core Skills",
      text: "Her practice blends intuitive touch with evidence-based techniques. She creates a safe space where clients can slow down, release stress, and reconnect with their bodies.",
      skills: ["Deep tissue techniques", "Trigger point therapy", "Muscular assessment"]
    },
    booking: {
      title: "PRICING & BOOKING",
      locations: [
        { name: "Pelgulinna Tervisemaja", prices: ["Therapeutic: 50/60€", "Sports: 50/60€", "Classic: 45/50€"] },
        { name: "Linnamäe 37a", prices: ["Therapeutic: 45/55€", "Sports: 45/50€", "Classic: 40/45€"] }
      ],
      form: { name: "Name", email: "Email", service: "Service", btn: "Book Now" }
    },
    welcomeSpace: {
      title: "Welcome to SomaSensus Space",
      text: "My goal is simple — to make you feel cared for and completely at ease, just like you would in your own home.",
      videoPlaceholder: "Soma Sensus"
    },
    offers: {
      title: "Massage Services",
      items: [
        { id: 1, name: "Classical", price: "45/50€", icon: "", color: "purple", desc: "A balanced treatment focused on relaxation and general muscle relief.", benefits: ["Stress reduction", "Better circulation", "General wellness", "Improved sleep quality"] },
        { id: 2, name: "Therapeutic", price: "50/60€", icon: "", color: "purple", desc: "Designed to address specific muscle tension and physical imbalances.", benefits: ["Pain relief", "Improved posture", "Muscle recovery", "Increased joint mobility"] },
        { id: 3, name: "Athletic", price: "50/60€", icon: "", color: "purple", desc: "Tailored for active individuals. Supports faster recovery after training.", benefits: ["Injury prevention", "Flexibility", "Fast recovery", "Lactic acid removal"] },
        { id: 4, name: "Trigger-Point", price: "50/60€", icon: "", color: "green", desc: "Focuses on releasing tight knots within the muscles.", benefits: ["Releases knots", "Reduces referred pain", "Deep relief", "Restores muscle function"] },
        { id: 5, name: "Lymfodrinaz", price: "60 min", icon: "", color: "green", desc: "A gentle technique to stimulate the lymphatic system.", benefits: ["Detox", "Immune support", "Reduced swelling", "Metabolism boost"] },
        { id: 6, name: "Face Massage", price: "60 min", icon: "", color: "green", desc: "Relieve tension, improve skin tone, and provide deep relaxation.", benefits: ["Skin glow", "Tension release", "Natural lift", "Lymphatic drainage of face"] }
      ]
    },
    feedback: { 
      title: "TESTIMONIALS", 
      reviews: [
        { text: "Yana is a true professional! After a few sessions, the back pain that bothered me for years is gone.", author: "Anna S." },
        { text: "Amazing sports massage. My muscles recover much faster, which is crucial for my competition prep.", author: "Max V." },
        { text: "The perfect place for relaxation. I come here to rest not only my body but my soul. Magic hands!", author: "Elena K." }
      ]
    },
    contact: { 
      title: "CONTACTS",
      photoText: "THE MASSAGE PHOTO", 
      btnClose: "Close",
      locations: ["Tallinn, Estonia", "Pelgulinna Tervisemaja", "Linnamäe 37a"],
      hours: ["Mon - Fri: 10:00 - 20:00", "Saturday: 10:00 - 18:00", "Sunday: Closed"]
    }
  },
  ru: {
    nav: { about: "О НАС", services: "УСЛУГИ", contact: "КОНТАКТЫ", booking: "ЦЕНЫ" },
    hero: { welcome: "ДОБРО ПОЖАЛОВАТЬ В", title: "Soma Sensus", subtitle: "Расслабление. Поддержка. Баланс." },
    aboutYana: {
      title: "Массажист",
      intro: "Яна Белова — профессиональный массажист, помогающий достичь физического облегчения и гармонии.",
      subtitle: "🌿 Навыки",
      text: "Ее практика сочетает интуитивное прикосновение с доказательными методиками. Она создает пространство, где можно замедлиться.",
      skills: ["Глубокий массаж тканей", "Триггерная терапия", "Оценка мышц"]
    },
    booking: {
      title: "ЦЕНЫ И ЗАПИСЬ",
      locations: [
        { name: "Pelgulinna Tervisemaja", prices: ["Лечебный: 50/60€", "Спортивный: 50/60€", "Классика: 45/50€"] },
        { name: "Linnamäe 37a", prices: ["Лечебный: 45/55€", "Спортивный: 45/50€", "Классика: 40/45€"] }
      ],
      form: { name: "Имя", email: "Email", service: "Услуга", btn: "Записаться" }
    },
    welcomeSpace: { title: "Пространство SomaSensus", text: "Моя цель — чтобы вы чувствовали заботу и уют, как дома.", videoPlaceholder: "Soma Sensus" },
    offers: {
      title: "Виды массажа",
      items: [
        { id: 1, name: "Классический", price: "45/50€", icon: "", color: "purple", desc: "Сбалансированная процедура для расслабления и снятия общего напряжения.", benefits: ["Снятие стресса", "Кровообращение", "Общее благополучие", "Улучшение качества сна"] },
        { id: 2, name: "Лечебный", price: "50/60€", icon: "", color: "purple", desc: "Работа с конкретными болями и дисбалансом. Улучшает подвижность.", benefits: ["Снятие боли", "Осанка", "Восстановление", "Подвижность суставов"] },
        { id: 3, name: "Спортивный", price: "50/60€", icon: "", color: "purple", desc: "Для активных людей. Подготовка к нагрузкам и восстановление.", benefits: ["Профилактика травм", "Гибкость", "Энергия", "Вывод молочной кислоты"] },
        { id: 4, name: "Триггерный", price: "50/60€", icon: "", color: "green", desc: "Устранение мышечных узлов и зажимов через точечное давление.", benefits: ["Устранение узлов", "Снятие боли", "Глубокое облегчение", "Восстановление функций мышц"] },
        { id: 5, name: "Лимфодренаж", price: "60 мин", icon: "", color: "green", desc: "Стимуляция лимфотока для вывода токсинов и снятия отечности.", benefits: ["Детокс", "Иммунитет", "Против отеков", "Ускорение метаболизма"] },
        { id: 6, name: "Массаж лица", price: "60 мин", icon: "", color: "green", desc: "Снятие напряжения лицевых мышц, улучшение тонуса кожи.", benefits: ["Сияние", "Релакс", "Лифтинг-эффект", "Снятие мимических зажимов"] }
      ]
    },
    feedback: { 
      title: "ОТЗЫВЫ", 
      reviews: [
        { text: "Яна — настоящий профессионал! После курса массажа ушли боли в спине, которые мучили меня годами.", author: "Анна С." },
        { text: "Потрясающий спортивный массаж. Мышцы восстанавливаются в разы быстрее, что очень важно.", author: "Максим В." },
        { text: "Идеальное место для релаксации. Прихожу сюда отдохнуть не только телом, но и душой. Волшебные руки!", author: "Елена К." }
      ]
    },
    contact: { 
      title: "КОНТАКТЫ",
      photoText: "ФОТО ТЕРАПИИ", 
      btnClose: "Закрыть",
      locations: ["Таллинн, Эстония", "Pelgulinna Tervisemaja", "Linnamäe 37a"],
      hours: ["Пн - Пт: 10:00 - 20:00", "Суббота: 10:00 - 18:00", "Воскресенье: Выходной"]
    }
  },
  et: {
    nav: { about: "MEIST", services: "TEENUSED", contact: "KONTAKT", booking: "HINNAD" },
    hero: { welcome: "TERE TULEMAST", title: "Soma Sensus", subtitle: "Tunne lõõgastust. Tunne toetust. Tunne tasakaalu." },
    aboutYana: { title: "Massaažiterapeut", intro: "Yana Belova on professionaalne terapeut, kes aitab saavutada füüsilist kergust.", subtitle: "🌿 Oskused", text: "Ta loob turvalise ruumi, kus kliendid saavad stressist vabaneda ja oma kehaga uuesti ühendust saada.", skills: ["Süvakoemassaaž", "Trigerpunktide teraapia", "Lihaste hindamine", ] },
    booking: { title: "HINNAD JA BRONEERIMINE", locations: [{ name: "Pelgulinna Tervisemaja", prices: ["Terapeutiline: 50/60€", "Spordi: 50/60€", "Klassikaline: 45/50€"] }, { name: "Linnamäe 37a", prices: ["Terapeutiline: 45/55€", "Spordi: 45/50€", "Klassikaline: 40/45€"] }], form: { name: "Nimi", email: "E-post", service: "Teenus", btn: "Broneeri" } },
    welcomeSpace: { title: "SomaSensus Ruum", text: "Minu eesmärk on, et tunneksid end hoolitsetuna ja mugavalt nagu kodus.", videoPlaceholder: "Soma Sensus" },
    offers: {
      title: "Massaažiteenused",
      items: [
        { id: 1, name: "Klassikaline", price: "45/50€", icon: "", color: "purple", desc: "Lõõgastav protseduur, mis parandab vereringet ja vähendab pinget.", benefits: ["Stressi vähenemine", "Vereringe", "Heaolu", "Parem unekvaliteet"] },
        { id: 2, name: "Terapeutiline", price: "50/60€", icon: "", color: "purple", desc: "Suunatud lihaspingete ja füüsilise tasakaalustamatuse leevendamisele.", benefits: ["Valu leevendamine", "Rüht", "Taastumine", "Liigeste liikuvus"] },
        { id: 3, name: "Spordi", price: "50/60€", icon: "", color: "purple", desc: "Mõeldud aktiivsetele inimestele koormuseks ettevalmistamiseks.", benefits: ["Vigastuste ennetamine", "Paindlikkus", "Kiire taastumine", "Piimhappe eemaldamine"] },
        { id: 4, name: "Trigerpunktide", price: "50/60€", icon: "", color: "green", desc: "Keskendub lihasknottide vabastamisele kontrollitud surve abil.", benefits: ["Pingete vabastamine", "Valu vähendamine", "Sügav leevendus", "Lihasfunktsiooni taastamine"] },
        { id: 5, name: "Lümfidrenaaž", price: "60 min", icon: "", color: "green", desc: "Õrn tehnika lümfisüsteemi stimuleerimiseks и tursete vähendamiseks.", benefits: ["Detoks", "Immuunsus", "Tursete vähenemine", "Ainevahetuse kiirendamine"] },
        { id: 6, name: "Näomassaaž", price: "60 min", icon: "", color: "green", desc: "Näolihaste lõõgastamine ja naha tooni parandamine.", benefits: ["Naha sära", "Lõõgastus", "Loomulik lift", "Näo lümfidrenaaž"] }
      ]
    },
    feedback: { 
      title: "TAGASISIDE", 
      reviews: [
        { text: "Yana on tõeline professionaal! Pärast seansse on aastatepikkune seljavalu kadunud.", author: "Anna S." },
        { text: "Hämmastav spordimassaaž. Lihased taastuvad palju kiiremini.", author: "Max V." },
        { text: "Ideaalne koht lõõgastumiseks. Tulen siia puhkama nii keha kui vaimuga.", author: "Elena K." }
      ]
    },
    contact: { 
      title: "KONTAKT",
      photoText: "MASSAAŽI FOTO", 
      btnClose: "Sulge",
      locations: ["Tallinn, Eesti", "Pelgulinna Tervisemaja", "Linnamäe 37a"],
      hours: ["E - R: 10:00 - 20:00", "Laupäev: 10:00 - 18:00", "Pühapäev: Suletud"]
    }
  }
};