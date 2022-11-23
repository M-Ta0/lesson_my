//构造函数
//js没有class，不是传统面向对象语言
//constructor 构造
//js function 代替 class 类的封装
//基于对象的面向对象
function Person(name,age){
    this.name = name;
    this.age = age;
}
const xlz = new Person('小玲子',16);
console.log(xlz.name);