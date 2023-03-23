var btn=document.getElementById('btn');
console.log(btn);
onscroll=()=>{
    if(scrollY>=300){
        btn.style.display='block'
    }else{
        btn.style.display='none'

    }
};
btn.onclick=()=>{
    scroll({
        top:0,
        behavior:"smooth"
    })
}

