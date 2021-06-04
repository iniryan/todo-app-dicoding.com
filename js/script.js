document.addEventListener("DOMContentLoaded", function () {
 
    const submitForm = document.getElementById("form");
 
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addTodo();
        document.getElementById("title").value = '';
        document.getElementById("date").value = '';
    });
});
