// Victory International Ministry — Zanzibar
// Interactive navigation, language switcher (EN / SW), scroll reveal, and inquiry form feedback

const translations = {
  en: {
    'nav.about': 'About',
    'nav.vision': 'Vision & Mission',
    'nav.values': 'Core Values',
    'nav.worship': 'Worship & Word',
    'nav.community': 'Conferences & Service',
    'nav.contact': 'Contact',
    'nav.connect': 'Connect',
    'hero.location': 'ZANZIBAR, TANZANIA',
    'hero.pillars': 'FAITH • WORSHIP • PRAYER • EVANGELISM • BIBLE TEACHING • COMMUNITY SERVICE',
    'hero.motto': 'SERVING GOD • SHARING THE GOSPEL • SERVING PEOPLE',
    'hero.ctaPrimary': 'Explore Our Ministry',
    'hero.ctaSecondary': 'Prayer & Inquiries',
    'about.code': 'ABOUT THE MINISTRY',
    'about.title': 'A Ministry Rooted in Faith, Fellowship & Service',
    'about.p1': 'Victory International Ministry is a Christian religious ministry based in Zanzibar. The ministry is involved in church and faith-related activities, with a focus on worship, prayer, evangelism, Bible teaching, Christian gatherings and community service.',
    'about.p2': 'The ministry provides opportunities for people to come together in Christian fellowship, worship God, learn from the Bible and strengthen their faith. Through its activities, the ministry seeks to encourage spiritual growth and promote love, unity and care for others.',
    'about.purposeTitle': 'Our Purpose',
    'about.purposeText': 'The purpose of Victory International Ministry is to serve God and share the Christian faith. The ministry seeks to support believers in their spiritual journey and create opportunities for worship, prayer, learning and fellowship.',
    'about.serveTitle': 'Who We Serve',
    'about.serveText': "The ministry's activities are intended for people who wish to participate in Christian worship, prayer, Bible learning, evangelism and community-oriented service. Specific programmes and participation arrangements can be described further by the ministry.",
    'about.identityTitle': 'Our Identity',
    'about.identityText': 'As a Christian ministry, Victory International Ministry places the teachings of Jesus Christ and the Word of God at the centre of its religious activities. It aims to carry out its work with faith, humility, compassion and respect.',
    'about.quote': 'A ministry rooted in faith, fellowship and service.',
    'vision.code': 'VISION, MISSION & OBJECTIVES',
    'vision.title': 'Guided by Purpose & Christ-Centred Calling',
    'vision.visionTitle': 'Our Vision',
    'vision.visionText': 'To be a Christ-centred ministry that nurtures faith, inspires hope, strengthens Christian fellowship and positively contributes to the spiritual and social well-being of the community.',
    'vision.missionTitle': 'Our Mission',
    'vision.missionText': 'To share the Gospel of Jesus Christ, provide opportunities for worship and prayer, teach the Word of God, encourage spiritual growth and serve people with love, compassion and integrity.',
    'vision.objectivesTitle': 'Our Objectives',
    'vision.approachText': 'The ministry seeks to pursue these objectives through organized religious activities, participation, fellowship and service. The details, schedules and locations of individual programmes are determined by the ministry.',
    'vision.obj1': 'Encourage regular Christian worship and fellowship.',
    'vision.obj2': 'Promote prayer and intercession as part of Christian life.',
    'vision.obj3': 'Share the Gospel of Jesus Christ through evangelism and outreach.',
    'vision.obj4': 'Support understanding of the Bible through teaching and discipleship.',
    'vision.obj5': 'Create opportunities for Christian meetings, conferences and spiritual gatherings.',
    'vision.obj6': 'Encourage compassion and practical care through community service.',
    'values.code': 'OUR CORE VALUES',
    'values.title': 'Principles That Guide Our Ministry',
    'values.subtitle': "The following values describe the principles that guide the ministry's Christian identity and its approach to worship, fellowship and service.",
    'values.v1Title': 'Faith',
    'values.v1Text': 'Trust in God and commitment to the Christian faith and the teachings of Jesus Christ.',
    'values.v2Title': 'Love & Compassion',
    'values.v2Text': 'Showing kindness, care, patience and concern for other people, reflecting Christian love in words and actions.',
    'values.v3Title': 'Prayer & Devotion',
    'values.v3Text': 'Valuing prayer, worship and a personal commitment to seeking God.',
    'values.v4Title': 'Integrity & Humility',
    'values.v4Text': 'Acting with honesty, sincerity, responsibility and humility in ministry and relationships.',
    'values.v5Title': 'Unity & Fellowship',
    'values.v5Text': 'Encouraging togetherness, mutual respect, cooperation and support among believers.',
    'values.v6Title': 'Service',
    'values.v6Text': 'Using time, gifts and resources to serve God and contribute positively to the community.',
    'values.v7Title': 'Spiritual Growth',
    'values.v7Text': 'Encouraging continuous learning, discipleship and maturity in Christian faith.',
    'worship.code': 'WORSHIP, PRAYER & FELLOWSHIP',
    'worship.title': 'Gathering Together in Faith & Devotion',
    'worship.c1Title': 'Church Services & Worship',
    'worship.c1Text': "Church worship is an important part of the ministry's activities. It brings believers together to praise and worship God, listen to the Word of God and share fellowship. Worship gatherings provide a setting for spiritual encouragement and participation in the life of the church.",
    'worship.c2Title': 'Prayer & Intercession',
    'worship.c2Text': 'The ministry is involved in prayer and intercession. Prayer offers individuals and the congregation an opportunity to seek God, give thanks, bring personal and community concerns before Him and encourage one another in faith.',
    'worship.c3Title': 'Christian Fellowship',
    'worship.c3Text': 'Fellowship supports unity and mutual encouragement among believers. Through gathering together, members and participants can build relationships, share encouragement and grow together in their Christian walk.',
    'worship.c4Title': 'Spiritual Encouragement',
    'worship.c4Text': 'The ministry seeks to encourage people to maintain a life of faith, prayer and worship beyond formal gatherings, applying Christian teachings in their daily lives.',
    'worship.quote': 'Worship brings believers together in faith; prayer strengthens their relationship with God.',
    'evangelism.code': 'EVANGELISM & BIBLE TEACHING',
    'evangelism.title': 'Sharing the Gospel & Learning the Word of God',
    'evangelism.quote': 'Sharing the Gospel and learning the Word of God are central parts of Christian ministry.',
    'evangelism.e1Title': 'Evangelism & Gospel Outreach',
    'evangelism.e1Text': "Victory International Ministry is involved in evangelism and sharing the Gospel of Jesus Christ. Evangelism is an expression of the ministry's Christian purpose: communicating the message of the Gospel and inviting people to learn about the Christian faith.",
    'evangelism.e2Title': 'Bible Teaching',
    'evangelism.e2Text': 'The ministry includes Bible teaching as part of its religious activities. Teaching the Bible helps participants engage with Scripture, understand Christian principles and reflect on how faith can guide everyday life.',
    'evangelism.e3Title': 'Discipleship & Spiritual Development',
    'evangelism.e3Text': 'Discipleship encourages believers to continue learning and growing in their faith. Through teaching, guidance, prayer and fellowship, participants are encouraged to develop a stronger Christian life.',
    'evangelism.e4Title': 'Learning in Community',
    'evangelism.e4Text': 'Bible learning and spiritual discussion can also help build fellowship, encourage questions and strengthen understanding through shared study. The specific format and timetable of these activities can be supplied by the ministry.',
    'community.code': 'CONFERENCES & COMMUNITY SERVICE',
    'community.title': 'Faith Expressed Through Gathering, Love & Service',
    'community.tag1': 'Conferences & Seminars',
    'community.tag2': 'Community Service',
    'community.c1Title': 'Christian Conferences & Spiritual Gatherings',
    'community.c1Text': 'The ministry is involved in Christian meetings, conferences and spiritual gatherings. Such gatherings provide opportunities for worship, prayer, teaching, fellowship and spiritual encouragement. They may bring participants together around shared Christian themes and ministry activities.',
    'community.c2Title': 'Seminars & Special Meetings',
    'community.c2Text': 'Seminars and special meetings can provide focused opportunities for Bible learning, discussion and encouragement in Christian faith. Details of specific events, dates and guest speakers are added once confirmed by the ministry.',
    'community.c3Title': 'Community & Social Services',
    'community.c3Text': 'The ministry also recognizes the importance of community service. Guided by Christian values of love and compassion, community-oriented activities can promote care, unity and practical support for people in need.',
    'community.c4Title': 'Our Community Commitment',
    'community.c4Text': 'The ministry seeks to relate to the wider community with respect, kindness and dignity. Specific outreach projects, charitable programmes and community partnerships are shared as updates are confirmed.',
    'community.quote': 'Faith is expressed not only in words, but also through love and service.',
    'contact.code': 'LEADERSHIP, COMMITMENT & CONTACT',
    'contact.title': 'Leadership, Commitment & How to Reach Us',
    'contact.leadershipTitle': 'Leadership & Organization',
    'contact.leadershipText': 'The ministry is guided by its church and ministry leadership. The names and titles of leaders, departments, ministry teams and the formal organizational structure will be published here upon confirmation by the ministry.',
    'contact.commitmentTitle': 'Our Commitment',
    'contact.commitmentText': 'Victory International Ministry is committed to serving God, sharing the Gospel, encouraging spiritual growth, strengthening Christian fellowship and serving people with love and compassion. The ministry aims to conduct its activities with sincerity, responsibility and respect.',
    'contact.detailsHeading': 'Official Contact Information',
    'contact.phoneLabel': 'Phone',
    'contact.emailLabel': 'Email',
    'contact.addressLabel': 'Physical Address',
    'contact.socialLabel': 'Social Media',
    'contact.pending': 'To be provided by the ministry',
    'contact.addressPending': 'Zanzibar, Tanzania (Full address to be provided)',
    'form.title': 'Send a Prayer Request or Ministry Inquiry',
    'form.subtitle': 'Reach out to connect with Victory International Ministry in Zanzibar.',
    'form.nameLabel': 'Full Name',
    'form.emailLabel': 'Email or Phone',
    'form.topicLabel': 'Topic',
    'form.optPrayer': 'Prayer Request',
    'form.optFellowship': 'Worship & Fellowship',
    'form.optBible': 'Bible Teaching & Discipleship',
    'form.optService': 'Community Service',
    'form.optGeneral': 'General Inquiry',
    'form.msgLabel': 'Your Message',
    'form.submit': 'Submit Message',
    'footer.sections': 'Ministry Sections',
    'footer.disclaimer': 'Official history, leadership names, programme schedules and contact details are maintained and confirmed directly by Victory International Ministry, Zanzibar.'
  },
  sw: {
    'nav.about': 'Kuhusu Huduma',
    'nav.vision': 'Maono & Dhamira',
    'nav.values': 'Maadili Yetu',
    'nav.worship': 'Ibada & Neno',
    'nav.community': 'Mikutano & Jamii',
    'nav.contact': 'Mawasiliano',
    'nav.connect': 'Ungana Nasi',
    'hero.location': 'ZANZIBAR, TANZANIA',
    'hero.pillars': 'IMANI • IBADA • MAOMBI • UINJILISTI • MAFUNDISHO YA BIBLIA • HUDUMA KWA JAMII',
    'hero.motto': 'KUMTUMIKIA MUNGU • KUHUBIRI INJILI • KUHUDUMIA WATU',
    'hero.ctaPrimary': 'Chunguza Huduma Yetu',
    'hero.ctaSecondary': 'Maombi & Maswali',
    'about.code': 'KUHUSU HUDUMA',
    'about.title': 'Huduma Iliyojikita katika Imani, Ushirika na Utumishi',
    'about.p1': 'Victory International Ministry ni huduma ya kidini ya Kikristo iliyopo Zanzibar. Huduma hii inajishughulisha na shughuli za kanisa na imani, ikilenga ibada, maombi, uinjilisti, mafundisho ya Biblia, mikutano ya Kikristo na huduma kwa jamii.',
    'about.p2': 'Huduma hii inatoa fursa kwa watu kukusanyika pamoja katika ushirika wa Kikristo, kumwabudu Mungu, kujifunza Biblia na kuimarisha imani yao. Kupitia shughuli zake, inalenga kuhamasisha ukuaji wa kiroho na kukuza upendo, umoja na kujali wengine.',
    'about.purposeTitle': 'Kusudi Letu',
    'about.purposeText': 'Kusudi la Victory International Ministry ni kumtumikia Mungu na kushiriki imani ya Kikristo, kuwasaidia waamini katika safari yao ya kiroho na kuunda nafasi za ibada, maombi, kujifunza na ushirika.',
    'about.serveTitle': 'Tunaowahudumia',
    'about.serveText': 'Shughuli za huduma hii ni kwa ajili ya watu wanaotamani kushiriki katika ibada ya Kikristo, maombi, kujifunza Biblia, uinjilisti na huduma kwa jamii. Ratiba na taratibu maalum hutolewa na huduma.',
    'about.identityTitle': 'Utambulisho Wetu',
    'about.identityText': 'Kama huduma ya Kikristo, Victory International Ministry inaweka mafundisho ya Yesu Kristo na Neno la Mungu katikati ya shughuli zake, ikitenda kwa imani, unyenyekevu, huruma na heshima.',
    'about.quote': 'Huduma iliyojikita katika imani, ushirika na utumishi.',
    'vision.code': 'MAONO, DHAMIRA & MALENGO',
    'vision.title': 'Tukiongozwa na Kusudi na Wito wa Kristo',
    'vision.visionTitle': 'Maono Yetu',
    'vision.visionText': 'Kuwa huduma inayomlenga Kristo inayolea imani, kuchochea tumaini, kuimarisha ushirika wa Kikristo na kuchangia vyema ustawi wa kiroho na kijamii wa jamii.',
    'vision.missionTitle': 'Dhamira Yetu',
    'vision.missionText': 'Kuhubiri Injili ya Yesu Kristo, kutoa nafasi za ibada na maombi, kufundisha Neno la Mungu, kuhamasisha ukuaji wa kiroho na kuwahudumia watu kwa upendo, huruma na uadilifu.',
    'vision.objectivesTitle': 'Malengo Yetu',
    'vision.approachText': 'Huduma inatekeleza malengo haya kupitia shughuli zilizopangwa za kidini, ushiriki, ushirika na utumishi. Maelezo, ratiba na maeneo ya programu huamuliwa na huduma.',
    'vision.obj1': 'Kuhamasisha ibada ya mara kwa mara ya Kikristo na ushirika.',
    'vision.obj2': 'Kukuza maombi na maombezi kama sehemu ya maisha ya Kikristo.',
    'vision.obj3': 'Kuhubiri Injili ya Yesu Kristo kupitia uinjilisti na kuwafikia watu.',
    'vision.obj4': 'Kuongeza uelewa wa Biblia kupitia mafundisho na uanafunzi.',
    'vision.obj5': 'Kuunda nafasi za mikutano ya Kikristo, makongamano na mikusanyiko ya kiroho.',
    'vision.obj6': 'Kuhamasisha huruma na msaada wa vitendo kupitia huduma kwa jamii.',
    'values.code': 'MAADILI YETU YA MSINGI',
    'values.title': 'Misingi Inayoongoza Huduma Yetu',
    'values.subtitle': 'Maadili yafuatayo yanaeleza misingi inayoongoza utambulisho wa Kikristo wa huduma na mbinu zake katika ibada, ushirika na utumishi.',
    'values.v1Title': 'Imani',
    'values.v1Text': 'Kumtumaini Mungu na kujitoa kwa imani ya Kikristo na mafundisho ya Yesu Kristo.',
    'values.v2Title': 'Upendo & Huruma',
    'values.v2Text': 'Kuonesha wema, kujali, subira na upendo wa Kikristo kwa maneno na matendo.',
    'values.v3Title': 'Maombi & Ibada',
    'values.v3Text': 'Kuthamini maombi, ibada na kujitoa binafsi katika kumtafuta Mungu.',
    'values.v4Title': 'Uadilifu & Unyenyekevu',
    'values.v4Text': 'Kutenda kwa uaminifu, unyoofu, uwajibikaji na unyenyekevu katika huduma na mahusiano.',
    'values.v5Title': 'Umoja & Ushirika',
    'values.v5Text': 'Kuhamasisha mshikamano, kuheshimiana, ushirikiano na kusaidiana miongoni mwa waamini.',
    'values.v6Title': 'Utumishi',
    'values.v6Text': 'Kutumia muda, vipawa na rasilimali kumtumikia Mungu na kuchangia vyema katika jamii.',
    'values.v7Title': 'Ukuaji wa Kiroho',
    'values.v7Text': 'Kuhamasisha kujifunza kuendelea, uanafunzi na ukomavu katika imani ya Kikristo.',
    'worship.code': 'IBADA, MAOMBI & USHIRIKA',
    'worship.title': 'Kukusanyika Pamoja katika Imani na Ibada',
    'worship.c1Title': 'Ibada za Kanisa',
    'worship.c1Text': 'Ibada ni sehemu muhimu ya shughuli za huduma. Huwaleta waamini pamoja kumsifu na kumwabudu Mungu, kusikiliza Neno la Mungu na kushiriki ushirika.',
    'worship.c2Title': 'Maombi & Maombezi',
    'worship.c2Text': 'Maombi yanatoa nafasi kwa watu binafsi na kusanyiko kumtafuta Mungu, kushukuru, kuleta mahitaji binafsi na ya jamii mbele Zake na kutiana moyo.',
    'worship.c3Title': 'Ushirika wa Kikristo',
    'worship.c3Text': 'Ushirika unaimarisha umoja na kutiana moyo miongoni mwa waamini, kujenga mahusiano mema na kukua pamoja katika safari ya Kikristo.',
    'worship.c4Title': 'Faraja & Kutiwa Moyo Kiroho',
    'worship.c4Text': 'Huduma inahamasisha watu kudumisha maisha ya imani, maombi na ibada hata nje ya mikutano rasmi na kutumia mafundisho ya Kikristo kila siku.',
    'worship.quote': 'Ibada huwaleta waamini pamoja katika imani; maombi huimarisha uhusiano wao na Mungu.',
    'evangelism.code': 'UINJILISTI & MAFUNDISHO YA BIBLIA',
    'evangelism.title': 'Kuhubiri Injili & Kujifunza Neno la Mungu',
    'evangelism.quote': 'Kuhubiri Injili na kujifunza Neno la Mungu ni nguzo kuu za huduma ya Kikristo.',
    'evangelism.e1Title': 'Uinjilisti & Kufikia Watu',
    'evangelism.e1Text': 'Victory International Ministry inajishughulisha na uinjilisti na kuhubiri Injili ya Yesu Kristo, ikiwaalika watu kujifunza kuhusu imani ya Kikristo.',
    'evangelism.e2Title': 'Mafundisho ya Biblia',
    'evangelism.e2Text': 'Kufundisha Biblia kunawasaidia washiriki kusoma Maandiko, kuelewa kanuni za Kikristo na kutafakari jinsi imani inavyoongoza maisha ya kila siku.',
    'evangelism.e3Title': 'Uanafunzi & Maendeleo ya Kiroho',
    'evangelism.e3Text': 'Uanafunzi unawahimiza waamini kuendelea kujifunza na kukua kiroho kupitia mafundisho, mwongozo, maombi na ushirika.',
    'evangelism.e4Title': 'Kujifunza katika Jamii',
    'evangelism.e4Text': 'Mijadala ya Biblia na masomo ya pamoja yanajenga ushirika na kuongeza uelewa. Ratiba maalum ya masomo hayo hutolewa na huduma.',
    'community.code': 'MAKONGAMANO & HUDUMA KWA JAMII',
    'community.title': 'Imani Inayooneshwa kwa Mikusanyiko, Upendo na Utumishi',
    'community.tag1': 'Makongamano & Semina',
    'community.tag2': 'Huduma kwa Jamii',
    'community.c1Title': 'Makongamano ya Kikristo & Mikusanyiko ya Kiroho',
    'community.c1Text': 'Huduma huandaa mikutano ya Kikristo, makongamano na mikusanyiko ya kiroho inayotoa nafasi za ibada, maombi, mafundisho na ushirika.',
    'community.c2Title': 'Semina & Mikutano Maalum',
    'community.c2Text': 'Semina na mikutano maalum hutoa nafasi ya kina ya kujifunza Biblia na kutiana moyo. Taarifa za matukio na tarehe huwekwa baada ya kuthibitishwa na huduma.',
    'community.c3Title': 'Huduma za Kijamii',
    'community.c3Text': 'Ikiongozwa na maadili ya Kikristo ya upendo na huruma, shughuli za kijamii zinakuza kujali, umoja na msaada wa vitendo kwa wahitaji.',
    'community.c4Title': 'Wajibu Wetu kwa Jamii',
    'community.c4Text': 'Huduma inahusiana na jamii kwa heshima, wema na utu. Miradi maalum ya kijamii na ushirikiano huwekwa kadri taarifa zinapothibitishwa.',
    'community.quote': 'Imani haidhihirishwi kwa maneno pekee, bali pia kupitia upendo na utumishi.',
    'contact.code': 'UONGOZI, AHADI & MAWASILIANO',
    'contact.title': 'Uongozi, Ahadi Yetu & Jinsi ya Kuwasiliana Nasi',
    'contact.leadershipTitle': 'Uongozi & Muundo wa Huduma',
    'contact.leadershipText': 'Huduma inaongozwa na uongozi wa kanisa na huduma. Majina na nyadhifa za viongozi, idara na muundo rasmi vitawekwa hapa baada ya kuthibitishwa na huduma.',
    'contact.commitmentTitle': 'Ahadi Yetu',
    'contact.commitmentText': 'Victory International Ministry imejitoa kumtumikia Mungu, kuhubiri Injili, kukuza ukuaji wa kiroho, kuimarisha ushirika wa Kikristo na kuwahudumia watu kwa upendo, uaminifu, uwajibikaji na heshima.',
    'contact.detailsHeading': 'Taarifa Rasmi za Mawasiliano',
    'contact.phoneLabel': 'Simu',
    'contact.emailLabel': 'Barua Pepe',
    'contact.addressLabel': 'Anwani ya Mahali',
    'contact.socialLabel': 'Mitandao ya Kijamii',
    'contact.pending': 'Itatolewa na huduma',
    'contact.addressPending': 'Zanzibar, Tanzania (Anwani kamili itatolewa)',
    'form.title': 'Tuma Ombi la Maombi au Ujumbe',
    'form.subtitle': 'Wasiliana na Victory International Ministry Zanzibar.',
    'form.nameLabel': 'Jina Kamili',
    'form.emailLabel': 'Barua Pepe au Namba ya Simu',
    'form.topicLabel': 'Mada',
    'form.optPrayer': 'Ombi la Maombi',
    'form.optFellowship': 'Ibada & Ushirika',
    'form.optBible': 'Mafundisho ya Biblia & Uanafunzi',
    'form.optService': 'Huduma kwa Jamii',
    'form.optGeneral': 'Swali la Jumla',
    'form.msgLabel': 'Ujumbe Wako',
    'form.submit': 'Tuma Ujumbe',
    'footer.sections': 'Sehemu za Huduma',
    'footer.disclaimer': 'Historia rasmi, majina ya viongozi, ratiba za programu na taarifa za mawasiliano zinathibitishwa moja kwa moja na Victory International Ministry, Zanzibar.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header shadow
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      const icon = menuBtn.querySelector('.material-symbols-rounded');
      if (icon) icon.textContent = isOpen ? 'close' : 'menu';
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        const icon = menuBtn.querySelector('.material-symbols-rounded');
        if (icon) icon.textContent = 'menu';
      });
    });
  }

  // Language switcher (EN / SW)
  let currentLang = 'en';
  const langBtns = document.querySelectorAll('.lang-btn');
  const applyLanguage = (lang) => {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    langBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  };

  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Scroll Reveal Observer
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // Ministry Inquiry Form handling
  const form = document.getElementById('ministry-form');
  const feedback = document.getElementById('form-feedback');
  if (form && feedback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('fullName').value.trim();
      const contact = document.getElementById('contactEmail').value.trim();
      const msg = document.getElementById('messageBody').value.trim();

      if (!name || !contact || !msg) {
        feedback.className = 'form-feedback error';
        feedback.textContent =
          currentLang === 'sw'
            ? 'Tafadhali jaza jina lako, mawasiliano na ujumbe kabla ya kutuma.'
            : 'Please complete your name, contact details, and message before submitting.';
        return;
      }

      feedback.className = 'form-feedback success';
      feedback.textContent =
        currentLang === 'sw'
          ? `Asante ${name}. Ujumbe wako umepokelewa kwa ajili ya Victory International Ministry (Zanzibar).`
          : `Thank you, ${name}. Your message has been recorded for Victory International Ministry (Zanzibar).`;
      form.reset();
    });
  }
});
