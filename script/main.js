let btnAddUser = document.getElementById("addUser");
let btnAddTask = document.getElementById("addTask");

let inputUserName = document.getElementById("userName");
let inputUserImg = document.getElementById("userImage");
let inputNewTask = document.getElementById("newTask");

let listContainer = document.getElementById("list-container");

// Estrutura que armazenará os dados dos usuários
let usersData = [];

function addUser(event) {
    event.preventDefault(); // Previne o envio do formulário (se necessário)

    if (inputUserImg.value.trim() === '' || inputUserName.value.trim() === '') {
        alert("Complete seus dados corretamente ");
    } else {
        // Criando um objeto para armazenar os dados do usuário
        const newUser = {
            id: usersData.length + 1,
            name: inputUserName.value,
            avatar: inputUserImg.value,
            afazeres: [] // Lista de afazeres inicialmente vazia
        };

        // Adicionando o novo usuário ao array de usuários
        usersData.push(newUser);

        // Exibe os dados de usuários no console
        console.log("Usuários após adicionar:", JSON.stringify(usersData, null, 2));

        // Criar o contêiner do usuário na interface
        renderUser(newUser);

        // Limpar os campos de input
        inputUserName.value = '';
        inputUserImg.value = '';
    }
}

// Função que renderiza o usuário na interface
function renderUser(user) {
    // Criar o contêiner para o usuário
    let userDiv = document.createElement("div");
    userDiv.classList.add("user-container");

    let userInfoContainer = document.createElement("div");
    userInfoContainer.id = "user-Informations";

    // Criar a imagem e o nome do usuário
    let img = document.createElement("img");
    img.src = user.avatar;
    img.alt = "Imagem do Usuário";
    img.classList.add("user-img");

    let h2 = document.createElement("h2");
    h2.textContent = user.name;
    h2.classList.add("user-name");

    // Botões de editar e excluir
    let btnEdit = document.createElement("button");
    btnEdit.classList.add("edit-userName-btn");
    btnEdit.textContent = "✏️";

    btnEdit.addEventListener("click", function() {
        let newUserName = prompt("Atualize seu nome de usuário");
        if (newUserName) {
            h2.textContent = newUserName;
            user.name = newUserName;  // Atualiza o nome no objeto de dados

            // Exibe os dados de usuários no console
            console.log("Usuários após editar nome:", JSON.stringify(usersData, null, 2));
        }
    });

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("delete-user-btn");
    btnDelete.textContent = "🗑️";

    btnDelete.addEventListener("click", function() {
        userDiv.remove(); // Remove da interface
        usersData = usersData.filter(u => u.id !== user.id); // Remove da memória

        // Exibe os dados de usuários no console
        console.log("Usuários após deletar:", JSON.stringify(usersData, null, 2));
    });

    let buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    buttonsContainer.appendChild(btnEdit);
    buttonsContainer.appendChild(btnDelete);

    userInfoContainer.appendChild(img);
    userInfoContainer.appendChild(h2);
    userInfoContainer.appendChild(buttonsContainer);

    userDiv.appendChild(userInfoContainer);

    // Contêiner de tarefas
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    let taskList = document.createElement("ul");
    taskList.classList.add("task-list");

    let taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "Novo Afazer";

    let taskAddButton = document.createElement("button");
    taskAddButton.textContent = "+ Adicionar Tarefa";

    taskAddButton.addEventListener('click', function() {
        if (taskInput.value === "") {
            alert("Digite sua nova tarefa");
        } else {
            let newTask = { tarefa: taskInput.value, completed: false };
            user.afazeres.push(newTask); // Adiciona a tarefa ao usuário

            // Exibe os dados de tarefas no console
            console.log("Tarefas após adicionar:", JSON.stringify(user.afazeres, null, 2));

            let taskItem = document.createElement("li");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("task-checkbox");
            checkbox.addEventListener('change', function() {
                newTask.completed = checkbox.checked; // Marca como concluído na memória
            });

            let taskText = document.createElement("span");
            taskText.textContent = taskInput.value;

            let taskEditButton = document.createElement("button");
            taskEditButton.classList.add("edit-btn");
            taskEditButton.textContent = "✏️";

            let taskDeleteButton = document.createElement("button");
            taskDeleteButton.classList.add("delete-btn");
            taskDeleteButton.textContent = "🗑️";

            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskText);
            taskItem.appendChild(taskEditButton);
            taskItem.appendChild(taskDeleteButton);

            taskList.appendChild(taskItem);
            taskInput.value = "";

            // Editar a tarefa
            taskEditButton.addEventListener('click', function() {
                let newTaskText = prompt("Atualize sua tarefa", taskText.textContent);
                if (newTaskText) {
                    taskText.textContent = newTaskText;
                    newTask.tarefa = newTaskText; // Atualiza na memória

                    // Exibe os dados de tarefas no console
                    console.log("Tarefas após editar:", JSON.stringify(user.afazeres, null, 2));
                }
            });

            // Deletar a tarefa
            taskDeleteButton.addEventListener('click', function() {
                taskItem.remove();
                user.afazeres = user.afazeres.filter(t => t.tarefa !== newTask.tarefa); // Remove da memória

                // Exibe os dados de tarefas no console
                console.log("Tarefas após deletar:", JSON.stringify(user.afazeres, null, 2));
            });
        }
    });

    taskContainer.appendChild(taskInput);
    taskContainer.appendChild(taskAddButton);
    taskContainer.appendChild(taskList);

    userDiv.appendChild(taskContainer);

    let usersListContainer = document.getElementById("users-list-container");
    usersListContainer.appendChild(userDiv);
}

// Adicionando o ouvinte de evento corretamente
btnAddUser.addEventListener('click', addUser);
