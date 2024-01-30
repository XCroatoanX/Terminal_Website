function submitForm(){
    var input = document.getElementById('passwrd')
    var password = input.value;

    if (password === "1234") {
        window.location.href = '/artem_web/html/mainpage.html'
    }
    else {
        window.location.href = '/artem_web/html/error.html'
    }
};