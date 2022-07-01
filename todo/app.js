

function additem(){
    const todo = document.getElementById("todo"); 
  const divtask = document.createElement("div");
  const task = document.getElementById("new-task");
  divtask.innerText = task.value;
  todo.appendChild(divtask); 
  const divcont = document.createElement("div");
  const conbtn = document.createElement("button");
  const delbtn = document.createElement("button");
  conbtn.innerText = "Edit";
  delbtn.innerText = "Delete";
  divtask.appendChild(divcont);
  divcont.appendChild(conbtn);
  divcont.appendChild(delbtn);
}

