import {
  Sprout,
  PenLine,
  BarChart3,
  Bot,
  Landmark,
  Database,
  type LucideIcon,
} from "lucide-react";

/* ====== NAVIGATION ====== */

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "痛点", href: "#pain-points" },
  { label: "核心模块", href: "#core-modules" },
  { label: "数据", href: "#data-showcase" },
  { label: "流程", href: "#workflow" },
  { label: "案例", href: "#cases" },
];

/* ====== HERO ====== */

export const HERO = {
  highlight: "AI驱动",
  title: "的乡村创业孵化平台",
  subtitle:
    "从注册到运营，从内容到销售，一站式解决方案让乡村创业更简单",
  ctaPrimary: "立即开始",
  ctaSecondary: "查看数据看板",
};

/* ====== PAIN POINTS ====== */

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
  solution: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: "📋",
    title: "注册流程复杂",
    description: "不了解政策，材料准备繁琐，跑多个部门耗时耗力",
    solution: "AI自动生成注册材料，一人公司快速落地",
  },
  {
    icon: "📝",
    title: "缺少内容能力",
    description: "不懂文案、不会拍视频，农产品卖点难以传达",
    solution: "AI一键生成文案、脚本、海报，内容生产零门槛",
  },
  {
    icon: "📊",
    title: "销售渠道单一",
    description: "依赖传统收购渠道，定价被动，利润空间被压缩",
    solution: "智能定价+产销匹配，直连市场，利润最大化",
  },
  {
    icon: "🌐",
    title: "缺乏数字技能",
    description: "不懂直播、不懂电商，数字化转型无从下手",
    solution: "数字人24小时无人直播，AI帮你带货",
  },
];

/* ====== CORE MODULES ====== */

export interface ModuleFeature {
  name: string;
}

export interface CoreModule {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href: string;
}

export const CORE_MODULES: CoreModule[] = [
  {
    icon: Sprout,
    title: "创业孵化",
    description:
      "AI驱动的创业全周期支持，从注册到运营一站式智能服务",
    features: ["注册服务", "赛道匹配", "智能合同", "风险预警"],
    href: "/modules/incubation",
  },
  {
    icon: PenLine,
    title: "内容生产",
    description:
      "多渠道AI内容生成，让乡村创业者轻松打造品牌影响力",
    features: ["AI文案", "短视频脚本", "直播话术", "视觉物料"],
    href: "/modules/content",
  },
  {
    icon: BarChart3,
    title: "产销匹配",
    description:
      "数据驱动的智能供销决策，让农产品卖得快、卖得好",
    features: ["智能定价", "选品预测", "收益核算"],
    href: "/modules/matching",
  },
  {
    icon: Bot,
    title: "数字人直播",
    description:
      "乡村风格数字人24小时直播带货，无人值守也能创收",
    features: ["AI数字人", "无人值守", "智能互动", "直播统计"],
    href: "/modules/livestream",
  },
  {
    icon: Landmark,
    title: "乡村文化",
    description:
      "挖掘乡村文化价值，打造独特IP，推动文旅融合发展",
    features: ["文化提炼", "IP设计", "文旅内容", "变现方案"],
    href: "/modules/culture",
  },
  {
    icon: Database,
    title: "数据管理",
    description:
      "全面的运营数据看板，用数据驱动决策，让增长可量化",
    features: ["运营统计", "数据分析", "趋势预测", "智能报表"],
    href: "/modules/data",
  },
];

/* ====== DATA SHOWCASE ====== */

export interface DataStat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export const DATA_STATS: DataStat[] = [
  { label: "累计服务农户", value: 50000, suffix: "+", prefix: "" },
  { label: "平台交易额", value: 2.3, suffix: "亿+", prefix: "" },
  { label: "覆盖区县", value: 300, suffix: "+", prefix: "" },
];

/* ====== WORKFLOW ====== */

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "注册入驻",
    description: "AI辅助完成平台注册，自动生成所需材料，快速完成入驻",
    duration: "约10分钟",
  },
  {
    step: 2,
    title: "智能匹配",
    description: "基于你的资源和能力，AI推荐最适合的创业赛道和发展方向",
    duration: "即时匹配",
  },
  {
    step: 3,
    title: "AI运营",
    description: "内容自动生成、数字人直播上线、产销数据实时对接",
    duration: "持续运营",
  },
  {
    step: 4,
    title: "产销变现",
    description: "智能定价、渠道匹配、收益核算，实现稳定盈利增长",
    duration: "持续收益",
  },
];

/* ====== CASES ====== */

export interface CaseStudy {
  name: string;
  location: string;
  result: string;
  quote: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: "李明",
    location: "四川省雅安市",
    result: "通过数字人直播，猕猴桃销售额增长320%",
    quote:
      "以前我们只能等批发商来收，现在有了数字人直播，我们的猕猴桃直接卖到了全国各地。",
  },
  {
    name: "王芳",
    location: "贵州省黔东南州",
    result: "AI内容生产帮助苗绣产品打开全国市场",
    quote:
      "AI帮我写文案、做海报，我一个初中文化的农村妇女也能做出专业的产品宣传。",
  },
  {
    name: "张建国",
    location: "山东省临沂市",
    result: "产销匹配系统让蔬菜种植收益提升180%",
    quote:
      "智能定价告诉我什么时候卖、卖多少钱最合适，再也不用被中间商压价了。",
  },
];

/* ====== FOOTER ====== */

export const FOOTER = {
  description:
    "AI驱动的乡村创业孵化平台，致力于用科技力量赋能每一位乡村创业者，让创业更简单、让乡村更美好。",
  quickLinks: [
    { label: "关于我们", href: "#" },
    { label: "服务协议", href: "#" },
    { label: "隐私政策", href: "#" },
    { label: "帮助中心", href: "#" },
  ],
  serviceModules: [
    { label: "创业孵化", href: "#core-modules" },
    { label: "内容生产", href: "#core-modules" },
    { label: "产销匹配", href: "#core-modules" },
    { label: "数字人直播", href: "#core-modules" },
  ],
  contact: {
    email: "contact@rural-incubation.cn",
    phone: "400-XXX-XXXX",
    address: "北京市海淀区中关村科技园",
  },
  copyright: "© 2026 乡村创业孵化平台. All rights reserved.",
  icp: "京ICP备XXXXXXXX号",
};
