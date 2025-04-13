document.getElementById("toggle-form").addEventListener("click", function () {
    const formTitle = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const confirmPasswordGroup = document.getElementById("confirm-password-group");
    const toggleText = document.getElementById("toggle-form");

    if (formTitle.textContent === "Login") {
        formTitle.textContent = "Sign Up";
        submitBtn.textContent = "Sign Up";
        confirmPasswordGroup.style.display = "block";
        toggleText.innerHTML = 'Already have an account? <a href="#">Login</a>';
    } else {
        formTitle.textContent = "Login";
        submitBtn.textContent = "Login";
        confirmPasswordGroup.style.display = "none";
        toggleText.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>";
    }
});
