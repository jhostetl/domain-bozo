
// adds task to task list
function addTask(description, dueTime){

    let task = document.createElement('li');

    if (dueTime !== false){
        dueTime = new Date(dueTime).toLocaleString();        
    }else{
        dueTime = "";
    }


    //creates new list element
    const newListElement = document.createElement('li');
    newListElement.textContent = description;
    
    //creates span element in list item
    const spanElement = document.createElement('span');
    spanElement.textContent = dueTime;
    spanElement.classList.add("due");
    newListElement.append(spanElement);


    //adds done button to list item
    const doneButtonElement = document.createElement('button');
    doneButtonElement.textContent = 'Done';
    doneButtonElement.classList.add("btn");
    doneButtonElement.classList.add("btn-sm");
    doneButtonElement.classList.add("btn-outline-danger");
    doneButtonElement.classList.add("done");
    newListElement.append(doneButtonElement); // add the button onto the end of the new list element
 

    let taskListUl = document.getElementById('task_list');
    taskListUl.prepend(newListElement);





    //let task_list_ul = document.getElementById('task_list');
    //task_list_ul.prepend(task);
    document.getElementById('task_description_input').value = "";
}

// gets the details of the task from the input boxes
function getTaskDetails(){
    let description = document.getElementById('task_description_input').value;
    let dateInputElement = document.querySelector('#duedate_input');
    let timeInputElement = document.querySelector('#duetime_input');
    var dueTimestamp = dateAndTimeToTimestamp(dateInputElement, timeInputElement);
    addTask(description, dueTimestamp);     
}

// checks when somebody clicks the add task button
document.querySelector('#add_task').addEventListener('click', ()=> {
    getTaskDetails();
});

// when somebody clicks enter from the task description
document.querySelector('#task_description_input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getTaskDetails();        
    }
});

// removes li element when done button is clicked
 document.addEventListener('click',function(e){
    if(e.target && e.target.classList.contains('done')){
        e.target.parentElement.remove();
     }
 });




// converts date and time to timestamp
function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {

    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime && (dueDate + dueTime !== 1633098600000) && !isNaN(dueDate) && !isNaN(dueTime)) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}