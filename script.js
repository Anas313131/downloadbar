let count = 0;
let bar=document.querySelector(".progress-bar");
let percentage=document.querySelector(".percent");

let st = setInterval(() => {
   if(count<=99){
   count++;
   bar.style.width =`${count}%`;
   percentage.style.width = `${count}%`;
   percentage.textContent = `${count}%`;
}
else{
   document.querySelector(".title").textContent="Successful";
   clearInterval(st);
} 
if(count<50){
   bar.style.background = "red";
}
if(count==50){
     bar.style.background = "green";
}
}, 30);

let hid = setInterval(() => {
   document.querySelector(".title").style.display = "none";
}, 2000);

setTimeout(() => {
   clearInterval(hid);
}, 1000);