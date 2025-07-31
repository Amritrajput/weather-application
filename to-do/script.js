document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('to-do-input');
    const btn = document.getElementById('add-task-button');
    const list = document.getElementById('to-do-list');

    let task = JSON.parse(localStorage.getItem('tasks')) || [];

    task.forEach(element => {
        renderTask(element);
    });

    btn.addEventListener('click', () => {
        const taskText = input.value.trim();
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        task.push(newTask);
        saveTask();
        renderTask(newTask);
        input.value = "";
    });

    function renderTask(singleTask) {
        const li = document.createElement('li');
        li.setAttribute('data-id', singleTask.id);
        if (singleTask.completed) li.classList.add('completed');

        li.innerHTML = `
            <span>${singleTask.text}</span>
            <button>Delete</button>
        `;

        li.addEventListener('click', (e) => {
            if (e.target.tagName === "BUTTON") return;
            singleTask.completed = !singleTask.completed;
            li.classList.toggle('completed');
            saveTask();
        });

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            task = task.filter(t => t.id !== singleTask.id);
            li.remove();
            saveTask();
        });

        list.appendChild(li);
    }

    function saveTask() {
        localStorage.setItem('tasks', JSON.stringify(task));
    }
});
