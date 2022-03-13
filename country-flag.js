
 const countryButtonElement= document.querySelector("button")
 
 
countryButtonElement.addEventListener("click",function(e){
 contained()


})




const button=document.querySelectorAll("input")
   function contained(){
    showAnswer.textContent = ""
  let rightAnswer=" "
  let picked=[]
 for(let i=0; i<button.length; i+=1){
  button[i].checked=false

   const randomCountry=Math.floor(Math.random()*countryWithImages.length)
   const newButton=countryWithImages[randomCountry].name
   const newPick =countryWithImages[randomCountry].file_url
  // console.log(newButton)
   const holder={newButton,newPick}
   picked.push(holder)


console.log(button[i]);


    button[i].addEventListener("click",function(e){

    	//console.log(e.currentTarget.value)[]
   if (e.currentTarget.value===rightAnswer){
     showAnswer.textContent="True"
   }
   else{
    showAnswer.textContent="False"
   }
     
 })

   button[i].value=newButton
   console.log(button[i].previousElementSibling)
   button[i].previousElementSibling.textContent=newButton

 }
 	
//console.log(picked)
pickedRandomly=Math.floor(Math.random()*picked.length)

let linkedCountry =picked[pickedRandomly]

rightAnswer=linkedCountry.newButton
console.log(linkedCountry)

document.querySelector("img").setAttribute("src",`https:${linkedCountry.newPick}`)

}

 contained()
 





 	

