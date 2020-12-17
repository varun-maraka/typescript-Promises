setTimeout(()=>console.log("AsyncOpera"),1000);

let toPromise = ms => new Promise(resolve => setTimeout(resolve,ms));
toPromise(3000).then(()=>console.log("Asynce Ope 2"))
            .finally(result=> console.log(result));

const asyncExample = async()=>{
    const promiseSetTimeout = ms => new Promise(resolve => {setTimeout(resolve,ms)});
    await promiseSetTimeout(1000);
    console.log("Async Operation with async/Await");
}
asyncExample();

