let myPromise = new Promise((success, error)=>{
const x =0;
if(x===10){
    success('this ok')
}else{
    error('this faild')
}
});
myPromise.then(
    (resolve)=>console.log(resolve),
    (rejected)=>console.log(rejected)
);