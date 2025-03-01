let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    
let bye = document.querySelector('.para')


     let name = document.querySelector("h1",  );
     let hello = document.querySelector("div")
     name.innerText = rgb();
    
     hello.style.backgroundColor = rgb();
    

    
});






function rgb() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}

