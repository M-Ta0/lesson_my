function Cat(name,color){
    this.name = name;
    this.color = color;
    //this.type = '猫科动物'；// 有点浪费内存
    this.eat= function(){console.log("吃老鼠");}
}
//prototype
//拿到构造函数的prototype对象的属性
//构造函数的prototype对象是用来提供所有实例共享的属性或方法的
Cat.prototype.type = '猫科动物'//省内存
Cat.prototype.eat = function(){console.log("吃老鼠")}