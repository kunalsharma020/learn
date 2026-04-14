// // change card title color to red
// y kya krta h ye code card title ke color ko red kr deta h. getElementsByClassName se humne card-title class ke sare elements ko select kiya aur [0] se pehle element ko select kiya. fir uske style property me color ko red set kar diya.

// let ctitle=document.getElementsByClassName("card-title")[0];
// ctitle.style.color="red"; 


// ye code card-title class ke sare elements ko select karta hai aur unhe ek NodeList me store karta hai. fir console.log se us NodeList ko print karta hai. querySelectorAll se hum kisi bhi CSS selector ke elements ko select kar sakte hain, is case me humne .card-title selector use kiya hai.

// let ctitle=document.querySelectorAll(".card-title");
// console.log(ctitle); 


//  ye code card-title id ke element ko select karta hai aur uske color ko red set kar deta hai. getElementById se hum kisi bhi element ko uske id ke through select kar sakte hain. is case me humne card-title id ke element ko select kiya hai.

// let ctitle=document.getElementById("card-title");
// ctitle.style.color="red";

// ye code HTML document ke sare elements ko unke tag name ke through select karta hai. is case me humne p tag ke sare elements ko select kiya hai aur unhe ek HTMLCollection me store kiya hai. fir console.log se us HTMLCollection ko print kiya hai.
// document.getElementsByTagName 

// console.log(id1.matches(".card-title")); // true
// console.log(id1.matches(".card-text")); // false

// ye code card-title id ke element ko select karta hai aur uske matches method se check karta hai ki kya wo .card-title class ke element se match karta hai ya nahi. matches method ek boolean value return karta hai, agar element specified selector se match karta hai to true return karta hai, otherwise false return karta hai. is case me card-title id ke element me .card-title class bhi hai, isliye matches method true return karega. fir dusre console.log me check kiya gaya hai ki kya card-title id ke element me .card-text class bhi hai, jo ki nahi hai, isliye matches method false return karega.

// console.log(sp1.closest(".card")); // <div class="card" id="id1">...</div>

// console.log(id1.contains(sp1)); // true
