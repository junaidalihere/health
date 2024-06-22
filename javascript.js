function textsplit(){
    let h1 = document.querySelector(".page1-center h1");

let texth1 = h1.textContent
let splitedtext = texth1.split("");

let half = splitedtext.length/2

let cluter = "";


splitedtext.forEach(function(elem,idx){
   if(idx<half){
    cluter += `  <span class="a">${elem}</span>`
   }else{
    cluter += `  <span class="b">${elem}</span>`
   }
})

h1.innerHTML = cluter;

console.log(h1)
}

textsplit();


let h1 = document.querySelector(".page1-center h1");



gsap.from("h1 span",{
    x:-80,
    duration: 0.3,
    stagger:0.1,
    opacity:0
})




gsap.to(".page3 h1",{
    transform: "translate(-175%)",
    scrollTrigger:{
        trigger: ".page3",
        scroller: "body",
        start: "top 0%",
        scrub : true,
        pin: true
    }
})


let overlay = document.querySelector(".overlay");



document.addEventListener("mousemove",function(dets){
    gsap.to(overlay,{
        top:dets.y,
        left:dets.x
    })
});




gsap.to(".page4 .text",{
    height:"100%",
    scrollTrigger:{
        trigger: ".page4",
        scroller:"body",
        start: "top 5%",
        scrub: true,
        pin: true
    }
})

let box = document.querySelectorAll(".box");

let arr = Array.from(box);

forEach(function(elem){
    let img = elem.getAttribute("data-imge")
    console.log(img)
   elem.addEventListener("mouseenter",function(){
    overlay.style.width = "300px" 
    overlay.style.height = "300px"
    overlay.style.borderRadius = "2px"
    overlay.style.backgroundImage = `url(${img})`
   })


   elem.addEventListener("mouseleave",function(){
    overlay.style.width = "30px" 
    overlay.style.height = "30px"
    overlay.style.borderRadius = "50px"
 })
})



let path = "M 10 100 Q 500 100 1230 100";
let Finalpath = "M 10 100 Q 500 100 1230 100";

let str = document.querySelector(".string");

str.addEventListener("mousemove",function(dets){
    path = `M 10 100 Q 500 ${dets.y} 1230 100`;
    gsap.to("svg path",{
        attr:{d: path}
    })
})


str.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        duration:0.8,
        attr:{d: Finalpath},
        ease: "elastic.out(1,0.2)"
    })
})