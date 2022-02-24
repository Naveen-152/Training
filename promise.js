const p = new Promise((resolve,reject)=> {
    let a=3;
    if (a==2) {
        resolve("success");
    }else {
        reject("error");
    }
});

p.then((data)=> {
    console.log(data);
}).catch((data)=> {
    console.log(data);
});