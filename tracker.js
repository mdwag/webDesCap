const clear = document.querySelector("#clear");
const clickBoi = document.querySelector("#click-boi");
const scoreBoi = document.querySelector("#score-boi");
const nameBoi = document.querySelector("#name-boi");
const container = document.querySelector("#container");
let masterArr = [];
const sortBoi = document.querySelector("#sort");
const turnBoi = document.querySelector("#turnBoi");
const formBoy = document.querySelector("#formboy");
//an array of all our character objects

turnBoi.addEventListener("click", passTurn);
formBoy.addEventListener('submit', function (e) {
  e.preventDefault();
    makeChar();
    nameBoi.value = "";
    scoreBoi.value = "";
  }
  );
clear.addEventListener("click", clearOrder);
sortBoi.addEventListener("click", orderChars);

function Character(name, score) {
    this.name = name;
    this.score = score;
    this.place = masterArr.length + 1;
  }
  
function makeChar(){
//create characters as an object with a name and score.
//add that char obj to the master array
 let newObj = new Character(nameBoi.value, scoreBoi.value);
   masterArr.push(newObj);
    makeList();
} 

function clearOrder() {
  container.innerHTML = "";
  masterArr = [];
}

function passTurn(){
  masterArr.push(masterArr[0]);
  masterArr.shift(masterArr[0]);
  makeList();
}


function orderChars(){
//sort the array of objects by order of the score values
  masterArr.sort((a, b) => {
    return b.score - a.score;
});
  makeList();
} 

function makeList(){
  container.innerHTML = "";
  for (let i = 0; i < masterArr.length; i++) {
   let newDiv = document.createElement('div');
let newText = document.createTextNode(masterArr[i].score +" " + masterArr[i].name);
    newDiv.appendChild(newText);
    container.appendChild(newDiv);
    newDiv.className = "entry";
 let editScoreBtn =  document.createElement('button');
    let editBtn = document.createTextNode( "Change Init");
    let editNameTxt = document.createTextNode( "Change name");
    let editNameBtn = document.createElement("button");
    editNameBtn.appendChild(editNameTxt);
    newDiv.appendChild(editNameBtn);
    editScoreBtn.appendChild(editBtn);
    newDiv.appendChild(editScoreBtn);
    editNameBtn.className = "edit-btn";
    editScoreBtn.className = "edit-btn";
     editNameBtn.addEventListener("click", function(){ editName(i)});
     editScoreBtn.addEventListener("click", function(){ editInit(i)});
  }
    //put the char list into the dom based on the array order
}
function editInit(index) {
  
  let editBoi = prompt("New init score?");
  masterArr[index].score = editBoi;
  makeList();
}
function editName(index) {
  
  let editBoi = prompt("New name?");
  masterArr[index].name = editBoi;
  makeList();
}

