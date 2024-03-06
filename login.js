function logar(){
    var login = document.getElementById('Login').value
    var senha = document.getElementById('Senha').value

    if(login == "admin" && senha == "admin") {
        alert("sucesso")
        location.href = "home.html"
    } else{
        alert("Usuario ou senha incorretos")
    }
}