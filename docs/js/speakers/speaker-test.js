var speakers = [{
    'speaker-img': '../resource/speakers/alberto-brandolini.jpg',
    'speaker-name': 'Alberto Brandolini',
    'speaker-introduction': '全球软件巨匠',
    'speaker-information': '' +
    '<span class="bold-text">Alberto Brandolini</span><br>' +
    '<p>全球软件巨匠，Event Storming 之父</p>',
    'speaker-topic': '<span class="bold-text">「why ddd matters today」</span><br>',
    'speaker-outline': ''
}, {
    'speaker-img': '../resource/speakers/xiaoran.jpg',
    'speaker-name': '肖然',
    'speaker-introduction': '精益方法布道师',
    'speaker-information': `
        <span class="bold-text">肖然</span><br>
        ThoughtWorks咨询和设计总监，精益方法布道师<br>
        国内最早的敏捷精益方法实践者，适应性领导力及领域驱动架构方法首席讲师及教练。
        作为咨询顾问长期辅导国内外知名企业进行精益企业的建设，近期在多个大型开发团
        队推广领域驱动设计方法及微服务架构。
    `,
    'speaker-topic': `
        <span class="bold-text">「为不确定性架构」</span><br>
        第四次工业革命引爆了一个科技驱动的新时代，软件成为了这个时代的核心竞争力。
        然而在行业光环下的软件工程人员们日子并不好过，高速乃至颠覆性的发展给我们制造了大量的不确定性，
        迫使我们去思考新的技术架构方式来适应这个时代。正是在这样的背景下，领域驱动设计的方式再次进入
        了我们的视野，成为了我们响应不确定性的重要方法。
    `,
    'speaker-outline': `
        <ul>
            <li>不确定性的悖论</li>
            <li>架构设计的达摩克利斯之剑</li>
            <li>面向不确定性演进</li>
            <li>微服务架构红眼病</li>
        </ul>
    `,
}, {
    'speaker-img': '../resource/speakers/zhangyi.png',
    'speaker-name': '张逸',
    'speaker-introduction': '编码实践、加固设计、领域驱动实践领先者',
    'speaker-information': `
        <span class="bold-text">张逸</span><br>
        编码实践、加固设计、领域驱动实践领先者<br>
        致力于编码实践、架构设计、领域驱动、大数据分析，并在金融、
        制造业、医疗、通信、企业架构、互联网诸多行业有丰富的开发与设计经验。
    `,
    'speaker-topic': `
        <span class="bold-text">「Bounded Context的实践意义」</span><br>
        Bounded Context作为DDD战略设计的重要入口与概念，可以与微服务设计有机地结合起来。<br>
        本演讲会深入剖析Bounded Context的本质原理，提供切实可行的方法帮助团队成员发现
        Bounded Context，探讨Bounded Context的边界，并结合Event Sourcing、微服务架构、
        六边形架构模式、用户故事地图，总结出从架构到编码实现的实践意义。
    `,
    'speaker-outline': `
        <ul>
            <li>Bounded Context的本质意义</li>
            <li>如何发现合理的Bounded Context Bounded Context的边界</li>
            <li>Bounded Context之间的通信</li>
            <li>从战略架构到战术实现</li>
        </ul>
    `,
}, {
    'speaker-img': '../resource/speakers/lixin.png',
    'speaker-name': '李新',
    'speaker-introduction': '骨灰级程序员',
    'speaker-information': `
        <span class="bold-text">李新</span><br>
        代码20+年，精通从C++到Golang，用Java实现过互联网大型分布式系统，用Scala设
        计过现代通信网络。像计算机一样思考，追求代码架构设计的大道至简。
    `,
    'speaker-topic': `
        <span class="bold-text">「你的领域架构落地了吗？」</span><br>
        领域驱动的架构设计要求从业务分析到代码实现都采用统一语言，
        即最后的实现代码是完整表达出了我们的领域建模的。然而我们发
        现很多团队在采用DDD的时候并没有能够做到这一点，让领域模型
        流于了形式，没有发挥统一语言的核心作用。本次演讲中将为大家
        介绍一些工具通过可视化的方式来帮助团队甄别领域模型的代码落
        地，促进领域模型的维护成为团队每个人的责任。

    `,
    'speaker-outline': `
        <ul>
            <li>领域模型从产生到落地 </li>
            <li>经典的模型实现模式 </li>
            <li>可视化你的领域模型 </li>
            <li>tequila：模型守护！</li>
        </ul>
    `,
}, {
    'speaker-img': '../resource/speakers/tengyun.png',
    'speaker-name': '滕云',
    'speaker-introduction': '实现领域驱动设计译者',
    'speaker-information': `
        <span class="bold-text">腾云</span><br>
        《实现领域驱动设计》译者<br>
        ThoughtWorks咨询师，6年+一线编码经验，3年+领域驱动设计实践经验，
        技术专研领域包括DDD、Spring生态圈、DevOps、Linux以及软件匠艺；
        译有《实现领域驱动设计》和《人件》等书。

    `,
    'speaker-topic': `
        <span class="bold-text">「DDD——没那么难」</span><br>
        DDD社区一直不乏思想领袖，但是要将DDD落地确是另一回事情。
        本次演讲主要面向希望在项目上实际实施DDD的听众，包含DDD中
        的战略设计和战术设计，也包含DDD与微服务的关系分析。
    `,
    'speaker-outline': `
        <ul>
            <li>DDD限界上下文划分</li>
            <li>DDD与微服务 </li>
            <li>聚合根识别 </li>
            <li>实体和值对象 </li>
            <li>领域服务 </li>
            <li>六边形架构</li>
        </ul>
    `,
}, {
    'speaker-img': '../resource/speakers/kouyu.png',
    'speaker-name': '寇宇',
    'speaker-introduction': '微服务架构、系统监控、企业架构规划专家',
    'speaker-information': `
        <span class="bold-text">寇宇</span><br>
        融数数据研发总监，微服务架构、系统监控、企业架构规划专家<br>
        融数数据研发总监，专注于微服务架构、系统监控、企业架构规划等领域。曾就职与IBM、苏宁易购、神州数码等企业。

    `,
    'speaker-topic': `
        <span class="bold-text">「微服务治理及监控」</span><br>
        微服务架构理念，如何利用领域驱动设计对传统单体架构或者SOA架构的系统进行微服务架构改造，进而构建微服务架构体系；
        介绍微服务治理方案和微服务架构下的系统监控方法。

    `,
    'speaker-outline': `
        <ul>
            <li>微服务架构及其特点</li>
            <li>微服务划定和抽象</li>
            <li>微服务架构选型</li>
            <li>微服务治理与监控</li>
        </ul>
    `,
}, {
    'speaker-img': '../resource/speakers/zhangqunhui.png',
    'speaker-name': '张群辉',
    'speaker-introduction': '阿里盒马架构总监<br>领域驱动设计国内最早的一批实践者',
    'speaker-information': '<span class="bold-text">张群辉</span><br>' +
    '阿里盒马架构总监，领域驱动设计国内最早的一批实践者<br>' +
    '15 + 年技术及管理实战经验，前阿里基础机构事业部工程效率总监，' +
    '长期一线指导大型复杂系统的架构设计，DevOps、微服务架构及领域驱动' +
    '设计国内最早的一批实践者。崇尚实践出真知，一直奋斗在技术一线。'
    ,
    'speaker-topic':
    '<span class="bold-text">「DDD@盒马」</span><br>' +
    '盒马作为阿里巴巴新零售的排头兵，第一次真正意义上涉入零售行业，' +
    '创建中国新零售模式下的供应链体系，颠覆传统ERP是盒马技术最近几年不停探索的重点。' +
    '互联网 + 传统零售业务复杂，领域模型在这个复杂的体系里变得尤为重要，' +
    '有别于传统互联网电商架构，本演讲将会深入浅出阐述领域驱动开发在盒马模式下如何演化，' +
    '落地，如何在互联网架构下完整实施具有阿里特点的领域驱动设计模式'
    ,
    'speaker-outline':
    '<ul>' +
    '<li>领域模型：基于对象 vs 基于数据库</li>' +
    '<li>领域模型下的依赖注入</li>' +
    '<li>repository的实现方式</li>' +
    '<li>领域模型下的部署架构</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/wangbo.png',
    'speaker-name':
        '王博',
    'speaker-introduction':
        '资深DDD实践者',
    'speaker-information':
    '<span class="bold-text">王博</span><br>' +
    '资深程序员、软件工匠<br>' +
    '独立咨询顾问，专注于大型系统软件的领域建模设计、重构及服务化架构设计等领域。' +
    '曾先后在电信、云服务、自动驾驶等领域帮助客户进行微服务架构和领域驱动设计等工作，' +
    '参与并指导过大规模的代码重构和架构落地等工作。',
    'speaker-topic': '<span class = "bold-text">「DDD常见困难及解决之道」</span><br>' +
    '做好领域驱动设计是有门槛的。作为一名软件技术咨询师，曾在不同行业、' +
    '不同技术领域进行软件设计和开发工作，遇见过各种DDD在实施中的问题和困难。' +
    '本议题将这些常见问题与困难进行整理，结合案例给出解决建议，帮助大家更好的' +
    '使用DDD解决复杂问题。',
    'speaker-outline': 'DDD技术发展简介<br>支撑DDD的软件开发方法和技能<br>复杂软件开发中使用DDD常见的问题与困难<br>' +
    '<ul>' +
    '<li>案例1：缺乏演进式设计能力的领域驱动设计</li>' +
    '<li>案例2：贫血的领域驱动设计</li>' +
    '<li>案例3：抽象不足的领域模型</li>' +
    '<li>案例4：面向底层的、高性能软件的领域建模</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/huangxiaohui.jpg',
    'speaker-name':
        '黄晓辉',
    'speaker-introduction':
        '点融网站业务系统设计及开发负责人',
    'speaker-information':
    '<span class="bold-text">黄晓辉</span><br>' +
    '现就职于点融，一家上海的互联网金融公司，曾就职于摩根士丹利、微软等公司。目前' +
    '主要负责点融网站业务系统的设计和开发。专注于互联网金融业务架构设计、微服务实践' +
    '、REST规范和技术团队建设。',
    'speaker-topic': '<span class = "bold-text">「团队技术进阶之路 - 以DDD为切入点」</span><br>' +
    '问题背景：团队在技术上成长缓慢，需要更快更好的完成各项业务需求；' +
    ' 解决方案：以DDD为理论和实践框架，发挥“鲶鱼效应”，促进团队学习，' +
    '并最终在新的层次上提供综合技术能力； 方案介绍：经历了 引入 - 讨论 ' +
    '- 概念验证 - 小范围实践 - 全面推进 - 反思 - 重新设计 等多个阶段，' +
    '在各个阶段让团队自己去发现并总结经验教训，从而在实践中得到成长； ' +
    '实施后的效果：团队在编码规范，代码架构，业务建模等方面形成了一套统' +
    '一的方法论，并且进一步引入了BDD的实践，在开发质量和效率上都得到了提供。',
    'speaker-outline': '' +
    '<ul>' +
    '<li>实施DDD前所在团队遇到的问题&背景</li>' +
    '<li>具体的实施步骤</li>' +
    '<li>从领域模型的讨论开始</li>' +
    '<li>POC & 遇到的问题</li>' +
    '<li>在团队中扩大实践范围 & 遇到的问题</li>' +
    '<li>反思</li>' +
    '<li>重新设计</li>' +
    '<li>总结</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/zhouxuefeng.jpg',
    'speaker-name':
        '周雪峰',
    'speaker-introduction':
        '衡睿教育CEO，微软最有价值专家（MVP）',
    'speaker-information':
    '<span class="bold-text">周雪峰</span><br>' +
    '衡睿教育CEO，微软最有价值专家（MVP）<br>' +
    '瑞通（北京）高级技术培训中心高级讲师，微软最有影响力开发者，微软CPE Idol，' +
    '具有多年基于.NET平台的互联网项目的架构经验及团队管理经验,十多年来一直从事' +
    'IT企业的管理，咨询和培训工作；具有丰富的IT企业管理经验，咨询和教学经验。',
    'speaker-topic': '<span class = "bold-text">「领域驱动设计与Scrum项目管理」</span><br>' +
    '问题背景：领域驱动设计架构和Scrum敏捷项目管理方法论相结合，改进组织治理。' +
    ' 解决方案选型：三个医疗行业项目（江西省医院信息化管理系统，江西省新农合信' +
    '息管理系统，江西省临床试验信息管理系统），技术架构为微软的DDD框架（AutoNL' +
    'ayered），项目管理方法论为：Scrum 方案介绍：使用Scrum敏捷项目管理方法论，' +
    '管理基于DDD的项目，结合Scrum的DDD框架各自的优势，提升开发效率，实现软件工' +
    '厂化的组织改进。 实施后效果：提高开发效率，改进软件开发流程与绩效考核，实' +
    '现了组织的技术资产原始积累，与组件化开发。',
    'speaker-outline': '' +
    '<ul>' +
    '<li>Scrum和DDD的完美结合</li>' +
    '<li>三方（产品经理，项目经理和程序员）领域模型设计会</li>' +
    '<li>启动Scrum流程（计划会议，进行Scrum，演示）</li>' +
    '<li>用DDD实现的软件工厂</li>' +
    '<li>DDD案例分享：江西省新农合信息管理系统</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/zhangjianfeng.jpg',
    'speaker-name':
        '张建锋',
    'speaker-introduction':
        '资深DDD实践者',
    'speaker-information':
    '<span class="bold-text">张建锋</span><br>' +
    '千岛源/共同创始人<br>' +
    '原红帽公司 JBoss 应用服务器核心开发组成员。毕业于北京邮电大学和' +
    '清华大学，曾供职于金山软件，IONA 科技公司和红帽软件。 对于 JavaEE ' +
    '的各项规范比较熟悉；开源技术爱好者，喜欢接触各类开源项目，学习优秀' +
    '之处并加以借鉴，认为阅读好的源码就和阅读一本好书一样让人感到愉悦；' +
    '在分布式计算，企业应用设计，移动行业应用，Devops 等技术领域有丰富的' +
    '实战经验和自己的见解；愿意思考软件背后蕴涵的管理思想，认为软件技术' +
    '是一种高效管理的实现方式，有志于将管理学和软件开发进行结合。',
    'speaker-topic': '<span class = "bold-text">「微服务架构下CDI在领域驱动设计中的精妙应用」</span><br>' +
    'CDI规范是JavaEE中揭示软件对象设计的部分，最早来源于GavinKing的Seam框架。在DDD设计中，' +
    '可以运用大量的CDI规范定义技术来灵活的对应用软件设计构造。和Spring框架相比，CDI可塑造' +
    '性更强，企业可以自行开发定义出一套符合自身业务特点的业务框架，做到软件复用和易维护。' +
    '通过配合使用Rest，消息，JPA，流式数据，事务处理等技术，CDI可以实现一套高效稳定的DDD ' +
    'Java开发框架。更重要的是，它是可扩展可伸缩的，既能部署成经典的war包应用；又可以结合' +
    'kubernetes，开发微服务体系的应用。',
    'speaker-outline': '' +
    '<ul>' +
    '<li>DDD用Java语言的实现设计思路</li>' +
    '<li>应用CDI规范定义对象 </li>' +
    '<li>DDD开发框架的实现介绍</li>' +
    '<li>如何实现灵活部署</li>' +
    '</ul>'
}
]
