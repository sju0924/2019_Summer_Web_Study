const list=[1,2,3,4,5,6,7,8,9,10];


const callbackExample=(items, callback)=>{
setTimeout(() => {
    var result = list.reduce((a,b)=>a+b);
    callback(result)
}, 0);
}

callbackExample(list,(result)=>console.log(result));

console.log('first');



/*function callbackExample(items,callback){
    setTimeout(function(){
        let sum=0;
        for(let i=0;i<items.length;i++){
            sum+=items[i];
        }
        callback(sum);
    },0);
};
callbackExample(list,function(result){
    console.log(result);
});
console.log('first');
*/
