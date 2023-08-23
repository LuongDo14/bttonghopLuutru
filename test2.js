const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = {
        username: username,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Đăng ký thành công!");

    registrationForm.reset();
});
