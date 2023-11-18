let user = prompt('Login');
let password = prompt('Password');
let message;


if (user == 'admin' && password == '123456') {
    message = 'Welcome, User!';
} else if (user == 'Vahid' && password == '1234') {
    message = 'Welcome, Vahid!';
} else {
    message = 'Login or Password is/are wrong!';
}

document.getElementById('start').innerHTML = message;