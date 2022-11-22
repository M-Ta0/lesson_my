const arr = [1,2,3];
//末尾添加一个元素
//在末尾添加多个元素
//返回值是数组的新长度
Array.prototype.push2()=function(){
    console.log('-----------')
    //如何得到所有的参数 []arguments
    console.log(arguments,'??')
    //所有复杂数据类型 typeof object
    //[object Array]
    // console.log(typeof arguments,Object.prototype.toString.call(arguments))
    // console.log(arguments.length);
    for(let i=0; i<arguments.length;i++){
        this[this.length] = arguments[i];
    }
    return this.length;
}
arr.push2(4,5,6);
console.log(arr);