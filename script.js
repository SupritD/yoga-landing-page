// alert("hey man!")


const active_hamburger = () =>{
    document.getElementById("hamburger").classList.toggle("active");
    // document.querySelector("#hamburger").classList.toggle("active")
}
let a = 0;

const time = () =>{
    setInterval(() => {

       a = a + Math.floor(Math.random()*20);
    //    console.log(a); 
    if(a < 100){
        document.querySelector("#loader h1").innerHTML = a + "%"
    }
    else if(a >= 100){
        a = 100;
        document.querySelector("#loader h1").innerHTML = a + "%"
        // clearInterval(time);
    }
    }, 150);
    
}

var tl = gsap.timeline();


tl.to("#loader h1",{
    delay: 1,
    // opacity:0,
    duration:1,
    onStart:time()
})
tl.to("#loader",{
    delay:0.5,
    duration:1,
    top:"-100vh"
})