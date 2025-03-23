
export interface RigComponent {
  id: number;
  name: string;
  nameArabic: string;
  description: string;
  descriptionArabic: string;
  position: {
    x: number;
    y: number;
  };
  category: 'Hoisting' | 'Drilling' | 'Power' | 'Fluid' | 'Safety' | 'Housing' | 'Storage' | 'Other';
  categoryArabic: string;
  related: number[];
}

export const rigComponents: RigComponent[] = [
  {
    id: 1,
    name: "Crown Block and Water Table",
    nameArabic: "كتلة التاج وطاولة الماء",
    description: "Located at the top of the derrick, the crown block is a set of pulleys through which the drilling line is threaded. The water table is a water-cooled bearing assembly at the crown of the derrick.",
    descriptionArabic: "تقع في أعلى برج الحفر، كتلة التاج هي مجموعة من البكرات التي يتم تمرير خط الحفر من خلالها. طاولة الماء هي مجموعة محامل مبردة بالماء في تاج برج الحفر.",
    position: { x: 50, y: 10 },
    category: "Hoisting",
    categoryArabic: "رفع",
    related: [3, 5, 7, 41]
  },
  {
    id: 2,
    name: "Catline Boom and Hoist Line",
    nameArabic: "ذراع خط القط وخط الرفع",
    description: "An extension arm and line used for lifting and moving equipment around the rig floor.",
    descriptionArabic: "ذراع امتداد وخط يستخدم لرفع ونقل المعدات حول أرضية الحفارة.",
    position: { x: 30, y: 20 },
    category: "Hoisting",
    categoryArabic: "رفع",
    related: [1, 3, 7]
  },
  {
    id: 3,
    name: "Drilling Line",
    nameArabic: "خط الحفر",
    description: "A wire rope used in the rig's pulley system to raise and lower the traveling block and hook.",
    descriptionArabic: "حبل سلكي يستخدم في نظام البكرات في الحفارة لرفع وخفض الكتلة المتحركة والخطاف.",
    position: { x: 45, y: 30 },
    category: "Hoisting",
    categoryArabic: "رفع",
    related: [1, 5, 7, 41, 42]
  },
  {
    id: 4,
    name: "Monkeyboard",
    nameArabic: "لوحة الراكب",
    description: "A platform on the derrick where a worker (derrickman) stands to handle the upper portion of the drill pipe as it's run in or out of the wellbore.",
    descriptionArabic: "منصة على برج الحفر حيث يقف العامل (رجل البرج) للتعامل مع الجزء العلوي من أنبوب الحفر أثناء إدخاله أو إخراجه من حفرة البئر.",
    position: { x: 45, y: 25 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [7, 8]
  },
  {
    id: 5,
    name: "Traveling Block",
    nameArabic: "الكتلة المتحركة",
    description: "A set of pulleys that moves up and down the derrick, connected to the drilling line.",
    descriptionArabic: "مجموعة من البكرات التي تتحرك صعوداً ونزولاً في برج الحفر، متصلة بخط الحفر.",
    position: { x: 50, y: 35 },
    category: "Hoisting",
    categoryArabic: "رفع",
    related: [1, 3, 6, 41, 42, 58]
  },
  {
    id: 6,
    name: "Top Drive",
    nameArabic: "المحرك العلوي",
    description: "A modern alternative to the rotary table and kelly system, directly rotating the drill string from the top while allowing for pipe movement up and down.",
    descriptionArabic: "بديل حديث لنظام الطاولة الدوارة والكيلي، يقوم بتدوير سلسلة الحفر مباشرة من الأعلى مع السماح بحركة الأنبوب للأعلى والأسفل.",
    position: { x: 50, y: 40 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [5, 8, 37, 42, 51]
  },
  {
    id: 7,
    name: "Mast",
    nameArabic: "البرج",
    description: "The tall structure that supports the crown block and drilling equipment, providing height for raising and lowering the drill string.",
    descriptionArabic: "الهيكل الطويل الذي يدعم كتلة التاج ومعدات الحفر، ويوفر الارتفاع لرفع وخفض سلسلة الحفر.",
    position: { x: 50, y: 20 },
    category: "Hoisting",
    categoryArabic: "رفع",
    related: [1, 4, 5, 57]
  },
  {
    id: 8,
    name: "Drill Pipe",
    nameArabic: "أنبوب الحفر",
    description: "Steel pipe sections connected together to form the drill string, which transmits drilling fluid and rotation to the drill bit.",
    descriptionArabic: "أقسام أنبوبية فولاذية متصلة معاً لتشكيل سلسلة الحفر، التي تنقل سائل الحفر والدوران إلى رأس الحفر.",
    position: { x: 50, y: 60 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [6, 37, 38, 50]
  },
  {
    id: 9,
    name: "Doghouse",
    nameArabic: "غرفة العمال",
    description: "A small enclosure on the rig floor that serves as an office for the driller and as a storage place for tools.",
    descriptionArabic: "مكان صغير مغلق على أرضية الحفارة يعمل كمكتب للحفار ومكان لتخزين الأدوات.",
    position: { x: 20, y: 50 },
    category: "Housing",
    categoryArabic: "إسكان",
    related: [39, 54, 60]
  },
  {
    id: 10,
    name: "Blowout Preventer",
    nameArabic: "مانع الانفجار",
    description: "A large specialized valve used to seal, control, and monitor oil and gas wells to prevent uncontrolled release of formation fluids.",
    descriptionArabic: "صمام متخصص كبير يستخدم لإغلاق ومراقبة آبار النفط والغاز للحيلولة دون الإطلاق غير المنضبط لسوائل التكوين.",
    position: { x: 50, y: 80 },
    category: "Safety",
    categoryArabic: "أمان",
    related: [22, 25, 28, 48]
  },
  {
    id: 11,
    name: "Water Tank",
    nameArabic: "خزان الماء",
    description: "Stores water used for various purposes on the rig, including mixing drilling fluids.",
    descriptionArabic: "يخزن الماء المستخدم لأغراض مختلفة على الحفارة، بما في ذلك خلط سوائل الحفر.",
    position: { x: 80, y: 70 },
    category: "Storage",
    categoryArabic: "تخزين",
    related: [16, 17, 18]
  },
  {
    id: 12,
    name: "Electric Cable Tray",
    nameArabic: "صينية الكابلات الكهربائية",
    description: "Supports and routes electrical cables that power the rig's equipment.",
    descriptionArabic: "تدعم وتوجه الكابلات الكهربائية التي تغذي معدات الحفارة بالطاقة.",
    position: { x: 65, y: 55 },
    category: "Power",
    categoryArabic: "طاقة",
    related: [13, 15]
  },
  {
    id: 13,
    name: "Engine Generator Sets",
    nameArabic: "مجموعات مولدات المحرك",
    description: "Provide electrical power to operate the rig's equipment.",
    descriptionArabic: "توفر الطاقة الكهربائية لتشغيل معدات الحفارة.",
    position: { x: 85, y: 60 },
    category: "Power",
    categoryArabic: "طاقة",
    related: [12, 14, 15]
  },
  {
    id: 14,
    name: "Fuel Tank",
    nameArabic: "خزان الوقود",
    description: "Stores diesel fuel for the engines that power the rig.",
    descriptionArabic: "يخزن وقود الديزل للمحركات التي تشغل الحفارة.",
    position: { x: 90, y: 65 },
    category: "Storage",
    categoryArabic: "تخزين",
    related: [13]
  },
  {
    id: 15,
    name: "Electrical Control House",
    nameArabic: "غرفة التحكم الكهربائي",
    description: "Houses electrical control systems for the rig's equipment.",
    descriptionArabic: "تحتوي على أنظمة التحكم الكهربائي لمعدات الحفارة.",
    position: { x: 75, y: 55 },
    category: "Power",
    categoryArabic: "طاقة",
    related: [12, 13, 39]
  },
  {
    id: 16,
    name: "Mud Pumps",
    nameArabic: "مضخات الطين",
    description: "High-pressure pumps used to circulate drilling fluid down the drill string and back up the annulus.",
    descriptionArabic: "مضخات عالية الضغط تستخدم لتدوير سائل الحفر للأسفل عبر سلسلة الحفر وللأعلى عبر التجويف الحلقي.",
    position: { x: 70, y: 65 },
    category: "Fluid",
    categoryArabic: "سوائل",
    related: [17, 18, 47, 50, 55]
  },
  {
    id: 17,
    name: "Bulk Mud Component Tanks",
    nameArabic: "خزانات مكونات الطين السائب",
    description: "Store dry materials used to mix drilling fluid.",
    descriptionArabic: "تخزن المواد الجافة المستخدمة لخلط سائل الحفر.",
    position: { x: 65, y: 75 },
    category: "Storage",
    categoryArabic: "تخزين",
    related: [16, 18]
  },
  {
    id: 18,
    name: "Mud Tanks (Pits)",
    nameArabic: "خزانات الطين (الحفر)",
    description: "Hold the drilling fluid (mud) used during drilling operations.",
    descriptionArabic: "تحتفظ بسائل الحفر (الطين) المستخدم أثناء عمليات الحفر.",
    position: { x: 60, y: 80 },
    category: "Fluid",
    categoryArabic: "سوائل",
    related: [16, 17, 21, 33, 34, 35, 47]
  },
  {
    id: 19,
    name: "Reserve Pit",
    nameArabic: "حفرة الاحتياط",
    description: "An excavated area used to store waste fluids and cuttings.",
    descriptionArabic: "منطقة محفورة تستخدم لتخزين السوائل والقطع النفايات.",
    position: { x: 75, y: 85 },
    category: "Storage",
    categoryArabic: "تخزين",
    related: [18, 21]
  },
  {
    id: 20,
    name: "Mud-Gas Separator",
    nameArabic: "فاصل الطين والغاز",
    description: "Removes gas from the drilling fluid returning from the wellbore.",
    descriptionArabic: "يزيل الغاز من سائل الحفر العائد من فتحة البئر.",
    position: { x: 55, y: 70 },
    category: "Fluid",
    categoryArabic: "سوائل",
    related: [18, 21, 22, 33]
  },
  {
    id: 21,
    name: "Shale Shakers",
    nameArabic: "هزازات الصخر الزيتي",
    description: "Vibrating screens that remove cuttings from the drilling fluid returning from the wellbore.",
    descriptionArabic: "شاشات اهتزازية تزيل القطع من سائل الحفر العائد من فتحة البئر.",
    position: { x: 60, y: 75 },
    category: "Fluid",
    categoryArabic: "سوائل",
    related: [18, 20, 34, 35, 47]
  },
  {
    id: 22,
    name: "Choke Manifold",
    nameArabic: "مشعب الخنق",
    description: "A system of valves used to control pressure when the well is closed in.",
    descriptionArabic: "نظام من الصمامات يستخدم للتحكم في الضغط عندما يتم إغلاق البئر.",
    position: { x: 55, y: 85 },
    category: "Safety",
    categoryArabic: "أمان",
    related: [10, 20, 48]
  },
  {
    id: 23,
    name: "Pipe Ramp",
    nameArabic: "منحدر الأنابيب",
    description: "An inclined ramp used to move drill pipe from ground level to the rig floor.",
    descriptionArabic: "منحدر مائل يستخدم لنقل أنبوب الحفر من مستوى الأرض إلى أرضية الحفارة.",
    position: { x: 30, y: 70 },
    category: "Other",
    categoryArabic: "أخرى",
    related: [8, 24, 30]
  },
  {
    id: 24,
    name: "Pipe Racks",
    nameArabic: "رفوف الأنابيب",
    description: "Horizontal supports used to store drill pipe, casing, and other tubulars.",
    descriptionArabic: "دعامات أفقية تستخدم لتخزين أنبوب الحفر، والتغليف، وغيرها من الأنابيب.",
    position: { x: 25, y: 75 },
    category: "Storage",
    categoryArabic: "تخزين",
    related: [8, 23, 30]
  },
  {
    id: 25,
    name: "Accumulator",
    nameArabic: "المراكم",
    description: "Stores pressurized hydraulic fluid used to operate the blowout preventer.",
    descriptionArabic: "يخزن السائل الهيدروليكي المضغوط المستخدم لتشغيل مانع الانفجار.",
    position: { x: 40, y: 80 },
    category: "Safety",
    categoryArabic: "أمان",
    related: [10, 48]
  },
  {
    id: 26,
    name: "Annulus",
    nameArabic: "التجويف الحلقي",
    description: "The space between the drill pipe and the wellbore or casing.",
    descriptionArabic: "المساحة بين أنبوب الحفر وفتحة البئر أو التغليف.",
    position: { x: 52, y: 70 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [8, 32, 37, 47, 56]
  },
  {
    id: 27,
    name: "Brake",
    nameArabic: "الفرامل",
    description: "Used to control the movement of the drawworks and traveling block.",
    descriptionArabic: "تستخدم للتحكم في حركة آلة السحب والكتلة المتحركة.",
    position: { x: 40, y: 50 },
    category: "Hoisting",
    categoryArabic: "رفع",
    related: [36, 41]
  },
  {
    id: 28,
    name: "Casing Head",
    nameArabic: "رأس التغليف",
    description: "A heavy, flanged steel fitting connected to the first string of casing, providing a housing for slips and packing assemblies.",
    descriptionArabic: "تركيبة فولاذية ثقيلة ذات شفة متصلة بأول سلسلة تغليف، توفر مكانًا للانزلاقات ومجموعات التعبئة.",
    position: { x: 50, y: 82 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [10, 32, 56]
  },
  {
    id: 29,
    name: "Cathead",
    nameArabic: "رأس البكرة",
    description: "A spool-shaped attachment on the end of the drawworks shaft used with rope to provide power for lifting or moving equipment.",
    descriptionArabic: "ملحق على شكل بكرة في نهاية عمود آلة السحب يستخدم مع الحبل لتوفير القوة لرفع أو تحريك المعدات.",
    position: { x: 35, y: 50 },
    category: "Hoisting",
    categoryArabic: "رفع",
    related: [36, 59]
  },
  {
    id: 30,
    name: "Catwalk",
    nameArabic: "الممر",
    description: "A walkway from ground level to the rig floor, often used to move drill pipe to the rig floor.",
    descriptionArabic: "ممر من مستوى الأرض إلى أرضية الحفارة، غالبًا ما يستخدم لنقل أنبوب الحفر إلى أرضية الحفارة.",
    position: { x: 25, y: 60 },
    category: "Other",
    categoryArabic: "أخرى",
    related: [23, 24, 54, 60]
  },
  {
    id: 31,
    name: "Cellar",
    nameArabic: "القبو",
    description: "A pit in the ground beneath the rig floor that provides room for equipment at the top of the wellbore.",
    descriptionArabic: "حفرة في الأرض تحت أرضية الحفارة توفر مساحة للمعدات في أعلى فتحة البئر.",
    position: { x: 50, y: 85 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [10, 28, 32]
  },
  {
    id: 32,
    name: "Conductor Pipe",
    nameArabic: "أنبوب الموصل",
    description: "The first and largest diameter pipe installed in a well, preventing the hole from caving in and providing a conduit for the return of drilling fluid.",
    descriptionArabic: "أول وأكبر أنبوب من حيث القطر يتم تركيبه في البئر، يمنع الحفرة من الانهيار ويوفر قناة لعودة سائل الحفر.",
    position: { x: 50, y: 90 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [28, 31, 56]
  },
  {
    id: 33,
    name: "Degasser",
    nameArabic: "مزيل الغاز",
    description: "Removes gas from the drilling fluid.",
    descriptionArabic: "يزيل الغاز من سائل الحفر.",
    position: { x: 65, y: 70 },
    category: "Fluid",
    categoryArabic: "سوائل",
    related: [18, 20, 21]
  },
  {
    id: 34,
    name: "Desander",
    nameArabic: "مزيل الرمل",
    description: "Removes sand-sized particles from the drilling fluid.",
    descriptionArabic: "يزيل الجسيمات بحجم الرمل من سائل الحفر.",
    position: { x: 65, y: 72 },
    category: "Fluid",
    categoryArabic: "سوائل",
    related: [18, 21, 35]
  },
  {
    id: 35,
    name: "Desilter",
    nameArabic: "مزيل الطمي",
    description: "Removes silt-sized particles from the drilling fluid.",
    descriptionArabic: "يزيل الجسيمات بحجم الطمي من سائل الحفر.",
    position: { x: 65, y: 74 },
    category: "Fluid",
    categoryArabic: "سوائل",
    related: [18, 21, 34]
  },
  {
    id: 36,
    name: "Drawworks",
    nameArabic: "آلة السحب",
    description: "The main hoisting machinery that raises and lowers the traveling block and whatever is attached to it.",
    descriptionArabic: "آلية الرفع الرئيسية التي ترفع وتخفض الكتلة المتحركة وأي شيء متصل بها.",
    position: { x: 40, y: 45 },
    category: "Hoisting",
    categoryArabic: "رفع",
    related: [3, 5, 27, 29, 41]
  },
  {
    id: 37,
    name: "Drill Bit",
    nameArabic: "رأس الحفر",
    description: "The cutting tool attached to the bottom of the drill string that breaks up the rock.",
    descriptionArabic: "أداة القطع المتصلة بالجزء السفلي من سلسلة الحفر التي تكسر الصخور.",
    position: { x: 50, y: 95 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [6, 8, 38]
  },
  {
    id: 38,
    name: "Drill Collars",
    nameArabic: "أطواق الحفر",
    description: "Heavy, thick-walled tubes used near the bottom of the drill string to provide weight on the bit.",
    descriptionArabic: "أنابيب ثقيلة سميكة الجدران تستخدم بالقرب من الجزء السفلي من سلسلة الحفر لتوفير الوزن على الرأس.",
    position: { x: 50, y: 75 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [8, 37]
  },
  {
    id: 39,
    name: "Driller's Console",
    nameArabic: "لوحة تحكم الحفار",
    description: "The control panel operated by the driller to control various rig functions.",
    descriptionArabic: "لوحة التحكم التي يشغلها الحفار للتحكم في وظائف الحفارة المختلفة.",
    position: { x: 30, y: 50 },
    category: "Other",
    categoryArabic: "أخرى",
    related: [9, 15, 36, 61]
  },
  {
    id: 40,
    name: "Elevators",
    nameArabic: "المصاعد",
    description: "A set of clamps that grip a stand of drill pipe, casing, or tubing so it can be raised or lowered into the wellbore.",
    descriptionArabic: "مجموعة من المشابك التي تمسك بوقفة أنبوب الحفر أو التغليف أو الأنابيب حتى يمكن رفعها أو خفضها في فتحة البئر.",
    position: { x: 45, y: 55 },
    category: "Hoisting",
    categoryArabic: "رفع",
    related: [8, 42, 52]
  },
  {
    id: 41,
    name: "Hoisting Line",
    nameArabic: "خط الرفع",
    description: "The drilling line that raises and lowers the traveling block.",
    descriptionArabic: "خط الحفر الذي يرفع ويخفض الكتلة المتحركة.",
    position: { x: 45, y: 35 },
    category: "Hoisting",
    categoryArabic: "رفع",
    related: [1, 3, 5, 27, 36, 42]
  },
  {
    id: 42,
    name: "Hook",
    nameArabic: "الخطاف",
    description: "A large hook attached to the bottom of the traveling block, used to pick up and hold the swivel, kelly, and drill string.",
    descriptionArabic: "خطاف كبير متصل بالجزء السفلي من الكتلة المتحركة، يستخدم لالتقاط وحمل المحور الدوار والكيلي وسلسلة الحفر.",
    position: { x: 50, y: 45 },
    category: "Hoisting",
    categoryArabic: "رفع",
    related: [5, 6, 40, 41, 43, 58]
  },
  {
    id: 43,
    name: "Kelly",
    nameArabic: "الكيلي",
    description: "A heavy steel pipe with a square or hexagonal cross-section that transmits rotation from the rotary table to the drill string.",
    descriptionArabic: "أنبوب فولاذي ثقيل ذو مقطع عرضي مربع أو سداسي ينقل الدوران من الطاولة الدوارة إلى سلسلة الحفر.",
    position: { x: 50, y: 50 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [8, 42, 44, 45, 51, 58]
  },
  {
    id: 44,
    name: "Kelly Bushing",
    nameArabic: "جلبة الكيلي",
    description: "A device fitted to the rotary table that transmits rotation to the kelly.",
    descriptionArabic: "جهاز مثبت على الطاولة الدوارة ينقل الدوران إلى الكيلي.",
    position: { x: 50, y: 55 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [43, 51]
  },
  {
    id: 45,
    name: "Kelly Spinner",
    nameArabic: "مدور الكيلي",
    description: "A pneumatically operated device used to spin the kelly when making up or breaking out the kelly from the drill string.",
    descriptionArabic: "جهاز يعمل بالهواء المضغوط يستخدم لتدوير الكيلي عند تركيب أو فك الكيلي من سلسلة الحفر.",
    position: { x: 48, y: 52 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [43, 51, 53]
  },
  {
    id: 46,
    name: "Mousehole",
    nameArabic: "ثقب الفأر",
    description: "A shallow boring under the rig floor, lined with casing pipe, into which a joint of drill pipe is placed temporarily for later connection to the drill string.",
    descriptionArabic: "ثقب ضحل تحت أرضية الحفارة، مبطن بأنبوب تغليف، يوضع فيه مفصل أنبوب الحفر مؤقتًا للاتصال لاحقًا بسلسلة الحفر.",
    position: { x: 45, y: 60 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [8, 49, 51, 52]
  },
  {
    id: 47,
    name: "Mud Return Line",
    nameArabic: "خط عودة الطين",
    description: "A trough or pipe that carries the drilling fluid from the wellbore to the shale shakers and mud tanks.",
    descriptionArabic: "قناة أو أنبوب ينقل سائل الحفر من فتحة البئر إلى هزازات الصخر الزيتي وخزانات الطين.",
    position: { x: 55, y: 75 },
    category: "Fluid",
    categoryArabic: "سوائل",
    related: [16, 18, 21, 26]
  },
  {
    id: 48,
    name: "Ram BOP",
    nameArabic: "مانع الانفجار الكبشي",
    description: "A type of blowout preventer that uses rams to seal the wellbore.",
    descriptionArabic: "نوع من موانع الانفجار يستخدم الكباش لإغلاق فتحة البئر.",
    position: { x: 50, y: 81 },
    category: "Safety",
    categoryArabic: "أمان",
    related: [10, 22, 25]
  },
  {
    id: 49,
    name: "Rathole",
    nameArabic: "ثقب الجرذ",
    description: "A hole in the rig floor, lined with casing pipe, into which the kelly and swivel are placed when not in use.",
    descriptionArabic: "ثقب في أرضية الحفارة، مبطن بأنبوب تغليف، يوضع فيه الكيلي والمحور الدوار عندما لا تكون قيد الاستخدام.",
    position: { x: 55, y: 60 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [43, 46, 51, 58]
  },
  {
    id: 50,
    name: "Rotary Hose",
    nameArabic: "خرطوم دوار",
    description: "A high-pressure hose that carries drilling fluid from the mud pumps to the swivel and down the drill string.",
    descriptionArabic: "خرطوم عالي الضغط ينقل سائل الحفر من مضخات الطين إلى المحور الدوار وأسفل سلسلة الحفر.",
    position: { x: 60, y: 45 },
    category: "Fluid",
    categoryArabic: "سوائل",
    related: [8, 16, 55, 58]
  },
  {
    id: 51,
    name: "Rotary Table",
    nameArabic: "الطاولة الدوارة",
    description: "A mechanical device on the rig floor that provides rotational power to turn the drill string and bit.",
    descriptionArabic: "جهاز ميكانيكي على أرضية الحفارة يوفر قوة دورانية لتدوير سلسلة الحفر ورأسها.",
    position: { x: 50, y: 57 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [6, 43, 44, 45, 46, 49, 52]
  },
  {
    id: 52,
    name: "Slips",
    nameArabic: "الماسكات",
    description: "Wedge-shaped pieces of metal with teeth that grip the drill pipe to prevent it from falling into the wellbore when it is not attached to the kelly.",
    descriptionArabic: "قطع معدنية على شكل إسفين بأسنان تمسك أنبوب الحفر لمنعه من السقوط في فتحة البئر عندما لا يكون متصلاً بالكيلي.",
    position: { x: 52, y: 58 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [8, 40, 46, 51]
  },
  {
    id: 53,
    name: "Spinning chain",
    nameArabic: "سلسلة الدوران",
    description: "A chain attached to the tongs and the cathead, used to spin the drill pipe when making up or breaking out connections.",
    descriptionArabic: "سلسلة متصلة بالكماشات ورأس البكرة، تستخدم لتدوير أنبوب الحفر عند تركيب أو فك الوصلات.",
    position: { x: 40, y: 55 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [29, 45, 59]
  },
  {
    id: 54,
    name: "Stairways",
    nameArabic: "السلالم",
    description: "Provide access to different levels of the rig.",
    descriptionArabic: "توفر الوصول إلى مستويات مختلفة من الحفارة.",
    position: { x: 35, y: 60 },
    category: "Other",
    categoryArabic: "أخرى",
    related: [9, 30, 60]
  },
  {
    id: 55,
    name: "Standpipe",
    nameArabic: "أنبوب القائم",
    description: "A vertical pipe mounted on one leg of the derrick that connects the mud pumps to the rotary hose.",
    descriptionArabic: "أنبوب عمودي مثبت على ساق واحدة من البرج يربط مضخات الطين بالخرطوم الدوار.",
    position: { x: 55, y: 40 },
    category: "Fluid",
    categoryArabic: "سوائل",
    related: [7, 16, 50]
  },
  {
    id: 56,
    name: "Surface Casing",
    nameArabic: "تغليف السطح",
    description: "The first string of casing after the conductor pipe, set deep enough to protect fresh-water aquifers.",
    descriptionArabic: "أول سلسلة تغليف بعد أنبوب الموصل، توضع بعمق كافٍ لحماية طبقات المياه العذبة.",
    position: { x: 50, y: 88 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [26, 28, 32]
  },
  {
    id: 57,
    name: "Substructure",
    nameArabic: "البنية التحتية",
    description: "The foundation on which the derrick and engines sit, providing space for wellhead equipment.",
    descriptionArabic: "الأساس الذي يجلس عليه البرج والمحركات، مما يوفر مساحة لمعدات رأس البئر.",
    position: { x: 50, y: 65 },
    category: "Other",
    categoryArabic: "أخرى",
    related: [7, 36, 51]
  },
  {
    id: 58,
    name: "Swivel",
    nameArabic: "المحور الدوار",
    description: "A mechanical device that hangs from the hook, supporting the weight of the drill string while allowing it to rotate.",
    descriptionArabic: "جهاز ميكانيكي يتدلى من الخطاف، يدعم وزن سلسلة الحفر مع السماح لها بالدوران.",
    position: { x: 50, y: 48 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [42, 43, 49, 50]
  },
  {
    id: 59,
    name: "Tongs",
    nameArabic: "الكماشات",
    description: "Large wrenches used to make up or break out drill pipe connections.",
    descriptionArabic: "مفاتيح ربط كبيرة تستخدم لتركيب أو فك وصلات أنبوب الحفر.",
    position: { x: 40, y: 57 },
    category: "Drilling",
    categoryArabic: "حفر",
    related: [8, 29, 53]
  },
  {
    id: 60,
    name: "Walkways",
    nameArabic: "الممرات",
    description: "Provide access to different areas of the rig.",
    descriptionArabic: "توفر الوصول إلى مناطق مختلفة من الحفارة.",
    position: { x: 30, y: 55 },
    category: "Other",
    categoryArabic: "أخرى",
    related: [9, 30, 54]
  },
  {
    id: 61,
    name: "Weight Indicator",
    nameArabic: "مؤشر الوزن",
    description: "A device that indicates the weight being carried by the hook, helping the driller to avoid putting too much or too little weight on the bit.",
    descriptionArabic: "جهاز يشير إلى الوزن الذي يحمله الخطاف، مما يساعد الحفار على تجنب وضع وزن كبير جدًا أو قليل جدًا على الرأس.",
    position: { x: 35, y: 48 },
    category: "Other",
    categoryArabic: "أخرى",
    related: [8, 37, 39]
  }
];

// Helper function to map Arabic categories to English for color lookup
function categoryArabicToEnglish(arabicCategory: string): string {
  const categoryMap: Record<string, string> = {
    'رفع': 'Hoisting',
    'حفر': 'Drilling',
    'طاقة': 'Power',
    'سوائل': 'Fluid',
    'أمان': 'Safety',
    'إسكان': 'Housing',
    'تخزين': 'Storage',
    'أخرى': 'Other'
  };

  return categoryMap[arabicCategory] || 'Other';
}

export const getCategoryColor = (category: string): string => {
  const colorMap: Record<string, string> = {
    'Hoisting': '#0EA5E9',  // Light blue
    'Drilling': '#22C55E',  // Green
    'Power': '#F59E0B',     // Amber
    'Fluid': '#3B82F6',     // Blue
    'Safety': '#EF4444',    // Red
    'Housing': '#8B5CF6',   // Purple
    'Storage': '#EC4899',   // Pink
    'Other': '#6B7280',     // Gray
  };

  return colorMap[category] || '#6B7280';
};

export const getComponentById = (id: number): RigComponent | undefined => {
  return rigComponents.find(component => component.id === id);
};

export const getRelatedComponents = (id: number): RigComponent[] => {
  const component = getComponentById(id);
  if (!component) return [];
  
  return component.related
    .map(relatedId => getComponentById(relatedId))
    .filter((c): c is RigComponent => c !== undefined);
};

export const groupComponentsByCategory = () => {
  const grouped: Record<string, RigComponent[]> = {};
  
  rigComponents.forEach(component => {
    if (!grouped[component.category]) {
      grouped[component.category] = [];
    }
    grouped[component.category].push(component);
  });
  
  return grouped;
};
