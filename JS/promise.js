// // alert('kunal');
// let prom1=new Promise((resolve, reject)=>{
//     let a=Math.random();
//     if(a<0.5){
//         reject("error");
//     }else {
//         setTimeout(()=>{
//         console.log("i am done");
//         resolve("kunal");
//     }, 3000);

//     }
    
// })

// prom1.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

let prom1=new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("error");
    }else {
        setTimeout(()=>{
        console.log("i am done");
        resolve("kunal");
    }, 3000);

    }
    
})

let prom2=new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("error");
    }else {
        setTimeout(()=>{
        console.log("i am done");
        resolve("kunal 2");
    }, 3000);

    }
    
})

let p=Promise.all([prom1, prom2])
p.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
});