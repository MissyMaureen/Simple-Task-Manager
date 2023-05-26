const taskForm = document.getElementById ('task-form')
const taskInput = document.getElementById ('task-input')
const taskList = document.getElementById ('task-list')


// Add an event listener for form submission 

taskForm.addEventListener ('submit', function(event) {
    event.preventDefault()
    
const taskText = taskInput.value.trim(); //get taskText

if (taskText !== '') {
    addTask(taskText); // Add task to the list
    taskInput.value= ''; //clear the input field
    taskInput.focus(); //set focus baack to input field

}


});

// function to add a new task

function addTask(text) {
    const taskItem = document.createElement ('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
    ${text}
    <button class = "delete-btn"> Delete</button>
    <button class = "edit-btn"> Edit</button>
    ` ;


    // To delete a task
    const deleteBtn = taskItem.querySelector('.delete-btn')

    deleteBtn.addEventListener('click', function(){
        taskItem.remove();  //Delete the task
    });

    // to edit a a task

const editBtn = taskItem.querySelector('.edit-btn');

editBtn.addEventListener('click', function(){
   const newText = prompt('enter new task text:', text);

   if (newText !== null && newText.trim() !=="") {
    taskItem.firstChild.textContent = newText;  // update task list
   }
})

taskList.appendChild(taskItem); //add task to the list
}


