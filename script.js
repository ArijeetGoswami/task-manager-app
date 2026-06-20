const form_input = document.querySelector('#user-task');
const form_button = document.querySelector('#task-add');

//for adding the task to the task list
const ALL_task_list = document.querySelector('#ALL-TASK-LIST');




//for updateion we creted an array and a index
const task = [];
let update_index = null;  // to keep track of the index of the task being updated



form_button.addEventListener('click', ()=>{
    const new_task = form_input.value.trim();  // so blank spaces are not considered as a task
    console.log(new_task)


   if(new_task === '') return;  // if the input is empty or just spaces, do nothing



   //--- NOT WOKING PROPERLY ---//  --> UANBLE TO RECIFY THE ISSUE

//    //check conditon
//    if(update_index !== null){
//     task[update_index] = new_task;
//     // add the updted task to the task list
//     ALL_task_list.children[update_index].firstChild.textContent = new_task; // update the task in the task list
//      //rese4t the update index after updating the task
//     update_index = null;
//      form_input.value = ''; // clear the input field after updating the task
//      return
//    }


   /// tasks added to the task list successfully
    const task_list_li = document.createElement('li');
    task_list_li.textContent = new_task;
    ALL_task_list.appendChild(task_list_li)

    ///lets focus on creating a delete button for each task added to the list

    const delete_button = document.createElement('button');
    delete_button.textContent = 'Delete';
    task_list_li.appendChild(delete_button);
     
    // delete button functinalty added succesfullt
    delete_button.addEventListener('click', ()=>{
     console.log(new_task + ' deleted successfully')
    task_list_li.remove();
    })
   

    



     


    //lets focus on update button for each task added to the list

    const update_button = document.createElement('button')
    update_button.textContent = 'Update';
    task_list_li.appendChild(update_button);


    // lets focus on update functionaluty for each task added to the list
    update_button.addEventListener('click', () =>{
        form_input.value = new_task; //copies the current task back to the from input field
        //now determine the index of the task being updated in the task array
        update_index = task.findIndex((e)=> e === task_text.textContent)
         //finds the index of the task being updated in the task array and assigns it to update_index

    })

    form_input.value = '';  // to clear the input field after adding the task Note--> s just a string (the trimmed value of the input), not the input element itself. Strings don’t have a .value property

})