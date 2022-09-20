const slider:any = document.querySelector('.slider')?.children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const totalSlide:any = slider?.length;
let index = 0;
let duration = 6000;
console.log(totalSlide);

next?.addEventListener('click', ()=>{
    slide('next');
})
prev?.addEventListener('click', ()=>{
    slide('prev');
})
function slide(direction :any){
    progress();
    if(direction =='next'){
    if(index == totalSlide-1){
           index = 0
    }else{
        index++;
    }
   }
   if(direction == 'prev'){
    if(index == 0){
        index = totalSlide - 1;
    }else{
        index--;
    }
   } 
   clearInterval(time);
   time =setInterval(autorun, duration);
   for(let i = 0; i < slider.length; i++){
    slider[i].classList.remove('active');
   }
   slider[index].classList.add('active');
}

function progress(){
    const element: HTMLElement = document.querySelector('.progress') as HTMLElement;
    element.innerHTML = '';
    const div = document.createElement('div');
    div.style.height = '5px';
    div.style.width = '0';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.backgroundColor = 'red';
    div.id = 'progress';
    div.style.animation = 'progress ' + duration/1000 + "s linear";
    document.querySelector('.progress')?.appendChild(div);
}
function autorun(){
    slide('next')   
}
let time = setInterval(autorun, duration);
progress();