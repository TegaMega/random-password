const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let inputEl = document.getElementById("input-el")
let inputTwoEl = document.getElementById("input-two-el")
let generateNewPswd =document.getElementById("generatPwd")
let passWordLength = 17;
generatePwd.addEventListener("click", function () {
function randomPassword() {
   let index = Math.floor(Math.random()*characters.length)
   return characters[index]
}
function generatePwd() {
    let randomPass = '';
    for (i = 0;i < passWordLength; i++) {
        randomPass += randomPassword()
    }
       return randomPass
} 
    const passOne = generatePwd()
   const  passTwo = generatePwd()
    inputEl.innerText = passOne
    inputTwoEl.innerText = passTwo
 }) 
