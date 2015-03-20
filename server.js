/**
 * Created by ProBook on 18.03.2015.
 */
var user=require('./user/index.js');
var vasya=new user.User("Vasia99");
var petya=new user.User("Petia");
vasya.hello(vasya);
var sum=require('./operation.js');
//var res1= sum.test;
//res1.sum();
//console.log(res);
console.log( module );