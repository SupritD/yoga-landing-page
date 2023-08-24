// alert("hey man!")

// locomotive js code from github
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// function for hamburger button
const active_hamburger = () =>{
    // document.getElementById("hamburger").classList.toggle("active");
    document.querySelector("#hamburger").classList.toggle("active")
}
let a = 0;

// function for preloader
const time = () =>{
    setInterval(() => {
       a = a + Math.floor(Math.random()*20);
    if(a < 100){
        document.querySelector("#loader h1").innerHTML = a + "%";
    }
    else if(a >= 100){
        a = 100;
        document.querySelector("#loader h1").innerHTML = a + "%";
    }
    }, 150);
    
}

// gsap code
var tl = gsap.timeline();

tl.to("#loader h1",{
    delay: 1,
    duration:1,
    onStart:time()
})
tl.to("#loader",{
    delay:0.5,
    duration:1,
    top:"-100vh"
})