const LESSONS_DATA = [
  {
    id: 1,
    title: "1. مزود الطاقة (Power Supply)",
    parts: [
      { id: "iPowerSupply", name: "مزود الطاقة (Power Supply)", thumb: "PC/media/thumbs/powerSupply.png", img: "PC/media/images/powerSupply.png", explore: "PC/media/explore/explorePowerSupply.swf", viewsStem: "explorePowerSupply", viewCount: 6, targetAngle: 180, pinHint: "مروحة التبريد للخارج وحزمة الكابلات باتجاه اللوحة الأم (180°)", role: "يحول التيار المتردد AC إلى تيار مستمر DC منظم (+3.3V, +5V, +12V) لتغذية جميع مكونات الحاسوب." },
      { id: "iPowerSupplyScrews", name: "براغي مزود الطاقة", thumb: "PC/media/thumbs/driveScrews.png", img: "PC/media/images/cardScrews.png", explore: "PC/media/explore/explorePowerSupply.swf", viewsStem: "explorePowerSupply", viewCount: 6, targetAngle: 0, pinHint: "تثبيت 4 براغي في الزوايا الخلفية لمزود الطاقة", role: "أربعة براغي لتثبيت مزود الطاقة بإحكام في الجدار الخلفي للصندوق." }
    ]
  },
  {
    id: 2,
    title: "2. اللوحة الأم (Motherboard)",
    parts: [
      { id: "iCPU", name: "المعالج المركزي (CPU)", thumb: "PC/media/thumbs/cpu.png", img: "PC/media/images/cpu.png", explore: "PC/media/explore/exploreCPU.swf", viewsStem: "exploreCPU", viewCount: 2, targetAngle: 90, pinHint: "طابق المثلث الذهبي (Pin 1) في زاوية المعالج مع زاوية المقبس (90°)", role: "وحدة المعالجة المركزية (المعالج) — يوضع برفق بدون ضغط بعد مطابقة علامة الدبوس الأول Pin 1." },
      { id: "iThermalGlue", name: "المعجون الحراري", thumb: "PC/media/thumbs/thermalGlue.png", img: "PC/media/images/thermalGlue.png", explore: "PC/media/explore/exploreThermalPaste.swf", viewsStem: "exploreThermalPaste", viewCount: 1, targetAngle: 0, pinHint: "يوضع مباشرة وسط ظهر المعالج المعدني", role: "يملا الفراغات المجهرية بين سطح المعالج والمشتت الحراري لمنع ارتفاع حرارة المعالج." },
      { id: "iHeatsink", name: "المشتت الحراري والمروحة", thumb: "PC/media/thumbs/heatsink.png", img: "PC/media/images/heatsink.png", explore: "PC/media/explore/exploreHeatSink.swf", viewsStem: "exploreHeatSink", viewCount: 2, targetAngle: 0, pinHint: "حاذي الأرجل الأربعة مع الثقوب المحيطة بمقبس المعالج ووصّل سلك المروحة", role: "وحدة التبريد النشطة (مشتت ألمنيوم + مروحة) لتشتيت حرارة المعالج." },
      { id: "iRAM1", name: "ذاكرة عشوائية (RAM 1)", thumb: "PC/media/thumbs/ram.png", img: "PC/media/images/ram.png", explore: "PC/media/explore/exploreRam.swf", viewsStem: "exploreRam", viewCount: 2, targetAngle: 180, pinHint: "قم بتدوير الشريحة (180°) حتى يتطابق الشق السفلي مع الفاصل في منفذ DIMM 1", role: "الشريحة الأولى للذاكرة العشوائية — تحتوي على شق سفلي يمنع تركيبها بالاتجاه الخاطئ." },
      { id: "iRAM2", name: "ذاكرة عشوائية (RAM 2)", thumb: "PC/media/thumbs/ram.png", img: "PC/media/images/ram.png", explore: "PC/media/explore/exploreRam.swf", viewsStem: "exploreRam", viewCount: 2, targetAngle: 180, pinHint: "قم بتدوير الشريحة (180°) لمطابقة الشق السفلي في منفذ DIMM 2", role: "الشريحة الثانية للذاكرة العشوائية لتفعيل خاصية القناة المزدوجة (Dual-Channel)." },
      { id: "iMotherboard", name: "تركيب اللوحة الأم بالصندوق", thumb: "PC/media/thumbs/motherboard.png", img: "PC/media/images/motherboard.png", explore: "PC/media/explore/exploreMotherboard.swf", viewsStem: "exploreMotherboard", viewCount: 3, targetAngle: 90, pinHint: "وجّه منافذ اللوحة الخلفية (I/O Ports) باتجاه الفتحة الخلفية للصندوق (90°)", role: "لوحة الدوائر المطبوعة الرئيسية التي تربط المعالج والذاكرة والبطاقات والأقراص معاً." },
      { id: "iMoboScrews", name: "براغي اللوحة الأم", thumb: "PC/media/thumbs/mbscrews.png", img: "PC/media/images/mbscrews.png", explore: "PC/media/explore/exploreMotherboard.swf", viewsStem: "exploreMotherboard", viewCount: 3, targetAngle: 0, pinHint: "شد البراغي في الفواصل النحاسية لتأمين اللوحة الأم", role: "تثبت اللوحة الأم فوق الفواصل المعدنية وتمنع حدوث التماس مع هيكل الصندوق." }
    ]
  },
  {
    id: 3,
    title: "3. بطاقات التوسعة (Adapter Cards)",
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
    parts: [
      { id: "iHD", name: "القرص الصلب (HDD)", thumb: "PC/media/thumbs/hardDrive.png", img: "PC/media/images/hardDrive.png", explore: "PC/media/explore/exploreHarddrive.swf", viewsStem: "exploreHarddrive", viewCount: 4, targetAngle: 90, pinHint: "تدوير 90° بحيث تتجه منافذ SATA نحو اللوحة الأم", role: "محرك الأقراص الصلبة المغناطيسي مقاس 3.5 بوصة لتخزين نظام التشغيل والملفات." },
      { id: "iHDScrews", name: "براغي القرص الصلب", thumb: "PC/media/thumbs/driveScrews.png", img: "PC/media/images/driveScrews.png", explore: "PC/media/explore/exploreHarddrive.swf", viewsStem: "exploreHarddrive", viewCount: 4, targetAngle: 0, pinHint: "تثبيت القرص الصلب في قفص الأقراص الداخلي", role: "تثبت القرص الصلب وتمنع اهتزازه أثناء دوران الأقراص الداخلية." }
    ]
  },
  {
    id: 5,
    title: "5. محركات الفتحات الخارجية (External Bays)",
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
    parts: [
      { id: "iPata1", name: "كابل بيانات PATA (IDE)", thumb: "PC/media/thumbs/pata1.png", img: "PC/media/images/pata1.png", explore: "PC/media/explore/exploreParallelDVD.swf", viewsStem: "exploreParallelDVD", viewCount: 3, targetAngle: 90, pinHint: "طابق الخط الملون على حافة الكابل مع الدبوس الأول Pin 1 والنتوء العلوي (90°)", role: "كابل شريطي 40 دبوساً يربط منفذ IDE في اللوحة الأم بمحرك الأقراص الضوئية DVD." },
      { id: "iPata2", name: "كابل بيانات Floppy", thumb: "PC/media/thumbs/pata2.png", img: "PC/media/images/pata2.png", explore: "PC/media/explore/exploreParallelFLOPPY.swf", viewsStem: "exploreParallelFLOPPY", viewCount: 2, targetAngle: 90, pinHint: "الطرف ذو الضفيرة المعكوسة يركب في محرك الأقراص المرنة مع محاذاة Pin 1 (90°)", role: "كابل شريطي 34 دبوساً يربط اللوحة الأم بمحرك الأقراص المرنة." },
      { id: "iSata", name: "كابلات SATA والطاقة الداخلية", thumb: "PC/media/thumbs/sata.png", img: "PC/media/images/sata.png", explore: "PC/media/explore/exploreSATA.swf", viewsStem: "exploreSATA", viewCount: 3, targetAngle: 180, pinHint: "طابق المدخل على شكل حرف L (زاوية 180°) في منفذ SATA باللوحة الأم والقرص الصلب", role: "كابل بيانات SATA السريع بمدخل على شكل حرف L مع توصيلات الطاقة الداخلية (ATX 20-pin, 4-pin, SATA, Molex, Berg)." }
    ]
  },
  {
    id: 7,
    title: "7. الأغطية والكابلات الخارجية (External Cables)",
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

let state = {
  currentScreen: "home", // 'home' | 'app'
  activeView: "original",
  currentLesson: (() => {
    const lesson = Number(new URLSearchParams(window.location.search).get("lesson"));
    return Number.isInteger(lesson) && lesson >= 1 && lesson <= 7 ? lesson : 1;
  })(),
  simMode: 0,
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

function ensureRuffle() {
  if (window.RufflePlayer && typeof window.RufflePlayer.newest === "function") return Promise.resolve();
  if (!ruffleLoading) {
    ruffleLoading = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "ruffle-local/ruffle.js";
      script.onload = resolve;
      script.onerror = () => { script.remove(); ruffleLoading = null; reject(new Error("تعذر تحميل المحاكي")); };
      document.head.appendChild(script);
    });
  }
  return ruffleLoading;
}

function destroyCurrentRufflePlayer() {
  simulatorLoadId++;
  if (currentRufflePlayer) {
    try {
      if (typeof currentRufflePlayer.destroy === "function") {
        currentRufflePlayer.destroy();
      }
    } catch (e) {
      console.warn("Player cleanup warning:", e);
    }
    currentRufflePlayer = null;
  }
  const container = document.getElementById("ruffle-container");
  if (container) container.innerHTML = "";
}

function destroyModalPlayer() {
  if (currentModalPlayer) {
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
  renderLessonPills();
  window.addEventListener("resize", fitSimulatorScale);
  try {
    if (sessionStorage.getItem("simulator-active") === "1") {
      sessionStorage.removeItem("simulator-active");
      alert("يبدو أن الصفحة أُعيد تحميلها أثناء تشغيل المحاكي. لم يُحفظ تقدم التجميع. إذا تكرر ذلك فأخبرنا بأن رسالة إعادة التحميل ظهرت.");
    }
  } catch (e) { console.warn("Session storage unavailable", e); }
}

// الانتقال من قائمة البداية إلى التطبيق
function launchApp(targetView) {
  try { sessionStorage.setItem("simulator-active", targetView === "original" ? "1" : "0"); } catch (e) { console.warn("Session storage unavailable", e); }
  state.currentScreen = "app";
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("app-screen").style.display = "flex";

  switchView(targetView);
}

// العودة إلى قائمة البداية
function returnToHome() {
  if (state.activeView === "original" && !window.confirm("العودة للقائمة الرئيسية ستفقد تقدمك في المحاكي. هل تريد المتابعة؟")) return;
  try { sessionStorage.removeItem("simulator-active"); } catch (e) { console.warn("Session storage unavailable", e); }
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
  try { sessionStorage.setItem("simulator-active", viewName === "original" ? "1" : "0"); } catch (e) { console.warn("Session storage unavailable", e); }
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

  const baseW = 971;
  const baseH = 608;
  const aspect = baseW / baseH; // ~1.597

  const availW = view.clientWidth;
  const availH = view.clientHeight;

  // الحفاظ على النسبة الهندسية الصحيحة تماماً حتى لا تُمط الواجهة أو تبدو مفعوصة
  let targetW = availW;
  let targetH = Math.round(targetW / aspect);

  if (targetH > availH) {
    targetH = availH;
    targetW = Math.round(targetH * aspect);
  }

  wrapper.style.width = `${targetW}px`;
  wrapper.style.height = `${targetH}px`;
}

async function loadOriginalSimulator(lessonId, modeId) {
  state.currentLesson = lessonId;
  state.simMode = modeId;

  const container = document.getElementById("ruffle-container");
  if (!container) return;

  destroyCurrentRufflePlayer();
  const loadId = simulatorLoadId;
  try {
    await ensureRuffle();
  } catch (err) {
    if (loadId === simulatorLoadId) container.textContent = "تعذر تحميل المحاكي. تأكد من الاتصال بالخادم ثم أعد المحاولة.";
    return;
  }
  if (loadId !== simulatorLoadId || state.currentScreen !== "app" || state.activeView !== "original") return;

  const ruffle = (window.RufflePlayer && typeof window.RufflePlayer.newest === "function")
    ? window.RufflePlayer.newest()
    : null;

  if (ruffle) {
    const trial = new URLSearchParams(window.location.search).get("trial");
    const assetBase = trial === "mobile3" ? "mobile-test-v3/" : trial === "mobile2" ? "mobile-test-v2/" : trial === "mobile" ? "mobile-test/" : "PC/";
    const player = ruffle.createPlayer();
    player.style.width = "100%";
    player.style.height = "100%";
    container.appendChild(player);
    currentRufflePlayer = player;

    player.load({
      url: `${assetBase}RootMovie.swf?lesson=${lessonId}&mode=${modeId}`,
      base: assetBase,
      quality: window.matchMedia("(pointer: coarse)").matches ? "medium" : "high",
      scale: window.matchMedia("(max-height: 500px) and (orientation: landscape)").matches ? "exactFit" : "showAll",
      letterbox: "on",
      wmode: "opaque",
      autoplay: "on"
    }).catch(err => {
      console.error("Ruffle load error:", err);
    });
  } else {
    container.innerHTML = `
      <object width="100%" height="100%">
        <param name="movie" value="PC/RootMovie.swf?lesson=${lessonId}&mode=${modeId}" />
        <param name="quality" value="high" />
        <param name="scale" value="showAll" />
        <param name="base" value="PC/" />
        <embed src="PC/RootMovie.swf?lesson=${lessonId}&mode=${modeId}" base="PC/" quality="high" scale="showAll" width="100%" height="100%"></embed>
      </object>
    `;
  }

  updateToolbarState();
  setTimeout(fitSimulatorScale, 60);
}

function selectLesson(lessonId) {
  state.currentLesson = lessonId;
  if (state.activeView === "original") {
    loadOriginalSimulator(lessonId, state.simMode);
  } else {
    updateToolbarState();
  }
}

function selectSimMode(modeId) {
  state.simMode = modeId;
  if (modeId === 2 && state.activeView !== "original") {
    switchView("explorer");
    return;
  }
  if (state.activeView === "original") {
    loadOriginalSimulator(state.currentLesson, modeId);
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
    loadOriginalSimulator(state.currentLesson, state.simMode);
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
        <div class="part-viewer-label">${images.length > 1 ? 'اسحب الصورة أو استخدم الأسهم لتغيير الزاوية' : 'صورة القطعة المتاحة'}</div>
        <img class="part-viewer-image" id="part-viewer-image" src="${images[0]}" alt="${foundPart.name}" draggable="false" />
        <div class="part-viewer-controls" ${images.length === 1 ? 'hidden' : ''}>
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
  const modal = document.getElementById("part-explore-modal");
  modal.classList.remove("open");
}

window.addEventListener("DOMContentLoaded", initApp);

// منع الـ Pull-to-refresh وحركات المتصفح التلقائية أثناء اللمس أو سحب القطع على الجوال
document.addEventListener("touchmove", (e) => {
  if (state.currentScreen === "app") {
    // في واجهة المحاكي الأصلي 3D، منع أي تمرير لعدم حدوث رفرش تلقائي
    if (state.activeView === "original") {
      e.preventDefault();
      return;
    }
    // في واجهة الموسوعة، السماح بالتمرير فقط داخل قائمة البطاقات أو النافذة
    const scrollable = e.target.closest("#explorer-parts-grid, .modal-card, .modal-body");
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

// منع انهيار الصفحة في حال فقدان سياق WebGL على معالجات الجوال
window.addEventListener("webglcontextlost", (e) => {
  e.preventDefault();
  console.warn("WebGL Context Lost intercepted.");
}, true);

// اعتراض أخطاء الجافاسكريبت غير المعالجة لمنع أي إعادة تحميل غير متوقعة
window.addEventListener("error", (e) => {
  console.warn("Handled runtime warning:", e.message);
});
window.addEventListener("unhandledrejection", (e) => {
  console.warn("Handled promise rejection:", e.reason);
});
