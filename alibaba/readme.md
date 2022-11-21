# 阿里巴巴双十一界面开发
- 设计稿件
    750px 像素 一种尺寸 移动页面
    iphone 对小尺寸375pt retina屏幕 设计的标准
- 前端使命
    html+css+js 1像素不差的还原设计稿
    - 交互
    - css带来视觉效果 css动画
    - 设计稿静态的，我们要做动态的
    - 兼容性 alley 兼容性达到恐怖的99.99%

- css reset
    1.抹平不同浏览器的预设样式，从0出发，在所有浏览器上表现一致
    2.利用css inherit 继承属性 在body里面把font-size、font-family预设好
        浏览器默认的字体大小就是16px

- rem单位
    1.在移动端，为了兼容 少用甚至不用px
    2.先给html标签设置font-size
        37.5px 固定？
        等比例占位  1/10  方便去做栅格系统 布局
        如何在不同的设备上让rem等于设备宽度/10 
        设备的宽度可以通过在控制台里 用window.innerWidth
    3.html的font-size 要动态设置
        window.innerWidth 拿到设备宽度
        document.documentElement.style.fontSize = + "px"