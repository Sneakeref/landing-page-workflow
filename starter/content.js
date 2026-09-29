// 只改这一个文件，就能把整个落地页换成你自己的品牌与文案。
window.SITE = {
  theme: "light", // "light" | "dark" | 不写则跟随系统
  brand: { name: "Novanote", logo: "N", accent: "#4f46e5", accent2: "#8b5cf6" },
  nav: [
    { label: "功能", href: "#features" },
    { label: "价格", href: "#pricing" },
    { label: "常见问题", href: "#faq" }
  ],
  cta: { label: "免费开始", href: "#pricing" },
  hero: {
    badge: "全新 v2.0 发布",
    title: "把会议记录，变成能直接执行的待办",
    subtitle: "Novanote 自动转写、提炼结论、分配负责人。会议一结束，行动清单已经发到每个人手里。",
    primary: { label: "免费试用 14 天", href: "#pricing" },
    secondary: { label: "看 60 秒演示", href: "#features" },
    note: "无需信用卡 · 随时取消"
  },
  logos: ["Acme", "Globex", "Initech", "Umbrella", "Hooli"],
  features: [
    { icon: "🎙️", title: "实时转写", text: "支持中英文混说，说话人自动区分，转写准确率行业领先。" },
    { icon: "🧠", title: "结论提炼", text: "自动识别决策、风险与待办，一页纸看完一小时的会。" },
    { icon: "✅", title: "一键分派", text: "待办自动指派给负责人，同步到你已经在用的项目工具。" }
  ],
  stats: [
    { value: "3 倍", label: "会后跟进速度" },
    { value: "12 分钟", label: "每场会议节省时间" },
    { value: "98%", label: "待办被正确识别" }
  ],
  testimonial: {
    quote: "以前会后要花半小时整理纪要，现在打开就是清单，直接开干。",
    author: "示例用户 · 产品负责人"
  },
  pricing: [
    { name: "个人版", price: "¥0", unit: "/月", items: ["每月 5 场会议", "基础转写", "导出 Markdown"], cta: "免费开始", featured: false },
    { name: "团队版", price: "¥49", unit: "/人/月", items: ["无限会议", "结论提炼 + 待办分派", "项目工具同步", "优先支持"], cta: "试用 14 天", featured: true },
    { name: "企业版", price: "联系我们", unit: "", items: ["私有化部署", "SSO 与审计", "专属客户经理"], cta: "预约沟通", featured: false }
  ],
  faq: [
    { q: "数据安全吗？", a: "所有录音与文本加密存储，你可以随时一键删除。" },
    { q: "支持哪些会议工具？", a: "支持主流视频会议工具，也支持直接上传音频文件。" },
    { q: "可以随时取消吗？", a: "可以，在设置里一键取消，当期结束前仍可使用。" }
  ],
  footer: { text: "© 2026 Novanote. 示例内容，请替换为你自己的品牌。" }
};
