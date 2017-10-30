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
    'speaker-img':
        '../resource/speakers/panjiayu.png',
    'speaker-name':
        '潘加宇',
    'speaker-introduction':
        'UMLChina 首席专家<br>UMLChina 创始人',
    'speaker-information':
    '<span class="bold-text">潘加宇</span><br>UMLChina创始人，潜心研究需求和设计技能。' +
    '2002年开始对外提供UML需求和设计的技术指导和训练服务。到现在为止，已经上门为超过260家的组' +
    '织提供服务，覆盖了国内各个领域的领袖企业，包括通信、企业管理、电子商务、房地产、网络游戏、' +
    '地理信息、物流、数码设备、医疗设备、工业控制.....等领域。',
    'speaker-topic':
    '<span class = "bold-text">「复杂领域模型的建模」</span><br>' +
    '一个反映领域内涵的领域模型是领域驱动设计成功的根本。目前许多有关领域驱动设计的探讨集中于如何实现领域驱动设计，' +
    '所举例子的领域模型中涉及到的类的数量很少，导致有的开发人员虽然掌握了实现领域驱动设计的一些技能，却在面对量多' +
    '而且复杂的领域概念和逻辑时，不知道如何下手来建立恰当的领域模型。本演讲介绍领域建模的一些关键要点，有助于改善这一现象。',
    'speaker-outline':
    '<ul>' +
    '<li>建模要素讲解</li>' +
    '<li>一个领域建模过程的案例展示</li>' +
    '</ul>'
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
    'speaker-outline':
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
    'speaker-outline':
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
}, {
    'speaker-img':
        '../resource/speakers/kangjiangmei.jpeg',
    'speaker-name':
        '亢江妹',
    'speaker-introduction':
        'ThoughtWorks首席业务分析师，中国区业务分析实践负责人',
    'speaker-information':
    '<span class="bold-text">亢江妹</span><br>' +
    'ThoughtWorks首席业务分析师，中国区业务分析实践负责人<br>' +
    '在敏捷/精益产品需求分析、大企业需求管理、行业研究等方面，有丰富的实战和教练经验；' +
    '她也是业务分析师(IIBA)、产品经理的活跃参与者，是DnA(Design and Analysis)社区、' +
    'ThoughtWorks中国行业研究社区的发起人，也是ThoughtWorks商业洞见的主编。',
    'speaker-topic': '<span class = "bold-text">「DDD落地：BA和架构师的完美结对」</span><br>' +
    '如果领域驱动设计，仅限于技术架构讨论的范畴，显然无法让DDD的真正价值落地，即如何' +
    '“让业务领域驱动架构设计”。本话题中，将结合项目实例与你分享BA和架构师如何完美结对，' +
    '来梳理业务需求、进行产品规划，识别和划分业务领域、子领域、领域边界，建立概念关系模型' +
    '，梳理和定义业务服务需求，在“业务侧”和“技术侧”建立统一共同的语言，真正让DDD落地，' +
    '并提供BA和架构师结对实践的实用技巧。',
    'speaker-outline':
    '<ul>' +
    '<li>4种常用的业务梳理模式，快速建立业务背景上下文</li>' +
    '<li>业务领域、划分子领域的划分模式及案例 </li>' +
    '<li>如何建立业务概念关系模型</li>' +
    '<li>梳理定义服务需求</li>' +
    '<li>业务概念模型与信息架构、技术架构如何相互映射？</li>' +
    '<li>BA和架构师完美结对的Tips</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/zhouyugang.jpeg',
    'speaker-name':
        '周宇刚',
    'speaker-introduction':
        'ThoughtWorks高级咨询师，DDD实践家',
    'speaker-information':
    '<span class="bold-text">周宇刚</span><br>' +
    'ThoughtWorks高级咨询师，DDD实践家<br>' +
    '10年企业级应用开发经验，主要负责软件交付和持续交付咨询。从09年开始关注领域驱动设计，' +
    '是Stack Overflow DDD标签 All Time Top Answerer 之一，曾在多个行业领域中实战过DDD。',
    'speaker-topic':
    '<span class = "bold-text">「DDD落地：BA和架构师的完美结对」</span><br>' +
    '如果领域驱动设计，仅限于技术架构讨论的范畴，显然无法让DDD的真正价值落地，即如何“让业务' +
    '领域驱动架构设计”。本话题中，将结合项目实例与你分享BA和架构师如何完美结对，来梳理业务需求、' +
    '进行产品规划，识别和划分业务领域、子领域、领域边界，建立概念关系模型，梳理和定义业务服务需求，' +
    '在“业务侧”和“技术侧”建立统一共同的语言，真正让DDD落地，并提供BA和架构师结对实践的实用技巧。' +
    'CDI规范是JavaEE中揭示软件对象设计的部分，最早来源于GavinKing的Seam框架。在DDD设计中，',
    'speaker-outline':
    '<ul>' +
    '<li>4种常用的业务梳理模式，快速建立业务背景上下文</li>' +
    '<li>业务领域、划分子领域的划分模式及案例 </li>' +
    '<li>如何建立业务概念关系模型</li>' +
    '<li>梳理定义服务需求</li>' +
    '<li>业务概念模型与信息架构、技术架构如何相互映射？</li>' +
    '<li>BA和架构师完美结对的Tips</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/zhangxiaolong.jpg',
    'speaker-name':
        '张晓龙',
    'speaker-introduction':
        '中兴通讯虚拟化架构师',
    'speaker-information':
    '<span class="bold-text">张晓龙</span><br>' +
    '中兴通讯虚拟化架构师<br>' +
    '2008年毕业于哈尔滨工程大学计算机应用专业，爱好编程，业余时间喜欢写一些技术类文章。' +
    '2008年就职于ZTE，参与过大型通信软件的开发，擅长TDD和重构等XP实践。近年来参与虚拟化' +
    '产品的研发，同时负责提升全员的DDD能力，从DDD导入到DDD训练营，不断的给学员传递DDD的' +
    '思想和实践技能，目前DDD已在多个团队有效落地，并得到大家的一致认可。除过程序员，个人' +
    '在组织中还有一些其它标签，比如架构师、咨询师和技术教练等。个人的简书地址：' +
    'http://www.jianshu.com/u/1381dc29fed9。熟练掌握C++/Golang/Python/Java等编程语言，' +
    '这一年主要使用的编程语言是Golang，同时Golang也成了DDD落地的主要语言。这一年在简书上也写' +
    '了多篇与DDD相关的技术文章，比如《软件设计的演变过程》，《Golang事务模型》，' +
    '《DDD分层架构的三种模式》，《Implement Domain Object in Golang》，' +
    '《FizzBuzzWhizz in Python from OO and FP》。',
    'speaker-topic':
    '<span class = "bold-text">「DDD分层架构的三种模式」</span><br>' +
    '问题背景：在这个快速应对需求变化的时代，代码容易被实现成意大利面条式，同时重复代码多，又好像有一些不同，' +
    '很多程序员都掉进了这个让人痛苦不堪的焦油坑，无法自拔。软件设计就是在长期以来让软件容易应对变化，' +
    '提高可修改性和可维护性，从而降低软件开发成本。方案介绍：通过分层设计，分离关注点，凸显领域模型，' +
    '降低层与层之间的依赖，同时有利于各层逻辑的复用或替换。《领域驱动设计－软件核心复杂性应对之道》这本书中，' +
    '提出了传统的四层架构，层与层之间遵循松散分层架构，即上层可以调用任意下层。我们在实践中，' +
    '将基础设施层分为横向的和纵向的，横向的API提供给领域层调用，纵向的API提供给应用层和用户界面层调用，' +
    '其中领域层、应用层和用户界面层遵循严格分层架构，即上层仅能调用相邻的下层，这就是“L”型分层架构。' +
    '将DCI应用在分层架构中，将出现五层架构模式，相对于传统的四层架构模式，基础设施层、应用层和用户界面层保持不变，' +
    '将领域层分离成新领域层（Object/Role）和环境层（Context）。在一些复杂的领域，一次事务涉及很多次消息的交互，' +
    '这时Context层就非常复杂，很有必要把Context层分离成新Context层（Action和Specification）和事务层' +
    '（Transaction DSL)。新Context层基本单位是一次同步消息或异步消息的交互（记作Action），' +
    '新Context层的Specification是Action或一组紧密相关的Action（记作Procedure）是否执行的开关，' +
    '而事务层可以看做是大Context层。在实践中，我们抽取出Golang事务模型，基本版参见简书的文章《Golang事务模型》，' +
    '地址http://www.jianshu.com/p/b7e874f6d3e8，一直在演进，目前已被多个团队使用。' +
    'DDD六层架构模式可以看做是DDD五层架构模式在特定领域的一种变体。通过依赖导致原则，改善分层架构，即六边形架构。' +
    '六边形架构在产品级有一些应用，比如平台聚合内部的各种能力，对外统一提供为Restful接口。' +
    '六边形架构也可以用于不同层组件的协作开发，即在明确组件功能后就可以专注开发，待到联调阶段，' +
    '该组件的多个用户分别通过端口适配器方式再与该组件进行集成。实施后效果说明：事务层代码和流程图一一对应，' +
    '领域层代码通过小类大对象设计，代码层次清晰，有效的控制了软件的实现复杂度，并且得到了团队所有成员的普遍认可。',
    'speaker-outline':
    '<ul>' +
    '<li>DDD回顾</li>' +
    '<li>分层架构简介 </li>' +
    '<li>传统的四层架构模式</li>' +
    '<li>引入DCI后的五层架构模式，特定领域的六层架构模式</li>' +
    '<li>六边形架构</li>' +
    '<li>收益</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/zhangye.png',
    'speaker-name':
        '张晔',
    'speaker-introduction':
        '中兴通讯公司级研发教练，架构技术狂热爱好者。',
    'speaker-information':
    '<span class="bold-text">张晔</span><br>' +
    '中兴通讯公司级研发教练，架构技术狂热爱好者。<br>' +
    '擅长C++，python，golang等编程语言，具备丰富的领域建模、代码质量提升、自动化测试、DevOps等实战经验。' +
    '对深圳软件技术社区发展推广亦有贡献，组织多次社区活动（APAC、GDCR、编码道场等）。目前对形式化方法TLA+' +
    '和微服务架构具有浓厚兴趣。<br>' +
    '工作之余喜欢读书、音乐、羽毛球、旅游以及研究新事物。',
    'speaker-topic':
    '<span class = "bold-text">「DDD在测试体系建设的实践演进」</span><br>' +
    '本次演讲将全方位介绍DDD方法在中兴通讯测试体系设计和落地过程中所启到的关键性作用。' +
    '内容既涵盖从传统自动化测试到基于领域驱动测试的思想转变，也包含随着DDD实践的不断深入对自动化测试框架逐步演进，' +
    '再到运用DDD战略设计对云测试平台的微服务划分。不但包含DDD战略设计，也包括DDD的战术设计；不但包含DDD在单体架' +
    '构的应用，还包括DDD在微服务架构的应用；不但包含DDD在测试执行框架的实践，还包括DDD在云测试平台的实践；不但包' +
    '含DDD的python语言的实现，还包括golang语言的实现。<br>' +
    '整个测试体系目前在中兴通讯DevOps中发挥着重要作用，本次演讲还会对测试体系建设的不同阶段所面临的不同问题和相' +
    '应解决方案进行描述，相信能满足不同类型的听众。',
    'speaker-outline':
    '<ul>' +
    '<li>中兴通讯DevOps实践简介</li>' +
    '<li>传统的自动化测试介绍</li>' +
    '<li>基于领域驱动的自动化测试</li>' +
    '<li>基于云的测试平台建设</li>' +
    '<li>DDD实践心得总结</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/huangliang.png',
    'speaker-name':
        '黄亮',
    'speaker-introduction':
        'ThoughtWorks资深咨询师，DDD实践布道者',
    'speaker-information':
        '<span class="bold-text">黄亮</span><br>ThoughtWorks资深咨询师，DDD实践布道者，十三年应用开发与架构经验，热爱技术，喜欢Coding。专注于软件架构与持续交付领域，为不同领域的客户提供专业的技术改进与咨询服务，尤其擅长于JAVA技术栈与微服务架构。',
    'speaker-topic':
    '<span class = "bold-text">「从OO到DDD」</span><br>' +
    '有人说DDD是OO的一个正确的作法，当我们实践DDD的过程中，很多OO问题依然会遇到，在本主题中，我们将带您探索OO本质，分析并解决DDD实践遇到的各种OO问题。',
    'speaker-outline':
    '<ul>' +
    '<li>OO本质</li>' +
    '<li>从OO到DDD</li>' +
    '<li>实践DDD中遇到的一些OO问题</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/hurong.jpeg',
    'speaker-name':
        '胡戎',
    'speaker-introduction':
        '中国电子第六研究所前端负责人，CNode讲师，graphql.cn维护者',
    'speaker-information':
        '<span class="bold-text">胡戎</span><br>中国电子第六研究所前端负责人，CNode讲师，graphql.cn维护者，负责多个大型航天项目',
    'speaker-topic':
    '<span class = "bold-text">「领域驱动的FRP复合范式在复杂前端应用的实践」</span><br>' +
    '多数据源复杂应用中如何管理数据流，结合OOP和FRP的的复合范式构建大型的复杂应用程序。react redux rxjs采用redux基于OOP管理uiModal以及Domain Modal，根据FRP的编程思想通过RxJS设计并管理单向数据流。',
    'speaker-outline':
    '<ul>' +
    '<li>介绍OOP和FRP</li>' +
    '<li>介绍OOP和FRP在大型前端应用的技术选型</li>' +
    '<li>举例介绍RXJS管理数据流常见的业务场景</li>' +
    '</ul>'
}
]
