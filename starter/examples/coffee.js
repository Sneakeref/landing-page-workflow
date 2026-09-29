// 示例：同一套版式，换成一个咖啡订阅品牌。用法：把本文件内容覆盖到 ../content.js
window.SITE = {
  theme: "light", // "light" | "dark" | 不写则跟随系统
  brand: { name: "Greenly", logo: "G", accent: "#15803d", accent2: "#65a30d" },
  nav: [
    { label: "咖啡豆", href: "#features" },
    { label: "订阅方案", href: "#pricing" },
    { label: "常见问题", href: "#faq" }
  ],
  cta: { label: "开始订阅", href: "#pricing" },
  hero: {
    badge: "本月新豆 · 埃塞俄比亚 水洗",
    title: "每两周，一袋刚烘好的好咖啡",
    subtitle: "Greenly 直接对接产地小农庄，烘焙后 48 小时内发出，不囤货、不压库存。",
    primary: { label: "选择我的订阅", href: "#pricing" },
    secondary: { label: "看看怎么烘的", href: "#features" },
    note: "随时暂停 · 不满意包退"
  },
  logos: ["精品咖啡馆", "生活方式店", "办公室订阅", "民宿", "市集"],
  features: [
    { icon: "🌱", title: "产地直采", text: "每一批都能追溯到具体农庄与处理方式。" },
    { icon: "🔥", title: "48 小时鲜烘", text: "下单后才烘焙，风味最好的一周内送到你手里。" },
    { icon: "📦", title: "灵活订阅", text: "频率、克重、研磨度都能自己调，随时跳过一期。" }
  ],
  stats: [
    { value: "48 小时", label: "烘焙到发货" },
    { value: "12 家", label: "合作产地农庄" },
    { value: "4.9 / 5", label: "订阅用户评分" }
  ],
  testimonial: { quote: "打开袋子的那一刻，就知道和超市买的不是一回事。", author: "示例用户 · 咖啡爱好者" },
  pricing: [
    { name: "尝鲜装", price: "¥68", unit: "/次", items: ["100g × 2 款", "单次购买", "赠送滤纸"], cta: "先试试", featured: false },
    { name: "双周订阅", price: "¥128", unit: "/月", items: ["250g 每两周一袋", "可选研磨度", "随时暂停"], cta: "开始订阅", featured: true },
    { name: "办公室装", price: "¥398", unit: "/月", items: ["1kg 每月", "适合 10 人团队", "发票支持"], cta: "咨询方案", featured: false }
  ],
  faq: [
    { q: "多久会收到第一袋？", a: "下单后 48 小时内烘焙并发出，一般 2–3 天送达。" },
    { q: "可以换口味吗？", a: "可以，每期发货前都能在账户里更换。" },
    { q: "怎么取消？", a: "账户里一键取消，不收违约金。" }
  ],
  footer: { text: "© 2026 Greenly. 示例内容，请替换为你自己的品牌。" }
};
