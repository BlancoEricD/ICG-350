
// This function will execute AFTER the entire page is loaded.
window.oneload = function() {

let myHeader =  document.querySelector(".home");
    newFunction(myHeader);
}
 
// listen for an evet. We want to listen to clicks on the myHeader element. 
myHeader.addEventListener("click", function() {
    alert("Ouch!");
})

function newFunction(myHeader) {
    console.log(myHeader);
}

