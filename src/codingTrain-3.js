var para = document.createElement("P");
var loading_Text = document.createElement("P");
var url_base = "https://source.unsplash.com/random/";
var img_size = "200×300"
var complete_url = url_base + img_size;


delayedExecute("1000a").then(()=>createP("\nPromise completed  \n"))
        .catch((err)=>createP("\nGot an error:"+err +"\n"));
delayedExecuteES8("1000");
delayedExecuteAwait("1000");


loading_Text.innerText = "Loading ..";
document.body.appendChild(loading_Text);


async function delayedExecuteAwait(time){
    await delayedExecute(time).then(()=> createP("\nAwait delayed execute"))
                              .catch(()=> createP("\nFailed in Await"));
    createP("\nAfter Delayed Execute");
    await setTimeout(()=>{},2000);
    let resp_fet = await fetch(complete_url).then();
    loading_Text.innerText = "Loading done";
    document.body.appendChild(loading_Text);
    console.log(resp_fet);
    createIMG(resp_fet.url);

}
    
async function delayedExecuteES8(time){
    await delayedExecute(time).then(()=> createP("\nAwait delayed execute"))
                              .catch(()=> createP("\nFailed in Await"));
    createP("\nAfter Delayed Execute");
    await setTimeout(()=>{},2000);
    fetch(complete_url).then((resp)=>{
        loading_Text.innerText = "Loading done";
        document.body.appendChild(loading_Text);
        console.log(resp);
        createIMG(resp.url);
    })
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

function createIMG(url_param){
    /*let img = new Image();
    img.src = "https://source.unsplash.com/1600*900/?beach";
    document.getElementById("img_home").appendChild(img); */
    let item = document.getElementById('img_home');
    item.classList.add('item');
    item.innerHTML = `<img class="beach-image" src="${url_param}" alt="beach image" width="200" height="300"/>`     
    document.body.appendChild(item);
}