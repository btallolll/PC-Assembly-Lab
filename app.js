const LESSONS_DATA = [
  {
    id: 1,
    title: "1. مزود الطاقة (Power Supply)",
    modelFile: "PowerSupply.swf",
    stageThumbs: ["powerSupply.png", "driveScrews.png"],
    stageImages: ["powerSupply.png", "cardScrews.png", "driveScrews.png"],
    parts: [
      { id: "iPowerSupply", name: "مزود الطاقة (Power Supply)", thumb: "PC/media/thumbs/powerSupply.png", img: "PC/media/images/powerSupply.png", explore: "PC/media/explore/explorePowerSupply.swf", viewsStem: "explorePowerSupply", viewCount: 6, targetAngle: 180, pinHint: "مروحة التبريد للخارج وحزمة الكابلات باتجاه اللوحة الأم (180°)", role: "يحول التيار المتردد AC إلى تيار مستمر DC منظم (+3.3V, +5V, +12V) لتغذية جميع مكونات الحاسوب." },
      { id: "iPowerSupplyScrews", name: "براغي مزود الطاقة", thumb: "PC/media/thumbs/driveScrews.png", img: "PC/media/images/cardScrews.png", explore: "PC/media/explore/explorePowerSupply.swf", viewsStem: "explorePowerSupply", viewCount: 6, targetAngle: 0, pinHint: "تثبيت 4 براغي في الزوايا الخلفية لمزود الطاقة", role: "أربعة براغي لتثبيت مزود الطاقة بإحكام في الجدار الخلفي للصندوق." }
    ]
  },
  {
    id: 2,
    title: "2. اللوحة الأم (Motherboard)",
    modelFile: "Motherboard.swf",
    stageThumbs: ["ram.png", "cpu.png", "thermalGlue.png", "heatsink.png", "mbscrews.png", "motherboard.png"],
    stageImages: ["ram.png", "cpu.png", "thermalGlue.png", "heatsink.png", "cardScrews.png", "mbscrews.png", "motherboard.png"],
    parts: [
      { id: "iCPU", name: "المعالج المركزي (CPU)", thumb: "PC/media/thumbs/cpu.png", img: "PC/media/images/cpu.png", explore: "PC/media/explore/exploreCPU.swf", viewsStem: "exploreCPU", viewCount: 2, targetAngle: 90, pinHint: "طابق المثلث الذهبي (Pin 1) في زاوية المعالج مع زاوية المقبس (90°)", role: "وحدة المعالجة المركزية (المعالج) — يوضع برفق بدون ضغط بعد مطابقة علامة الدبوس الأول Pin 1." },
      { id: "iThermalGlue", name: "المعجون الحراري", thumb: "PC/media/thumbs/thermalGlue.png", img: "PC/media/images/thermalGlue.png", explore: "PC/media/explore/exploreThermalPaste.swf", viewsStem: "exploreThermalPaste", viewCount: 1, targetAngle: 0, pinHint: "يوضع مباشرة وسط ظهر المعالج المعدني", role: "يملأ الفراغات المجهرية بين سطح المعالج والمشتت الحراري لمنع ارتفاع حرارة المعالج." },
      { id: "iHeatsink", name: "المشتت الحراري والمروحة", thumb: "PC/media/thumbs/heatsink.png", img: "PC/media/images/heatsink.png", explore: "PC/media/explore/exploreHeatSink.swf", viewsStem: "exploreHeatSink", viewCount: 2, targetAngle: 0, pinHint: "حاذِ الأرجل الأربعة مع الثقوب المحيطة بمقبس المعالج ووصّل سلك المروحة", role: "وحدة التبريد النشطة (مشتت ألمنيوم + مروحة) لتشتيت حرارة المعالج." },
      { id: "iRAM1", name: "ذاكرة عشوائية (RAM 1)", thumb: "PC/media/thumbs/ram.png", img: "PC/media/images/ram.png", explore: "PC/media/explore/exploreRam.swf", viewsStem: "exploreRam", viewCount: 2, targetAngle: 180, pinHint: "قم بتدوير الشريحة (180°) حتى يتطابق الشق السفلي مع الفاصل في منفذ DIMM 1", role: "الشريحة الأولى للذاكرة العشوائية — تحتوي على شق سفلي يمنع تركيبها بالاتجاه الخاطئ." },
      { id: "iRAM2", name: "ذاكرة عشوائية (RAM 2)", thumb: "PC/media/thumbs/ram.png", img: "PC/media/images/ram.png", explore: "PC/media/explore/exploreRam.swf", viewsStem: "exploreRam", viewCount: 2, targetAngle: 180, pinHint: "قم بتدوير الشريحة (180°) لمطابقة الشق السفلي في منفذ DIMM 2", role: "الشريحة الثانية للذاكرة العشوائية لتفعيل خاصية القناة المزدوجة (Dual-Channel)." },
      { id: "iMotherboard", name: "تركيب اللوحة الأم بالصندوق", thumb: "PC/media/thumbs/motherboard.png", img: "PC/media/images/motherboard.png", explore: "PC/media/explore/exploreMotherboard.swf", viewsStem: "exploreMotherboard", viewCount: 3, targetAngle: 90, pinHint: "وجّه منافذ اللوحة الخلفية (I/O Ports) باتجاه الفتحة الخلفية للصندوق (90°)", role: "لوحة الدوائر المطبوعة الرئيسية التي تربط المعالج والذاكرة والبطاقات والأقراص معاً." },
      { id: "iMoboScrews", name: "براغي اللوحة الأم", thumb: "PC/media/thumbs/mbscrews.png", img: "PC/media/images/mbscrews.png", explore: "PC/media/explore/exploreMotherboard.swf", viewsStem: "exploreMotherboard", viewCount: 3, targetAngle: 0, pinHint: "شد البراغي في الفواصل النحاسية لتأمين اللوحة الأم", role: "تثبت اللوحة الأم فوق الفواصل المعدنية وتمنع حدوث التماس مع هيكل الصندوق." }
    ]
  },
  {
    id: 3,
    title: "3. بطاقات التوسعة (Adapter Cards)",
    modelFile: "ExpansionCards.swf",
    stageThumbs: ["nicCard.png", "cardScrews.png", "wirelessCard.png", "videoCard.png", "screws.png"],
    stageImages: ["nicCard.png", "cardScrews.png", "wirelessCard.png", "videoCard.png"],
    parts: [
      { id: "iNic", name: "بطاقة الشبكة (NIC)", thumb: "PC/media/thumbs/nicCard.png", img: "PC/media/images/nicCard.png", explore: "PC/media/explore/exploreNicCard.swf", viewsStem: "exploreNicCard", viewCount: 3, targetAngle: 0, pinHint: "تركب في منفذ PCIe x1 مع توجيه منفذ RJ-45 للخلف", role: "بطاقة واجهة الشبكة السلكية لتوصيل الحاسوب بالشبكة المحلية عبر كابل RJ-45." },
      { id: "iNicScrews", name: "برغي بطاقة الشبكة", thumb: "PC/media/thumbs/screws.png", img: "PC/media/images/cardScrews.png", explore: "PC/media/explore/exploreNicCard.swf", viewsStem: "exploreNicCard", viewCount: 3, targetAngle: 0, pinHint: "يثبت اللسان المعدني لبطاقة الشبكة في الصندوق", role: "يؤمّن بطاقة الشبكة حتى لا تتحرك عند توصيل أو فصل كابل الشبكة." },
      { id: "iWireless", name: "بطاقة الشبكة اللاسلكية", thumb: "PC/media/thumbs/wirelessCard.png", img: "PC/media/images/wirelessCard.png", explore: "PC/media/explore/exploreWirelessCard.swf", viewsStem: "exploreWirelessCard", viewCount: 3, targetAngle: 0, pinHint: "تركب في شق PCI الأبيض على اللوحة الأم", role: "بطاقة اتصال لاسلكي Wi-Fi تُركّب في شق PCI على اللوحة الأم." },
      { id: "iWirelessScrews", name: "برغي البطاقة اللاسلكية", thumb: "PC/media/thumbs/screws.png", img: "PC/media/images/cardScrews.png", explore: "PC/media/explore/exploreWirelessCard.swf", viewsStem: "exploreWirelessCard", viewCount: 3, targetAngle: 0, pinHint: "تثبيت حامل البطاقة اللاسلكية بالصندوق", role: "يثبت بطاقة الشبكة اللاسلكية في هيكل الصندوق." },
      { id: "iVideoCard", name: "بطاقة الشاشة (Video Adapter)", thumb: "PC/media/thumbs/videoCard.png", img: "PC/media/images/videoCard.png", explore: "PC/media/explore/exploreVideoCard.swf", viewsStem: "exploreVideoCard", viewCount: 3, targetAngle: 0, pinHint: "تركب في شق PCIe x16 المخصص للرسوميات", role: "بطاقة العرض الرسومية وتُركّب في منفذ PCIe x16 لإخراج الصورة إلى الشاشة." },
      { id: "iVideoScrews", name: "برغي بطاقة الشاشة", thumb: "PC/media/thumbs/screws.png", img: "PC/media/images/cardScrews.png", explore: "PC/media/explore/exploreVideoCard.swf", viewsStem: "exploreVideoCard", viewCount: 3, targetAngle: 0, pinHint: "تثبيت حامل بطاقة الشاشة بالصندوق", role: "تثبيت بطاقة الشاشة بإحكام في الصندوق." }
    ]
  },
  {
    id: 4,
    title: "4. الأقراص الداخلية (Internal Drives)",
    modelFile: "InternalDrive.swf",
    stageThumbs: ["hardDrive.png", "driveScrews.png"],
    stageImages: ["hardDrive.png", "cardScrews.png", "driveScrews.png"],
    parts: [
      { id: "iHD", name: "القرص الصلب (HDD)", thumb: "PC/media/thumbs/hardDrive.png", img: "PC/media/images/hardDrive.png", explore: "PC/media/explore/exploreHarddrive.swf", viewsStem: "exploreHarddrive", viewCount: 4, targetAngle: 90, pinHint: "تدوير 90° بحيث تتجه منافذ SATA نحو اللوحة الأم", role: "محرك الأقراص الصلبة المغناطيسي مقاس 3.5 بوصة لتخزين نظام التشغيل والملفات." },
      { id: "iHDScrews", name: "براغي القرص الصلب", thumb: "PC/media/thumbs/driveScrews.png", img: "PC/media/images/driveScrews.png", explore: "PC/media/explore/exploreHarddrive.swf", viewsStem: "exploreHarddrive", viewCount: 4, targetAngle: 0, pinHint: "تثبيت القرص الصلب في قفص الأقراص الداخلي", role: "تثبت القرص الصلب وتمنع اهتزازه أثناء دوران الأقراص الداخلية." }
    ]
  },
  {
    id: 5,
    title: "5. محركات الفتحات الخارجية (External Bays)",
    modelFile: "ExternalDrives.swf",
    stageThumbs: ["dvdDrive.png", "floppyDrive.png", "driveScrews.png"],
    stageImages: ["dvdDrive.png", "floppyDrive.png", "cardScrews.png", "driveScrews.png"],
    parts: [
      { id: "iDvdDrive", name: "محرك الأقراص الضوئية (DVD)", thumb: "PC/media/thumbs/dvdDrive.png", img: "PC/media/images/dvdDrive.png", explore: "PC/media/explore/exploreDVD.swf", viewsStem: "exploreDVD", viewCount: 6, targetAngle: 0, pinHint: "يُدخل من الواجهة الأمامية في الحجرة العلوية مقاس 5.25 بوصة", role: "محرك أقراص ضوئية مقاس 5.25 بوصة لقراءة وكتابة الأقراص المدمجة وأقراص DVD." },
      { id: "iDvdScrews", name: "براغي محرك DVD", thumb: "PC/media/thumbs/driveScrews.png", img: "PC/media/images/cardScrews.png", explore: "PC/media/explore/exploreDVD.swf", viewsStem: "exploreDVD", viewCount: 6, targetAngle: 0, pinHint: "تثبيت محرك DVD في الحجرة العلوية", role: "تثبيت محرك الأقراص الضوئية في الصندوق." },
      { id: "iFloppyDrive", name: "محرك الأقراص المرنة (FDD)", thumb: "PC/media/thumbs/floppyDrive.png", img: "PC/media/images/floppyDrive.png", explore: "PC/media/explore/exploreFloppy.swf", viewsStem: "exploreFloppy", viewCount: 6, targetAngle: 0, pinHint: "يُدخل من الواجهة الأمامية في الحجرة الخارجية مقاس 3.5 بوصة", role: "محرك الأقراص المرنة مقاس 3.5 بوصة ويُركّب من الواجهة الأمامية للصندوق." },
      { id: "iFloppyScrews", name: "براغي محرك الأقراص المرنة", thumb: "PC/media/thumbs/driveScrews.png", img: "PC/media/images/cardScrews.png", explore: "PC/media/explore/exploreFloppy.swf", viewsStem: "exploreFloppy", viewCount: 6, targetAngle: 0, pinHint: "تثبيت محرك الأقراص المرنة بالبراغي", role: "تثبيت محرك الأقراص المرنة في الصندوق." }
    ]
  },
  {
    id: 6,
    title: "6. الكابلات الداخلية (Internal Cables)",
    modelFile: "InternalCables.swf",
    stageThumbs: ["pata1.png", "pata2.png", "sata.png"],
    stageImages: ["pata1.png", "pata2.png", "sata.png"],
    parts: [
      { id: "iPata1", name: "كابل بيانات PATA (IDE)", thumb: "PC/media/thumbs/pata1.png", img: "PC/media/images/pata1.png", explore: "PC/media/explore/exploreParallelDVD.swf", viewsStem: "exploreParallelDVD", viewCount: 3, targetAngle: 90, pinHint: "طابق الخط الملون على حافة الكابل مع الدبوس الأول Pin 1 والنتوء العلوي (90°)", role: "كابل شريطي 40 دبوساً يربط منفذ IDE في اللوحة الأم بمحرك الأقراص الضوئية DVD." },
      { id: "iPata2", name: "كابل بيانات Floppy", thumb: "PC/media/thumbs/pata2.png", img: "PC/media/images/pata2.png", explore: "PC/media/explore/exploreParallelFLOPPY.swf", viewsStem: "exploreParallelFLOPPY", viewCount: 2, targetAngle: 90, pinHint: "الطرف ذو الضفيرة المعكوسة يركب في محرك الأقراص المرنة مع محاذاة Pin 1 (90°)", role: "كابل شريطي 34 دبوساً يربط اللوحة الأم بمحرك الأقراص المرنة." },
      { id: "iSata", name: "كابلات SATA والطاقة الداخلية", thumb: "PC/media/thumbs/sata.png", img: "PC/media/images/sata.png", explore: "PC/media/explore/exploreSATA.swf", viewsStem: "exploreSATA", viewCount: 3, targetAngle: 180, pinHint: "طابق المدخل على شكل حرف L (زاوية 180°) في منفذ SATA باللوحة الأم والقرص الصلب", role: "كابل بيانات SATA السريع بمدخل على شكل حرف L مع توصيلات الطاقة الداخلية (ATX 20-pin, 4-pin, SATA, Molex, Berg)." }
    ]
  },
  {
    id: 7,
    title: "7. الأغطية والكابلات الخارجية (External Cables)",
    modelFile: "ExternalCables.swf",
    stageThumbs: ["panels.png", "caseScrews.png", "periMonitor.png", "periKeyboard.png", "periMouse.png", "periUSB.png", "periEthernet.png", "wirelessAntenna.png", "peripheralPower.png"],
    stageImages: ["panels.png", "cardScrews.png", "caseScrews.png", "periMonitor.png", "peripheralMonitor.png", "periKeyboard.png", "peripheralKeyboard.png", "periMouse.png", "peripheralMouse.png", "periUSB.png", "peripheralUSB.png", "periEthernet.png", "peripheralEthernet.png", "wirelessAntenna.png", "peripheralPower.png", "peripheralPower2.png"],
    parts: [
      { id: "iCasePanels", name: "أغطية الصندوق الجانبية", thumb: "PC/media/thumbs/panels.png", img: "PC/media/images/panels.png", explore: "PC/media/explore/explorePowerSupply.swf", viewsStem: "explorePowerSupply", viewCount: 6, targetAngle: 0, pinHint: "تُزلق الأغطية الجانبية لإغلاق الصندوق قبل توصيل الكابلات الخارجية", role: "تغلق هيكل الحاسوب لحماية القطع الداخلية وتوجيه مسار تدفق هواء التبريد." },
      { id: "iPanelScrews", name: "براغي غطاء الصندوق", thumb: "PC/media/thumbs/caseScrews.png", img: "PC/media/images/caseScrews.png", explore: "PC/media/explore/explorePowerSupply.swf", viewsStem: "explorePowerSupply", viewCount: 6, targetAngle: 0, pinHint: "ربط براغي الغطاء الخلفية", role: "تثبت الأغطية الجانبية في الجزء الخلفي من الصندوق." },
      { id: "iMonitor", name: "كابل الشاشة (Monitor)", thumb: "PC/media/thumbs/periMonitor.png", img: "PC/media/images/peripheralMonitor.png", explore: "PC/media/explore/explorePeriMonitor.swf", viewsStem: "explorePeriMonitor", viewCount: 0, targetAngle: 180, pinHint: "تدوير 180° لمطابقة الدبوس العريض الأفقي في منفذ DVI ببطاقة الشاشة", role: "كابل فيديو رقمي DVI ينقل الصورة من بطاقة الشاشة إلى شاشة العرض." },
      { id: "iKeyboard", name: "كابل لوحة المفاتيح (PS/2)", thumb: "PC/media/thumbs/periKeyboard.png", img: "PC/media/images/peripheralKeyboard.png", explore: "PC/media/explore/explorePeriKeyboard.swf", viewsStem: "explorePeriKeyboard", viewCount: 1, targetAngle: 90, pinHint: "تدوير 90° لمطابقة اللسان البلاستيكي داخل المنفذ البنفسجي", role: "موصل PS/2 البنفسجي ذو 6 دبابيس المخصص للوحة المفاتيح." },
      { id: "iMouse", name: "كابل الفأرة (PS/2)", thumb: "PC/media/thumbs/periMouse.png", img: "PC/media/images/peripheralMouse.png", explore: "PC/media/explore/explorePeriMouse.swf", viewsStem: "explorePeriMouse", viewCount: 2, targetAngle: 90, pinHint: "تدوير 90° لمطابقة اللسان الموجه داخل المنفذ الأخضر", role: "موصل PS/2 الأخضر ذو 6 دبابيس المخصص للفأرة." },
      { id: "iUSB", name: "كابل USB", thumb: "PC/media/thumbs/periUSB.png", img: "PC/media/images/peripheralUSB.png", explore: "PC/media/explore/explorePeriUSB.swf", viewsStem: "explorePeriUSB", viewCount: 1, targetAngle: 0, pinHint: "توصيل مباشر في منفذ USB الخلفي", role: "كابل الناقل التسلسلي العام USB لتوصيل الأجهزة الطرفية." },
      { id: "iEthernet", name: "كابل الشبكة (Ethernet)", thumb: "PC/media/thumbs/periEthernet.png", img: "PC/media/images/peripheralEthernet.png", explore: "PC/media/explore/explorePeriEthernet.swf", viewsStem: "explorePeriEthernet", viewCount: 2, targetAngle: 0, pinHint: "إدخال موصل RJ-45 في منفذ بطاقة الشبكة حتى سماع صوت القفل", role: "كابل شبكة RJ-45 للاتصال السلكي بالشبكة المحلية." },
      { id: "iAntenna", name: "هوائي الشبكة اللاسلكية", thumb: "PC/media/thumbs/wirelessAntenna.png", img: "PC/media/images/wirelessAntenna.png", explore: "PC/media/explore/exploreWirelessCard.swf", viewsStem: "exploreWirelessCard", viewCount: 3, targetAngle: 0, pinHint: "ربط الهوائي في الموصل الذهبي لبطاقة الشبكة اللاسلكية", role: "هوائي الاستقبال والإرسال الخاص ببطاقة الشبكة اللاسلكية Wi-Fi." },
      { id: "iPowerCord", name: "كابل الطاقة الرئيسي", thumb: "PC/media/thumbs/peripheralPower.png", img: "PC/media/images/peripheralPower2.png", explore: "PC/media/explore/explorePeriPOWER.swf", viewsStem: "explorePeriPOWER", viewCount: 1, targetAngle: 180, pinHint: "يُوصّل أخيراً! قم بتدويره 180° ليتطابق الشكل الثلاثي مع مدخل مزود الطاقة", role: "كابل الطاقة الكهربائية الرئيسي — يُوصّل دائماً في الخطوة الأخيرة بعد إغلاق الصندوق للأمان." }
    ]
  }
];

const MODEL_TO_LESSON_ID = {
  "powersupply.swf": 1,
  "motherboard.swf": 2,
  "expansioncards.swf": 3,
  "internaldrive.swf": 4,
  "externaldrives.swf": 5,
  "internalcables.swf": 6,
  "externalcables.swf": 7
};

// صورة شفافة 1×1 بكسل (68 بايت) تُستخدم بدل تحميل مصغرات المراحل غير النشطة لتوفير الذاكرة والشبكة
const TRANSPARENT_1X1_PNG = new Uint8Array([
  0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
  0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52,
  0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
  0x08, 0x06, 0x00, 0x00, 0x00, 0x1F, 0x15, 0xC4,
  0x89, 0x00, 0x00, 0x00, 0x0A, 0x49, 0x44, 0x41,
  0x54, 0x78, 0x9C, 0x63, 0x00, 0x01, 0x00, 0x00,
  0x05, 0x00, 0x01, 0x0D, 0x0A, 0x2D, 0xB4, 0x00,
  0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE,
  0x42, 0x60, 0x82
]);

let state = {
  currentScreen: "home", // 'home' | 'app'
  activeView: "original",
  currentLesson: (() => {
    const lesson = Number(new URLSearchParams(window.location.search).get("lesson"));
    return Number.isInteger(lesson) && lesson >= 1 && lesson <= 7 ? lesson : 1;
  })(),
  simMode: 0,
  isLightweight: (() => {
    const saved = localStorage.getItem("simulator-lightweight");
    if (saved !== null) return saved === "1";
    return window.matchMedia("(pointer: coarse)").matches;
  })(),
  modalPartId: null,
  modalViewerMode: "html360",
  turntableAngleY: -20,
  turntableAngleX: 12,
  turntableZoom: 1,
  turntableSpinTimer: null
};

let currentRufflePlayer = null;
let currentModalPlayer = null;
let ruffleLoading = null;
let simulatorLoadId = 0;
let lastFailedAction = null;
let lastDiagnosticData = null;

// ==========================================
// إدارة موارد المراحل والذاكرة والشبكة (STAGE RESOURCE & MEMORY MANAGER)
// ==========================================
let activeInstanceLoadedModel = null; // اسم ملف SWF للمرحلة المحمّلة حالياً داخل نسخة Ruffle النشطة
let stageAbortController = null;      // لإلغاء أي طلبات معلقة للمرحلة السابقة فوراً عند الانتقال
let isTransitioningStage = false;     // قفل لمنع تداخل الانتقالات أو تشغيل أكثر من محاكاة في نفس الوقت
let prefetchedStageSwf = null;        // مخزن مؤقت لملف المرحلة التي تم التحقق منها قبل الانتقال (يُفرغ فور القراءة)

// ذاكرة تخزين مؤقت للملفات الأساسية الصغيرة فقط (RootMovie.swf و essentials.xml) لمنع إعادة تنزيلها
const coreShellCache = new Map();
// ذاكرة تخزين مؤقت لصور المرحلة الحالية فقط — يتم تفريغها بالكامل عند الانتقال للمرحلة التالية
const activeStageAssetCache = new Map();
// منع تكرار الطلبات المتزامنة لنفس الملف (In-flight request deduplication)
const inFlightRequests = new Map();

function getMemorySnapshotMB() {
  const mem = window.performance && window.performance.memory;
  if (!mem) return { usedJSHeapMB: null, totalJSHeapMB: null, limitJSHeapMB: null };
  return {
    usedJSHeapMB: Number((mem.usedJSHeapSize / (1024 * 1024)).toFixed(2)),
    totalJSHeapMB: Number((mem.totalJSHeapSize / (1024 * 1024)).toFixed(2)),
    limitJSHeapMB: Number((mem.jsHeapSizeLimit / (1024 * 1024)).toFixed(2))
  };
}

window.__simTelemetry = {
  currentLesson: state.currentLesson,
  activeModel: null,
  activePlayerCount: 0,
  stageLoads: [],
  stageAssetsLoaded: {},
  skippedOffstageThumbs: 0,
  deduplicatedHits: 0,
  errorsIntercepted: [],
  getMemorySnapshotMB
};

function recordStageAsset(category, assetName, bytes) {
  const key = `lesson_${state.currentLesson}`;
  if (!window.__simTelemetry.stageAssetsLoaded[key]) {
    window.__simTelemetry.stageAssetsLoaded[key] = { models: [], thumbs: [], images: [], explore: [] };
  }
  const bucket = window.__simTelemetry.stageAssetsLoaded[key][category];
  if (bucket && !bucket.includes(assetName)) {
    bucket.push(assetName);
  }
}

function getAllowedThumbsForLesson(lessonId) {
  const lessonObj = LESSONS_DATA.find(l => l.id === Number(lessonId));
  return new Set((lessonObj && lessonObj.stageThumbs) ? lessonObj.stageThumbs.map(s => s.toLowerCase()) : []);
}

function resolveModelFetchPath(modelFileName) {
  const trial = new URLSearchParams(window.location.search).get("trial");
  if (trial === "pc") {
    return `PC/models/${modelFileName}`;
  }
  if (modelFileName.toLowerCase() === "exploremode.swf") {
    return `PC/models/${modelFileName}`;
  }
  // استخدام نسخ المراحل المحسّنة للجوال والذاكرة (تقلل استهلاك RGBA بنسبة 75% دون تغيير الشكل)
  return `mobile-test-v3/models/${modelFileName}`;
}

const nativeFetch = window.fetch.bind(window);

function createCachedResponse(buffer, status, contentType, resolvedUrl) {
  const resp = new Response(buffer.slice(0), {
    status: status || 200,
    headers: { "Content-Type": contentType || "application/octet-stream" }
  });
  if (resolvedUrl) {
    try {
      Object.defineProperty(resp, "url", { value: resolvedUrl, configurable: true });
    } catch (e) {}
  }
  return resp;
}

async function fetchWithDeduplication(url, options = {}, cacheMap = null, originalFullUrl = null) {
  const cacheKey = url.split("?")[0];
  const resolvedUrl = originalFullUrl || new URL(url, window.location.href).href;
  if (cacheMap && cacheMap.has(cacheKey)) {
    window.__simTelemetry.deduplicatedHits++;
    const entry = cacheMap.get(cacheKey);
    return createCachedResponse(entry.buffer, 200, entry.contentType, resolvedUrl);
  }

  if (inFlightRequests.has(cacheKey)) {
    window.__simTelemetry.deduplicatedHits++;
    const shared = await inFlightRequests.get(cacheKey);
    return createCachedResponse(shared.buffer, shared.status, shared.contentType, resolvedUrl);
  }

  const fetchPromise = (async () => {
    const resp = await nativeFetch(url, options);
    if (!resp.ok) {
      const err = new Error(`HTTP ${resp.status} for ${url}`);
      err.status = resp.status;
      err.url = url;
      throw err;
    }
    const contentType = resp.headers.get("Content-Type") || "application/octet-stream";
    const buffer = await resp.arrayBuffer();
    if (cacheMap) {
      cacheMap.set(cacheKey, { buffer, contentType });
    }
    return { buffer, status: resp.status, contentType };
  })();

  inFlightRequests.set(cacheKey, fetchPromise);
  try {
    const result = await fetchPromise;
    return createCachedResponse(result.buffer, result.status, result.contentType, resolvedUrl);
  } finally {
    inFlightRequests.delete(cacheKey);
  }
}

// اعتراض ذكي لطلبات الشبكة من Ruffle لمنع التحميل الدفعي، وتحرير الذاكرة بين المراحل، ومنع الانهيار
window.fetch = async function interceptedSimulatorFetch(input, init) {
  const rawUrl = typeof input === "string" ? input : (input && input.url) ? input.url : String(input);
  let parsed;
  try {
    parsed = new URL(rawUrl, window.location.href);
  } catch (e) {
    return nativeFetch(input, init);
  }

  const pathname = decodeURIComponent(parsed.pathname);

  // 1) حماية ضد طلبات models/undefined الناتجة عن أي خطأ في رقم المرحلة
  if (/\/models\/undefined$/i.test(pathname) || /\/undefined$/i.test(pathname)) {
    console.warn("[StageManager] Blocked invalid model request:", pathname);
    window.__simTelemetry.errorsIntercepted.push({ type: "invalid-model", pathname, time: Date.now() });
    return new Response(new Uint8Array(0), { status: 404, statusText: "Ignored Invalid Model" });
  }

  // 2) تخزين مؤقت لملف RootMovie.swf وملف essentials.xml لمنع إعادة تحميلهما عند تبديل المراحل
  if (/\/RootMovie\.swf$/i.test(pathname)) {
    return fetchWithDeduplication("mobile-test-v3/RootMovie.swf", init, coreShellCache, parsed.href);
  }
  if (/\/essentials\.xml$/i.test(pathname)) {
    return fetchWithDeduplication("PC/essentials.xml", init, coreShellCache, parsed.href);
  }

  // 3) تصفية مصغرات القطع (media/thumbs/*.png) لتحميل مصغرات المرحلة النشطة فقط
  const thumbMatch = pathname.match(/\/media\/thumbs\/([^/]+\.png)$/i);
  if (thumbMatch) {
    const thumbFile = thumbMatch[1];
    const allowedThumbs = getAllowedThumbsForLesson(state.currentLesson);
    if (!allowedThumbs.has(thumbFile.toLowerCase())) {
      window.__simTelemetry.skippedOffstageThumbs++;
      return new Response(TRANSPARENT_1X1_PNG.buffer.slice(0), {
        status: 200,
        headers: { "Content-Type": "image/png" }
      });
    }
    recordStageAsset("thumbs", thumbFile);
    return fetchWithDeduplication(`PC/media/thumbs/${thumbFile}`, init, activeStageAssetCache, parsed.href);
  }

  // 4) تحميل صور السحب الكبيرة (media/images/*.png) عند الطلب فقط (عند سحب القطعة فعلياً)
  const imgMatch = pathname.match(/\/media\/images\/([^/]+\.png)$/i);
  if (imgMatch) {
    const imgFile = imgMatch[1];
    recordStageAsset("images", imgFile);
    return fetchWithDeduplication(`PC/media/images/${imgFile}`, init, activeStageAssetCache, parsed.href);
  }

  // 5) إصلاح مسار ملفات الاستكشاف المتداخلة (media/explore/*)
  const exploreMatch = pathname.match(/\/media\/explore\/(?:media\/explore\/)?([^/]+)$/i);
  if (exploreMatch) {
    const exploreFile = exploreMatch[1];
    recordStageAsset("explore", exploreFile);
    return fetchWithDeduplication(`PC/media/explore/${exploreFile}`, init, activeStageAssetCache, parsed.href);
  }

  // 6) إدارة تحميل ملفات المراحل الثقيلة (models/*.swf) ومنع تراكم أكثر من مرحلة في ذاكرة WASM
  const modelMatch = pathname.match(/\/models\/([^/]+\.swf)$/i);
  if (modelMatch) {
    const requestedModel = modelMatch[1];
    const modelLower = requestedModel.toLowerCase();
    const targetLessonId = MODEL_TO_LESSON_ID[modelLower] || state.currentLesson;
    const targetUrl = resolveModelFetchPath(requestedModel);

    // إذا كانت نسخة Ruffle الحالية قد حمّلت مرحلة سابقة بالفعل، فهذا انتقال داخلي بين المراحل!
    // نقوم بالتحقق من ملف المرحلة الجديدة أولاً، ثم نحرر ذاكرة المرحلة السابقة بالكامل ونشغل المرحلة الجديدة في ذاكرة نظيفة
    if (activeInstanceLoadedModel && activeInstanceLoadedModel.toLowerCase() !== modelLower && MODEL_TO_LESSON_ID[modelLower]) {
      console.info(`[StageManager] In-Flash transition detected: ${activeInstanceLoadedModel} -> ${requestedModel} (Lesson ${targetLessonId})`);
      try {
        const preflightResp = await fetchWithDeduplication(targetUrl, init, null);
        const buf = await preflightResp.arrayBuffer();
        prefetchedStageSwf = { model: modelLower, buffer: buf };
      } catch (err) {
        console.error("[StageManager] Stage transition halted — target SWF failed to load:", err);
        window.__simTelemetry.errorsIntercepted.push({
          type: "stage-transition-failed",
          fromModel: activeInstanceLoadedModel,
          toModel: requestedModel,
          error: String(err && err.message || err)
        });
        showErrorDiagnosis({
          title: "تعذر الانتقال إلى المرحلة التالية",
          reason: `فشل تحميل ملف المرحلة المطلوبة (${requestedModel})، لذلك تم إيقاف الانتقال والاحتفاظ بالمرحلة الحالية دون إعادة تحميل الصفحة.`,
          solution: "تحقق من الاتصال بالخادم ثم أعد المحاولة من شريط المراحل العلوي.",
          technicalDetails: `Transition: ${activeInstanceLoadedModel} -> ${requestedModel}\nURL: ${targetUrl}\nError: ${err && err.message || err}`,
          retryAction: () => selectLesson(targetLessonId),
          canLightweightRetry: true
        });
        throw err;
      }

      // جدولة التبديل النظيف الذي يحرر ذاكرة WASM وWebGL للمرحلة السابقة فوراً
      setTimeout(() => {
        loadOriginalSimulator(targetLessonId, state.simMode, { skipIntro: true, fromInFlashTransition: true });
      }, 0);

      // إيقاف التحميل المزدوج داخل النسخة القديمة التي سيتم تدميرها
      return new Promise(() => {});
    }

    // هذه هي المرحلة الأولى والوحيدة داخل نسخة Ruffle الحالية
    activeInstanceLoadedModel = requestedModel;
    window.__simTelemetry.activeModel = requestedModel;
    if (MODEL_TO_LESSON_ID[modelLower] && state.currentLesson !== targetLessonId) {
      state.currentLesson = targetLessonId;
      window.__simTelemetry.currentLesson = targetLessonId;
      updateToolbarState();
    }

    let buf;
    let durationMs = 0;
    if (prefetchedStageSwf && prefetchedStageSwf.model === modelLower) {
      buf = prefetchedStageSwf.buffer;
      prefetchedStageSwf = null;
      console.info(`[StageManager] Served prefetched stage model ${requestedModel} (${(buf.byteLength / 1024).toFixed(1)} KB) and freed temporary buffer.`);
    } else {
      const t0 = performance.now();
      const resp = await fetchWithDeduplication(targetUrl, init, null, parsed.href);
      buf = await resp.arrayBuffer();
      durationMs = Math.round(performance.now() - t0);
    }

    recordStageAsset("models", requestedModel, buf.byteLength);
    const memSnap = getMemorySnapshotMB();
    const entry = {
      lessonId: targetLessonId,
      model: requestedModel,
      sizeKB: Number((buf.byteLength / 1024).toFixed(1)),
      durationMs,
      usedJSHeapMB: memSnap.usedJSHeapMB,
      activePlayerCount: document.querySelectorAll("ruffle-player, ruffle-embed, ruffle-object").length,
      timestamp: new Date().toISOString()
    };
    window.__simTelemetry.stageLoads.push(entry);
    console.info(`[StageTelemetry] Loaded Stage ${targetLessonId} (${requestedModel}):`, entry);

    return createCachedResponse(buf, 200, "application/x-shockwave-flash", parsed.href);
  }

  return nativeFetch(input, init);
};

// ==========================================
// الوضع الخفيف (ULTRA-LIGHTWEIGHT PERFORMANCE)
// ==========================================
function applyLightweightMode() {
  document.body.classList.toggle("lightweight-mode", state.isLightweight);

  const topbarBtn = document.getElementById("topbar-lightweight-btn");
  const topbarLabel = document.getElementById("topbar-lightweight-label");
  const homeBtn = document.getElementById("home-lightweight-btn");

  if (topbarBtn) topbarBtn.classList.toggle("active", state.isLightweight);
  if (topbarLabel) topbarLabel.textContent = state.isLightweight ? "خفيف: مفعّل ⚡" : "خفيف: معطّل";
  if (homeBtn) {
    homeBtn.classList.toggle("active", state.isLightweight);
    homeBtn.textContent = state.isLightweight ? "مفعّل ⚡ (أداء فائق وسرعة قصوى)" : "معطّل (الوضع العادي)";
  }
}

function toggleLightweightMode() {
  state.isLightweight = !state.isLightweight;
  try {
    localStorage.setItem("simulator-lightweight", state.isLightweight ? "1" : "0");
  } catch (e) {
    console.warn("localStorage unavailable", e);
  }
  applyLightweightMode();

  showToastWarning(
    state.isLightweight
      ? "⚡ تم تفعيل الوضع الخفيف: تقليل استهلاك المعالج والذاكرة لأداء فائق وسلس."
      : "ℹ️ تم تعطيل الوضع الخفيف والعودة للوضع الرسومي الكامل.",
    state.isLightweight ? "toast-info" : "toast-warning"
  );

  if (state.currentScreen === "app" && state.activeView === "original") {
    loadOriginalSimulator(state.currentLesson, state.simMode, { skipIntro: true });
  }
}

// ==========================================
// تشخيص وعرض سبب المشكلة (ERROR DIAGNOSTICS)
// ==========================================
function showErrorDiagnosis({ title, reason, solution, technicalDetails, retryAction, canLightweightRetry = false }) {
  const modal = document.getElementById("error-diagnosis-modal");
  const titleEl = document.getElementById("diag-title");
  const reasonEl = document.getElementById("diag-reason");
  const solutionEl = document.getElementById("diag-solution");
  const techEl = document.getElementById("diag-tech-pre");
  const retryBtn = document.getElementById("diag-btn-retry");
  const lightBtn = document.getElementById("diag-btn-light");

  lastFailedAction = typeof retryAction === "function" ? retryAction : null;
  lastDiagnosticData = {
    title: title || "مشكلة غير متوقعة",
    reason: reason || "حدث خطأ غير متوقع أثناء معالجة طلبك.",
    solution: solution || "يرجى إعادة المحاولة أو التحقق من الاتصال بالخادم.",
    technicalDetails: technicalDetails || "لا توجد تفاصيل فنية إضافية.",
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent
  };

  if (titleEl) titleEl.textContent = lastDiagnosticData.title;
  if (reasonEl) reasonEl.textContent = lastDiagnosticData.reason;
  if (solutionEl) solutionEl.textContent = lastDiagnosticData.solution;
  if (techEl) techEl.textContent = lastDiagnosticData.technicalDetails;

  if (retryBtn) retryBtn.style.display = lastFailedAction ? "inline-flex" : "none";
  if (lightBtn) lightBtn.style.display = (canLightweightRetry && !state.isLightweight) ? "inline-flex" : "none";

  if (modal) {
    modal.style.display = "flex";
  }
}

function closeDiagModal() {
  const modal = document.getElementById("error-diagnosis-modal");
  if (modal) modal.style.display = "none";
}

function retryLastAction() {
  closeDiagModal();
  if (typeof lastFailedAction === "function") {
    const act = lastFailedAction;
    lastFailedAction = null;
    act();
  }
}

function enableLightweightAndRetry() {
  state.isLightweight = true;
  try { localStorage.setItem("simulator-lightweight", "1"); } catch (e) {}
  applyLightweightMode();
  retryLastAction();
}

function copyDiagReport() {
  if (!lastDiagnosticData) return;
  const report = [
    `=== تقرير مشكلة محاكي تجميع الحاسوب ===`,
    `التاريخ والوقت: ${new Date().toLocaleString('ar-SA')}`,
    `العنوان: ${lastDiagnosticData.title}`,
    `سبب المشكلة: ${lastDiagnosticData.reason}`,
    `الحل المقترح: ${lastDiagnosticData.solution}`,
    `الرابط الحالي: ${lastDiagnosticData.url}`,
    `المتصفح: ${lastDiagnosticData.userAgent}`,
    `\n--- التفاصيل الفنية والبرمجية ---`,
    lastDiagnosticData.technicalDetails
  ].join('\n');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(report).then(() => {
      showToastWarning("تم نسخ تقرير المشكلة إلى الحافظة بنجاح ✓", "toast-info", 4000);
    }).catch(() => {
      showToastWarning("تعذر النسخ تلقائياً. يمكنك نسخ التفاصيل من المربع الفني مباشرة.", "toast-warning", 4000);
    });
  } else {
    showToastWarning("المتصفح لا يدعم النسخ التلقائي. يمكنك نسخ التفاصيل من المربع الفني.", "toast-warning", 4000);
  }
}

function showToastWarning(message, type = "toast-warning", durationMs = 5000) {
  const container = document.getElementById("diag-toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `diag-toast ${type}`;
  toast.innerHTML = `
    <div class="diag-toast-content">${message}</div>
    <button class="diag-toast-close" title="إغلاق">✕</button>
  `;

  toast.querySelector(".diag-toast-close").onclick = () => toast.remove();
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, durationMs);
}

function ensureRuffle() {
  if (typeof window.WebAssembly !== "object") {
    showErrorDiagnosis({
      title: "المتصفح لا يدعم تشغيل المحاكي (WebAssembly مفقود)",
      reason: "متصفحك الحالي يفتقر إلى دعم تقنية WebAssembly الضرورية لتشغيل كود محاكي الفلاش بسرعة وأمان.",
      solution: "يرجى فتح الموقع عبر متصفح حديث يدعم WebAssembly مثل Chrome أو Edge أو Safari أو Firefox الحديث.",
      technicalDetails: "WebAssembly is undefined on window."
    });
    return Promise.reject(new Error("WebAssembly unsupported"));
  }

  if (window.RufflePlayer && typeof window.RufflePlayer.newest === "function") return Promise.resolve();
  if (!ruffleLoading) {
    ruffleLoading = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "ruffle-local/ruffle.js";
      script.onload = resolve;
      script.onerror = () => {
        script.remove();
        ruffleLoading = null;
        const isOffline = !navigator.onLine;
        showErrorDiagnosis({
          title: "فشل تحميل محرك المحاكي (Ruffle)",
          reason: isOffline
            ? "أنت غير متصل بالشبكة أو انقطع الاتصال بالخادم."
            : "تعذر تنزيل ملف محرك الفلاش (ruffle-local/ruffle.js). قد يكون خادم التطبيق متوقفاً، أو تم حظر الملف بواسطة جدار حماية أو إضافة منع إعلانات.",
          solution: "تأكد من تشغيل الخادم (npm start) وتحقق من الاتصال، ثم اضغط على زر 'إعادة المحاولة'.",
          technicalDetails: `Failed to load ruffle-local/ruffle.js\nOnline status: ${navigator.onLine}`,
          retryAction: () => loadOriginalSimulator(state.currentLesson, state.simMode),
          canLightweightRetry: true
        });
        reject(new Error("تعذر تحميل المحاكي"));
      };
      document.head.appendChild(script);
    });
  }
  return ruffleLoading;
}

// تحرير كامل لذاكرة المرحلة السابقة (WebGL Textures + Canvas Framebuffer + WASM Instance + Image Cache)
function releasePlayerGpuAndMemory(playerEl) {
  if (!playerEl) return;
  try {
    const roots = [playerEl];
    if (playerEl.shadowRoot) roots.push(playerEl.shadowRoot);
    roots.forEach(root => {
      const canvases = root.querySelectorAll ? root.querySelectorAll("canvas") : [];
      canvases.forEach(canvas => {
        try {
          const gl = canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
          if (gl) {
            const loseExt = gl.getExtension("WEBGL_lose_context");
            if (loseExt) loseExt.loseContext();
          }
        } catch (e) {}
        try {
          canvas.width = 1;
          canvas.height = 1;
        } catch (e) {}
      });
    });
  } catch (e) {}
}

function destroyCurrentRufflePlayer() {
  simulatorLoadId++;
  activeInstanceLoadedModel = null;
  window.__simTelemetry.activeModel = null;

  if (stageAbortController) {
    try { stageAbortController.abort(); } catch (e) {}
    stageAbortController = null;
  }

  // تفريغ ذاكرة الصور المؤقتة الخاصة بالمرحلة السابقة
  activeStageAssetCache.clear();

  const container = document.getElementById("ruffle-container");
  const allPlayers = container
    ? Array.from(container.querySelectorAll("ruffle-player, ruffle-embed, ruffle-object"))
    : [];
  if (currentRufflePlayer && !allPlayers.includes(currentRufflePlayer)) {
    allPlayers.push(currentRufflePlayer);
  }

  allPlayers.forEach(p => {
    releasePlayerGpuAndMemory(p);
    try {
      if (typeof p.destroy === "function") p.destroy();
    } catch (e) {
      console.warn("Player cleanup warning:", e);
    }
    try { p.remove(); } catch (e) {}
  });

  currentRufflePlayer = null;
  if (container) container.innerHTML = "";
  window.__simTelemetry.activePlayerCount = 0;
}

function destroyModalPlayer() {
  if (currentModalPlayer) {
    releasePlayerGpuAndMemory(currentModalPlayer);
    try {
      if (typeof currentModalPlayer.destroy === "function") {
        currentModalPlayer.destroy();
      }
    } catch (e) {
      console.warn("Modal player cleanup warning:", e);
    }
    currentModalPlayer = null;
  }
  const viewer = document.getElementById("modal-swf-viewer");
  if (viewer) viewer.innerHTML = "";
}

function initApp() {
  applyLightweightMode();
  renderLessonPills();
  window.addEventListener("resize", fitSimulatorScale);
  window.addEventListener("orientationchange", () => setTimeout(fitSimulatorScale, 120));
  try {
    const savedLesson = localStorage.getItem("pc-sim-saved-lesson");
    if (savedLesson && !new URLSearchParams(window.location.search).has("lesson")) {
      const parsed = parseInt(savedLesson, 10);
      if (parsed >= 1 && parsed <= 7) {
        state.currentLesson = parsed;
        renderLessonPills();
      }
    }
  } catch (e) {
    console.warn("Storage access warning", e);
  }
}

// الانتقال من قائمة البداية إلى التطبيق
function launchApp(targetView) {
  state.currentScreen = "app";
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("app-screen").style.display = "flex";

  switchView(targetView);
}

// العودة إلى قائمة البداية
function returnToHome() {
  if (state.activeView === "original" && !window.confirm("العودة للقائمة الرئيسية ستفقد تقدمك في المحاكي. هل تريد المتابعة؟")) return;
  state.currentScreen = "home";
  document.getElementById("app-screen").style.display = "none";
  document.getElementById("home-screen").style.display = "flex";

  destroyCurrentRufflePlayer();
  destroyModalPlayer();
}

function dismissOrientPrompt() {
  const p = document.getElementById("mobile-orient-prompt");
  if (p) p.style.display = "none";
}

function switchView(viewName) {
  state.activeView = viewName;
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });
  document.querySelectorAll(".view-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `view-${viewName}`);
  });
  if (viewName === "original") {
    if (!currentRufflePlayer) {
      loadOriginalSimulator(state.currentLesson, state.simMode);
    } else {
      setTimeout(fitSimulatorScale, 40);
    }
  } else {
    destroyCurrentRufflePlayer();
    renderExplorerGrid();
  }
}

// ضبط مقاس المحاكي بنسبة أبعاد 4:3 الأصلية والصحيحة بدون شد أو مفعصة!
function fitSimulatorScale() {
  const wrapper = document.getElementById("swf-frame-wrapper");
  const view = document.getElementById("view-original");
  if (!wrapper || !view || state.activeView !== "original") return;

  const isMobileLandscape = window.matchMedia("(orientation: landscape) and (max-height: 650px)").matches;
  if (isMobileLandscape) {
    wrapper.style.width = "100vw";
    wrapper.style.height = "100dvh";
    return;
  }

  const baseW = 971;
  const baseH = 608;
  const aspect = baseW / baseH; // ~1.597

  const availW = view.clientWidth;
  const availH = view.clientHeight;
  if (availW <= 0 || availH <= 0) return;

  let targetW = availW;
  let targetH = Math.round(targetW / aspect);

  if (targetH > availH) {
    targetH = availH;
    targetW = Math.round(targetH * aspect);
  }

  wrapper.style.width = `${targetW}px`;
  wrapper.style.height = `${targetH}px`;
}

// التحقق المسبق من سلامة ملف المرحلة قبل هدم المرحلة الحالية (لمنع إعادة تحميل الصفحة أو فقدان المرحلة عند فشل ملف)
async function preflightStageModel(lessonId) {
  const lessonObj = LESSONS_DATA.find(l => l.id === Number(lessonId));
  if (!lessonObj || !lessonObj.modelFile) return true;
  const modelKey = lessonObj.modelFile.toLowerCase();
  if (prefetchedStageSwf && prefetchedStageSwf.model === modelKey) {
    return true;
  }
  const targetUrl = resolveModelFetchPath(lessonObj.modelFile);
  const resp = await fetchWithDeduplication(targetUrl, {}, null);
  const buf = await resp.arrayBuffer();
  if (!buf || buf.byteLength < 128) {
    throw new Error(`Invalid or truncated SWF file: ${targetUrl}`);
  }
  prefetchedStageSwf = { model: modelKey, buffer: buf };
  return true;
}

async function loadOriginalSimulator(lessonId, modeId, options = {}) {
  const normalizedLesson = Number(lessonId) >= 1 && Number(lessonId) <= 7 ? Number(lessonId) : 1;
  const normalizedMode = Number(modeId) === 1 ? 1 : 0;
  const shouldSkipIntro = Boolean(options.skipIntro || normalizedLesson > 1 || state.hasBootedOnce);

  const container = document.getElementById("ruffle-container");
  if (!container) return;

  // 1) إذا كانت هناك مرحلة تعمل حالياً وطلب المستخدم الانتقال لمرحلة أخرى، نتحقق أولاً من جاهزية ملف المرحلة الجديدة
  // حتى إذا فشل التحميل يتوقف الانتقال فوراً دون هدم المرحلة الحالية أو إعادة تحميل الصفحة
  if (currentRufflePlayer && !options.fromInFlashTransition) {
    try {
      await preflightStageModel(normalizedLesson);
    } catch (err) {
      console.error("[StageManager] Preflight check failed, keeping current stage:", err);
      window.__simTelemetry.errorsIntercepted.push({
        type: "preflight-failed",
        lessonId: normalizedLesson,
        error: String(err && err.message || err)
      });
      showErrorDiagnosis({
        title: "تعذر تحميل ملف المرحلة المطلوبة",
        reason: `فشل الاتصال أو تعذر العثور على ملف المرحلة رقم ${normalizedLesson}. تم إيقاف الانتقال والحفاظ على المرحلة الحالية بدون إعادة تحميل الصفحة.`,
        solution: "تحقق من اتصال الشبكة أو الخادم ثم اضغط على 'إعادة المحاولة'.",
        technicalDetails: `Target Lesson: ${normalizedLesson}\nError: ${err && err.message || err}`,
        retryAction: () => loadOriginalSimulator(normalizedLesson, normalizedMode, options),
        canLightweightRetry: true
      });
      return;
    }
  }

  state.currentLesson = normalizedLesson;
  state.simMode = normalizedMode;
  window.__simTelemetry.currentLesson = normalizedLesson;

  try {
    localStorage.setItem("pc-sim-saved-lesson", String(normalizedLesson));
    localStorage.setItem("pc-sim-saved-mode", String(normalizedMode));
  } catch (e) {}

  updateToolbarState();

  // 2) تحرير موارد المرحلة السابقة بالكامل من الذاكرة (WASM + WebGL + Images) قبل إنشاء المرحلة الجديدة
  const memBeforeCleanup = getMemorySnapshotMB();
  destroyCurrentRufflePlayer();
  const loadId = simulatorLoadId;
  stageAbortController = new AbortController();

  try {
    await ensureRuffle();
  } catch (err) {
    if (loadId === simulatorLoadId) {
      container.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; gap:12px; color:#fca5a5; text-align:center; padding:20px;">
          <span style="font-size:32px;">⚠️</span>
          <strong>تعذر تحميل محرك المحاكي</strong>
          <p style="font-size:13px; color:#cbd5e1; max-width:400px;">حدث خطأ أثناء تنزيل أو تهيئة Ruffle. تأكد من عمل الخادم ثم أعد المحاولة.</p>
          <button class="action-btn" onclick="loadOriginalSimulator(${normalizedLesson}, ${normalizedMode})" style="margin-top:6px;">🔄 إعادة المحاولة</button>
        </div>
      `;
    }
    return;
  }
  if (loadId !== simulatorLoadId || state.currentScreen !== "app" || state.activeView !== "original") return;

  const ruffle = (window.RufflePlayer && typeof window.RufflePlayer.newest === "function")
    ? window.RufflePlayer.newest()
    : null;

  if (ruffle) {
    const trial = new URLSearchParams(window.location.search).get("trial");
    const assetBase = trial === "pc" ? "PC/" : "mobile-test-v3/";
    const player = ruffle.createPlayer();
    player.style.width = "100%";
    player.style.height = "100%";
    container.appendChild(player);
    currentRufflePlayer = player;
    state.hasBootedOnce = true;

    window.__simTelemetry.activePlayerCount = container.querySelectorAll("ruffle-player, ruffle-embed, ruffle-object").length;
    console.info(`[StageManager] Mounting Stage ${normalizedLesson} (Active players: ${window.__simTelemetry.activePlayerCount}, Heap before: ${memBeforeCleanup.usedJSHeapMB ?? "N/A"} MB)`);

    const chosenQuality = state.isLightweight ? "low" : (window.matchMedia("(pointer: coarse)").matches ? "medium" : "high");
    const skipParam = shouldSkipIntro ? "&skipIntro=1" : "";

    player.load({
      url: `${assetBase}RootMovie.swf?lesson=${normalizedLesson}&mode=${normalizedMode}${skipParam}`,
      parameters: {
        lesson: String(normalizedLesson),
        mode: String(normalizedMode),
        skipIntro: shouldSkipIntro ? "1" : "0"
      },
      base: "PC/",
      quality: chosenQuality,
      scale: window.matchMedia("(max-height: 500px) and (orientation: landscape)").matches ? "exactFit" : "showAll",
      letterbox: "on",
      wmode: "opaque",
      autoplay: "on"
    }).catch(err => {
      if (loadId !== simulatorLoadId) return;
      console.error("Ruffle load error:", err);
      const errStr = (err && (err.message || String(err))) || "";
      const isNotFound = /404|not found/i.test(errStr);
      const isNet = !navigator.onLine || /network|failed to fetch/i.test(errStr);
      showErrorDiagnosis({
        title: "فشل تحميل ملف المرحلة في المحاكي",
        reason: isNotFound
          ? `ملف المرحلة المطلوبة (${assetBase}RootMovie.swf) غير موجود على مسار الخادم.`
          : isNet
          ? "انقطع الاتصال بالخادم أثناء تنزيل ملف المرحلة."
          : `تعذر تشغيل ملف الفلاش الخاص بالمرحلة. السبب: ${errStr || "بيانات تالفة أو غير متوافقة"}.`,
        solution: "انقر على زر 'إعادة المحاولة'، أو قم بتفعيل 'الوضع الخفيف' لخفض استهلاك الذاكرة وتسهيل المعالجة.",
        technicalDetails: `Lesson: ${normalizedLesson}, Mode: ${normalizedMode}\nTarget URL: ${assetBase}RootMovie.swf?lesson=${normalizedLesson}&mode=${normalizedMode}${skipParam}\nError: ${errStr}\nStack: ${err?.stack || "N/A"}`,
        retryAction: () => loadOriginalSimulator(normalizedLesson, normalizedMode, { skipIntro: true }),
        canLightweightRetry: true
      });
    });
  } else {
    container.innerHTML = `
      <object width="100%" height="100%">
        <param name="movie" value="mobile-test-v3/RootMovie.swf?lesson=${normalizedLesson}&mode=${normalizedMode}&skipIntro=1" />
        <param name="quality" value="${state.isLightweight ? "low" : "high"}" />
        <param name="scale" value="showAll" />
        <param name="base" value="PC/" />
        <embed src="mobile-test-v3/RootMovie.swf?lesson=${normalizedLesson}&mode=${normalizedMode}&skipIntro=1" base="PC/" quality="${state.isLightweight ? "low" : "high"}" scale="showAll" width="100%" height="100%"></embed>
      </object>
    `;
  }

  setTimeout(fitSimulatorScale, 60);
}

async function selectLesson(lessonId) {
  const targetId = Number(lessonId);
  if (!Number.isInteger(targetId) || targetId < 1 || targetId > 7) return;
  if (isTransitioningStage) return;

  // منع إعادة تحميل نفس المرحلة إذا كانت محملة بالفعل وتعمل
  if (state.currentLesson === targetId && currentRufflePlayer && activeInstanceLoadedModel) {
    return;
  }

  isTransitioningStage = true;
  try {
    if (state.activeView === "original") {
      await loadOriginalSimulator(targetId, state.simMode, { skipIntro: true });
    } else {
      state.currentLesson = targetId;
      updateToolbarState();
    }
  } finally {
    isTransitioningStage = false;
  }
}

function selectSimMode(modeId) {
  state.simMode = modeId;
  if (modeId === 2 && state.activeView !== "original") {
    switchView("explorer");
    return;
  }
  if (state.activeView === "original") {
    loadOriginalSimulator(state.currentLesson, modeId, { skipIntro: true });
  } else {
    updateToolbarState();
  }
}

function updateToolbarState() {
  renderLessonPills();
  document.querySelectorAll(".mode-chip").forEach(chip => {
    chip.classList.toggle("active", Number(chip.dataset.mode) === state.simMode);
  });
}

function renderLessonPills() {
  const wrap = document.getElementById("lesson-pills-container");
  if (!wrap) return;
  wrap.innerHTML = LESSONS_DATA.map(lesson => {
    const isCurrent = lesson.id === state.currentLesson;
    const label = lesson.title.replace(/^\d+\.\s*/, "").replace(/\s*\(.*?\)/, "");
    return `
      <button class="lesson-pill ${isCurrent ? "active" : ""}" onclick="selectLesson(${lesson.id})">
        <span class="num">${lesson.id}</span>
        <span>${label}</span>
      </button>
    `;
  }).join("");
}

function resetCurrentLayer() {
  if (state.activeView === "original") {
    loadOriginalSimulator(state.currentLesson, state.simMode, { skipIntro: true });
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
  setTimeout(fitSimulatorScale, 300);
}

// ==========================================
// 360° COMPONENT EXPLORER
// ==========================================
function renderExplorerGrid() {
  const grid = document.getElementById("explorer-parts-grid");
  if (!grid) return;

  const allParts = [];
  LESSONS_DATA.forEach(l => {
    l.parts.forEach(p => {
      allParts.push({ ...p, layerTitle: l.title });
    });
  });

  grid.innerHTML = allParts.map(p => `
    <button type="button" class="part-card" onclick="openPartModal('${p.id}')" aria-label="عرض ${p.name}">
      <div class="part-img-box"><img src="${p.thumb}" alt="" loading="lazy" decoding="async" /></div>
      <h3>${p.name}</h3>
    </button>
  `).join("");
}

function openPartModal(partId) {
  let foundPart = null;
  let foundLesson = null;
  for (const l of LESSONS_DATA) {
    const p = l.parts.find(item => item.id === partId);
    if (p) {
      foundPart = p;
      foundLesson = l;
      break;
    }
  }
  if (!foundPart) return;

  state.modalPartId = partId;
  state.modalViewerMode = "swf";
  state.turntableAngleY = -18;
  state.turntableAngleX = 10;
  state.turntableZoom = 1;

  const modal = document.getElementById("part-explore-modal");
  const titleEl = document.getElementById("modal-part-title");
  titleEl.textContent = foundPart.name;

  renderModalViewerContent(foundPart, foundLesson);
  modal.classList.add("open");
}

function renderModalViewerContent(foundPart, foundLesson) {
  const bodyEl = document.getElementById("modal-part-body");

  destroyModalPlayer();
  const unrelated = /Screws|Screw|CasePanels|Antenna/i.test(foundPart.id);
  const images = unrelated || !foundPart.viewCount
    ? [foundPart.img]
    : Array.from({ length: foundPart.viewCount }, (_, i) => `PC/media/explore/views/${foundPart.viewsStem}_${i + 1}.jpg`);
  bodyEl.innerHTML = `
    <div class="modal-3d-box part-viewer">
      <div class="part-viewer-label">${images.length > 1 ? "اسحب الصورة أو استخدم الأسهم لتغيير الزاوية" : "صورة القطعة المتاحة"}</div>
      <img class="part-viewer-image" id="part-viewer-image" src="${images[0]}" alt="${foundPart.name}" draggable="false" />
      <div class="part-viewer-controls" ${images.length === 1 ? "hidden" : ""}>
        <button type="button" class="rot-btn" id="view-prev" aria-label="الزاوية السابقة">→</button>
        <span id="view-count">1 / ${images.length}</span>
        <button type="button" class="rot-btn" id="view-next" aria-label="الزاوية التالية">←</button>
      </div>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div style="display:flex; align-items:center; gap:12px; background:var(--bg-card); padding:12px; border-radius:10px;">
        <div>
          <span class="part-badge">${foundLesson.title}</span>
          <h4 style="margin-top:4px; font-size:15.5px; color:#fff;">${foundPart.name}</h4>
        </div>
      </div>
      <p style="font-size:13px; line-height:1.65; color:var(--text-main);">${foundPart.role}</p>
      <div style="background:rgba(4,159,217,0.12); border:1px solid rgba(4,159,217,0.35); padding:10px 12px; border-radius:8px; font-size:12px; color:#bae6fd;">
        <strong>🎯 قاعدة المحاذاة والتركيب (Pin 1):</strong>
        <div style="margin-top:4px;">${foundPart.pinHint}</div>
      </div>
    </div>
  `;

  let index = 0;
  const image = document.getElementById("part-viewer-image");
  const counter = document.getElementById("view-count");
  const show = (next) => {
    index = (next + images.length) % images.length;
    image.src = images[index];
    counter.textContent = `${index + 1} / ${images.length}`;
  };
  image.onerror = () => { image.onerror = null; image.src = foundPart.img; };
  document.getElementById("view-prev").onclick = () => show(index - 1);
  document.getElementById("view-next").onclick = () => show(index + 1);
  let dragStart = null;
  image.addEventListener("pointerdown", (event) => { dragStart = event.clientX; image.setPointerCapture(event.pointerId); });
  image.addEventListener("pointerup", (event) => {
    if (dragStart !== null && Math.abs(event.clientX - dragStart) > 25) show(index + (event.clientX < dragStart ? 1 : -1));
    dragStart = null;
  });
}

function closePartModal() {
  destroyModalPlayer();
  const img = document.getElementById("part-viewer-image");
  if (img) img.src = "";
  const modal = document.getElementById("part-explore-modal");
  modal.classList.remove("open");
}

window.addEventListener("DOMContentLoaded", initApp);

// منع الـ Pull-to-refresh وحركات المتصفح التلقائية أثناء اللمس أو سحب القطع على الجوال
document.addEventListener("touchmove", (e) => {
  if (state.currentScreen === "app") {
    if (state.activeView === "original") {
      const scrollableToolbar = e.target.closest(".stage-toolbar, .lesson-pills, .diag-card");
      if (!scrollableToolbar) {
        e.preventDefault();
      }
      return;
    }
    const scrollable = e.target.closest("#explorer-parts-grid, .modal-card, .modal-body, .diag-card");
    if (!scrollable) {
      e.preventDefault();
    }
  }
}, { passive: false });

// منع قائمة السياق باللمس الطويل على عناصر المحاكي في الجوال
window.addEventListener("contextmenu", (e) => {
  if (state.currentScreen === "app" && state.activeView === "original") {
    e.preventDefault();
  }
});

// التعامل الذكي مع فقدان سياق WebGL على معالجات الجوال وتنبيه المستخدم بالسبب
window.addEventListener("webglcontextlost", (e) => {
  e.preventDefault();
  console.warn("WebGL Context Lost intercepted.");
  showErrorDiagnosis({
    title: "توقف مؤقت لمعالج الرسوميات (WebGL)",
    reason: "قام المتصفح أو نظام التشغيل بإيقاف سياق الرسوميات مؤقتاً لتخفيف الضغط على ذاكرة كرت الشاشة (GPU)، بسبب قلة الذاكرة المتاحة في الجهاز أو فتح تطبيقات أخرى.",
    solution: "قم بتفعيل 'الوضع الخفيف' لتخفيف استهلاك موارد الرسوميات، ثم اضغط على زر 'إعادة المحاولة' للمتابعة دون إعادة تحميل الصفحة بالكامل.",
    technicalDetails: "Event: webglcontextlost\nDevice memory / GPU context interrupted.",
    retryAction: () => loadOriginalSimulator(state.currentLesson, state.simMode, { skipIntro: true }),
    canLightweightRetry: true
  });
}, true);

// اعتراض أخطاء الجافاسكريبت غير المعالجة وتوضيح سبب المشكلة للشخص
window.addEventListener("error", (e) => {
  console.warn("Handled runtime warning:", e.message);
  if (!e.message || /ResizeObserver|script error/i.test(e.message)) return;

  const isNetwork = !navigator.onLine || /fetch|network|loading script/i.test(e.message);
  showToastWarning(
    isNetwork
      ? "⚠️ تنبيه اتصال: تعذر تحميل أحد الموارد بسبب ضعف الشبكة أو انقطاع الخادم."
      : `⚠️ تنبيه تشغيل: ${e.message}`,
    "toast-warning",
    6000
  );
});

window.addEventListener("unhandledrejection", (e) => {
  console.warn("Handled promise rejection:", e.reason);
  const reasonStr = (e.reason && (e.reason.message || String(e.reason))) || "";
  if (!reasonStr || /ResizeObserver/i.test(reasonStr)) return;

  showToastWarning(`⚠️ تنبيه في استجابة العملية: ${reasonStr}`, "toast-warning", 6000);
});
