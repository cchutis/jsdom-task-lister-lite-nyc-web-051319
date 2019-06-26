document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector('#create-task-form')
  const container = document.querySelector('#tasks')

  taskForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const textField = e.target.querySelector('#new-task-description')
    const text = textField.value
    const newLi = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'X'
    newLi.innerText = text
    container.appendChild(newLi)
    newLi.appendChild(deleteButton)
    taskForm.reset()
  })
  container.addEventListener('click', function(e) {
    if (e.target.innerHTML === 'X') {
      e.target.parentNode.remove()
     }
  })
});
// form name is create-task-form

