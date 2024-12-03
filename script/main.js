//botoes 
let btnAddUser = document.getElementById("addUser");
let btnAddTask = document.getElementById("addTask");

let btnEditUserName = document.querySelector(".edit-userName-btn");
let btnDeleteUser = document.querySelector(".delete-user-btn");

//dados
let userName = document.getElementById("h2UserName");
let userImage = document.getElementById("imageUserInformation");


//inputs
let inputUserName = document.getElementById("userName");
let inputUserImg = document.getElementById("userImage") ;
let inputNewTask = document.getElementById("newTask");

//containers
let listContainer = document.getElementById("list-container")

//funcoes

function addUser(){ 

    if(inputUserImg.value === ''  || inputUserName.value === ''){
        alert("Complete seus dados corretamente ");
    } else {

        userName.innerHTML = inputUserName.value;
        userImage.src = inputUserImg.value;
    }
};

btnEditUserName.addEventListener('click', function(){
    
    let newUserName = prompt("Atualize seu nome de usuário");
    if (newUserName) {
        userName.innerHTML = newUserName;
    }

});


btnDeleteUser.addEventListener('click', function(){
    
    confirm("Você tem certeza que deseja deletar o usuário?")

    if(confirm){
        userName.innerHTML = ' ';
        userImage.src = ' ';
    }

});

btnAddTask.addEventListener('click', function(){

    if(inputNewTask.value === "") {
        alert("Digite sua nova tarefa");
    } else {
        
        let li = document.createElement("li");
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");

        let editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.innerHTML = "✏️";
        
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.innerHTML = "🗑️";


        li.innerHTML = inputNewTask.value; 
        li.prepend(checkbox); 
        li.appendChild(editButton); 
        li.appendChild(deleteButton); 
       
        let listContainer = document.getElementById("list-container");
        listContainer.appendChild(li);
  
        inputNewTask.value = '';
     
        editButton.addEventListener('click', function() {
            let newTask = prompt("Atualize sua tarefa", li.innerText.trim());
            if (newTask) {
                li.innerHTML = newTask;
                li.prepend(checkbox); 
                li.appendChild(editButton);
                li.appendChild(deleteButton);
            }
        });

        deleteButton.addEventListener('click', function() {
            li.remove();
        });
    }
});
