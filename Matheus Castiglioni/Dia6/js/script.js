

function start(){
    var btnSalvar = document.querySelector(".js-button-savar");
    btnSalvar.addEventListener("click", btnSalvarClick);
}

function btnSalvarClick(){
    var inputNome = document.querySelector(".form-field-name");
    var inputBirthDate = document.querySelector(".form-field-birth-date");
    console.log(String(inputNome.value));
    console.log(String(inputBirthDate.value));

    alert("Cadastro salvo!");
}

start();