let texEnter = document.getElementById("competences");
let contenteJauge = document.querySelector(".skill");
let jauges = document.querySelectorAll(".jauge");
let textes = [
    " PHOTOGRAPHE",
    " WEB DESIGN",
    " WEB DEVELOPMENT",
    " PHOTOGRAPHY",
    " GRAPHIC DESIGN"
];
let index = 0;
let key = 0;
function textAnim(){
    setTimeout(() =>{
        texEnter.innerHTML += `${textes[key][index]}`;
        if(index >= textes[key].length){
            key += 1;
            index = 0;
            texEnter.innerHTML = "";
        }
        if(key >= textes.length){
            key = 0;
        }
        index += 1;
        textAnim();
    },600);
}
setTimeout(()=>{
    textAnim();
},1000);
console.dir(contenteJauge);
window.addEventListener("scroll",e =>{
    let dataScroll = e.target.scrollingElement.scrollTop;

    if(dataScroll + screen.height > contenteJauge.offsetTop + contenteJauge.clientHeight){
        for(let i = 0; i < jauges.length; i++){
            let jg = jauges[i];
            if(jg.classList.contains("active")){
                return;
            }else{
                jg.classList.add("active");
            }
        }
    }
})