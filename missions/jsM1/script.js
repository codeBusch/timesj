const printName= name => {
    let input =document.getElementById("p-name");
    input.innerText = `Merhaba, ${name} ! Hoş geldin`;
}
let nameInput =prompt("isminizi giriniz",' ');
printName(nameInput);
let time = document.getElementById("time");

const date =()=>{    
    let d = new Date();
    let day =d.getUTCDay()
    // to do     switch case bloklarını array'e çevir
    switch (day){
        case 0:
            day= "pazar";
            break;
        case 1:
            day= "pazartesi";
            break;
        case 2:
            day= "salı";
            break;
        case 3:
            day= "çarşamba";
            break;
        case 4:
            day= "perşembe";
            break;
        case 5:
            day= "cuma";
            break;
        case 6:
            day= "cumartesi";
            break;
    }
    return `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()} ${day}`    
}
setInterval(() => {
    d = new Date()
    time.innerText = date();
  }, 1000)