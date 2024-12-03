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
let inputUserImg = document.getElementById("userImage");
let inputNewTask = document.getElementById("newTask");

//containers
let listContainer = document.getElementById("list-container");

//funcoes
function addUser(event) { 
    event.preventDefault();

    if (inputUserImg.value.trim() === '' || inputUserName.value.trim() === '') {
        alert("Complete seus dados corretamente ");
    } else {
        // Criar um novo contêiner de usuário
        let userDiv = document.createElement("div");
        userDiv.classList.add("user-container"); // Classe para o novo "quadrado" de cada usuário

        // Criar a área de informações do usuário
        let userInfoContainer = document.createElement("div");
        userInfoContainer.id = "user-Informations";

        // Criar a imagem e o nome do usuário
        let img = document.createElement("img");
        img.src = inputUserImg.value;
        img.alt = "Imagem do Usuário";
        img.classList.add("user-img");

        let h2 = document.createElement("h2");
        h2.textContent = inputUserName.value;
        h2.classList.add("user-name");

        // Criar os botões de editar e excluir para o novo usuário
        let btnEdit = document.createElement("button");
        btnEdit.classList.add("edit-userName-btn");
        btnEdit.textContent = "✏️";

        btnEdit.addEventListener("click", function() {
            let newUserName = prompt("Atualize seu nome de usuário");
            if (newUserName) {
                h2.textContent = newUserName;  // Atualiza o nome no h2
            }
        });

        let btnDelete = document.createElement("button");
        btnDelete.classList.add("delete-user-btn");
        btnDelete.textContent = "🗑️";

        btnDelete.addEventListener("click", function() {
            // Remover o contêiner do usuário inteiro
            userDiv.remove();
        });

        // Adicionar os botões em um contêiner à direita
        let buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("buttons-container");
        buttonsContainer.appendChild(btnEdit);
        buttonsContainer.appendChild(btnDelete);

        // Adicionar a imagem, o nome e os botões ao contêiner de informações do usuário
        userInfoContainer.appendChild(img);
        userInfoContainer.appendChild(h2);
        userInfoContainer.appendChild(buttonsContainer);

        // Adicionar a área de informações do usuário ao contêiner principal
        userDiv.appendChild(userInfoContainer);

        // Criar a área de tarefas do usuário
        let taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        // Criar a lista de tarefas
        let taskList = document.createElement("ul");
        taskList.classList.add("task-list");

        // Criar o botão de adicionar tarefa
        let taskInput = document.createElement("input");
        taskInput.type = "text";
        taskInput.placeholder = "Novo Afazer";

        let taskAddButton = document.createElement("button");
        taskAddButton.textContent = "+ Adicionar Tarefa";

        // Adicionar o evento de adicionar tarefa
        taskAddButton.addEventListener('click', function() {
            if (taskInput.value === "") {
                alert("Digite sua nova tarefa");
            } else {
                let taskItem = document.createElement("li");
                
                // Criar a checkbox antes do nome da tarefa
                let checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.classList.add("task-checkbox");

                // Criar o texto da tarefa
                let taskText = document.createElement("span");
                taskText.textContent = taskInput.value;

                // Criar os botões de editar e excluir tarefa
                let taskEditButton = document.createElement("button");
                taskEditButton.classList.add("edit-btn");
                taskEditButton.textContent = "✏️";

                let taskDeleteButton = document.createElement("button");
                taskDeleteButton.classList.add("delete-btn");
                taskDeleteButton.textContent = "🗑️";

                // Adicionar o checkbox, o texto da tarefa e os botões no item da lista
                taskItem.appendChild(checkbox); // Primeiro o checkbox
                taskItem.appendChild(taskText); // Depois o nome da tarefa
                taskItem.appendChild(taskEditButton); // Botão de editar
                taskItem.appendChild(taskDeleteButton); // Botão de excluir

                // Adicionar a tarefa à lista de tarefas
                taskList.appendChild(taskItem);

                // Limpar o campo de input após adicionar a tarefa
                taskInput.value = "";

                // Editar a tarefa
                taskEditButton.addEventListener('click', function() {
                    let newTask = prompt("Atualize sua tarefa", taskText.textContent);
                    if (newTask) {
                        taskText.textContent = newTask;
                    }
                });

                // Deletar a tarefa
                taskDeleteButton.addEventListener('click', function() {
                    taskItem.remove();
                });
            }
        });

        // Adicionar os componentes da tarefa no contêiner de tarefas
        taskContainer.appendChild(taskInput);
        taskContainer.appendChild(taskAddButton);
        taskContainer.appendChild(taskList);

        // Adicionar o contêiner de tarefas ao contêiner de usuário
        userDiv.appendChild(taskContainer);

        // Adicionar o novo usuário ao contêiner de usuários
        let usersListContainer = document.getElementById("users-list-container");
        usersListContainer.appendChild(userDiv);

        // Limpar os campos de input do usuário
        inputUserName.value = '';
        inputUserImg.value = '';
    }
}

btnAddUser.addEventListener('click', addUser);

btnAddUser.addEventListener('click', addUser);

btnAddTask.addEventListener('click', function(event){
   
   
    event.preventDefault();  // Prevenir qualquer comportamento padrão (se o botão for de um formulário)

    if (inputNewTask.value.trim() === "") {
        alert("Digite sua nova tarefa");
    } else {
        let li = document.createElement("li");
        
        // Criar checkbox e associar à tarefa
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");

        // Criar o botão de editar
        let editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.innerHTML = "✏️";
        
        // Criar o botão de excluir
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.innerHTML = "🗑️";

        // Coloca a checkbox antes do texto
        li.appendChild(checkbox); // Primeiro a checkbox
        li.appendChild(document.createTextNode(inputNewTask.value)); // Depois o texto da tarefa
        li.appendChild(editButton); // Botão de editar
        li.appendChild(deleteButton); // Botão de excluir
        
        // Adicionar o <li> à lista de tarefas
        let listContainer = document.getElementById("list-container");
        listContainer.appendChild(li);

        // Limpar o campo de input após adicionar a tarefa
        inputNewTask.value = '';
        
        // Editar a tarefa
        editButton.addEventListener('click', function() {
            let newTask = prompt("Atualize sua tarefa", li.innerText.trim());
            if (newTask) {
                li.innerHTML = ''; // Limpa o conteúdo atual
                li.appendChild(checkbox); // Re-adiciona a checkbox
                li.appendChild(document.createTextNode(newTask)); // Atualiza o texto da tarefa
                li.appendChild(editButton); // Botão de editar
                li.appendChild(deleteButton); // Botão de excluir
            }
        });

        // Deletar a tarefa
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
    }
});

