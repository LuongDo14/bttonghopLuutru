function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'tendangnhap' && password === 'matkhau') {
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', username);

        alert('Đăng nhập thành công!');
    } else {
        alert('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.');
    }
}
