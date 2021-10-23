 /*  // DOM 1.Ders
 function myFunction() {
    var w = window.open();
    w.document.open();
    w.document.write("<h1>Hello World!</h1>");
    w.document.close();
}
document.getElementById("domain").innerHTML = "DOM Manipülasyonu yaptık!";
document.getElementById("btnClick").addEventListener("click",clicked);
function clicked(){
    alert("Butona Tıklandı");
    prompt("isim");
} */
    //DOM 2.DERS
/*
const unicorn =document.getElementById("unicorn");
const animals = document.getElementsByTagName('li'); 

const email = document.querySelector('#signup input[name="email"]');
const inputs = document.getElementById('signup').getElementsByTagName('input');
console.log(inputs)
*/ 
    //DOM DERS 3 PROMP KULLANIMI
    //DOM DERS 4  liste içinde öge ile işlemler
    /*
    let item= document.querySelector("ul#list>li:last-child");
    console.log(item);
    console.log(!!2);
    */
   const helloFuncV1 = (firstName) =>{ console.log(`Hello ${firstName}`)}
   helloFuncV1("bahri");
   const helloFuncV2 = firstName =>{ console.log(`Hello ${firstName}`)}
   helloFuncV2("bahri2");