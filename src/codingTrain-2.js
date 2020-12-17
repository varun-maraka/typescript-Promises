var para = document.createElement("P");

delayedExecute("1000a").then(()=>createP("\nPromise completed  \n"))
        .catch((err)=>createP("\nGot an error:"+err +"\n"));
delayedExecuteES8("1000a");

async function delayedExecuteES8(time){
    await delayedExecute(time).then(()=> createP("\nAwait delayed execute"))
                              .catch(()=> createP("\nFailed in Await"));
    createP("\nAfter Delayed Execute");
}

function delayedExecute(time){
    return new Promise((resolve,reject)=>{
        if(isNaN(time)){
            reject("Not a number");
        }else{
            setTimeout(resolve,time);
        }
    })
}

function createP(msg){
    para.innerText = para.innerText +  msg;
    document.body.appendChild(para);
}