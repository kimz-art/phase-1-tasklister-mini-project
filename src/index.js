document.addEventListener("DOMContentLoaded", () => {
  // your code here
   const taskForm=document.querySelector("#create-task-form");

   taskForm.addEventListener("submit",(event) =>{
    event.preventDefault();

    const task=document.getElementById('new-task-description').value
    buildToDo(task)
})
function buildToDo(task){
  const li=document.createElement("li")
  li.textContent=task
  document.querySelector('#tasks').append(li)
}
});
if (typeof module !== 'undefined') {
  module.exports = { buildToDo }
}
