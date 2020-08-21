
function reproducir(){
}

var botones = [];
for(var i = 1; i <= 13; i++){
    botones.push(document.getElementById(`s${i}`))
}

botones[0].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[0].play();
})
botones[1].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[1].play();
})
botones[2].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[2].play();
})
botones[3].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[3].play();
})
botones[4].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[4].play();
})
botones[5].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[5].play();
})
botones[6].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[6].play();
})
botones[7].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[7].play();
})
botones[8].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[8].play();
})
botones[9].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[9].play();
})
botones[10].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[10].play();
})
botones[11].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[11].play();
})
botones[12].addEventListener("click", ()=>{
    document.getElementsByTagName("audio")[12].play();
})