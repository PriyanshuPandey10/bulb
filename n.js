const n=prompt("Enter a number");
var ans = new Promise(function(resolve, reject) {
    if(n<5){
        return resolve();
    }
    else{
        return reject();
    }
})
ans.then(function(){
    console.log("Resolved");
})
ans.catch(function(){
    console.log("Rejected");
})