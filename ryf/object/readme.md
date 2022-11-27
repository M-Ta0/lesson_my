# 一起读技术文章，提升我们的认知
1.c语言 过程式 函数 main()
    js 是基于对象的语言  为什么不叫面向对象的语言？
    object-based
2.js 原来没有class 关键字
    var es5  let const es6 以后
    es6 才有了class关键字
    js不是一种真正的面向对象编程语言， 基于对象的语言， 这个对象就是object
3.除了简单数据类型，都是对象
    任何对象都有一个__proto__私有属性去说明他基于哪个对象创建的
4.js 本没有类 早期class 关键字都没有
    但是内置了一个Object 对象
    其他所有对象都基于这个空对象进行创建
    再把这个对象的构建过程（属性和方法的集合），用一个函数来封装
    new Person() 得到了 基于对象的心得对象
5.基于对象，生成实例对象的原始模式 一步步创建的
    缺点是 慢 重复
6.函数封装对象的时候
    缺点是
7.js使用构造函数的方式来创建类
    以new的方式来运行
    对象构建过程的封装 this 会指向 实例
    另外 class 有的 instanceof 也有
    并且兄弟对象之间基于的对象一致
8.js 基于对象
    - __proto__
    - prototype
    - constructor == Object
9.js中创建类 写个构造函数就完成了
10.js JS构造类的流程
    - 先使用构造函数 定义实例属性的构造过程 每个对象属性是不一样的，
        归实例自己所有 this 具象
    - 由于 实例们公有的属性和方法，没有必要放在构造函数里，因为会消费没必要的内存
    - 每个函数都有一个prototype属性，专门用来设计共享的属性 方法对象
        原型对象
        js类 = 构造函数（constructor）+ prototype
        new 构造函数  实例对象
    - 实例是怎么拿到构造函数的prototype里的属性（property）和方法（method）的呢
        __proto__