const container = document.querySelector("#container");

    
const button = document.querySelector("#button");
button.addEventListener("click",() => {
    const size = parseInt(prompt("Select Size", 16));
    create(size);
});

function create (number){
    container.innerHTML = "";
    let h = 640/number;
    let w = 640/number;
    console.log(w);
    console.log(h);
    if (number<100){
        for (let i=0; i<number*number; i++){
            const div = document.createElement("div");
            div.classList.add("box",`box${i}`);
            div.style.height= `${h}px`;
            div.style.width= `${w}px`;
            container.appendChild(div);
            div.addEventListener("mouseenter",() => {
                div.style.backgroundColor= "black";
            });
        }
    }
    else {
        const result = document.createElement("div");
        container.appendChild(result);
        result.textContent = "invalid";
    }
}

