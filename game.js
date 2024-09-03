let output = document.getElementById("output")
const submit = document.getElementById("submit")
const start = document.getElementById("start")                          
const stopbtn = document.getElementById("stop")
const myguess = document.getElementById("myguess")
let output2 = document.getElementById("output2")
const nobtn = document.getElementById("nobtn")
const card = document.getElementById('card');
let result = document.getElementById("result")
let cardanswer = document.getElementById("cardanswer")
const fcardanswer = document.getElementById("fcardanswer")
let attemptcounter = document.getElementById("attemptcounter")
//   <==== ======>
cardanswer.style.visibility="hidden"
card.style.visibility="hidden"
nobtn.style.visibility ="hidden"
stopbtn.style.visibility = "hidden"          
myguess.style.display="none"
submit.style.display ="none"
let attempts = 0
let running = false
let hint

start.onclick = () => {  
   attemptcounter.style.visibility="visible"   
   attemptcounter.textContent=`Attempts : ${attempts}`           
   cardanswer.textContent = ""
   card.style.visibility="visible" 
   card.classList.remove("flipped")
   myguess.style.display="inline"
    submit.style.display = "inline"
    myguess.value = ""                                
    output2.textContent="Want to quit??"
     running = true;                    
    stopbtn.style.visibility = "visible"
    nobtn.style.visibility="hidden"
    start.style.visibility= "hidden"

     if(running){                     

        const min = 1;
        const max = 100;
        let answer = Math.floor(Math.random() * (max - min) + min )      
        setTimeout(() => {
         fcardanswer.textContent ="lets go..!!"
      }, 1500);
      setTimeout(() => {
         fcardanswer.textContent =`its between ${min} and ${max}`
      }, 2000);
         
        result.textContent ="Game Started.."
        setTimeout(() => {
         result.textContent=""
        }, 1000);
        
      output.textContent=`Find the number behind the card` 
             
        submit.onclick = () => {      
         
           let guess = document.getElementById("myguess").value
            guess = Number(guess)
            
           if(isNaN(guess)){

            result.textContent = "please enter a valid number"
            setTimeout(() => {
               result.textContent =""
            }, 2000);
            myguess.value = ""
           }
          else if(guess<min || guess>max){
           
            result.textContent = "please read the question!"
            setTimeout(() => {
               result.textContent =""
            }, 2000);
              myguess.value = ""
           }
           else if(guess<answer){

                if(guess<answer && guess > answer - 10){
                  attempts++
                  result.textContent = `number greater than ${guess},u are getting close`
                  setTimeout(() => {
                     result.textContent =""
                  }, 2000);
                  attemptcounter.textContent=`Attempts : ${attempts}` 
                  myguess.value = ""
                }else{
                  attempts++
                  result.textContent = `number is greater than ${guess}`
                  setTimeout(() => {
                     result.textContent =""
                  }, 2000);
                  attemptcounter.textContent=`Attempts : ${attempts}` 
                  myguess.value = ""
                }
           }
           else if(guess>answer){
                
                if(guess>answer && guess < answer + 10){
                  attempts++
                result.textContent = `number lower than ${guess},u are close`
                setTimeout(() => {
                   result.textContent =""
                }, 2000);
                attemptcounter.textContent=`Attempts : ${attempts}` 
                 myguess.value = ""
                }else{
                  attempts++
                  result.textContent = `number is lower than ${guess}`
                  setTimeout(() => {
                     result.textContent =""
                  }, 2000);
                  attemptcounter.textContent=`Attempts : ${attempts}` 
                   myguess.value = ""
                 }
               
           }
           else if(guess==answer){

                attempts+=1
                attemptcounter.textContent=`Attempts : ${attempts}` 
                fcardanswer.textContent=""
                cardanswer.style.visibility="visible"
                cardanswer.textContent = answer 
                output.textContent = `u got it in ${attempts} attempt...`
                card.classList.add("flipped")
                running = false
                result.textContent = `Well done🥳`
                setTimeout(() => {
                   result.textContent =""
                }, 4000);
                output2.textContent="Want to try again?" 
                myguess.style.display="none"                     
                submit.style.display ="none"
                myguess.value = ""                                       
                nobtn.style.visibility ="visible"

                start.textContent ="Yes"
                start.addEventListener("mouseover",()=>start.textContent="😀")
                start.addEventListener("mouseleave",()=>{start.textContent="🥲";setTimeout(() => {
                  start.textContent="Yes"
                }, 1000);
                })

                start.style.visibility= "visible"                    
                stopbtn.style.visibility = "hidden"                 
                attempts = 0
                
            }
            if(attempts==4 && guess!=answer){
            
               hint = (answer%2==0) ? "it's even number" : "it's odd number";
               fcardanswer.textContent=hint
               setTimeout(() => {
                  fcardanswer.textContent =`its between ${min} and ${max}`
               }, 3000);
           }
           else if(attempts==7 && guess!=answer){
            
             hint = (answer < 50) ? "it's lower than 50" : "it's higher than 50" 
            fcardanswer.textContent=hint
            setTimeout(() => {
               fcardanswer.textContent =`its between ${min} and ${max}`
            }, 3000); 
         }
           else if(attempts==11 && guess!=answer){

            attemptcounter.style.color="red"
            result.textContent=`only one more attempt!!,Guess right or go home⛔`
            setTimeout(() => {
               result.textContent=`only one more attempt!!,Guess right or go home⛔`
            }, 1700);
           }
           else if(attempts==12 && guess!=answer){

            running = false
            window.alert(`max attempts reached!!,you are an idiot😒`)
            location.reload()
           }
           //conditions end here:)
        }

     } 

}

stopbtn.onclick = () => { 
    
    fcardanswer.textContent =""
    attempts = 0
    output2.textContent="Want to try again?"
    running = false;
    myguess.style.display="none"
    submit.style.display ="none"
    
    start.textContent ="Yes"
    start.addEventListener("mouseover",()=>start.textContent="😀")
    start.addEventListener("mouseleave",()=>{start.textContent="🥲";setTimeout(() => {
      start.textContent="Yes"
    }, 1000);
    })
    
    start.style.visibility= "visible"
    nobtn.style.visibility="visible"                               
    output.textContent ="Game Over.."
    stopbtn.style.visibility = "hidden"
    myguess.value = ""


    }

    nobtn.addEventListener("mouseover",()=>nobtn.textContent="😭")
    nobtn.addEventListener("mouseleave",()=>{nobtn.textContent="😮‍💨";setTimeout(() => {
      nobtn.textContent="No"
    }, 1000);})

    nobtn.onclick = () => {
      fcardanswer.textContent=""
      card.classList.add("flipped")
      cardanswer.style.visibility="visible"
      cardanswer.textContent ="😔"
      result.textContent = "Bye,byeee 👋"
      setTimeout(() => {
         result.textContent =""
      }, 1000);

      setTimeout(() => {
         location.reload()                             
      }, 1500);
                                                    
    }

