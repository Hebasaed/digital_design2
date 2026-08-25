import { ServiceItem, ProjectItem, ReviewItem, PricingPlan, JobOpening } from '../types';

export const COMPANY_INFO = {
  nameAr: 'شركة الفكر الرقمي لتقنية المعلومات والحلول الذكية',
  nameEn: 'Digital Thought Company (DT-KSA / RT-KSA)',
  shortNameAr: 'الفكر الرقمي',
  shortNameEn: 'Digital Thought',
  sloganAr: 'نبتكر حلولاً رقمية تقود مستقبلك نحو الريادة',
  sloganEn: 'Engineering Digital Excellence & Tomorrow’s Innovations',
  phone: '920033882',
  phoneDisplay: '+966 9200 33882',
  whatsapp: '+966550123456',
  email: 'info@dt-ksa.com',
  secondaryEmail: 'support@rt-ksa.com',
  addressAr: 'المملكة العربية السعودية، الرياض - حي الياسمين، طريق الملك فهد | فرع جدة: طريق الأمير سلطان',
  addressEn: 'Kingdom of Saudi Arabia, Riyadh - Al Yasmin, King Fahd Rd | Jeddah: Prince Sultan Rd',
  crNumber: '1010789452',
  taxNumber: '31045892100003',
  experienceYears: 12,
  completedProjects: 240,
  activeClients: 120,
  clientSatisfaction: 99.4,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-software-apps',
    iconName: 'Smartphone',
    title: {
      ar: 'تصميم وتطوير المواقع والتطبيقات الذكية',
      en: 'Custom Web & Mobile Apps Development'
    },
    shortDesc: {
      ar: 'بناء منصات رقمية متطورة وتطبيقات iOS و Android بأحدث التقنيات السحابية لتجربة مستخدم استثنائية وأداء فائق السرعة.',
      en: 'Building cutting-edge digital platforms and native iOS/Android apps with scalable cloud architectures and seamless UX.'
    },
    fullDesc: {
      ar: 'نقدم حلولاً برمجية مخصصة تواكب نمو أعمالك، تشمل المواقع المؤسسية التفاعلية، المتاجر الإلكترونية الضخمة، لوحات التحكم، وتطبيقات الهواتف الموجهة للمستهلكين والشركات.',
      en: 'Tailored enterprise software and intuitive mobile applications designed for high performance, high conversion, and seamless integration.'
    },
    features: {
      ar: [
        'واجهات مستخدم UI/UX عصرية ومتوافقة مع جميع الشاشات',
        'تطبيقات هجينة وأصلية (React Native, Flutter, Swift, Kotlin)',
        'ربط بوابات الدفع السعودية (مدى، Apple Pay، تمارا، تابي)',
        'لوحات تحكم متطورة باللغة العربية والإنجليزية وإحصائيات مباشرة'
      ],
      en: [
        'Modern responsive UI/UX design tailored to user behavior',
        'Native & cross-platform apps (React Native, Flutter, Swift)',
        'Integration with Saudi payment gateways (Mada, Apple Pay, Tabby)',
        'Bilingual enterprise administration dashboards with real-time analytics'
      ]
    },
    tags: ['Web', 'Mobile', 'iOS', 'Android', 'UI/UX', 'API'],
    startingPrice: { ar: 'ابتداءً من 8,500 ر.س', en: 'From 8,500 SAR' }
  },
  {
    id: 'it-infrastructure-networking',
    iconName: 'Server',
    title: {
      ar: 'البنية التحتية والشبكات ومراكز البيانات',
      en: 'IT Infrastructure & Data Center Engineering'
    },
    shortDesc: {
      ar: 'تصميم وتنفيذ غرف السيرفرات ومراكز البيانات وتجهيز شبكات المؤسسات السلكية واللاسلكية بأعلى معايير الاستمرارية.',
      en: 'Design, installation, and maintenance of server rooms, structured cabling, enterprise Wi-Fi, and data centers.'
    },
    fullDesc: {
      ar: 'نؤمن بنية تحتية تقنية مستقرة تدعم استمرارية الأعمال 24/7 مع توريد وتركيب أحدث أجهزة سيسكو وفورتينت وكبائن الخوادم المبردة وأنظمة الطاقة غير المنقطعة UPS.',
      en: 'We engineer robust IT backbones ensuring 99.99% uptime with Cisco, Fortinet, precision cooling, and intelligent UPS backup systems.'
    },
    features: {
      ar: [
        'تأسيس وتجهيز غرف مراكز البيانات المتوافقة مع معايير TIA-942',
        'تمديد شبكات الألياف البصرية وكوابل CAT6A/CAT7',
        'أنظمة تحكم بالدخول ومراقبة درجات حرارة الخوادم وحرائق الغاز FM200',
        'إدارة وضبط جدران الحماية وأنظمة توجيه البيانات Routing & Switching'
      ],
      en: [
        'Data center construction compliant with TIA-942 standards',
        'Structured fiber optics & high-speed CAT6A/CAT7 cabling',
        'Environmental monitoring, biometric access & FM200 fire suppression',
        'Next-Gen Firewall configuration and enterprise routing/switching'
      ]
    },
    tags: ['Data Center', 'Cisco', 'Fiber Optics', 'Switches', 'UPS'],
    startingPrice: { ar: 'ابتداءً من 12,000 ر.س', en: 'From 12,000 SAR' }
  },
  {
    id: 'security-cctv-access',
    iconName: 'ShieldCheck',
    title: {
      ar: 'الأنظمة الأمنية والمراقبة الذكية CCTV',
      en: 'Integrated Security Systems & Smart CCTV'
    },
    shortDesc: {
      ar: 'توريد وتركيب كاميرات المراقبة المعتمدة من الهيئة العليا للأمن الصناعي والبلديات، مع أنظمة التحكم بالدخول الذكية.',
      en: 'Certified IP CCTV surveillance and access control solutions complying with Saudi MOI & HCIS regulations.'
    },
    fullDesc: {
      ar: 'نوفر حلول حماية فيزيائية متكاملة للمباني والمجمعات والمصانع تشمل كاميرات الدقة الفائقة 4K مع التحليل الذكي للذكاء الاصطناعي (تعرف على الوجوه ولوحات المركبات).',
      en: 'End-to-end security architectures featuring 4K IP cameras with AI video analytics, facial recognition, and ANPR plate recognition.'
    },
    features: {
      ar: [
        'كاميرات مراقبة نهارية/ليلية بدقة 4K وتحليلات ذكية AI',
        'بوابات الدخول الإلكترونية وأجهزة الحضور والانصراف بالبصمة والوجه',
        'أنظمة الإنذار ضد السرقة والحريق وربطها بغرف العمليات الموحدة',
        'شهادات إنجاز معتمدة من الدفاع المدني والجهات الأمنية المختصة'
      ],
      en: [
        '4K Day/Night IP cameras with AI behavior & vehicle recognition',
        'Biometric & RFID access control and smart attendance systems',
        'Intrusion detection alarms integrated with central monitoring',
        'Official compliance certificates accepted by civil defense authorities'
      ]
    },
    tags: ['CCTV', 'Hikvision', 'Dahua', 'Access Control', 'HCIS'],
    startingPrice: { ar: 'ابتداءً من 4,500 ر.س', en: 'From 4,500 SAR' }
  },
  {
    id: 'cloud-cybersecurity',
    iconName: 'Lock',
    title: {
      ar: 'الحوسبة السحابية والأمن السيبراني',
      en: 'Cloud Computing & Cyber Defense'
    },
    shortDesc: {
      ar: 'حماية أصولك الرقمية وتأمين خوادمك مع الترحيل السحابي الآمن لمنصات Azure و AWS والسحابات السعودية المعتمدة.',
      en: 'Securing corporate digital assets, vulnerability scanning, and seamless migration to sovereign Saudi cloud providers.'
    },
    fullDesc: {
      ar: 'نساعد المنشآت على الامتثال لضوابط الهيئة الوطنية للأمن السيبراني (NCA ECC) مع توفير خطط استعادة البيانات بعد الكوارث وحماية شاملة من هجمات الفدية.',
      en: 'Empowering organizations to meet NCA compliance standards, proactive threat hunting, penetration testing, and robust disaster recovery.'
    },
    features: {
      ar: [
        'الامتثال لضوابط الهيئة الوطنية للأمن السيبراني NCA الأساسية',
        'ترحيل الأنظمة وقواعد البيانات إلى السحابة مع النسخ الاحتياطي المشفر',
        'فحص الثغرات الأمنية واختبارات الاختراق الدورية للمواقع والشبكات',
        'أنظمة حماية البريد الإلكتروني ونقاط النهاية EDR & XDR'
      ],
      en: [
        'NCA (Essential Cybersecurity Controls) compliance audits',
        'Zero-downtime database and system cloud migration with encryption',
        'Periodic vulnerability assessments and penetration testing',
        'Advanced Email Security & Endpoint Detection & Response (EDR)'
      ]
    },
    tags: ['NCA', 'Azure', 'AWS', 'Pen-Testing', 'Backup', 'EDR'],
    startingPrice: { ar: 'ابتداءً من 7,000 ر.س', en: 'From 7,000 SAR' }
  },
  {
    id: 'digital-marketing-seo',
    iconName: 'TrendingUp',
    title: {
      ar: 'التسويق الرقمي وإدارة الهوية الرقمية',
      en: 'Digital Marketing & Growth Engineering'
    },
    shortDesc: {
      ar: 'إدارة الحملات الإعلانية الممولة وتحسين محركات البحث SEO وصناعة المحتوى الإبداعي لتعزيز مبيعاتك ووصول علامتك التجارية.',
      en: 'Data-driven paid ads campaigns, SEO optimization, and creative branding that amplifies reach and scales B2B/B2C conversions.'
    },
    fullDesc: {
      ar: 'استراتيجيات نمو تسويقية متكاملة تستهدف الجمهور السعودي والخليجي عبر قنوات Google Ads, Snapchat, TikTok, Meta, LinkedIn مع تتبع دقيق للعائد على الإنفاق ROAS.',
      en: 'Tailored marketing engines targeting Saudi & GCC audiences with precision targeting, high ROAS Google/Snapchat/TikTok ads, and top-tier SEO.'
    },
    features: {
      ar: [
        'تصدر نتائج البحث الأولى في Google ومحركات الذكاء الاصطناعي',
        'إدارة الحملات الإعلانية الممولة على سناب شات، جوجل، وتيك توك ولينكدإن',
        'صناعة محتوى رقمي جذاب، موشن جرافيك وتصاميم الهوية البصرية',
        'تقارير أداء شهرية تفصيلية ومعدلات تحويل مبيعات واضحة'
      ],
      en: [
        'Dominating #1 Google search positions with localized Saudi SEO',
        'Targeted PPC campaigns on Google, Snapchat, TikTok & LinkedIn',
        'Creative storytelling, motion graphics, and corporate visual identities',
        'Comprehensive bi-weekly ROAS and conversion optimization reports'
      ]
    },
    tags: ['SEO', 'Google Ads', 'Snapchat', 'Social Media', 'Branding'],
    startingPrice: { ar: 'ابتداءً من 3,900 ر.س', en: 'From 3,900 SAR' }
  },
  {
    id: 'managed-it-sla-support',
    iconName: 'Headphones',
    title: {
      ar: 'عقود الصيانة والدعم الفني المدار (SLA)',
      en: 'Managed IT Services & Maintenance Contracts'
    },
    shortDesc: {
      ar: 'فريق تقني متفرغ لإدارة البنية التحتية لشركتك، دعم فني فوري ميداني وعن بُعد لضمان عدم توقف أعمالك إطلاقاً.',
      en: 'Dedicated IT outsourcing with guaranteed SLAs, on-site engineers, and 24/7 proactive remote monitoring.'
    },
    fullDesc: {
      ar: 'نوفر باقات دعم فني سنوية تشمل الصيانة الوقائية للأجهزة والشبكات، إدارة السيرفرات وحسابات الموظفين، وحل المشكلات الطارئة في أسرع وقت استجابة قياسي.',
      en: 'Comprehensive annual maintenance contracts covering hardware maintenance, active directory management, and rapid on-site incident resolution.'
    },
    features: {
      ar: [
        'زمن استجابة قياسي للحالات الحرجة أقل من 30 دقيقة',
        'زيارات دورية وقائية منتظمة وفحص أمني شامل لجميع الأجهزة',
        'إدارة حسابات الموظفين، البريد المؤسسي، والصلاحيات',
        'لوحة تذاكر دعم فني مخصصة للعميل لمتابعة كافة البلاغات'
      ],
      en: [
        'Guaranteed <30 minutes emergency incident response time',
        'Routine on-site preventative maintenance and security audits',
        'Enterprise email administration, license management & user support',
        'Dedicated client ticketing portal with real-time resolution metrics'
      ]
    },
    tags: ['SLA 24/7', 'On-Site', 'Remote Support', 'Annual Contract'],
    startingPrice: { ar: 'ابتداءً من 2,500 ر.س/شهر', en: 'From 2,500 SAR/mo' }
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-riyadh-fintech-hub',
    title: {
      ar: 'تأسيس البنية التحتية ومركز بيانات مركز الرياض المالي',
      en: 'Riyadh Financial District Data Center & Network Overhaul'
    },
    category: 'cloud',
    categoryLabel: { ar: 'مراكز البيانات والشبكات', en: 'Data Center & Network' },
    status: 'in_progress',
    statusLabel: { ar: 'جاري التنفيذ (85%)', en: 'In Progress (85%)' },
    client: { ar: 'مجموعة استثمارية قابضة', en: 'Premier Capital Holding' },
    location: { ar: 'الرياض - طريق الملك فهد', en: 'Riyadh, King Fahd Rd' },
    description: {
      ar: 'تنفيذ غرفة خوادم متكاملة بمواصفات Tier-3 مع شبكة ألياف ضوئية بسرعة 40Gbps وتركيب 120 نقطة مراقبة أمنية ذكية متصلة بنظام إدارة مباني BMS متقدم.',
      en: 'Executing a Tier-3 server room with 40Gbps redundant fiber backbone, 120 AI-enabled CCTV nodes, and smart Building Management System (BMS) integration.'
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    impactMetrics: { ar: '99.999% استقرار، خفض تكاليف الطاقة 35%', en: '99.999% uptime, 35% power efficiency gain' },
    technologies: ['Cisco Nexus', 'Schneider Electric', 'Hikvision 4K', 'FM200', 'Fiber Optic']
  },
  {
    id: 'project-dar-alhikma-portal',
    title: {
      ar: 'منصة التحول الرقمي وتطبيق الخدمات الذكية لقطاع الرعاية',
      en: 'Healthcare Digital Transformation & Mobile Portal'
    },
    category: 'mobile',
    categoryLabel: { ar: 'تطبيقات ومواقع', en: 'Web & Mobile Apps' },
    status: 'completed',
    statusLabel: { ar: 'تم الإنجاز والتشغيل', en: 'Completed & Live' },
    client: { ar: 'مجمع دار الحكمة الطبي', en: 'Dar Al-Hikma Medical Complex' },
    location: { ar: 'جدة - حي الشاطئ', en: 'Jeddah, Al Shati' },
    description: {
      ar: 'تطوير تطبيق جوال متكامل يخدم أكثر من 180,000 مريض لحجز المواعيد والاستشارات الفورية عن بُعد مع ربطه بنظام الملف الصحي الموحد وبوابات الدفع الإلكترونية.',
      en: 'Built an enterprise iOS/Android telehealth app serving 180,000+ patients with real-time doctor appointments, unified records, and instant payments.'
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    impactMetrics: { ar: '+350% زيادة الحجوزات الرقمية، 4.9 تقييم التطبيق', en: '+350% online bookings, 4.9 App Store rating' },
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Mada Gateway', 'AWS Middle East']
  },
  {
    id: 'project-saudi-logistics-cloud',
    title: {
      ar: 'منظومة إدارة سلاسل الإمداد السحابية والذكاء الاصطناعي',
      en: 'AI-Powered Saudi Logistics & Fleet Cloud ERP'
    },
    category: 'cloud',
    categoryLabel: { ar: 'حلول السحابة والأنظمة', en: 'Cloud & Enterprise Systems' },
    status: 'in_progress',
    statusLabel: { ar: 'جاري التنفيذ (90%)', en: 'In Progress (90%)' },
    client: { ar: 'شركة أسطول الشرق اللوجستية', en: 'Orient Fleet Logistics Co.' },
    location: { ar: 'الدمام - المدينة الصناعية', en: 'Dammam 2nd Industrial City' },
    description: {
      ar: 'بناء نظام تخطيط موارد وتتبع شاحنات فوري بالذكاء الاصطناعي يربط أكثر من 450 مركبة مع توجيه ذكي للمسارات وتوقع مواعيد الصيانة الوقائية.',
      en: 'Cloud platform monitoring 450+ fleet trucks with AI route optimization, live telemetry sensors, and automated predictive maintenance alerts.'
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    impactMetrics: { ar: 'توفير 22% من استهلاك الوقود، تقليل زمن التسليم 40%', en: '22% fuel reduction, 40% faster turnaround' },
    technologies: ['React', 'Python FastApi', 'IoT Gateway', 'Google Maps API', 'Azure Cloud']
  },
  {
    id: 'project-smart-surveillance-alkharj',
    title: {
      ar: 'المنظومة الأمنية المتكاملة والتحكم بالدخول للمجمع الصناعي',
      en: 'Smart CCTV & Biometric Access for Industrial Complex'
    },
    category: 'security',
    categoryLabel: { ar: 'أنظمة أمنية ومراقبة', en: 'Security & CCTV' },
    status: 'completed',
    statusLabel: { ar: 'تم الإنجاز والتشغيل', en: 'Completed & Certified' },
    client: { ar: 'مصانع تقنية المستقبل للصلب', en: 'Future Steel Technologies' },
    location: { ar: 'الخرج - المنطقة الصناعية', en: 'Al-Kharj Industrial Zone' },
    description: {
      ar: 'تركيب 260 كاميرا مراقبة ذكية مع التعرف على لوحات الشاحنات وبوابات مرور هيدروليكية ونظام حضور بالبصمة البيومترية لكادر يتجاوز 1,200 موظف.',
      en: 'Deployment of 260 thermal and 4K cameras with ANPR gate barriers and biometric facial turnstiles for 1,200+ facility personnel.'
    },
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop',
    impactMetrics: { ar: 'صفر اختراقات أمنية، اعتماد كامل من الدفاع المدني', en: 'Zero security breaches, 100% Civil Defense clearance' },
    technologies: ['Dahua AI CCTV', 'ZKTeco Biometrics', 'Fiber Mesh', 'Milestone VMS']
  },
  {
    id: 'project-luxury-retail-ecommerce',
    title: {
      ar: 'متجر فخم متعدد الفروع مع تسويق رقمي وحملات نمو',
      en: 'Omnichannel Luxury Retail Ecommerce & Growth Engine'
    },
    category: 'marketing',
    categoryLabel: { ar: 'تسويق ومتاجر إلكترونية', en: 'Ecommerce & Growth' },
    status: 'completed',
    statusLabel: { ar: 'تم الإنجاز والتشغيل', en: 'Completed & Live' },
    client: { ar: 'مجموعة أروما للعطور الفاخرة', en: 'Aroma Oud & Perfumes' },
    location: { ar: 'الرياض - فروع المملكة والخليج', en: 'Riyadh & GCC Branches' },
    description: {
      ar: 'تصميم منصة تجارة إلكترونية سريعة مع ربط مستودعات 14 فرعاً ونقاط البيع وإطلاق حملات تسويقية أثمرت عن مبيعات قياسية في مواسم الأعياد ويوم التأسيس.',
      en: 'Built high-converting headless ecommerce integrating POS across 14 stores, paired with high-ROAS influencer and performance marketing campaigns.'
    },
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    impactMetrics: { ar: 'مبيعات +14.8 مليون ر.س في السنة الأولى، ROAS 5.8x', en: '+14.8M SAR revenue in Year 1, 5.8x ROAS' },
    technologies: ['Next.js', 'Shopify Plus / Custom API', 'Snapchat Pixel', 'TikTok Ads API']
  },
  {
    id: 'project-cybersecurity-audit-gov',
    title: {
      ar: 'تأمين البنية السيبرانية والامتثال لمعايير الهيئة الوطنية NCA',
      en: 'Cybersecurity Hardening & NCA Compliance Audit'
    },
    category: 'security',
    categoryLabel: { ar: 'أمن سيبراني', en: 'Cybersecurity' },
    status: 'in_progress',
    statusLabel: { ar: 'جاري التنفيذ (75%)', en: 'In Progress (75%)' },
    client: { ar: 'شركة حلول المقاولات العامة', en: 'National Contracting Solutions' },
    location: { ar: 'الرياض - حي العليا', en: 'Riyadh, Olaya' },
    description: {
      ar: 'إجراء تقييم شامل للثغرات واختبارات اختراق الأنظمة وبناء سياسات أمن المعلومات وتشفير قواعد البيانات لتلبية متطلبات العقود الحكومية الكبرى.',
      en: 'Executing comprehensive red-teaming, vulnerability patching, endpoint security deployment, and governance to achieve full NCA ECC certification.'
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    impactMetrics: { ar: 'إغلاق 100% من الثغرات الحرجة، شهادة امتثال معتمدة', en: '100% critical vulnerabilities remediated' },
    technologies: ['Fortinet FortiGate', 'CrowdStrike EDR', 'Wazuh SIEM', 'Tenable Nessus']
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: { ar: 'م. فيصل السديري', en: 'Eng. Faisal Al-Sudairi' },
    role: { ar: 'رئيس قطاع تقنية المعلومات', en: 'Chief Information Officer' },
    company: { ar: 'مجموعة المشاريع العمرانية القابضة', en: 'Urban Ventures Holding' },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    content: {
      ar: 'منذ بدء تعاوننا مع شركة الفكر الرقمي، لمسنا احترافية استثنائية في إدارة مشاريع البنية التحتية والشبكات المعقدة. التزامهم بالمواصفات القياسية والجودة وسرعة الاستجابة جعلهم شريكاً تقنياً لا غنى عنه لنا في كافة مشاريعنا بالمملكة.',
      en: 'Working with Digital Thought has been a transformative experience. Their infrastructure engineering and technical prowess in deploying our data centers were flawless and completed ahead of schedule.'
    },
    date: { ar: 'قبل أسبوعين', en: '2 weeks ago' },
    verified: true
  },
  {
    id: 'rev-2',
    name: { ar: 'أ. سارة المنصور', en: 'Ms. Sarah Al-Mansoor' },
    role: { ar: 'مديرة العمليات والتحول الرقمي', en: 'COO & Digital Transformation Lead' },
    company: { ar: 'شركة النخبة للخدمات اللوجستية', en: 'Elite Logistics KSA' },
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    content: {
      ar: 'قام فريق الفكر الرقمي بتطوير منصتنا الرقمية وتطبيقات السائقين والعملاء بكفاءة منقطعة النظير. الدعم الفني مستمر 24 ساعة ونسبة رضا عملائنا قفزت بشكل ملحوظ بعد الإطلاق الجديد. أنصح بالتعامل معهم بشدة.',
      en: 'The Digital Thought team built our custom logistics tracking platform with unprecedented speed and precision. Their 24/7 dedicated SLA support gives us absolute peace of mind.'
    },
    date: { ar: 'قبل شهر', en: '1 month ago' },
    verified: true
  },
  {
    id: 'rev-3',
    name: { ar: 'د. خالد بن سلطان العتيبي', en: 'Dr. Khaled Al-Otaibi' },
    role: { ar: 'المدير التنفيذي', en: 'Chief Executive Officer' },
    company: { ar: 'مستشفيات رعاية الأفق', en: 'Horizon Care Medical' },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    content: {
      ar: 'طلبنا استشارة مجانية في البداية لتقييم أنظمة الأمان وكاميرات المراقبة، وفوجئنا بالدقة والتقرير الشامل الذي قدمه مهندسو الفكر الرقمي. تعاقدنا معهم فوراً لتجهيز 3 فروع ونحن ممتنون جداً للنتائج.',
      en: 'We initially signed up for the free technical consultation. The thoroughness of their diagnostic report blew us away. We contracted them for CCTV and networking across 3 branches with total satisfaction.'
    },
    date: { ar: 'قبل شهر ونصف', en: '1.5 months ago' },
    verified: true
  },
  {
    id: 'rev-4',
    name: { ar: 'أ. طارق عبد العزيز الحازمي', en: 'Tariq Al-Hazmi' },
    role: { ar: 'مدير التسويق والمبيعات', en: 'Marketing & Sales Director' },
    company: { ar: 'علامة فخامة العود', en: 'Fakhama Oud Trading' },
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    content: {
      ar: 'حملات التسويق الرقمي وإعادة تصميم متجرنا الإلكتروني ضاعفت مبيعاتنا 4 أضعاف في موسم اليوم الوطني. فريق مبدع يفهم السوق السعودي بدقة ويعرف كيف يحقق أعلى عائد على الإنفاق الإعلاني.',
      en: 'Their digital marketing campaigns and seamless ecommerce redesign increased our sales 4x during peak season. They understand the Saudi consumer landscape better than anyone.'
    },
    date: { ar: 'قبل شهرين', en: '2 months ago' },
    verified: true
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-starter',
    title: { ar: 'باقة الانطلاق والشركات الناشئة', en: 'Starter & SME Growth' },
    tagline: { ar: 'الخيار المثالي لتأسيس هوية رقمية قوية وبداية تقنية موثوقة', en: 'Ideal for launching a modern digital presence and reliable IT base' },
    priceSAR: 4900,
    period: { ar: 'دفعة واحدة / مشروع', en: 'One-time project' },
    popular: false,
    suitableFor: { ar: 'الشركات الناشئة، المكاتب المهنية، والمتاجر الصاعدة', en: 'Startups, professional offices & emerging retailers' },
    features: {
      ar: [
        'تصميم وتطوير موقع إلكتروني تعريفي فائق السرعة متوافق مع الجوال',
        'لوحة تحكم إدارية سهلة الاستخدام باللغة العربية والإنجليزية',
        'تأسيس البريد الإلكتروني المؤسسي الرسمي (حتى 10 مستخدمين)',
        'تهيئة سيو أولية SEO للظهور في محركات البحث وجوجل ماب',
        'شهادة أمان SSL واستضافة سريعة وسيرفر محلي لسنة كاملة مجاناً',
        'دعم فني وصيانة مجانية لمدة 3 أشهر كاملة'
      ],
      en: [
        'High-speed responsive corporate website with bilingual UX',
        'User-friendly bilingual CMS control panel (AR/EN)',
        'Corporate business emails setup (up to 10 mailboxes)',
        'Local Saudi SEO optimization & Google Maps business listing',
        'Free SSL certificate and high-speed cloud hosting for 1 year',
        '3 months free dedicated technical support & maintenance'
      ]
    }
  },
  {
    id: 'plan-business-pro',
    title: { ar: 'باقة الأعمال المتقدمة والمتكاملة', en: 'Enterprise & Full-Stack' },
    tagline: { ar: 'الحل الأكثر طلباً للمنشآت الراغبة في أتمتة عملياتها وحلول متطورة', en: 'Our most popular package for growing companies wanting complete automation' },
    priceSAR: 12500,
    period: { ar: 'مشروع متكامل شامل التأسيس', en: 'Complete solution package' },
    popular: true,
    suitableFor: { ar: 'الشركات المتوسطة والكبرى والمجمعات التجارية', en: 'Medium to large enterprises and commercial complexes' },
    features: {
      ar: [
        'بناء منصة رقمية مخصصة أو تطبيق جوال هجين (iOS & Android)',
        'ربط بوابات الدفع الإلكتروني (مدى، فيزا، ماستركارد، تابي)',
        'تأسيس الشبكة الداخلية وجدران الحماية السيبرانية للمقر',
        'ربط النظام بأنظمة الفاتورة الإلكترونية المعتمدة من ZATCA (المرحلة 2)',
        'استشارات أمن سيبراني واختبار ثغرات معتمدة',
        'خطة تسويق رقمي وإدارة حملات إعلانية بقيمة ترويجية',
        'عقد دعم فني مدار SLA مع استجابة خلال ساعتين لمدة 6 أشهر'
      ],
      en: [
        'Custom web platform or hybrid mobile app (iOS & Android)',
        'Payment gateway integration (Mada, Visa, Apple Pay, Tabby)',
        'Office IT networking, Wi-Fi 6 setup & enterprise firewall',
        'ZATCA Phase 2 E-Invoicing compliant integration',
        'Cybersecurity vulnerability assessment & data encryption',
        'Comprehensive digital marketing strategy & launch campaign',
        'Dedicated 6-month SLA support contract with 2-hr response time'
      ]
    }
  },
  {
    id: 'plan-custom-infrastructure',
    title: { ar: 'باقة البنية التحتية والأنظمة المؤسسية', en: 'Custom IT & Infrastructure SLA' },
    tagline: { ar: 'حلول مخصصة للمشاريع الضخمة ومراكز البيانات والمصانع', en: 'Tailored architecture for mega-projects, factories & data centers' },
    priceSAR: 24900,
    period: { ar: 'حسب نطاق العمل الميداني', en: 'Tailored scope' },
    popular: false,
    suitableFor: { ar: 'الجهات الحكومية، المستشفيات، المجمعات والمصانع', en: 'Government entities, healthcare networks, industrial plants' },
    features: {
      ar: [
        'تجهيز وتأسيس غرف خوادم ومراكز بيانات مع أنظمة التبريد و FM200',
        'تمديد شبكات الألياف البصرية وكاميرات المراقبة المعتمدة HCIS',
        'حلول استعادة الكوارث والنسخ السحابي المشفر بالكامل',
        'فريق مهندسين معتمدين مقيمين أو زيارات أسبوعية مجدولة',
        'شهادات مطابقة رسمية معتمدة للدفاع المدني والبلدية',
        'دعم فني استباقي ومراقبة 24/7/365 مع تذاكر غير محدودة'
      ],
      en: [
        'Tier-3 data center turnkey build with precision AC & FM200',
        'Fiber optic structured cabling and HCIS-certified CCTV rollout',
        'Disaster Recovery as a Service (DRaaS) with sovereign cloud backup',
        'Dedicated resident certified engineers or scheduled weekly audits',
        'Official Civil Defense & regulatory compliance certifications',
        '24/7/365 proactive NOC monitoring with unlimited SLA tickets'
      ]
    }
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-fullstack-dev',
    title: { ar: 'مطور واجهات وخوادم (Senior Full-Stack Developer)', en: 'Senior Full-Stack Developer' },
    department: { ar: 'إدارة الحلول الرقمية والبرمجيات', en: 'Software & Digital Solutions' },
    type: { ar: 'دوام كامل (مقر الرياض / هجين)', en: 'Full-time (Riyadh / Hybrid)' },
    location: { ar: 'الرياض - حي الياسمين', en: 'Riyadh, Al Yasmin' },
    experience: { ar: '4+ سنوات خبرة عملية', en: '4+ Years Experience' },
    requirements: {
      ar: [
        'إتقان React, TypeScript, Next.js, Node.js وقواعد البيانات PostgreSQL / MongoDB',
        'خبرة في بناء واجهات وتطبيقات سريعة الاستجابة مع دعم RTL وتصميم UI/UX عصري',
        'معرفة جيدة بربط بوابات الدفع والأنظمة السحابية AWS / Azure'
      ],
      en: [
        'Expert in React, TypeScript, Next.js, Node.js and PostgreSQL',
        'Proven track record in high-performance bilingual UI/UX apps',
        'Experience with cloud deployments and payment API integrations'
      ]
    }
  },
  {
    id: 'job-network-cctv-eng',
    title: { ar: 'مهندس شبكات وبنية تحتية وأنظمة أمنية', en: 'Network & Security Infrastructure Engineer' },
    department: { ar: 'إدارة الشبكات والمشاريع الهندسية', en: 'Infrastructure & Projects' },
    type: { ar: 'دوام كامل ميداني', en: 'Full-time (On-Site Projects)' },
    location: { ar: 'الرياض / جدة', en: 'Riyadh / Jeddah' },
    experience: { ar: '3+ سنوات خبرة في مشاريع المملكة', en: '3+ Years Field Experience' },
    requirements: {
      ar: [
        'شهادات معتمدة CCNA/CCNP أو Fortinet NSE',
        'خبرة في تركيب وبرمجة كاميرات المراقبة IP وأنظمة الدخول وغرف السيرفرات',
        'رخصة قيادة سعودية سارية وإلمام بمعايير ومتطلبات الجهات الرسمية'
      ],
      en: [
        'CCNA/CCNP or Fortinet certification required',
        'Hands-on experience in IP CCTV, server rooms, and access control',
        'Valid Saudi driving license and familiar with HCIS/Civil Defense standards'
      ]
    }
  },
  {
    id: 'job-digital-marketing-specialist',
    title: { ar: 'أخصائي تسويق رقمي ونمو (Digital Marketing & Growth)', en: 'Digital Marketing & Growth Specialist' },
    department: { ar: 'إدارة التسويق الرقمي والإعلام', en: 'Digital Marketing & Media' },
    type: { ar: 'دوام كامل', en: 'Full-time' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    experience: { ar: '2+ سنوات في السوق السعودي', en: '2+ Years Saudi Market' },
    requirements: {
      ar: [
        'خبرة بإدارة ميزانيات الحملات الإعلانية على Google Ads, Snapchat, TikTok',
        'إتقان استراتيجيات تحسين محركات البحث SEO وتحليل البيانات عبر Google Analytics 4',
        'مهارة في صياغة المحتوى التسويقي الجذاب الموجه للجمهور السعودي'
      ],
      en: [
        'Demonstrated track record managing Google, Snapchat and TikTok ads',
        'Proficiency in Arabic SEO and Google Analytics 4 tracking',
        'High capability in crafting high-converting Arabic ad copy'
      ]
    }
  }
];

export const FAQS = [
  {
    question: {
      ar: 'ما الذي تقدمه شركة الفكر الرقمي لعملائها؟',
      en: 'What core services does Digital Thought Company provide?'
    },
    answer: {
      ar: 'نقدم منظومة تقنية متكاملة تشمل تصميم وتطوير المواقع والمتاجر والتطبيقات، تجهيز البنية التحتية وغرف مراكز البيانات، توريد وتركيب كاميرات المراقبة والأنظمة الأمنية المعتمدة، استشارات الأمن السيبراني، والتسويق الرقمي وإدارة الحملات الإعلانية مع عقود صيانة ودعم فني مدار.',
      en: 'We deliver full-stack enterprise digital transformation, including web/mobile development, data center & fiber infrastructure, HCIS-certified CCTV security, cybersecurity audits, performance digital marketing, and 24/7 SLA managed IT support.'
    }
  },
  {
    question: {
      ar: 'كيف يمكنني الحصول على عرض الاستشارة المجانية؟',
      en: 'How can I claim the Free Technical Consultation offer?'
    },
    answer: {
      ar: 'يمكنك ببساطة إدخال رقم جوالك وبريدك الإلكتروني في نموذج "احجز استشارتك المجانية" على الصفحة الرئيسية، وسيقوم أحد كبار مستشارينا التقنيين بالتواصل معك خلال 24 ساعة لتقديم جلسة تقييم شاملة ودراسة متطلبات مشروعك مجاناً.',
      en: 'Simply enter your phone number and email address in the Free Consultation module on the homepage. One of our senior IT consultants will reach out within 24 hours to review your requirements and provide an initial architectural assessment free of charge.'
    }
  },
  {
    question: {
      ar: 'هل أنظمة كاميرات المراقبة والأمن معتمدة لدى الجهات الرسمية؟',
      en: 'Are your CCTV and security systems certified by Saudi authorities?'
    },
    answer: {
      ar: 'نعم، جميع أجهزتنا وحلولنا الأمنية مطابقة للاشتراطات الفنية الصادرة عن الهيئة العليا للأمن الصناعي (HCIS) والدفاع المدني ووزارة الداخلية، ونقدم شهادات إنجاز معتمدة تضمن سرعة استخراج وتجديد التراخيص لجميع الأنشطة التجارية.',
      en: 'Yes, 100% of our security systems and camera installations comply with High Commission for Industrial Security (HCIS) and Saudi Civil Defense guidelines, complete with accredited handover compliance certificates.'
    }
  },
  {
    question: {
      ar: 'هل تقدمون عقود صيانة ودعم فني مستمر بعد تسليم المشروع؟',
      en: 'Do you offer ongoing IT maintenance and SLA support after launch?'
    },
    answer: {
      ar: 'بالتأكيد. نوفر عقود دعم فني مدارة سنوياً (SLA) تشمل الصيانة الدورية الوقائية، وزمن استجابة طوارئ في أقل من 30 دقيقة، مع دعم ميداني وعن بُعد لضمان استقرار أعمالك بلا انقطاع.',
      en: 'Absolutely. We provide annual Managed Service Level Agreements (SLAs) with routine preventative maintenance, <30min emergency response, and both on-site and 24/7 remote monitoring.'
    }
  }
];
