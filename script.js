let serach = document.querySelector(".serach-x");
let inputserach = document.querySelector(".serach");
let d=document.querySelectorAll('.d')
let header=document.querySelector('header')
let menu = document.querySelector(".hamburger-menu");
let day=29
let saat=24
let deyqe=59
let saniye=59
inputserach.style='display:none;'
flag=true
serach.addEventListener('click',()=>{
    if(flag===true){
        inputserach.style = "display:block;";
        flag=false
    }else if(flag===false){
        inputserach.style = "display:none;";
        flag=true
    }
    
    console.log('click');
})
d[0].textContent=day
d[1].textContent=saat
d[2].textContent=deyqe
d[3].textContent=saniye
setInterval(()=>{
    if (saniye > 0) {
      saniye--;
      d[3].textContent = saniye;
    }else if (saniye === 0) {
      saniye = 60;
      deyqe -= 1;
      d[2].textContent = deyqe;
    }
    if(deyqe===0){
         saat-=1
         deyqe=59
         d[2].textContent = deyqe;
         d[1].textContent=saat
    }
     if (saat === 0) {
       day -= 1;
       saat = 24;
       d[1].textContent = saat;
       d[0].textContent = day;
     }
     if(day===0){
        clearInterval()
     }
},1000)



flags=true
menu.addEventListener('click',()=>{
  if(flags===true){
     header.style = "height:96vh;";
     flags=false
     console.log(flags)
  }else if(flags===false){
    header.style = "height:80px;";
    flags=true
    console.log(flags)
  }
  
})
