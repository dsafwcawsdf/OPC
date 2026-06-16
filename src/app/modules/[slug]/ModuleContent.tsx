"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sprout,
  PenLine,
  BarChart3,
  Bot,
  Landmark,
  Database,
  Sparkles,
  Upload,
  Send,
  MapPin,
  TrendingUp,
  ShoppingCart,
  Users,
  DollarSign,
  MessageCircle,
  Play,
  FileText,
  ShieldAlert,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  Video,
  Mic,
  Palette,
  Calculator,
  PieChart,
  Monitor,
  SlidersHorizontal,
  LayoutDashboard,
  Lightbulb,
  Zap,
  UserCheck,
} from "lucide-react";
import { CORE_MODULES } from "@/lib/constants";
import RegionSelector from "@/components/ui/RegionSelector";

/* ==========================================================================
   Per-module form content (matching original Coze site patterns)
   ========================================================================== */

/* ==========================================================================
   Incubation — 4-tab module: AI注册服务 / 创业匹配 / 合同服务 / 风险预警
   ========================================================================== */

const INCUBATION_TABS = [
  { key: "registration", label: "AI注册服务", icon: FileText },
  { key: "match", label: "创业匹配", icon: Target },
  { key: "contract", label: "合同服务", icon: ShieldAlert },
  { key: "risk", label: "风险预警", icon: AlertTriangle },
] as const;

type IncubationTab = (typeof INCUBATION_TABS)[number]["key"];

/* ---- Tab 1: AI注册服务 ---- */

function RegistrationForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">您的姓名</label>
        <input type="text" placeholder="请输入姓名" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">所在地区</label>
        <RegionSelector columns={2} showDistrict={false} />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">创业赛道</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>请选择创业赛道</option>
          <option>农产品种植与销售</option><option>农产品电商</option><option>农产品直播带货</option>
          <option>乡村旅游</option><option>农产品加工</option><option>农业技术服务</option>
          <option>农产品物流</option><option>农产品品牌运营</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">法定代表人</label>
        <input type="text" placeholder="请输入法定代表人姓名" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">注册资本（万元）</label>
        <input type="text" placeholder="请输入注册资本" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Sparkles size={16} />生成注册材料
      </button>
    </div>
  );
}

function RegistrationResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Sparkles size={16} />AI将为您生成以下注册材料
      </div>
      {["一人有限公司章程", "注册申请书", "法定代表人任职文件", "经营场所使用证明", "企业名称预先核准申请书"].map((doc, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg hover:border-green-primary/20 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <span className="text-sm text-text-dark font-medium">{doc}</span>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body">待生成</span>
        </div>
      ))}
    </div>
  );
}

/* ---- Tab 2: 创业匹配 ---- */

function MatchForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">个人优势</label>
        <textarea rows={2} placeholder="请描述您的技能、经验和资源优势..." className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all resize-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">意向赛道</label>
        <div className="grid grid-cols-2 gap-2">
          {["农产品种植与销售", "农产品电商", "农产品直播带货", "乡村旅游", "农产品加工", "农业技术服务", "农产品物流", "农产品品牌运营"].map((track) => (
            <label key={track} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="checkbox" className="accent-green-primary" />{track}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">可用资金（万元）</label>
        <input type="text" placeholder="请输入可投入的启动资金" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">期望月收入（元）</label>
        <input type="text" placeholder="请输入期望的月收入目标" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Target size={16} />智能匹配赛道
      </button>
    </div>
  );
}

function MatchResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Target size={16} />AI将为您匹配最优创业赛道
      </div>
      {[
        { label: "赛道匹配分析", desc: "基于个人优势与市场趋势的智能匹配" },
        { label: "竞争力评估", desc: "评估您在各个赛道的竞争优势" },
        { label: "投入产出预测", desc: "预估各赛道的投入成本与预期收益" },
        { label: "政策适配建议", desc: "匹配当地扶持政策与创业方向" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写左侧表单后，AI将智能分析并推荐最适合您的创业赛道</p>
      </div>
    </div>
  );
}

/* ---- Tab 3: 合同服务 ---- */

function ContractForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">合同类型</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>请选择合同类型</option>
          <option>农产品购销合同</option><option>土地流转合同</option><option>劳务用工合同</option>
          <option>品牌授权合同</option><option>合伙经营协议</option><option>电商平台入驻协议</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">甲方信息（您的信息）</label>
        <input type="text" placeholder="姓名 / 企业名称" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">乙方信息</label>
        <input type="text" placeholder="对方姓名 / 企业名称" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">合同金额（元）</label>
        <input type="text" placeholder="请输入合同涉及金额" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <ShieldAlert size={16} />生成合同并审查风险
      </button>
    </div>
  );
}

function ContractResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <ShieldAlert size={16} />智能合同生成与风险识别
      </div>
      {[
        { name: "合同正文生成", desc: "根据合同类型自动生成标准合同文本", icon: FileText },
        { name: "关键条款标注", desc: "自动标注合同中的关键责任条款", icon: Zap },
        { name: "风险条款识别", desc: "AI审查并标记潜在风险条款", icon: AlertTriangle },
        { name: "合规性审查", desc: "检查合同是否符合最新法规要求", icon: CheckCircle },
        { name: "修改建议报告", desc: "生成合同风险修改建议报告", icon: Sparkles },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-muted-bg">
          <div className="w-8 h-8 rounded-lg bg-tech-purple-light flex items-center justify-center shrink-0">
            <item.icon size={15} className="text-tech-purple" strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-sm text-text-dark font-medium">{item.name}</span>
            <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写左侧合同信息后，AI将为您生成标准合同并进行风险审查</p>
      </div>
    </div>
  );
}

/* ---- Tab 4: 风险预警 ---- */

function RiskForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">监控范围</label>
        <div className="grid grid-cols-2 gap-2">
          {["税务合规", "合同履约", "市场波动", "资金流转", "政策变更", "知识产权"].map((area) => (
            <label key={area} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="checkbox" className="accent-green-primary" defaultChecked={area === "税务合规" || area === "合同履约"} />{area}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">预警通知方式</label>
        <div className="grid grid-cols-2 gap-2">
          {["短信提醒", "平台消息", "邮件通知"].map((ch) => (
            <label key={ch} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="checkbox" className="accent-green-primary" defaultChecked />{ch}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">预警阈值设置</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>高风险：立即通知</option><option>中风险及以上：每日汇总</option><option>所有风险：每周报告</option>
        </select>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <AlertTriangle size={16} />开启风险监控
      </button>
    </div>
  );
}

function RiskResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <AlertTriangle size={16} />实时风险监控看板
      </div>
      {[
        { label: "税务申报提醒", desc: "监控税务申报截止日期，自动推送提醒", icon: Clock },
        { label: "合同履约监控", desc: "跟踪合同关键时间节点与履约状态", icon: FileText },
        { label: "市场行情预警", desc: "监测主营产品价格波动与市场风险", icon: TrendingUp },
        { label: "政策合规检查", desc: "实时同步最新政策法规，评估合规风险", icon: ShieldAlert },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-muted-bg">
          <div className="w-10 h-10 rounded-lg bg-muted-bg flex items-center justify-center shrink-0">
            <item.icon size={18} className="text-text-body" strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-sm font-medium text-text-dark">{item.label}</span>
            <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待监控</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">设置监控范围并开启后，AI将实时监测风险并推送预警通知</p>
      </div>
    </div>
  );
}

/* ---- Combined IncubationModule with tab state ---- */

function IncubationForm() {
  const [activeTab, setActiveTab] = useState<IncubationTab>("registration");

  const FormByTab: Record<IncubationTab, React.ComponentType> = {
    registration: RegistrationForm,
    match: MatchForm,
    contract: ContractForm,
    risk: RiskForm,
  };

  const ResultByTab: Record<IncubationTab, React.ComponentType> = {
    registration: RegistrationResult,
    match: MatchResult,
    contract: ContractResult,
    risk: RiskResult,
  };

  const ActiveForm = FormByTab[activeTab];
  const ActiveResult = ResultByTab[activeTab];

  return (
    <div>
      {/* 4 stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {INCUBATION_TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 text-left ${
                isActive
                  ? "bg-green-primary text-white border-green-primary shadow-lg shadow-green-primary/25 scale-[1.03]"
                  : "bg-white text-text-body border-muted-bg hover:border-green-primary/30 hover:shadow-sm"
              }`}
            >
              <tab.icon size={22} strokeWidth={1.5} className={isActive ? "text-white" : "text-green-primary"} />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              信息填写
            </h2>
            <ActiveForm />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              生成结果
            </h2>
            <ActiveResult />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Content — 4-tab module: AI文案 / 短视频脚本 / 直播话术 / 视觉物料
   ========================================================================== */

const CONTENT_TABS = [
  { key: "copywriting", label: "AI文案", icon: PenLine },
  { key: "script", label: "短视频脚本", icon: Video },
  { key: "livestreamScript", label: "直播话术", icon: Mic },
  { key: "visual", label: "视觉物料", icon: Palette },
] as const;

type ContentTab = (typeof CONTENT_TABS)[number]["key"];

/* ---- Content Tab 1: AI文案 ---- */

function CopywritingForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">产品名称</label>
        <input type="text" placeholder="请输入您的农产品名称" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">关键词</label>
        <input type="text" placeholder="用逗号分隔，如：有机、新鲜、产地直发" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">发布渠道</label>
        <div className="grid grid-cols-2 gap-2">
          {["抖音", "小红书", "视频号", "快手", "淘宝", "拼多多"].map((ch) => (
            <label key={ch} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="checkbox" className="accent-green-primary" />{ch}
            </label>
          ))}
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Sparkles size={16} />生成营销文案
      </button>
    </div>
  );
}

function CopywritingResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <PenLine size={16} />AI将为您生成多渠道营销文案
      </div>
      {[
        { channel: "抖音文案", desc: "短视频口播文案 + 话题标签推荐" },
        { channel: "小红书文案", desc: "种草笔记风格 + 关键词优化" },
        { channel: "视频号文案", desc: "适合微信生态的朋友圈+视频文案" },
        { channel: "淘宝详情页", desc: "产品卖点提炼 + 用户评价引导" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.channel}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写产品信息后，AI将为您生成适配各渠道的营销文案</p>
      </div>
    </div>
  );
}

/* ---- Content Tab 2: 短视频脚本 ---- */

function ScriptForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">产品名称</label>
        <input type="text" placeholder="请输入产品名称" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">视频时长</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>15秒（短视频）</option><option>30秒（标准长度）</option><option>60秒（详细展示）</option><option>3分钟（深度内容）</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">视频风格</label>
        <div className="grid grid-cols-2 gap-2">
          {["田间实拍", "开箱测评", "产地溯源", "农人故事", "烹饪教程", "对比评测"].map((s) => (
            <label key={s} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="radio" name="scriptStyle" className="accent-green-primary" />{s}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">核心卖点</label>
        <textarea rows={2} placeholder="用一两句话描述产品的核心卖点..." className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all resize-none" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Video size={16} />生成短视频脚本
      </button>
    </div>
  );
}

function ScriptResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Video size={16} />AI将为您生成短视频拍摄脚本
      </div>
      {[
        { label: "分镜脚本", desc: "逐镜头详细脚本，含画面描述与台词" },
        { label: "拍摄清单", desc: "所需道具、场景、人员的准备清单" },
        { label: "口播台词", desc: "自然流畅的口播内容，适配视频节奏" },
        { label: "BGM推荐", desc: "匹配视频风格的背景音乐建议" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写视频信息后，AI将为您生成专业的短视频拍摄脚本</p>
      </div>
    </div>
  );
}

/* ---- Content Tab 3: 直播话术 ---- */

function LivestreamScriptForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">产品名称</label>
        <input type="text" placeholder="请输入直播带货的产品名称" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">直播平台</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>抖音直播</option><option>快手直播</option><option>视频号直播</option><option>淘宝直播</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">直播时长</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>1小时</option><option>2小时</option><option>3小时</option><option>4小时及以上</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">产品价格</label>
        <input type="text" placeholder="请输入直播售价及日常价对比" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Mic size={16} />生成直播话术
      </button>
    </div>
  );
}

function LivestreamScriptResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Mic size={16} />AI将为您生成全套直播话术
      </div>
      {[
        { label: "开场暖场话术", desc: "吸引观众停留、引导点赞关注的互动话术" },
        { label: "产品讲解话术", desc: "围绕卖点的详细产品介绍与信任建立" },
        { label: "促单逼单话术", desc: "限时优惠、库存紧张的紧迫感营造话术" },
        { label: "互动留人话术", desc: "弹幕回应、抽奖互动、问题解答模板" },
        { label: "结束收尾话术", desc: "下播引导关注、下场预告的收尾内容" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写直播信息后，AI将为您生成完整的直播带货话术脚本</p>
      </div>
    </div>
  );
}

/* ---- Content Tab 4: 视觉物料 ---- */

function VisualForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">产品名称</label>
        <input type="text" placeholder="请输入产品名称" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">物料类型</label>
        <div className="grid grid-cols-2 gap-2">
          {["产品海报", "主图设计", "详情页长图", "直播间背景", "Logo设计", "包装设计"].map((t) => (
            <label key={t} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="checkbox" className="accent-green-primary" />{t}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">设计风格</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>清新自然风</option><option>国潮田园风</option><option>简约现代风</option><option>手绘插画风</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">品牌名称（选填）</label>
        <input type="text" placeholder="如有品牌请输入品牌名称" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Palette size={16} />生成视觉物料
      </button>
    </div>
  );
}

function VisualResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Palette size={16} />AI将为您生成视觉物料方案
      </div>
      {[
        { label: "主视觉设计稿", desc: "产品主图/海报的AI生成设计方案" },
        { label: "配色方案", desc: "匹配产品调性的色彩搭配方案" },
        { label: "文案排版建议", desc: "物料中核心文案的字体、大小、位置建议" },
        { label: "多尺寸适配", desc: "适配各平台尺寸要求的物料变体" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写物料需求后，AI将为您生成视觉设计方案与多尺寸素材</p>
      </div>
    </div>
  );
}

/* ---- Combined ContentModule with tab state ---- */

function ContentForm() {
  const [activeTab, setActiveTab] = useState<ContentTab>("copywriting");

  const FormByTab: Record<ContentTab, React.ComponentType> = {
    copywriting: CopywritingForm,
    script: ScriptForm,
    livestreamScript: LivestreamScriptForm,
    visual: VisualForm,
  };

  const ResultByTab: Record<ContentTab, React.ComponentType> = {
    copywriting: CopywritingResult,
    script: ScriptResult,
    livestreamScript: LivestreamScriptResult,
    visual: VisualResult,
  };

  const ActiveForm = FormByTab[activeTab];
  const ActiveResult = ResultByTab[activeTab];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {CONTENT_TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 text-left ${
                isActive
                  ? "bg-green-primary text-white border-green-primary shadow-lg shadow-green-primary/25 scale-[1.03]"
                  : "bg-white text-text-body border-muted-bg hover:border-green-primary/30 hover:shadow-sm"
              }`}
            >
              <tab.icon size={22} strokeWidth={1.5} className={isActive ? "text-white" : "text-green-primary"} />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              信息填写
            </h2>
            <ActiveForm />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              生成结果
            </h2>
            <ActiveResult />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Production — 3-tab module: 分级定价 / 选品预测 / 收益核算
   ========================================================================== */

const PRODUCTION_TABS = [
  { key: "pricing", label: "分级定价", icon: BarChart3 },
  { key: "forecast", label: "选品预测", icon: TrendingUp },
  { key: "accounting", label: "收益核算", icon: Calculator },
] as const;

type ProductionTab = (typeof PRODUCTION_TABS)[number]["key"];

/* ---- Production Tab 1: 分级定价 ---- */

function PricingForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">上传产品图片</label>
        <div className="border-2 border-dashed border-muted-bg rounded-xl p-8 text-center hover:border-green-primary/40 transition-colors cursor-pointer bg-white/50">
          <Upload size={32} className="mx-auto mb-3 text-text-body" />
          <p className="text-sm text-text-body">点击或拖拽上传图片</p>
          <p className="text-xs text-text-body/60 mt-1">支持 JPG、PNG，最大 10MB</p>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">产品名称</label>
        <input type="text" placeholder="请输入农产品名称" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">产品品类</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>请选择产品品类</option><option>水果</option><option>蔬菜</option><option>茶叶</option><option>粮油</option><option>畜禽</option><option>水产</option>
        </select>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <BarChart3 size={16} />开始智能分级分析
      </button>
    </div>
  );
}

function PricingResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <BarChart3 size={16} />AI将为您生成分级定价方案
      </div>
      {[
        { label: "产品等级分拣", desc: "基于图像识别自动分级：一级果、二级果、三级果" },
        { label: "市场行情比对", desc: "对比同类产品当前市场批发与零售价格" },
        { label: "分级定价建议", desc: "各等级产品的差异化定价策略与渠道建议" },
        { label: "竞品价格分析", desc: "周边产区同品类产品的价格分布对比" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">上传产品图片并填写信息后，AI将为您生成分级定价方案</p>
      </div>
    </div>
  );
}

/* ---- Production Tab 2: 选品预测 ---- */

function ForecastForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">产品品类</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>请选择产品品类</option><option>水果</option><option>蔬菜</option><option>茶叶</option><option>粮油</option><option>畜禽</option><option>水产</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">目标市场</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>请选择目标市场</option><option>一线城市</option><option>二三线城市</option><option>县域市场</option><option>线上电商</option><option>出口贸易</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">上市季节</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>春季（3-5月）</option><option>夏季（6-8月）</option><option>秋季（9-11月）</option><option>冬季（12-2月）</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">预计产量（斤）</label>
        <input type="text" placeholder="请输入预计产量" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <TrendingUp size={16} />开始选品预测
      </button>
    </div>
  );
}

function ForecastResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <TrendingUp size={16} />AI将为您生成选品预测报告
      </div>
      {[
        { label: "市场需求预测", desc: "基于历史数据与季节因素的需求量预估" },
        { label: "竞争格局分析", desc: "同品类在目标市场的供给量与竞争态势" },
        { label: "价格走势预测", desc: "未来3-6个月的价格波动趋势分析" },
        { label: "最佳上市窗口", desc: "结合供需缺口推荐的最佳上市时间窗口" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写产品与市场信息后，AI将为您生成选品预测报告</p>
      </div>
    </div>
  );
}

/* ---- Production Tab 3: 收益核算 ---- */

function AccountingForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">产品名称</label>
        <input type="text" placeholder="请输入产品名称" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">单位成本（元/斤）</label>
        <input type="text" placeholder="含种植、人工、物流等综合成本" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">预计售价（元/斤）</label>
          <input type="text" placeholder="请输入售价" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">预计销量（斤）</label>
          <input type="text" placeholder="请输入销量" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">其他费用（元）</label>
        <input type="text" placeholder="包装、运输、平台佣金等其他费用" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Calculator size={16} />开始收益核算
      </button>
    </div>
  );
}

function AccountingResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Calculator size={16} />AI将为您生成收益核算报告
      </div>
      {[
        { label: "成本结构分析", desc: "各项成本占比与优化空间分析" },
        { label: "利润预测", desc: "不同销量与价格情景下的利润测算" },
        { label: "农户分红计算", desc: "合作社/公司模式下农户应得分红计算" },
        { label: "投入产出比评估", desc: "ROI分析与投资回收周期预估" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写成本与销售信息后，AI将为您生成收益核算报告</p>
      </div>
    </div>
  );
}

/* ---- Combined Production module ---- */

function ProductionForm() {
  const [activeTab, setActiveTab] = useState<ProductionTab>("pricing");

  const FormByTab: Record<ProductionTab, React.ComponentType> = {
    pricing: PricingForm,
    forecast: ForecastForm,
    accounting: AccountingForm,
  };

  const ResultByTab: Record<ProductionTab, React.ComponentType> = {
    pricing: PricingResult,
    forecast: ForecastResult,
    accounting: AccountingResult,
  };

  const ActiveForm = FormByTab[activeTab];
  const ActiveResult = ResultByTab[activeTab];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {PRODUCTION_TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 text-left ${
                isActive
                  ? "bg-green-primary text-white border-green-primary shadow-lg shadow-green-primary/25 scale-[1.03]"
                  : "bg-white text-text-body border-muted-bg hover:border-green-primary/30 hover:shadow-sm"
              }`}
            >
              <tab.icon size={22} strokeWidth={1.5} className={isActive ? "text-white" : "text-green-primary"} />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              信息填写
            </h2>
            <ActiveForm />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              生成结果
            </h2>
            <ActiveResult />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Digital Human — 4-tab: 直播控制 / 数字人定制 / 直播配置 / 数据统计
   ========================================================================== */

const DIGITAL_HUMAN_TABS = [
  { key: "control", label: "直播控制", icon: Monitor },
  { key: "customize", label: "数字人定制", icon: Bot },
  { key: "config", label: "直播配置", icon: SlidersHorizontal },
  { key: "stats", label: "数据统计", icon: BarChart3 },
] as const;

type DigitalHumanTab = (typeof DIGITAL_HUMAN_TABS)[number]["key"];

/* ---- DH Tab 1: 直播控制 ---- */

function ControlForm() {
  return (
    <div className="space-y-5">
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-light flex items-center justify-center">
          <Bot size={32} className="text-green-primary" strokeWidth={1.5} />
        </div>
        <p className="text-sm font-bold text-text-dark">直播间状态</p>
        <p className="text-xs text-text-body mt-1 mb-3">当前未开播</p>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
          <Play size={16} className="fill-white" />开始直播
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">选择数字人</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>乡村大叔 - 老王</option><option>朴实大姐 - 阿芳</option><option>新农人小哥 - 小张</option><option>农业专家 - 李教授</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">选择商品</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>猕猴桃（一级果）</option><option>茶叶（明前龙井）</option><option>蜂蜜（土蜂蜜）</option>
        </select>
      </div>
    </div>
  );
}

function ControlResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Monitor size={16} />直播预览与控制面板
      </div>
      <div className="aspect-video rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-muted-bg flex items-center justify-center">
        <div className="text-center">
          <Bot size={48} className="mx-auto mb-3 text-white/40" />
          <p className="text-white/60 text-sm">数字人预览区域</p>
          <p className="text-white/30 text-xs mt-1">点击"开始直播"后在此展示</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-muted-bg">
        <div className="w-2 h-2 rounded-full bg-text-body/40" />
        <span className="text-sm text-text-body">等待开播</span>
        <span className="text-xs text-text-body ml-auto">实时观众: 0</span>
      </div>
    </div>
  );
}

/* ---- DH Tab 2: 数字人定制 ---- */

function CustomizeForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">数字人名称</label>
        <input type="text" placeholder="给你的数字人起个名字" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">外观形象</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>乡村风格 - 亲切大叔</option><option>乡村风格 - 朴实大姐</option><option>青春风格 - 新农人小哥</option><option>专业风格 - 农业专家</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">语音风格</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>热情亲切 - 普通话</option><option>淳朴自然 - 带方言</option><option>专业严谨 - 标准播音</option><option>活泼幽默 - 网络流行语</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">带货风格</label>
        <div className="grid grid-cols-2 gap-2">
          {["真诚推荐型", "专业讲解型", "故事分享型", "限时促销型"].map((s) => (
            <label key={s} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="radio" name="salesStyle" className="accent-green-primary" />{s}
            </label>
          ))}
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Bot size={16} />保存数字人
      </button>
    </div>
  );
}

function CustomizeResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Bot size={16} />数字人形象预览
      </div>
      <div className="aspect-video rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-muted-bg flex items-center justify-center">
        <div className="text-center">
          <Bot size={48} className="mx-auto mb-3 text-white/40" />
          <p className="text-white/60 text-sm">3D数字人预览区域</p>
          <p className="text-white/30 text-xs mt-1">保存数字人后将在此展示形象</p>
        </div>
      </div>
      {[
        { label: "形象参数", desc: "外观、服装、表情等个性化设置" },
        { label: "语音合成", desc: "音色、语速、口音的AI合成效果" },
        { label: "动作库", desc: "挥手、拿产品、点赞等直播常用动作" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-full bg-muted-bg text-text-body shrink-0">未设置</span>
        </div>
      ))}
    </div>
  );
}

/* ---- DH Tab 3: 直播配置 ---- */

function ConfigForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">直播场景</label>
        <div className="grid grid-cols-2 gap-2">
          {["田间地头", "果园采摘", "加工车间", "农家小院"].map((scene) => (
            <label key={scene} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="radio" name="scene" className="accent-green-primary" />{scene}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">直播时长</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>2小时</option><option>4小时</option><option>8小时（全天）</option><option>24小时（不间断）</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">智能互动模式</label>
        <div className="space-y-2">
          {["自动回复弹幕提问", "自动引导关注加购", "智能识别高意向用户", "定时发放优惠券"].map((m) => (
            <label key={m} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="checkbox" className="accent-green-primary" defaultChecked />{m}
            </label>
          ))}
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <SlidersHorizontal size={16} />保存配置
      </button>
    </div>
  );
}

function ConfigResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <SlidersHorizontal size={16} />当前直播配置
      </div>
      {[
        { label: "场景设置", value: "未选择" },
        { label: "直播时长", value: "未设置" },
        { label: "商品列表", value: "未添加" },
        { label: "互动模式", value: "未开启" },
        { label: "推流地址", value: "未配置" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white border border-muted-bg">
          <span className="text-sm text-text-dark">{item.label}</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body">{item.value}</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">配置完成后，直播将按照设定参数自动运行</p>
      </div>
    </div>
  );
}

/* ---- DH Tab 4: 数据统计 ---- */

function StatsForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">统计周期</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>今日</option><option>本周</option><option>本月</option><option>近30天</option><option>自定义范围</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">选择直播间</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>全部直播间</option><option>猕猴桃专场</option><option>茶叶专场</option><option>综合带货</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">数据维度</label>
        <div className="grid grid-cols-2 gap-2">
          {["观众数据", "交易数据", "互动数据", "商品数据"].map((d) => (
            <label key={d} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="checkbox" className="accent-green-primary" defaultChecked />{d}
            </label>
          ))}
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <BarChart3 size={16} />查看数据报告
      </button>
    </div>
  );
}

function StatsResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <BarChart3 size={16} />直播数据统计看板
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "累计观看", value: "0", icon: Users },
          { label: "订单数", value: "0", icon: ShoppingCart },
          { label: "交易额", value: "¥0", icon: DollarSign },
          { label: "互动率", value: "0%", icon: MessageCircle },
        ].map((item) => (
          <div key={item.label} className="p-4 rounded-xl bg-white border border-muted-bg text-center">
            <item.icon size={16} className="text-text-body mx-auto mb-2" strokeWidth={1.5} />
            <p className="text-lg font-bold text-text-dark">{item.value}</p>
            <p className="text-xs text-text-body">{item.label}</p>
          </div>
        ))}
      </div>
      {/* Line chart */}
      <div className="p-5 rounded-xl bg-white border border-muted-bg">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-text-dark">观看人数趋势</span>
          <div className="flex items-center gap-3">
            {["观看", "订单", "互动"].map((s, i) => (
              <label key={s} className="flex items-center gap-1.5 text-xs text-text-body cursor-pointer">
                <span className={`w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-green-primary" : i === 1 ? "bg-tech-purple" : "bg-gold"}`} />
                {s}
              </label>
            ))}
          </div>
        </div>
        <div className="relative w-full" style={{ height: "180px" }}>
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-6 w-10 flex flex-col justify-between text-[10px] text-text-body/60">
            <span>1,000</span><span>750</span><span>500</span><span>250</span><span>0</span>
          </div>
          {/* Chart area */}
          <svg className="absolute left-10 right-0 top-0 bottom-6" viewBox="0 0 400 162" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 40.5, 81, 121.5, 162].map((y, i) => (
              <line key={i} x1="0" y1={y} x2="400" y2={y} stroke="#E8F5EC" strokeWidth="1" />
            ))}
            {/* Flat baseline — no data yet */}
            <line x1="0" y1="162" x2="400" y2="162" stroke="#E0E8E0" strokeWidth="1" strokeDasharray="6,3" />
          </svg>
          {/* X-axis labels */}
          <div className="absolute left-10 right-0 bottom-0 flex justify-between text-[10px] text-text-body/60">
            {["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">暂无直播数据，开播后将自动统计</p>
      </div>
    </div>
  );
}

/* ---- Combined DigitalHuman module ---- */

function DigitalHumanForm() {
  const [activeTab, setActiveTab] = useState<DigitalHumanTab>("control");

  const FormByTab: Record<DigitalHumanTab, React.ComponentType> = {
    control: ControlForm,
    customize: CustomizeForm,
    config: ConfigForm,
    stats: StatsForm,
  };

  const ResultByTab: Record<DigitalHumanTab, React.ComponentType> = {
    control: ControlResult,
    customize: CustomizeResult,
    config: ConfigResult,
    stats: StatsResult,
  };

  const ActiveForm = FormByTab[activeTab];
  const ActiveResult = ResultByTab[activeTab];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {DIGITAL_HUMAN_TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 text-left ${
                isActive
                  ? "bg-green-primary text-white border-green-primary shadow-lg shadow-green-primary/25 scale-[1.03]"
                  : "bg-white text-text-body border-muted-bg hover:border-green-primary/30 hover:shadow-sm"
              }`}
            >
              <tab.icon size={22} strokeWidth={1.5} className={isActive ? "text-white" : "text-green-primary"} />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              控制面板
            </h2>
            <ActiveForm />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              预览与数据
            </h2>
            <ActiveResult />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Culture — 4-tab: 文化提炼 / IP设计 / 文旅内容 / 运营建议
   ========================================================================== */

const CULTURE_TABS = [
  { key: "refine", label: "文化提炼", icon: Landmark },
  { key: "ip", label: "IP设计", icon: Palette },
  { key: "tourism", label: "文旅内容", icon: MapPin },
  { key: "ops", label: "运营建议", icon: TrendingUp },
] as const;

type CultureTab = (typeof CULTURE_TABS)[number]["key"];

/* ---- Culture Tab 1: 文化提炼 ---- */

function RefineForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">乡村名称</label>
        <input type="text" placeholder="请输入乡村名称" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">地理位置</label>
        <RegionSelector className="grid grid-cols-3 gap-2" provincePlaceholder="省" cityPlaceholder="市" districtPlaceholder="县" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">历史文化</label>
        <textarea rows={3} placeholder="请描述乡村的历史文化、特色传统、民俗活动等..." className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all resize-none" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Sparkles size={16} />开始提炼
      </button>
    </div>
  );
}

function RefineResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Landmark size={16} />AI将为您提炼独特的文化价值
      </div>
      {[
        { label: "历史渊源", desc: "梳理乡村历史脉络与文化传承谱系" },
        { label: "民俗传统", desc: "提炼特色民俗、节庆、手工艺等文化元素" },
        { label: "文化故事", desc: "基于历史与民俗创作生动的品牌故事" },
        { label: "价值定位", desc: "明确乡村文化的核心价值与差异化定位" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写乡村信息后，AI将为您提炼独特的文化价值</p>
      </div>
    </div>
  );
}

/* ---- Culture Tab 2: IP设计 ---- */

function IPForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">IP名称</label>
        <input type="text" placeholder="为你的乡村IP起个名字" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">IP类型</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>吉祥物形象</option><option>品牌Logo</option><option>农产品IP</option><option>文化符号</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">设计风格</label>
        <div className="grid grid-cols-2 gap-2">
          {["国潮风", "手绘田园", "极简现代", "传统民俗"].map((s) => (
            <label key={s} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="radio" name="ipStyle" className="accent-green-primary" />{s}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">核心元素</label>
        <textarea rows={2} placeholder="描述IP应包含的核心文化元素，如：梯田、竹林、土楼..." className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all resize-none" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Palette size={16} />生成IP设计方案
      </button>
    </div>
  );
}

function IPResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Palette size={16} />AI将为您生成IP设计方案
      </div>
      {[
        { label: "IP形象设计", desc: "主视觉形象、表情包、动作姿态设计" },
        { label: "品牌色彩体系", desc: "主色、辅色、应用场景的色彩规范" },
        { label: "衍生品设计", desc: "包装、文创周边、宣传物料的应用方案" },
        { label: "IP使用手册", desc: "品牌规范、授权指南、应用示例" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写IP信息后，AI将为您生成完整的品牌IP设计方案</p>
      </div>
    </div>
  );
}

/* ---- Culture Tab 3: 文旅内容 ---- */

function TourismForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">乡村名称</label>
        <input type="text" placeholder="请输入乡村名称" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">文旅资源</label>
        <div className="grid grid-cols-2 gap-2">
          {["自然景观", "历史古迹", "民俗体验", "农业观光", "美食品鉴", "民宿度假"].map((r) => (
            <label key={r} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="checkbox" className="accent-green-primary" />{r}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">目标客群</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>亲子家庭</option><option>年轻游客</option><option>银发康养</option><option>研学团建</option>
        </select>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <MapPin size={16} />生成文旅方案
      </button>
    </div>
  );
}

function TourismResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <MapPin size={16} />AI将为您生成文旅内容方案
      </div>
      {[
        { label: "文旅路线规划", desc: "一日游/两日游等精品路线设计" },
        { label: "景点解说词", desc: "各景点的人文历史解说内容创作" },
        { label: "宣传文案", desc: "适用于社交媒体与旅游平台的推广内容" },
        { label: "体验活动设计", desc: "沉浸式农事体验、手工工坊等活动策划" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写文旅资源信息后，AI将为您生成文旅内容方案</p>
      </div>
    </div>
  );
}

/* ---- Culture Tab 4: 运营建议 ---- */

function OpsForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">当前阶段</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>初创期（刚起步）</option><option>成长期（有基础）</option><option>成熟期（已规模化）</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">核心产品</label>
        <input type="text" placeholder="请输入当前主营产品或服务" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">现有渠道</label>
        <div className="grid grid-cols-2 gap-2">
          {["线下零售", "电商平台", "直播带货", "社群团购", "文旅接待", "政府合作"].map((ch) => (
            <label key={ch} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="checkbox" className="accent-green-primary" />{ch}
            </label>
          ))}
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <TrendingUp size={16} />生成运营建议
      </button>
    </div>
  );
}

function OpsResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <TrendingUp size={16} />AI将为您生成运营建议
      </div>
      {[
        { label: "渠道拓展策略", desc: "基于产品特点推荐最优销售渠道组合" },
        { label: "品牌推广方案", desc: "线上线下联动的品牌曝光与获客策略" },
        { label: "营收增长路径", desc: "分阶段的收入增长目标与关键举措" },
        { label: "风险规避建议", desc: "常见运营风险识别与预防措施" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">填写运营信息后，AI将为您生成个性化的运营增长建议</p>
      </div>
    </div>
  );
}

/* ---- Combined Culture module ---- */

function CultureForm() {
  const [activeTab, setActiveTab] = useState<CultureTab>("refine");

  const FormByTab: Record<CultureTab, React.ComponentType> = {
    refine: RefineForm,
    ip: IPForm,
    tourism: TourismForm,
    ops: OpsForm,
  };

  const ResultByTab: Record<CultureTab, React.ComponentType> = {
    refine: RefineResult,
    ip: IPResult,
    tourism: TourismResult,
    ops: OpsResult,
  };

  const ActiveForm = FormByTab[activeTab];
  const ActiveResult = ResultByTab[activeTab];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {CULTURE_TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 text-left ${
                isActive
                  ? "bg-green-primary text-white border-green-primary shadow-lg shadow-green-primary/25 scale-[1.03]"
                  : "bg-white text-text-body border-muted-bg hover:border-green-primary/30 hover:shadow-sm"
              }`}
            >
              <tab.icon size={22} strokeWidth={1.5} className={isActive ? "text-white" : "text-green-primary"} />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              信息填写
            </h2>
            <ActiveForm />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              生成结果
            </h2>
            <ActiveResult />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Data — 4-tab: 运营概览 / 振兴成效 / AI汇报 / 优化建议
   ========================================================================== */

const DATA_TABS = [
  { key: "overview", label: "运营概览", icon: LayoutDashboard },
  { key: "revitalize", label: "振兴成效", icon: TrendingUp },
  { key: "report", label: "AI汇报", icon: Sparkles },
  { key: "suggest", label: "优化建议", icon: Lightbulb },
] as const;

type DataTab = (typeof DATA_TABS)[number]["key"];

/* ---- Data Tab 1: 运营概览 ---- */

function OverviewForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">数据范围</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>今日</option><option>本周</option><option>本月</option><option>本季度</option><option>本年</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">业务板块</label>
        <div className="space-y-2">
          {["创业孵化", "内容生产", "产销匹配", "数字人直播", "乡村文化"].map((b) => (
            <label key={b} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="checkbox" className="accent-green-primary" defaultChecked />{b}
            </label>
          ))}
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <LayoutDashboard size={16} />刷新数据看板
      </button>
    </div>
  );
}

function OverviewResult() {
  const stats = [
    { icon: Users, label: "总农户数", value: "5,286", change: "+12%" },
    { icon: ShoppingCart, label: "总订单数", value: "38,420", change: "+23%" },
    { icon: DollarSign, label: "交易总额", value: "¥2.3亿", change: "+18%" },
    { icon: TrendingUp, label: "本月增长", value: "¥580万", change: "+8%" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <LayoutDashboard size={16} />运营数据看板
      </div>
      {stats.map((s) => (
        <div key={s.label} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg hover:border-green-primary/20 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-light flex items-center justify-center">
              <s.icon size={18} className="text-green-primary" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-text-body">{s.label}</p>
              <p className="text-lg font-bold text-text-dark">{s.value}</p>
            </div>
          </div>
          <span className="text-sm font-medium text-green-primary bg-green-light px-2.5 py-1 rounded-full">{s.change}</span>
        </div>
      ))}
    </div>
  );
}

/* ---- Data Tab 2: 振兴成效 ---- */

function RevitalizeForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">统计周期</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>近6个月</option><option>近1年</option><option>近3年</option><option>自平台入驻以来</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">对比基准</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>去年同期</option><option>上个月</option><option>入驻前</option>
        </select>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <TrendingUp size={16} />生成成效报告
      </button>
    </div>
  );
}

function RevitalizeResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <TrendingUp size={16} />振兴成效分析
      </div>
      <div className="p-5 rounded-xl bg-white border border-muted-bg">
        <p className="text-xs text-text-body mb-4">近6个月交易趋势</p>
        <div className="flex items-end gap-2 h-32">
          {[40, 55, 48, 72, 65, 90].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t-md bg-gradient-to-t from-green-primary to-tech-purple" style={{ height: `${h}%` }} />
              <span className="text-[10px] text-text-body">{i + 1}月</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "本月新增农户", value: "186户", icon: Users },
          { label: "活跃直播间", value: "523个", icon: Play },
          { label: "内容产出", value: "2,860条", icon: PenLine },
          { label: "覆盖区县", value: "312个", icon: MapPin },
        ].map((item) => (
          <div key={item.label} className="p-4 rounded-xl bg-white border border-muted-bg">
            <item.icon size={16} className="text-green-primary mb-2" strokeWidth={1.5} />
            <p className="text-lg font-bold text-text-dark">{item.value}</p>
            <p className="text-xs text-text-body">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Data Tab 3: AI汇报 ---- */

function ReportForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">汇报类型</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>周报</option><option>月报</option><option>季度报告</option><option>年度总结</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">汇报对象</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>政府主管部门</option><option>合作社管理层</option><option>投资方/合伙人</option><option>农户公示</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">重点模块</label>
        <div className="grid grid-cols-2 gap-2">
          {["营收数据", "农户增长", "内容产出", "直播成效"].map((m) => (
            <label key={m} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-muted-bg bg-white text-sm text-text-body hover:border-green-primary/30 cursor-pointer transition-all">
              <input type="checkbox" className="accent-green-primary" defaultChecked />{m}
            </label>
          ))}
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Sparkles size={16} />生成AI汇报
      </button>
    </div>
  );
}

function ReportResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Sparkles size={16} />AI智能汇报生成
      </div>
      {[
        { label: "数据摘要", desc: "关键指标的自动化提炼与趋势概述" },
        { label: "亮点分析", desc: "本期增长最快、表现最优的模块分析" },
        { label: "问题诊断", desc: "数据异常预警与根因初步分析" },
        { label: "行动建议", desc: "基于数据的下一步可执行建议" },
        { label: "汇报文档", desc: "格式化汇报PPT/PDF的自动生成" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-muted-bg/50 border border-muted-bg text-center">
        <p className="text-sm text-text-body">选择汇报类型后，AI将自动生成本期数据汇报</p>
      </div>
    </div>
  );
}

/* ---- Data Tab 4: 优化建议 ---- */

function SuggestForm() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">关注领域</label>
        <select className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary transition-all">
          <option>全面提升</option><option>营收增长</option><option>用户拓展</option><option>内容效率</option><option>直播转化</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">当前痛点</label>
        <textarea rows={3} placeholder="请描述当前遇到的主要问题或瓶颈..." className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all resize-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">可用资源</label>
        <input type="text" placeholder="如：预算、人力、渠道等资源情况" className="w-full px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark placeholder:text-text-body/50 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-primary to-tech-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-green-primary/20 transition-all duration-300">
        <Lightbulb size={16} />生成优化建议
      </button>
    </div>
  );
}

function SuggestResult() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-green-primary mb-3">
        <Lightbulb size={16} />AI优化建议
      </div>
      {[
        { label: "渠道优化", desc: "分析各渠道投入产出比，推荐最优资源分配方案" },
        { label: "内容策略", desc: "基于用户反馈数据的内容方向与频率建议" },
        { label: "定价策略", desc: "结合市场行情与竞品分析的产品定价调整建议" },
        { label: "风险防控", desc: "识别潜在运营风险并提供预警与应对方案" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-muted-bg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-xs font-bold text-green-primary">{i + 1}</div>
            <div>
              <span className="text-sm text-text-dark font-medium">{item.label}</span>
              <p className="text-xs text-text-body mt-0.5">{item.desc}</p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-muted-bg text-text-body shrink-0">待生成</span>
        </div>
      ))}
      <div className="p-4 rounded-xl bg-tech-purple-light/50 border border-tech-purple/10">
        <p className="text-sm font-medium text-tech-purple mb-1">💡 智能洞察</p>
        <p className="text-xs text-text-body leading-relaxed">填写关注领域与痛点后，AI将结合平台大数据为您量身定制优化方案</p>
      </div>
    </div>
  );
}

/* ---- Combined Data module ---- */

function DataDashboard() {
  const [activeTab, setActiveTab] = useState<DataTab>("overview");

  const FormByTab: Record<DataTab, React.ComponentType> = {
    overview: OverviewForm,
    revitalize: RevitalizeForm,
    report: ReportForm,
    suggest: SuggestForm,
  };

  const ResultByTab: Record<DataTab, React.ComponentType> = {
    overview: OverviewResult,
    revitalize: RevitalizeResult,
    report: ReportResult,
    suggest: SuggestResult,
  };

  const ActiveForm = FormByTab[activeTab];
  const ActiveResult = ResultByTab[activeTab];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {DATA_TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 text-left ${
                isActive
                  ? "bg-green-primary text-white border-green-primary shadow-lg shadow-green-primary/25 scale-[1.03]"
                  : "bg-white text-text-body border-muted-bg hover:border-green-primary/30 hover:shadow-sm"
              }`}
            >
              <tab.icon size={22} strokeWidth={1.5} className={isActive ? "text-white" : "text-green-primary"} />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              筛选条件
            </h2>
            <ActiveForm />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
            <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
              数据结果
            </h2>
            <ActiveResult />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Main ModuleContent component
   ========================================================================== */

function EmptyResult() {
  return null;
}

const FORM_MAP: Record<string, React.ComponentType> = {
  incubation: IncubationForm,
  content: ContentForm,
  matching: ProductionForm,
  livestream: DigitalHumanForm,
  culture: CultureForm,
  data: DataDashboard,
};

const RESULT_MAP: Record<string, React.ComponentType> = {
  incubation: EmptyResult,
  content: EmptyResult,
  matching: EmptyResult,
  livestream: EmptyResult,
  culture: EmptyResult,
  data: EmptyResult,
};

const TITLE_MAP: Record<string, string> = {
  incubation: "创业孵化中心",
  content: "内容生产中心",
  matching: "产销匹配中心",
  livestream: "数字人直播中心",
  culture: "乡村文化",
  data: "数据管理中心",
};

export default function ModuleContent({ slug }: { slug: string }) {
  const FormComponent = FORM_MAP[slug] || IncubationForm;
  const ResultComponent = RESULT_MAP[slug] || EmptyResult;
  const title = TITLE_MAP[slug] || "模块详情";
  const isSelfContained = true; // all 6 modules are now tabbed + self-contained

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Mobile module tabs */}
      <div className="lg:hidden flex gap-1.5 overflow-x-auto pb-3 mb-6 -mx-1 px-1 scrollbar-hide">
        {CORE_MODULES.map((m) => {
          const isActive = m.href === `/modules/${slug}`;
          return (
            <Link
              key={m.title}
              href={m.href}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? "bg-green-primary text-white shadow-sm"
                  : "text-text-body bg-white border border-muted-bg hover:border-green-primary/30"
              }`}
            >
              <m.icon size={14} strokeWidth={1.5} />
              {m.title}
            </Link>
          );
        })}
      </div>

      {/* Page title + subtitle (hide for self-contained modules — they have their own tabbed header) */}
      {!isSelfContained && (
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-text-dark font-heading">{title}</h1>
          <p className="text-sm text-text-body mt-1">填写左侧表单后，AI将为您自动生成结果</p>
        </div>
      )}

      {/* Self-contained modules (incubation, content): own tab + two-column layout */}
      {isSelfContained ? (
        <FormComponent />
      ) : (
        /* Other modules: standard left-form / right-result layout */
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
                <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
                  信息填写
                </h2>
                <FormComponent />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white border border-muted-bg p-6 shadow-sm">
              <h2 className="text-base font-bold text-text-dark mb-5 font-heading flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-green-primary to-tech-purple" />
                生成结果
              </h2>
              <ResultComponent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
