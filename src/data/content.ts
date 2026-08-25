import { ServiceItem, ProjectItem, ReviewItem, PricingPlan, JobOpening } from '../types';

export const companyDetails = {
  nameAr: 'الفكر الرقمي',
  nameEn: 'Digital Thought (RT-KSA)',
  fullNameAr: 'شركة الفكر الرقمي لتقنية المعلومات والحلول الرقمية',
  fullNameEn: 'Digital Thought Information Technology & Digital Solutions Co.',
  taglineAr: 'حلول رقمية • تصميم • تطوير • تسويق',
  taglineEn: 'Digital Solutions • Design • Development • Marketing',
  phone: '+966 11 450 8899',
  whatsapp: '+966 54 892 1100',
  email: 'info@rt-ksa.com',
  salesEmail: 'sales@rt-ksa.com',
  locationAr: 'المملكة العربية السعودية - الرياض، طريق الملك فهد | فرع جدة، طريق الملك عبدالعزيز',
  locationEn: 'Saudi Arabia - Riyadh, King Fahd Rd | Jeddah Branch, King Abdulaziz Rd',
  crNumber: '1010893421',
  vatNumber: '302981765400003',
  experienceYears: 10,
  completedProjects: 180,
  activeClients: 120,
  clientSatisfaction: 99.4,
};

export const servicesData: ServiceItem[] = [
  {
    id: 'web-app-dev',
    iconName: 'Code',
    title: {
      ar: 'تطوير المواقع والمنصات والتطبيقات',
      en: 'Web, Platform & Mobile App Development',
    },
    shortDesc: {
      ar: 'بناء وتطوير تطبيقات الهواتف الذكية (iOS & Android) والمنصات السحابية المتقدمة وفق أعلى معايير الأداء والأمان.',
      en: 'Developing high-performance iOS/Android mobile apps and custom cloud platforms engineered for scale.',
    },
    fullDesc: {
      ar: 'نقدم حلولاً برمجية متكاملة تشمل دراسة تجربة المستخدم، بنية النظام، البرمجة الحديثة بأحدث التقنيات، والربط مع بوابات الدفع والفوترة الإلكترونية وأنظمة السداد وهيئة الزكاة والضريبة.',
      en: 'Comprehensive software development covering UX engineering, robust backend architecture, Saudi payment gateways, ZATCA e-invoicing compliance, and seamless cloud deployment.',
    },
    features: {
      ar: [
        'تطبيقات الهواتف الذكية (Flutter & Native)',
        'المتاجر والمنصات الإلكترونية المتطورة',
        'لوحات تحكم ذكية وأنظمة إدارة موارد المؤسسات (ERP)',
        'تكامل مع بوابات الدفع السعودية (Mada, Apple Pay, Tabby, Tamara)',
      ],
      en: [
        'Cross-platform & Native Mobile Apps (iOS & Android)',
        'High-conversion Custom E-Commerce Portals',
        'Custom Admin Dashboards & Enterprise ERP Systems',
        'Saudi Payment Gateway & ZATCA E-invoicing Integrations',
      ],
    },
    tags: ['React', 'Next.js', 'Flutter', 'Node.js', 'Python', 'PostgreSQL'],
    startingPrice: {
      ar: 'تبدأ من 4,500 ر.س',
      en: 'Starting from 4,500 SAR',
    },
  },
  {
    id: 'ui-ux-branding',
    iconName: 'Palette',
    title: {
      ar: 'تصميم الهوية الرقمية وتجربة المستخدم',
      en: 'UI/UX Design & Digital Branding',
    },
    shortDesc: {
      ar: 'صناعة هويات بصرية متميزة وتصاميم واجهات وتجارب مستخدم ترفع معدلات التحويل وتترك انطباعاً راسخاً.',
      en: 'Crafting memorable brand identities and frictionless UI/UX designs that captivate and convert.',
    },
    fullDesc: {
      ar: 'نصمم تجارب رقمية جذابة تركز على راحة العميل وسهولة الاستخدام مع الحفاظ على الهوية الأصيلة والمعاصرة المتوافقة مع السوق السعودي والخليجي.',
      en: 'We craft intuitive digital interfaces and distinct visual identities tuned precisely to Saudi and GCC consumer psychology.',
    },
    features: {
      ar: [
        'تصميم واجهات المستخدم الحديثة (UI/UX Design)',
        'بناء الهويات البصرية الكاملة وأدلة الاستخدام',
        'تصميم نماذج تفاعلية ونماذج عمل أولية (Prototypes)',
        'تحسين رحلة العميل ومعدلات التحويل (CRO)',
      ],
      en: [
        'Modern High-Fidelity UI/UX Systems (Figma)',
        'Full Corporate Brand Identity & Guidelines',
        'Interactive Motion Prototypes & User Testing',
        'Conversion Rate Optimization (CRO) & Journey Mapping',
      ],
    },
    tags: ['Figma', 'Design Systems', 'Prototyping', 'Brand Identity', '3D Graphics'],
    startingPrice: {
      ar: 'تبدأ من 2,800 ر.س',
      en: 'Starting from 2,800 SAR',
    },
  },
  {
    id: 'digital-marketing',
    iconName: 'TrendingUp',
    title: {
      ar: 'التسويق الرقمي وإدارة الحملات الإعلانية',
      en: 'Digital Marketing & Growth Campaigns',
    },
    shortDesc: {
      ar: 'حملات تسويقية ذكية ومدروسة على سناب شات، تيك توك، جوجل، وتويتر تستهدف عملائك بدقة وتحقق أعلى عائد استثمار.',
      en: 'Data-driven performance marketing across Snapchat, TikTok, Google Ads, and Meta maximizing your ROI.',
    },
    fullDesc: {
      ar: 'نجمع بين تحليل البيانات والإبداع الإعلاني لإدارة الحملات الممولة، تحسين محركات البحث (SEO)، وإدارة منصات التواصل الاجتماعي وصناعة المحتوى الجذاب.',
      en: 'Combining data intelligence with creative storytelling for paid ads, technical SEO, social media management, and viral video creation.',
    },
    features: {
      ar: [
        'إدارة الحملات الإعلانية الممولة بدقة استهداف عالية',
        'تحسين نتائج محركات البحث (SEO) لظهور اسمك أولاً',
        'صناعة المحتوى الإبداعي والتصوير والموشن جرافيك',
        'إدارة التواجد على منصات التواصل والرد السريع',
      ],
      en: [
        'Laser-Targeted Paid Ads (Snapchat, TikTok, Google Ads)',
        'Advanced Search Engine Optimization (SEO)',
        'Creative Copywriting, Motion Graphics & Video Ads',
        'Social Media Management & Community Engagement',
      ],
    },
    tags: ['Google Ads', 'Snapchat Ads', 'TikTok Ads', 'Meta Ads', 'SEO', 'Analytics'],
    startingPrice: {
      ar: 'تبدأ من 3,200 ر.س / شهرياً',
      en: 'Starting from 3,200 SAR / mo',
    },
  },
  {
    id: 'infra-cloud',
    iconName: 'Server',
    title: {
      ar: 'البنية التحتية وحلول السحابة ومراكز البيانات',
      en: 'Cloud Solutions, Infrastructure & Data Centers',
    },
    shortDesc: {
      ar: 'تأسيس وإدارة الخوادم السحابية الموثوقة، مراكز البيانات، والشبكات السلكية واللاسلكية وفق اشتراطات الأمن الوطني.',
      en: 'Establishing reliable cloud server infrastructure, enterprise data centers, and secure networking architectures.',
    },
    fullDesc: {
      ar: 'نقدم استشارات وتجهيز للبنية التحتية التقنية للمنشآت والشركات، تشمل حلول السحابة السعودية، النسخ الاحتياطي، وحلول استمرارية الأعمال والحماية من انقطاع الخدمة.',
      en: 'Comprehensive enterprise IT infrastructure setups, Saudi-hosted private cloud instances, disaster recovery, automated backups, and 99.99% uptime guarantees.',
    },
    features: {
      ar: [
        'تأسيس وإدارة غرف مراكز البيانات (Data Centers)',
        'هندسة الشبكات السلكية واللاسلكية للشركات والمباني',
        'حلول النسخ الاحتياطي واستعادة البيانات بعد الكوارث',
        'عقود صيانة وتشغيل ودعم فني دوري معتمد',
      ],
      en: [
        'Data Center & Server Room Turnkey Engineering',
        'Enterprise Wired & Wireless Networking (Cisco/Aruba)',
        'Disaster Recovery & Redundant Cloud Backups',
        'Certified SLA 24/7 Technical Support & Maintenance Contracts',
      ],
    },
    tags: ['AWS', 'Google Cloud', 'Cisco', 'Data Center', 'Kubernetes', 'Linux'],
    startingPrice: {
      ar: 'تبدأ من 5,000 ر.س',
      en: 'Starting from 5,000 SAR',
    },
  },
  {
    id: 'security-systems',
    iconName: 'ShieldCheck',
    title: {
      ar: 'الأمن السيبراني وأنظمة المراقبة المتكاملة',
      en: 'Cybersecurity & Integrated Surveillance Systems',
    },
    shortDesc: {
      ar: 'حماية بيانات منشأتك من الاختراق وتجهيز أنظمة المراقبة والتحكم بالدخول المعتمدة من الجهات الأمنية.',
      en: 'Safeguarding enterprise assets with penetration testing, cyber defense, and certified CCTV/access control.',
    },
    fullDesc: {
      ar: 'خدمات أمن سيبراني متوافقة مع متطلبات الهيئة الوطنية للأمن السيبراني (NCA) وتوريد وتركيب وصيانة كاميرات المراقبة الأمنية والتحكم ببوابات الدخول والبصمة.',
      en: 'Cybersecurity aligned with Saudi National Cybersecurity Authority (NCA) standards, alongside certified CCTV surveillance and biometric access control deployment.',
    },
    features: {
      ar: [
        'اختبار الاختراق والتدقيق الأمني وتأمين الثغرات',
        'كاميرات مراقبة أمنية ذكية IP معتمدة للمنشآت',
        'أنظمة الدخول الذكي والحضور بالبصمة والوجه',
        'جدران الحماية المتقدمة (Firewalls) ومراقبة التهديدات',
      ],
      en: [
        'Penetration Testing & Security Vulnerability Audits',
        'Smart AI CCTV Surveillance Systems & Storage',
        'Biometric & Facial Recognition Access Control',
        'Next-Gen Firewalls & 24/7 Security Threat Monitoring',
      ],
    },
    tags: ['NCA Compliant', 'Fortinet', 'Hikvision', 'Firewalls', 'Zero Trust', 'SOC'],
    startingPrice: {
      ar: 'تبدأ من 3,900 ر.س',
      en: 'Starting from 3,900 SAR',
    },
  },
  {
    id: 'ai-automation',
    iconName: 'Cpu',
    title: {
      ar: 'حلول الذكاء الاصطناعي والأتمتة الذكية',
      en: 'AI Solutions & Intelligent Workflow Automation',
    },
    shortDesc: {
      ar: 'أتمتة العمليات الإدارية ودمج نماذج الذكاء الاصطناعي التوليدي والشات بوت لخدمة العملاء على مدار الساعة.',
      en: 'Automating business operations and embedding Generative AI & 24/7 intelligent customer service agents.',
    },
    fullDesc: {
      ar: 'نساعد الشركات السعودية على توفير ما يزيد عن 40% من تكاليف التشغيل عبر بناء روبوتات الدردشة الذكية على واتساب، وتحليل البيانات التنبؤي، وأتمتة مسارات العمل.',
      en: 'Helping businesses cut operational costs by over 40% with WhatsApp AI assistants, predictive enterprise analytics, and custom workflow automation.',
    },
    features: {
      ar: [
        'مساعدات ذكاء اصطناعي تفاعلية على واتساب والموقع',
        'أتمتة المهام الروتينية ومعالجة المستندات والفواتير',
        'لوحات ذكاء الأعمال (BI) والتحليل التنبؤي للبيانات',
        'تكامل مع أنظمة المحاسبة وخدمة العملاء الحالية',
      ],
      en: [
        'Custom WhatsApp & Website AI Agents in Arabic/English',
        'Automated Invoice Processing & Document Workflows',
        'Predictive Business Intelligence & Executive Dashboards',
        'Seamless CRM & ERP AI Automation Connectors',
      ],
    },
    tags: ['Gemini AI', 'OpenAI', 'LangChain', 'Python', 'PowerBI', 'RPA'],
    startingPrice: {
      ar: 'تبدأ من 4,200 ر.س',
      en: 'Starting from 4,200 SAR',
    },
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: {
      ar: 'منصة سهمك - نظام التداول والاستثمار العقاري الرقمي',
      en: 'Sahmik Platform - Digital Real Estate Investment Portal',
    },
    category: 'web',
    categoryLabel: { ar: 'منصة وتطبيق ويب', en: 'Web Platform' },
    status: 'in_progress',
    statusLabel: { ar: 'جاري التنفيذ', en: 'In Progress' },
    client: { ar: 'مجموعة الاستثمار العقاري المتقدمة - الرياض', en: 'Advanced Real Estate Investment Group - Riyadh' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    description: {
      ar: 'تطوير منصة رقمية متكاملة لربط المستثمرين بالفرص العقارية المرخصة، مع ربط مباشر بهيئة العقار وبوابات الدفع السريع والتوثيق عبر النفاذ الوطني.',
      en: 'Architecting an investment crowdfunding engine with Saudi Real Estate Authority integrations, Nafath identity verification, and automated Mada disbursements.',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    impactMetrics: { ar: '+12,000 مستثمر مسجل و 85M+ حجم تداولات أولية', en: '+12,000 registered investors, 85M+ SAR initial volume' },
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Mada Gateway', 'Nafath API'],
  },
  {
    id: 'proj-2',
    title: {
      ar: 'تطبيق إمداد بلس - للخدمات اللوجستية وتوصيل الشحنات',
      en: 'Emdad Plus - Smart Logistics & Fleet Dispatch Mobile App',
    },
    category: 'mobile',
    categoryLabel: { ar: 'تطبيق هاتف ذكي', en: 'Mobile App' },
    status: 'completed',
    statusLabel: { ar: 'مكتمل بنجاح', en: 'Completed' },
    client: { ar: 'شركة إمداد الخليج للخدمات اللوجستية', en: 'Emdad Gulf Logistics Logistics Co.' },
    location: { ar: 'جدة / الدمام', en: 'Jeddah / Dammam' },
    description: {
      ar: 'تطبيق هجين فائق السرعة للسائقين والعملاء مع تتبع مباشر لحظي عبر الأقمار الصناعية، وإصدار بوالص الشحن الإلكترونية المعتمدة من هيئة النقل.',
      en: 'High-speed cross-platform mobile apps for drivers and clients with real-time GPS telemetry, geofenced waypoints, and Saudi Transport Authority integration.',
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    impactMetrics: { ar: 'تخفيض 38% في زمن التوصيل و 4.9 تقييم في المتجر', en: '38% delivery turnaround reduction, 4.9 App Store rating' },
    technologies: ['Flutter', 'Google Maps API', 'Firebase', 'Go Microservices', 'Apple Pay'],
  },
  {
    id: 'proj-3',
    title: {
      ar: 'تجهيز مركز البيانات والبنية التحتية لبرج الأعمال المالي',
      en: 'Financial District Tier-3 Data Center & Enterprise Infrastructure',
    },
    category: 'cloud',
    categoryLabel: { ar: 'بنية تحتية ومراكز بيانات', en: 'Infrastructure & DC' },
    status: 'in_progress',
    statusLabel: { ar: 'جاري التنفيذ', en: 'In Progress' },
    client: { ar: 'شركة برج الأفق للتطوير المكتبي - طريق الملك فهد', en: 'Horizon Tower Office Developments - Riyadh' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    description: {
      ar: 'تصميم وتنفيذ مركز بيانات كامل من الفئة Tier-3 يخدم 40 جهة وشركة، مع شبكات ألياف ضوئية فائقة السرعة وأنظمة تبريد ذكية وتغذية طاقة متكررة.',
      en: 'Complete turnkey Tier-3 data center design and fiber optic networking backbone serving 40 multinational tenants with redundant precision cooling and dual power backup.',
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    impactMetrics: { ar: 'توافرية 99.999% وسرعة نقل 40Gbps', en: '99.999% uptime compliance with 40Gbps backhaul' },
    technologies: ['Cisco Enterprise', 'Schneider Electric', 'Fiber Optic 100G', 'VMware ESXi', 'SOC Monitoring'],
  },
  {
    id: 'proj-4',
    title: {
      ar: 'منظومة المراقبة الأمنية والتحكم بالدخول لمجمع النخيل الطبي',
      en: 'Integrated Smart Surveillance & Access System for Al Nakheel Medical Center',
    },
    category: 'security',
    categoryLabel: { ar: 'أمن ومراقبة ذكية', en: 'Security & CCTV' },
    status: 'completed',
    statusLabel: { ar: 'مكتمل بنجاح', en: 'Completed' },
    client: { ar: 'مجموعة النخيل للرعاية الصحية', en: 'Al Nakheel Healthcare Group' },
    location: { ar: 'الخبر', en: 'Al Khobar' },
    description: {
      ar: 'تركيب وتشغيل أكثر من 240 كاميرا ذكية بتقنية التحليل المرئي للوجوه والمركبات وربطها بغرفة تحكم مركزية متوافقة مع لوائح الأمن والسلامة بالمملكة.',
      en: 'Installation of 240+ AI-powered optical and thermal surveillance cameras, ANPR license plate recognition, and biometric staff access control.',
    },
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    impactMetrics: { ar: 'تغطية أمنية 100% بدون أي نقاط عمياء', en: '100% perimeter coverage with zero blind spots' },
    technologies: ['Hikvision AI IP', 'Access Control Systems', 'NAS 120TB Storage', 'UPS Redundant', 'NCA Shield'],
  },
  {
    id: 'proj-5',
    title: {
      ar: 'الحملة الرقمية الوطنية لمنتجات "طيبة" الاستهلاكية',
      en: 'National Digital Growth Campaign for Taybah Consumer Goods',
    },
    category: 'marketing',
    categoryLabel: { ar: 'تسويق رقمي ونمو', en: 'Digital Marketing' },
    status: 'completed',
    statusLabel: { ar: 'مكتمل بنجاح', en: 'Completed' },
    client: { ar: 'شركة مصانع طيبة للصناعات الغذائية', en: 'Taybah Food Industries' },
    location: { ar: 'المملكة العربية السعودية كاملة', en: 'All Saudi Regions' },
    description: {
      ar: 'إدارة حملة تسويقية شاملة عبر سناب شات وتيك توك وجوجل، مع إنتاج 25 فيديو إعلاني موشن جرافيك عالي الجودة وحملات إعادة استهداف ذكية.',
      en: 'Multi-channel acquisition sprint across TikTok, Snap, and Google Search with 25 motion graphics creatives and dynamic retargeting.',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    impactMetrics: { ar: '+4.8M ظهور و +320% زيادة في طلبات المتجر', en: '+4.8M impressions, +320% jump in direct e-commerce sales' },
    technologies: ['Snapchat Ads', 'TikTok For Business', 'Google Performance Max', 'Motion Graphics', 'Google Analytics 4'],
  },
  {
    id: 'proj-6',
    title: {
      ar: 'المساعد الذكي المؤتمت "رائد" لخدمة عملاء قطاع التأمين',
      en: '"Raed" Generative AI Agent for Insurance Policy Inquiries',
    },
    category: 'web',
    categoryLabel: { ar: 'ذكاء اصطناعي وأتمتة', en: 'AI & Automation' },
    status: 'in_progress',
    statusLabel: { ar: 'جاري التنفيذ', en: 'In Progress' },
    client: { ar: 'وساطة التأمين الأولى السعودية', en: 'First Saudi Insurance Brokerage' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    description: {
      ar: 'بناء بوت ذكاء اصطناعي باللغة العربية واللهجة السعودية يربط مع الواتساب وبوابات التأمين لإصدار عروض الأسعار والمطالبات خلال ثوانٍ معدودة.',
      en: 'Developing a localized Saudi Arabic conversational AI agent across WhatsApp and web portals issuing instant insurance quotes and claim tracking.',
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    impactMetrics: { ar: 'تقليص وقت إصدار الوثيقة من يوم كامل إلى 45 ثانية', en: 'Reduced policy issuance from 24h to 45 seconds' },
    technologies: ['Gemini 2.5 Pro', 'WhatsApp Cloud API', 'Python FastAPI', 'Redis', 'Docker'],
  },
];

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    name: { ar: 'م. فهد بن عبدالعزيز السديري', en: 'Eng. Fahad Al-Sudairi' },
    role: { ar: 'الرئيس التنفيذي للعمليات', en: 'Chief Operating Officer' },
    company: { ar: 'مجموعة الرواد القابضة - الرياض', en: 'Al-Rowad Holding Group - Riyadh' },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: {
      ar: 'منذ بدء تعاوننا مع شركة الفكر الرقمي (RT-KSA)، لمسنا احترافية استثنائية في إدارة وتطوير بنيتنا التحتية وتطبيقاتنا. التزامهم بالوقت ودقة التنفيذ جعلتهم شريكنا التقني الأول بلا تردد.',
      en: 'Working with Digital Thought (RT-KSA) has been a transformative experience for our infrastructure and digital platforms. Their punctuality, engineering excellence, and responsiveness are world-class.',
    },
    date: { ar: 'منذ أسبوعين', en: '2 weeks ago' },
    verified: true,
  },
  {
    id: 'rev-2',
    name: { ar: 'أ. سارة المنصور', en: 'Ms. Sarah Al-Mansour' },
    role: { ar: 'مديرة التسويق الرقمي والتجارة الإلكترونية', en: 'Head of E-Commerce & Growth' },
    company: { ar: 'براند أورا للمنتجات الفاخرة - جدة', en: 'Aura Luxury Retail - Jeddah' },
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: {
      ar: 'قام فريق الفكر الرقمي بإعادة تصميم متجرنا الإلكتروني وإطلاق حملات تسويقية أدت لمضاعفة مبيعاتنا الشهرية بأكثر من 300%. فريق متمكن ويفهم تفاصيل السوق السعودي وسلوك المستهلك.',
      en: 'The Digital Thought team redesigned our e-commerce platform and executed campaigns that tripled our monthly revenue by 300%. Highly skilled and deeply in tune with Saudi consumer behavior.',
    },
    date: { ar: 'منذ شهر', en: '1 month ago' },
    verified: true,
  },
  {
    id: 'rev-3',
    name: { ar: 'د. خالد بن ماجد الغامدي', en: 'Dr. Khalid Al-Ghamdi' },
    role: { ar: 'مدير تقنية المعلومات والتحول الرقمي', en: 'IT & Digital Transformation Director' },
    company: { ar: 'مستشفى ومركز المستقبل الطبي - الخبر', en: 'Future Medical Center - Al Khobar' },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: {
      ar: 'نفذوا مشروع تجهيز مركز البيانات وكاميرات المراقبة الأمنية وشبكات المستشفى بسرعة قياسية وبأعلى اشتراطات الأمن السيبراني والسلامة. الدعم الفني لديهم متواجد 24 ساعة بمستوى فائق.',
      en: 'They engineered our healthcare data center, security cameras, and network backbone with strict NCA cyber standards. Their 24/7 SLA support is remarkably dependable.',
    },
    date: { ar: 'منذ شهرين', en: '2 months ago' },
    verified: true,
  },
  {
    id: 'rev-4',
    name: { ar: 'م. طارق العصيمي', en: 'Eng. Tariq Al-Osaimi' },
    role: { ar: 'مؤسس وشريك تنفيذي', en: 'Founder & Managing Partner' },
    company: { ar: 'منصة درب للتطبيقات الذكية', en: 'Darb Smart Mobility' },
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: {
      ar: 'طوروا تطبيقنا على الآيفون والأندرويد مع ربط النفاذ الوطني ومدى. الواجهات مريحة جداً وسرعة التطبيق ممتازة. الاستشارة المجانية التي قدموها في البداية وفرت علينا الكثير من التكاليف.',
      en: 'Built our native mobile app with Nafath and Mada integrations. Extremely smooth UX and robust architecture. The initial free consultation saved us thousands in unnecessary architecture costs.',
    },
    date: { ar: 'منذ 3 أشهر', en: '3 months ago' },
    verified: true,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    title: { ar: 'باقة الانطلاق السريع', en: 'Launchpad Starter' },
    tagline: { ar: 'مثالية للمؤسسات والشركات الناشئة التي تبدأ حضورها الرقمي', en: 'Ideal for startups & expanding businesses launching their online footprint' },
    priceSAR: 4900,
    period: { ar: 'مشروع لمرة واحدة', en: 'One-time project' },
    features: {
      ar: [
        'موقع تعريفي احترافي فائق السرعة متوافق مع الجوال',
        'لوحة تحكم سهلة لإدارة وتعديل المحتوى',
        'تصميم واجهات وتجربة مستخدم مخصصة',
        'تأمين شهادة SSL واستضافة سحابية لمدة سنة',
        'ربط أدوات التحليل وخرائط جوجل والواتساب',
        'دعم فني وضمان مجاني لمدة 3 أشهر',
      ],
      en: [
        'High-speed responsive corporate showcase website',
        'Intuitive content management dashboard',
        'Custom modern UI/UX crafted to your brand',
        '1-year cloud hosting & SSL certificate included',
        'Google Maps, Analytics & WhatsApp chat integration',
        '3 months warranty and technical support',
      ],
    },
    suitableFor: { ar: 'المكاتب والشركات الناشئة والخدمية', en: 'Service firms, clinics, agencies & new ventures' },
  },
  {
    id: 'business-pro',
    title: { ar: 'باقة الأعمال المتقدمة', en: 'Business Pro Enterprise' },
    tagline: { ar: 'الحل الأكثر طلباً للشركات والمتاجر التي تبحث عن أقصى أداء ونمو', en: 'Our most popular tier for high-growth enterprises and e-commerce' },
    priceSAR: 11500,
    period: { ar: 'مشروع متكامل', en: 'Complete Solution' },
    popular: true,
    features: {
      ar: [
        'منصة ويب متطورة أو متجر إلكتروني شامل',
        'ربط بوابات الدفع السعودية (مدى، أبل باي، تمارا، تابي)',
        'تكامل مع الفوترة الإلكترونية المعتمدة (هيئة الزكاة ZATCA)',
        'تهيئة متقدمة لمحركات البحث (SEO) للظهور الأول في جوجل',
        'حملة إعلانية ممولة لإطلاق المشروع مع تصاميم موشن',
        'نظام أمني متكامل ونسخ احتياطي يومي مشفر',
        'دعم فني VIP وأولوية قصوى لمدة 6 أشهر',
      ],
      en: [
        'Advanced custom web portal or full-scale e-commerce store',
        'Saudi Payment Gateways (Mada, Apple Pay, Tabby, Tamara)',
        'ZATCA Phase 2 E-Invoicing Compliant Integration',
        'Comprehensive Technical SEO for #1 Google rankings',
        'Launch paid marketing campaign setup + motion graphics video',
        'High-security perimeter & automated encrypted daily backups',
        'VIP Priority SLA support for 6 months',
      ],
    },
    suitableFor: { ar: 'الشركات المتوسطة والمتاجر الرقمية', en: 'Growing brands, e-commerce stores & mid-market companies' },
  },
  {
    id: 'custom-enterprise',
    title: { ar: 'البنية الشاملة والمشاريع الكبرى', en: 'Custom Enterprise & Infra' },
    tagline: { ar: 'تصميم حلول مخصصة للشركات الكبرى والجهات الحكومية والمنصات الضخمة', en: 'Tailored architecture for large enterprises, governmental entities & apps' },
    priceSAR: 24000,
    period: { ar: 'حل مخصص بحسب النطاق', en: 'Custom scope contract' },
    features: {
      ar: [
        'تطبيقات هواتف ذكية متكاملة (iOS + Android) أو منصة SaaS',
        'تأسيس بنية سحابية ومراكز بيانات مخصصة وشبكات آمنة',
        'حلول ذكاء اصطناعي وأتمتة مسارات العمل والمساعدات الذكية',
        'امتثال كامل لضوابط الهيئة الوطنية للأمن السيبراني (NCA)',
        'ربط الأنظمة الداخلية وأنظمة الـ ERP والـ CRM عبر API',
        'مدير حساب تقني مخصص وعقد صيانة وتشغيل سنوي معتمد',
      ],
      en: [
        'Full iOS & Android Mobile Apps suite or custom SaaS platform',
        'Dedicated cloud architecture, data center setup & secure LAN/WAN',
        'Custom Generative AI agents & enterprise workflow automation',
        'Full compliance with National Cybersecurity Authority (NCA)',
        'Custom ERP/CRM/SAP integrations via high-throughput APIs',
        'Dedicated Senior Technical Account Manager & SLA contract',
      ],
    },
    suitableFor: { ar: 'المجموعات القابضة، المنصات الكبرى والمستشفيات', en: 'Conglomerates, large apps, logistics & healthcare facilities' },
  },
];

export const jobOpenings: JobOpening[] = [
  {
    id: 'job-1',
    title: { ar: 'مطور واجهات أمامية ومواقع أول (Senior Frontend React/Next.js)', en: 'Senior Frontend Developer (React / Next.js)' },
    department: { ar: 'إدارة التطوير والبرمجيات', en: 'Software Engineering' },
    type: { ar: 'دوام كامل (هجين / الرياض أو عن بعد)', en: 'Full-time (Hybrid Riyadh / Remote)' },
    location: { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Saudi Arabia' },
    experience: { ar: '+4 سنوات', en: '+4 Years' },
    requirements: {
      ar: ['إتقان عميق لـ React, TypeScript, Next.js, Tailwind CSS', 'خبرة في تحسين الأداء و SEO وسرعة التحميل', 'فهم واجهات المستخدم التفاعلية والـ Animation'],
      en: ['Mastery of React, TypeScript, Next.js, Tailwind CSS', 'Experience in web performance, core web vitals, and SEO', 'Fluency in responsive micro-interactions and animations'],
    },
  },
  {
    id: 'job-2',
    title: { ar: 'مطور تطبيقات هواتف ذكية (Flutter / Mobile Lead)', en: 'Mobile App Developer (Flutter Lead)' },
    department: { ar: 'إدارة تطبيقات الجوال', en: 'Mobile Development' },
    type: { ar: 'دوام كامل', en: 'Full-time' },
    location: { ar: 'الرياض أو جدة', en: 'Riyadh or Jeddah' },
    experience: { ar: '+3 سنوات', en: '+3 Years' },
    requirements: {
      ar: ['خبرة قوية في بناء وتصدير تطبيقات Flutter على App Store و Google Play', 'ربط خرائط جوجل وبوابات الدفع السعودية (مدى / أبل باي)', 'إدارة الحالة باستخدام Bloc / Riverpod'],
      en: ['Proven track record shipping Flutter apps to App Store & Google Play', 'Integration with Saudi payment gateways & Google Maps SDK', 'State management proficiency (Bloc / Riverpod)'],
    },
  },
  {
    id: 'job-3',
    title: { ar: 'مهندس شبكات وبنية تحتية وأمن سيبراني', en: 'Network, Infrastructure & Cyber Security Engineer' },
    department: { ar: 'إدارة البنية التحتية والشبكات', en: 'Infrastructure & Cybersecurity' },
    type: { ar: 'دوام كامل (ميداني ومكتبي)', en: 'Full-time (On-site Riyadh)' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    experience: { ar: '+3 سنوات', en: '+3 Years' },
    requirements: {
      ar: ['شهادات معتمدة (CCNA/CCNP, Fortinet, CompTIA Security+)', 'خبرة في تركيب وصيانة كاميرات المراقبة وغرف الخوادم وشبكات الألياف', 'معرفة باشتراطات الهيئة الوطنية للأمن السيبراني NCA'],
      en: ['Certifications like CCNA/CCNP, Fortinet NSE, or Security+', 'Hands-on server room, fiber cabling & smart CCTV deployment', 'Knowledge of NCA cybersecurity compliance frameworks'],
    },
  },
  {
    id: 'job-4',
    title: { ar: 'أخصائي تسويق رقمي ومدير حملات إعلانية (Performance Marketer)', en: 'Digital Performance Marketing Specialist' },
    department: { ar: 'إدارة التسويق الرقمي والنمو', en: 'Digital Marketing & Growth' },
    type: { ar: 'دوام كامل', en: 'Full-time' },
    location: { ar: 'الرياض أو عن بعد', en: 'Riyadh / Remote' },
    experience: { ar: '+2 سنوات', en: '+2 Years' },
    requirements: {
      ar: ['إدارة حملات بميزانيات كبيرة على سناب شات وتيك توك وجوجل', 'تحليل البيانات وقياس تكلفة الاكتساب (CAC) والعائد على الإنفاق (ROAS)', 'كتابة نصوص إعلانية جذابة تتماشى مع الجمهور السعودي'],
      en: ['Experience managing performance budgets on Snap, TikTok, Google', 'Strong data analytics, CAC optimization and ROAS tracking', 'Arabic copywriting tuned for high Saudi engagement'],
    },
  },
];
