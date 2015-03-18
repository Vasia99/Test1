/**
 * Created by ProBook on 18.03.2015.
 */
var a=20;
var b=4;
function myOperation(a,b){
    this.a=a;
    this.b=b;

}
myOperation.prototype.sum=function(){
    var res=this.a+this.b;
    return res;


}
var test=new myOperation(a,b);
console.log(test.sum());
exports.test=test;
console.log("Операція додавання");