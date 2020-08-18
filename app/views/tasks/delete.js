const btnDelete = document.querySelector("#delete-btn");
btnDelete.addEventListener('click', (event) => {
  event.preventDefault();
  if (confirm("Are you sure you want to delete this task?")) {
    <%= link_to "delete", task_path(task), method: :delete %>;
  }
});
