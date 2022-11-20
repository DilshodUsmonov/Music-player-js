const elpausa=document.querySelector('.pausa');
const elplay=document.querySelector('.play');
const elaudio=document.querySelector('.qush');
const elp=document.querySelector('.para');
const elsours=document.querySelector('.qushiq')
const elqaytar=document.querySelector('.qaytar')
const elotkaz=document.querySelector('.otkaz')
const elsarlavha=document.querySelector('.card-title')
const elrasm=document.querySelector('.card-img-top');
const elnom=document.querySelector('.card-titl');
const elboxone=document.querySelector('.box-play');

let sanoq=0;
   
 const song= [
   {
    title:'Shoxruz Abadiya',
    nomi:'Beggi qara',
    img:'shoxruz abadiya.jpg',
    music:'beggi qara.mp3'
   },
   {
    title:'Farrux Raimov',
    nomi:'Asal qizim',
    img:'farrux.jpg',
    music:'Asal qizim.mp3'
   },
   {
    title:'Janob Rasul',
    nomi:'Yumshoq',
    img:'janob rasul.jpg',
    music:'Yumshoq.mp3'
   },
   {
    title:'Bojalar',
    nomi:'yaxshi korinaman deb',
    img:'bojalar.jpg',
    music:'yaxshi korinaman deb.mp3'
   }
 
 
 ]
  
 let audio=(song[sanoq].music);
  elaudio.src=(audio);
  function umumiy(e) {
    elsarlavha.textContent=null;
    elnom.textContent=null;
     let newspan=document.createElement('span');
     let newnomi=document.createElement('span');
     newspan.textContent=song[e].title;
     newnomi.textContent=song[e].nomi;
     elsarlavha.appendChild(newspan);
     elnom.appendChild(newnomi)
     elrasm.src=(song[e].img);
    audio=(song[e].music);
    elaudio.src=(audio);
    elaudio.play();
   
  }

  function play() {
  
    if(elaudio.paused) {
      elaudio.play()
      elboxone.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pause-fill " viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
    </svg>`
    }
    else {
      elaudio.pause();
      elboxone.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-fill " viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
    </svg>`
      
    }
  }

  function pausa() {
    if(!elaudio.paused) {
    elaudio.currentTime=0;
    elaudio.pause();
    }
  }
 
  function otkazish() {
    if(!elaudio.paused) {
      elaudio.pause();
    }
 
    if(song.length-1> sanoq) {
       elaudio.currentTime=0;
       ++sanoq;
      
      
    }
    else {
      sanoq=0;
    }
   
    umumiy(sanoq)
     
  }

  function qaytarish() {
    if(!elaudio.paused) {
      elaudio.pause();
    }
 
    if(0<sanoq) {
       elaudio.currentTime=0;
       --sanoq;
      
      
    }
    else {
      sanoq=song.length-1;
    }
   
    umumiy(sanoq)
  }
  elplay.addEventListener('click', play)
  elpausa.addEventListener('click', pausa)
  elotkaz.addEventListener('click', otkazish)
  elqaytar.addEventListener('click', qaytarish)





  