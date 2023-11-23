let user = prompt('Login');
let password = prompt('Password');
let message;


if (user == 'admin' && password == '123456') {
    message = 'Welcome, User!';
} else if (user == 'Vahid' && password == '1234') {
    message = 'Welcome, Vahid!';
} else if (user == 'Ayaz' && password == '1234') {
    message = 'Welcome, Ayaz!';
} else if (user == 'Murad' && password == '1234') {
    message = 'Welcome, Murad!';   
} else if (user == 'Elmaddin' && password == '1234') {
    message = 'Welcome, Elmaddin!';
} else if (user == 'Mikayil' && password == '1234') {
    message = 'Welcome, Mikayil!';
} else {
    message = 'Login or Password is/are wrong!';
}

document.getElementById('answer').innerHTML = message;