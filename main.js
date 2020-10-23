let input =document.querySelector('#add')
let btn =document.querySelector('#btn')
let list=document.querySelector('#list')
let el=document.getElementsByTagName('li')

btn.addEventListener('click',()=>{
    let txt=input.value
    if(txt === ""){
        alert('Harus diisi sesuatu')
    }else{
        let li=document.createElement('li')
        li.innerHTML = txt;
        list.insertBefore(li,list.childNodes[0]);
        input.value='';
    }
})

list.addEventListener('click', e =>{
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked')
    }
})

setInterval(function(){
    let clock = document.querySelector(".display")
    let time =new Date();
    let sec= time.getSeconds();
    let min=time.getMinutes();
    let hr=time.getHours();
    let day='AM';
    if(hr>12){
        day='PM'
        hr=hr-12; 
    }
    if(hr == 0){
        hr=12
    }
    if(sec<10){
        sec ='0'+sec
    }
    if(min<10){
        min='0'+min
    }
    if(hr<10){
        hr='0'+hr
    }

    clock.textContent=hr+ ':'+ min + ':'+sec+" "+day;
})