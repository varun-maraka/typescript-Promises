// https://www.youtube.com/watch?v=s6SH72uAn3Q
let promiseToCleanTheRoom = new Promise(function(resolve,reject){
    let isClean = false;
    if(isClean){resolve("Clean")}
    else{reject("Not Clean")}
});

promiseToCleanTheRoom.then(function(fromResolve){
    console.log('the room is '+fromResolve);
}).catch(function(fromReject){
    console.log('the room is '+ fromReject);
})

//Example 2
let cleanRoom = function(){
    return new Promise(function(resolve,reject){
        resolve("Cleaned the Room -");
    });
};
let removeGarbage = function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg +"removed garbage -" );
    });
};
let winIceCream = function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg + "Won Icecream -" );
    });
};
cleanRoom().then(function(result){
    return removeGarbage(result);
}).then(function(result){
    return winIceCream(result);
}).then(function(result){
    console.log(result + 'finished');
})

Promise.all([cleanRoom(),removeGarbage(),winIceCream()]).then(function(){
    console.log("All completed.")
})