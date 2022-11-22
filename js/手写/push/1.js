// 数组的优势是 以O(1)的时间访问到 第i个元素
const arr = [1,2,3];
const arr2 = [a,b,c];
arr.push(4);
console.log(arr);

Array.prototype.push2 = function(num){
    // arr [1,2,3,4]
    // console.log('------')
    this[this.length] = num;
    return this.length+1;
}
console.log(arr.push2(4),'?????')
arr.push2(5);
console.log(arr.push2(6));
