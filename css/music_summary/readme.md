# 大厂 HTML5 作品赏析
- html5 标签
    audio 网易云音乐
    video 爱奇艺 B站
- background-size
    1.移动端rem 宽跟高是多变的 而pc端没有这个问题
    2.移动端 retina 3倍retina
        40x40 应该放一个80x80的
        200x200 
    3.background-size:cover  背景图片的大小
        等比例缩放背景图片，填满容器
        超出则剪裁
        另一个属性 contain
- 库文件引入的位置
    1.css 放到head里
        css应该尽早的参与网页的渲染
    2.js放在body最下面，因为js会阻塞页面渲染
- swiper 滑动组件库的使用
    1.引入swiper组件库
        js css
    2.固定的html结构
        .swiper-container(滑动区域大小)>.swiper-wrapper>.swiper-slide
    3.new Swiper(selector，{ //实例化一下
        direction:''
        })
- translate3d(-50%,0,0) 3d 启动3d加速器 GPU渲染
    translate(-50%,0) 2d
    效果一样 
- 使用linear-gradient 生成背景图片
    1.颜色渐变的图片，#f8ddd1,#faece5 73%,#fad2c0
        colorstop
    2.性能优化，图片的下载比较大
        css 写的不需要额外的下载   img src需要去下载+显示 开销比较大
        下载越多，http并发数越多，就越卡