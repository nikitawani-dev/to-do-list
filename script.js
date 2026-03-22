document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    // Create Exit button only
    const exitBtn = document.createElement('button');
    exitBtn.textContent = 'Exit App';
    exitBtn.style.marginTop = '10px';
    exitBtn.style.backgroundColor = '#ff4d4d';
    exitBtn.style.color = 'white';
    exitBtn.style.border = 'none';

    const container = document.querySelector('.container');
    container.appendChild(exitBtn);

    // Add new task
    addBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.style.float = 'right';
        deleteBtn.style.background = 'none';
        deleteBtn.style.border = 'none';
        deleteBtn.style.cursor = 'pointer';

        // Mark complete on click
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Delete on button click
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    });

    // Add task on Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    // Exit the app (hide UI)
    exitBtn.addEventListener('click', () => {
        container.style.display = 'none';
        alert('App exited.');
    });
});
