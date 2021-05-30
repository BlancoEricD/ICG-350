
gsap.from("li", {
    duration: 1, 
    opacity: 0
})

gsap.from("h1", {
    y: 400
    onComplete: animateName,
})

function animateName() {
gsap.from("h3", {
     y: 400
    opacity: 1    
    }
    )
   
})

