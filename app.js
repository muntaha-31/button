let txt = document.getElementById('txt')

let btn = ()=>{
      if (txt.innerText=='ulipur') {
      console.log('kurigram');
      txt.innerText='kurigram' 
      }

      else{
      console.log('ulipur');
      txt.innerText='ulipur'
      }
}





let new_txt = document.getElementById('new_txt')

let new_btn = ()=>{
    let n= new_txt.innerText
        n=parseInt(n)
        n=n+1
        new_txt.innerText=n    
}