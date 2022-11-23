//生成对象
//猫这个类的模版
var Cat = {
    name:'',
    color:''
}
 var cat1 = {};//new Object
 cat1.name = 'damao'
 cat1.color = 'red'
//封装起来
 var cat2 = {};
 cat2.name = 'mao'
 cat2.color = 'blue'
 //函数 大写的类
 function Cat(name,color){
    this.name = name;
    this.color = color;
 }
 //实例化的过程
 var cat3 = new Cat('三毛','灰');
 console.log(cat3);