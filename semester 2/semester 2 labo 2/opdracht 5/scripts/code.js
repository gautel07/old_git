const setup = () => {
    let pElement = document.getElementById("txtOutput");
    let btnWijzig=document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click" , ()=>{wijzig(pElement)})

}
const wijzig =(pElement)=>{
    pElement.innerHTML="Welkom";
}
window.addEventListener("load", setup);