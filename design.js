const bars = document.querySelector("#menu");
const drop = document.querySelector(".dropdown-content");
const dropItems = document.querySelectorAll(".nav-item");

bars.addEventListener("click", function(){
    drop.style.visibility = "visible";
    drop.style.display = "block";
    for (let i = 0; i < dropItems.length; i++){
    dropItems[i].style.visibility = "visible";
    dropItems[i].style.display = "block";
    }
}
);