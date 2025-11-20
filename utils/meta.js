const education = [
    {
        institution: "康奈尔大学",
        major: "计算机科学 硕士学位",
        date: "预计2026年12月毕业",
        courses: "深度学习导论、操作系统理论及实践、高级语言技术、AI 解决方案的设计与构建、AI商业应用"
    },
    {
        institution: "伊利诺伊大学厄巴纳-香槟分校（UIUC）",
        major: "土木与环境工程 学士学位（计算机科学 辅修）",
        date: "2025年5月毕业",
        detail: "<u>平均绩点：3.91/4.00</u>；学术成绩优异，每学期均被列入<u>院长荣誉名单</u>；获得<u>院级奖学金</u>（唯一获奖者）",
        courses: "程序设计语言、算法与计算模型、云数据库、应用 ML、数据结构、离散数学、计算机结构、数值分析等"
    },
]
const prof_experience = [
    {
        company: '用友网络科技（驻场于深圳比亚迪）',
        title: '前端开发实习生',
        location: '深圳',
        period: '2025.08 – 至今',
        accomplish: '• 参与人力资源管理系统的<span class="highlight">前端开发</span>、流水上线和版本迭代工作，系统服务超 <u>120万</u> 活跃用户、日均 <u>20万</u> 次API请求，涵盖薪资、绩效、竞争考核、员工自助服务等模块，支持 Web 与移动端平台 <br/> • 利用<span class="highlight">低代码</span>平台中的 “拖拽式“ UI 和数据组件提升功能交付的效率，通过 JavaScript <span class="highlight">代理覆盖机制</span>将测试环境下沉至本地开发服务器，实时测试和监管复杂业务逻辑、前端组件开发和显影 <br/> • 将客户业务需求转化为上线功能和禅道任务，记录<span class="highlight">验收标准及边界条件</span>，在双周的迭代周期中实现 <u>85%</u> 的<span class="highlight">一次性用户验收通过率（UAT）</span>，并减少了 <u>30%</u> 上线后需继续支持的工单数量',
    },
    {
        company: 'Jump Simulation Center, Carle Illinois 医学院',
        title: '软件工程实习生（visionOS开发方向）',
        location: '美国',
        period: '2024.09 – 2025.05',
        accomplish: '• 在 AVP 的 XR 环境中搭建实时交互动画反馈系统，用于辅助医学生进行腰椎穿刺训练，利用了 SwiftUI 和 RealityView 的<span class="highlight">物体与手部追踪技术</span>，已应用于 <u>50+</u> 医学生使用，将实践训练效率提升了 <u>10倍</u> <br/> • 基于 OpenAI API 开发 AI 辅助学习机器人程序，结合<span class="highlight">向量检索（RAG）</span>和<span class="highlight">动态工具调用</span>机制，完成动态上下文选择，从而实现个性化内容响应与问题推理，将响应延迟 <u>优化45%</u>，使每位学生答疑量提升至 <u>20倍</u> <br/> • 在 AWS Lambda 上部署 <span class="highlight">DynamoDB</span> 和 python 后端，采用 <span class="highlight">Flask + RESTful API</span> 框架，支持每秒 <u>120+QPS</u> 并发请求，系统稳定性达 <u>99.9%</u>，在高并发下不会触发限流机制',
    },
    {
        company: 'The Safe Numbers, Inc.',
        title: '软件工程实习生（iOS开发方向）',
        location: '美国',
        period: '2024.03 – 2024.10',
        accomplish: '• 参与产品内测上线，覆盖用户超 <u>500人</u>，推动周活跃会话量<u>增长30%</u> <br/> • 实现 <u>40+</u> 个<span class="highlight">可复用</span>的 Swift 组件，包括<span class="highlight">页面跳转</span>管理器、<span class="highlight">状态订阅</span>器、<span class="highlight">全局事件调度</span>器等，采用 MVVM 架构提升代码可维护性与测试性，结合 SwiftData 支持<span class="highlight">离线数据</span>持久化，并自定义推送通知机制提升用户回访率 <br/> • 使用 LiveKit API 实现<span class="highlight">音视频通话功能</span>，后端采用 GoLang 和 protobuf + gRPC 的服务通信模式，支持 token 刷新及房间/参与者状态同步，在网络波动或后台切换的场景中都能实现音视频与 UI <span class="highlight">状态自动恢复</span>',
    },
    {
        company: '空气污染干预模型项目研究组',
        title: '研究助理 - Web前端开发',
        location: '美国',
        period: '2023.06 – 2024.05',
        accomplish: '• 使用 React 独立开发支持 GIS 的空气污染模拟系统网络端，集成 Mapbox 与 Deck.gl 实现区域污染<span class="highlight">溯源建模</span>与<span class="highlight">数据结果可视化</span>，帮助 200+ 环保研究人员与政策制定者高效分析污染路径与分布趋势 <br/> • 优化 13 类污染源的 <u>52,411×3,224</u> 数据点矩阵处理流程，使用 Python+Zarr 格式按需<span class="highlight">分块读取数据</span>，实现高效数据加载，将地图渲染与交互延迟从约 60 秒优化至不足 <u>3秒</u> <br/> • 设计适用非技术背景用户的<span class="highlight">交互式界面</span>和<span class="highlight">友好操作</span>，支持区域选取与污染物叠加展示功能，提升了 <u>45%</u> 的用户参与度',
    },
]

const skills = [
    {
        type: '编程语言',
        content: 'JavaScript, Python, SwiftUI, CSS, HTML, GoLang, C++, Java, Julia'
    },
    {
        type: '框架',
        content: 'React.js, Node.js, Material-UI, AntDesign, Socket.io, Flask + RESTful, gRPC, Express.js, Framer Motion'
    },
    {
        type: '数据库/工具',
        content: 'MongoDB, MySQL, DynamoDB, GCP, AWS, Firebase, Git, Postman'
    },
    {
        type: '语言能力',
        content: '精通英文，具备良好的双语沟通、阅读、写作能力'
    },
]
export {
    education,
    prof_experience,
    skills
}