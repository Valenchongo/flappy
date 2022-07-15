bujero = document.getElementById("agujero");
tubo = document.getElementById("tubo");
pj = document.getElementById("pj")
contador = document.getElementById("contador")
var timejump = 0;
posicionagujero = 0
var jumping = 0;
puntuacion = 0;


agujero.addEventListener("animationiteration" ,()=>{
  posicionagujero = -((Math.random()*300)+150)
  bujero.style.top = posicionagujero +"px";
  puntuacion++
  htmlcode = `${puntuacion}`
  contador.innerHTML = htmlcode;

 
})

setInterval(()=>{
  posicionmax = 500;
  posicionmaxbujero =+500+(posicionagujero);
  posicionminbujero = 600+posicionagujero; 
  leftpj = parseInt(window.getComputedStyle(pj).getPropertyValue("left"));
  lefttubo =parseInt(window.getComputedStyle(tubo).getPropertyValue("left"));
  posicionpj = parseInt(window.getComputedStyle(pj).getPropertyValue("top"))
  if(jumping == 0){
   pj.style.top =(posicionpj+1.7)+"px";
  }
  if(lefttubo<=leftpj+25){
    if( (posicionpj<=posicionmaxbujero+12.5)|| (posicionpj>=posicionminbujero) ){
      alert("tu puntuacin es de "+puntuacion)
      pj.style.top = 100+"px";
      puntuacion = -1;
    }
         
  }
  if(posicionpj <=-12.5){
    alert("tu puntuacin es de "+puntuacion)
      pj.style.top = 100+"px";
      puntuacion = -1;
  }
  if(posicionpj >=477){
    alert("tu puntuacin es de "+puntuacion)
      pj.style.top = 100+"px";
      puntuacion = -1;
  }
  console.log(posicionpj)
 
 },2.5) 


window.addEventListener("click",()=>{
    i = 0;
    jumping = 1;
    jump = setInterval(() => {
      
      posicionpj = parseInt(window.getComputedStyle(pj).getPropertyValue("top"))
      if( (i <15 && i !=0)){
      pj.style.top =(posicionpj-4)+"px";
      }
       while (i >20){
        clearInterval(jump)
        i=0
        jumping =0 ;          
        
       }
       i ++;
      
      
    },3);
    
   
     
})
