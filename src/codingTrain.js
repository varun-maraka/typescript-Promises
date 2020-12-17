let wordnikAPI = "https://api.wordnik.com/v4/words"
let giphyAPI = "https://api.giphy.com/v1/gifts/search"

var api = 'https://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=dc6zaTOxFJmzC';
var query = '&q=rainbow';
var para = document.createElement("P");               // Create a <p> element


var url = api + apiKey + query;

let fetProm= fetch(url);
console.log(fetProm);
fetProm.then((resp)=>{
    resp.json().then((res)=>{
        console.log("response is:"+ JSON.stringify(res.data[0].url));
        para.innerText =  para.innerText + "Hello --> \n " + res.data[0].url;
        document.body.appendChild(para);
    })
});

   

/*
let getFromGiphy = new Promise((resolve,reject) => {
    fetch(url,)
    resolve(resp)
});
getFromGiphy.then((data)=>{

}); */