// const callback=(arg)=>{
//     console.log(arg);
// }

// const loadscript=(src, callback)=>{
//     let sc=document.createElement("script");
//     sc.src=src;
//     sc.onload=callback("kunal")
//     document.body.append(sc);
// }
// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", callback)

// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("kunal");
//     }, 4000);
//   });
// }

async function getData() {
    let x=await fetch("https://jsonplaceholder.typicode.com/todos/1")
    // .then(response=>response.json)
    // .then(json=>console.log(json))
    let data=await x.json()
    console.log(data)

}
async function main() {
  console.log("loading .. modules");
  console.log("do something else");
  console.log("load data");
  let data = await getData();
  console.log(data);
  console.log("process data");
  console.log("task2");
}

main() 