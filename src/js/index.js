function toggleRotate(){
  var front = document.querySelector('.front');
  var back = document.querySelector('.back');
  var isRotated = front.classList.contains('front_rotate_right');
  var fro_cls = front.classList;
  var bac_cls = back.classList;
  if(isRotated){
    fro_cls.remove('front_rotate_right');
    fro_cls.add('front_rotate_left');
    bac_cls.remove('back_rotate_right');
    bac_cls.add('back_rotate_left')
  }else{
    fro_cls.contains('front_rotate_left') && fro_cls.remove('front_rotate_left');
    fro_cls.add('front_rotate_right');
    bac_cls.contains('back_rotate_left') && bac_cls.remove('back_rotate_left');
    bac_cls.add('back_rotate_right');
  }
}

function changeWords(index){
  var ind = parseInt(index);
  let word = words[ind - 1];
  var proper=['title','skill','suit','characters'];
  proper.forEach((str)=>{
    document.querySelector('.'+str).innerHTML= str=='title'?(index+'.')+word[str]:word[str];
  })
}


(function(){
  document.querySelector('.front').addEventListener('click',function(e){
    var index=e.target.className.match(/.*_(\d*)/)[1];
    if(index)  {
      changeWords(index);
      toggleRotate();
    }
  })

   document.querySelector('.go_back').addEventListener('click',function(e){
    toggleRotate();
   })

})()


const words = [
  {
    title:'成功当选班干部(小组长)',
    skill:'心理学  管理学',
    suit:'管理 预测 申请 权衡 协调 展示 演讲 表达',
    characters:'活跃的 勇敢的 有能力的 有竞争力的  自信的 坚定的 有抱负的 善于表达的 努力的 鼓舞人心的 有力的 公平的 进取的'
  },
  {
    title:'成功考取驾照',
    skill:'驾驶 机车',
    suit:'训练 领会 巩固 驾驶 提高 探索',
    characters:'准确的 勤学的 坚持的 沉着的 努力的'
  },
  {
    title:'成功追到了男神(女神)',
    skill:'心理学 管理学',
    suit:'预测 交流 观察 分析 探索 表达 协调 安排 权衡 发现 展示 证明 草拟',
    characters:'灵活的 勇敢的 有吸引力的 体贴的 周到的 有创意的 感情外露的 善于表达的 理解的 热情的 乐观的 敏锐的 留心的'
  },
  {
    title:'某科考了100分(全班第一名)',
    skill:'某科的专业知识',
    suit:'执行 分析 安排 领会 发现 探索 评估',
    characters:'勤学的 精确的 适应的 娴熟的 坚持的 有效率的 沉着的 谨慎的 努力奋斗的 自我超越的 自信的 爱探究的 好学的 认真的 努力的 进取的'
  },
  {
    title:'参加野外夏令营',
    skill:'夏令营主题的专业知识',
    suit:'达到 执行 适应 安排 协助 参加 交流 领会 协调 决定 展示 探索 表达',
    characters:'灵活的 适应的 勇敢的 坚持的 竞争的 爱探究的 果断的 机智的 公平的 有抱负的 警惕的 感恩的 善于表达的 随和的 有说服力的 鼓舞人心的 理解的 关心的 活跃的 努力的 热情的 无偏见的 有预见的 坚定的 冷静的 节俭的 慷慨的 真诚的 乐群的 吃苦耐劳的 乐观的 鼓舞人心的 有创意的 坦率的 幽默的 进取的(请根据参加夏令营实际的情况圈选能力'
  },
  {
    title:'学会自己喜欢的一种乐器',
    skill:'艺术 艺术史 某种乐器的原理',
    suit:'训练 领会 巩固 探索 执行 达到',
    characters:'勤学的 准确的 灵活的 熟练的 坚持的 好学的 优美的 善感的 活跃的 努力的 生动的 认真的 自制的 多才多艺的 快活的'
  },
  {
    title:'学会游泳(骑自行车)',
    skill:'运动(自行车)',
    suit:'训练 达到 领会 巩固 探索 评估',
    characters:'勤学的 准确的 灵活的 熟练的 坚持的 好学的 精力充沛的 努力的 认真的 自制的 冒险的 健壮的 自我超越的 进取的 敏捷的 积极的 充满活力的'
  },
  {
    title:'为家人做了一顿饭',
    skill:'食品 营养 烹饪',
    suit:'安排 烹调 创造 观察 探索',
    characters:'体贴的 周到的 负责的 支持的 感恩的 关心的 有创意的 可靠的 灵巧的 好学的 善良的 温暖的 慈爱的 热情的'
  },
  {
    title:'赚到人生“第一桶金”',
    skill:'经济学 消费者行为学 心理学 财务管理',
    suit:'销售 预测 分析 安排 评估 议价 权衡 计算 选择 交流 领会 控制 协调 复制 表达 探索 解释 展示 发现 洞悉',
    characters:'精力充沛的 进取的 灵活的 冒险的 勇敢的 观察敏锐的 高效的 有竞争力的 有抱负的 果断的 善于表达的 有力的 有创意的 令人信任的 足智多谋的 独立的'
  },
  {
    title:'策划了一场班会(同学会)',
    skill:'管理学 社会学',
    suit:'执行 管理 安排 协助 预算 交流 联系 控制 设计 展示 草拟 编辑',
    characters:'精确的 活跃的 细节的 平衡的 有能力的 考虑周到的 合作的  热情的 负责的 实用的 合理的 有条理的'
  },
  {
    title:'自己修理好某个物品',
    skill:'美学 工程学',
    suit:'装配 美化 照顾 上色 完成 集中 纠正 拆除 探索',
    characters:'精确的 合适的 留心的 有能力的 聪明的 认真的 好分析的 富有想象力的 灵巧的'
  },
  {
    title:'独自完成一次跨越城市的旅程',
    skill:'行为学 社会学 地理学',
    suit:'执行 适应 预测 安排 权衡 预算 购买 照顾 选择 收集 比较 面对 联系 控制 决定',
    characters:'活跃的 胆大的 有条理的 有信心的 认真的 考虑周到的 随和的 精力充沛的 灵活的 乐群的 爱玩耍的 精确的 精力旺盛的'
  },
  {
    title:'为家人设计了一次旅游行程',
    skill:'行为学 社会学 地理学 策划  服务  组织 心理学',
    suit:'执行 管理  预测 安排 协助 预算 照顾 选择 分类 收集 交流 比较 联系 控制 草拟 编辑',
    characters:'精确的 适合的 细节的 有条理的 仔细的 清楚的 认真的 可靠的 负责的 耐心的 有目的的 温暖的'
  },
  {
    title:'为家里设计室内装潢',
    skill:'美学 室内装饰 设计学 艺术 时尚',
    suit:'安排 装配 美化 预算 购买 计算 选择 分类 打扫 比较 控制 创造 设计',
    characters:'精确的 适合的 精通的 坚持己见的 细节的 有条理的 有能力的 仔细的 认真的 慎重的 艺术的 有效率的 灵巧的 耐心的 实用的 头脑开放的 多才多艺的'
  },
  {
    title:'登台表演(演讲)',
    skill:'声学 艺术 娱乐 音乐 节目 公开演讲、演说 ',
    suit:'执行 参加 训练 比赛 创造 展示 娱乐 表达',
    characters:'有文化的 反映灵敏的 容光焕发的 有益成长的 充满热情的 多才多艺的 活泼的 迷人的 精力充沛的 艺术的 吸引人的'
  },
  {
    title:'照顾小动物',
    skill:'行为学 生物学 动物',
    suit:'照顾 打扫 交流 培养 训练 探索',
    characters:'细节的 喜悦的 随和的 有感情的 同情的 温和的 可靠的 耐心的 善良的 有益成长的 保护的 温暖的'
  },
  {
    title:'和老师一起完成某个实验',
    skill:'行为学 沟通 数据 目标 学习 读写能力 ',
    suit:'执行 适应 分析 预测 协助 参加 分类 协调 创造 洞悉 发现 草拟 探索',
    characters:'学术性强的 精确的 精通的 细节的 聪明的 有能力的 认真的 合作的 有创造性的 好奇的 好分析的 谨慎的 负责的 敏锐的 实用的 逻辑性强的 观察敏锐的 智慧的'
  },
  {
    title:'说服父母支持自己去做一件事',
    skill:'行为学 心理学 沟通 语言',
    suit:'劝告 分析 权衡 交流 面对 调和 鼓励 评估 表达',
    characters:'坚持己见的 心胸开阔的 有条理的 平静的 清楚的 民主的 能说会道的 随和的 合礼仪的 真诚的 耐心的 积极的 随和的'
  },
  {
    title:'教会别人一项技能',
    skill:'行为学 社会学 心理学 沟通 语言 计划 ',
    suit:'管理 执行 安排 评估 参加 审核 训练 交流 联系 指导 展示 鼓励 表达',
    characters:'学术性强的 精确的 精确的 有条理的 细节的 仔细的 清楚的 随和的 乐群的 吃苦耐劳的 有帮助的 头脑开放的 温暖的 热心的'
  },
  {
    title:'竞技类比赛获得奖项(如运动会、电玩比赛)',
    skill:'运动 体育运动',
    suit:'参加 比较 比赛 训练 提高 ',
    characters:'活跃的 健壮的 有能力的 竞争的 有勇气的 精力充沛的 进取的 富于表现力的 灵活的 健康的 快速的 顽强的 精力旺盛的 活泼的 迷人的'
  }
];