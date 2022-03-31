import {newUser} from "../../configs/authentication.js";

export default () => {
  const container = document.createElement("div");
  container.classList.add("content-login")
    
  const templateNewUser = `
      <img class="logo-site" src="img/logo-eu-poesia-r.png">
      <p class="text-register">Registre-se para publicar suas poesias</p>

    <form class="form-newuser">
      <input type="email" id="input-email" class="input-email" placeholder="E-mail">
      <input type="text" id="input-name" class="input-email" placeholder="Nome de usuário">
      <input type="date" id="birth-date" class="input-email">
      <input type="password" id="input-password" class="input-email" placeholder="Senha">
      <span id="message" class="message"></span>
      <button type="button" id="button-register" class="button-login">Cadastre-se</button>
    </form>
  
    <section class="message-register">
      <p class="text-login">
        Já possui cadastro? 
        <a href="#login" class="link-login">Login</a>
      </p>
    </section>
  `;
   
container.innerHTML = templateNewUser; 

const NewUserEmail = container.querySelector('#input-email')
//const NewUserName = container.querySelector('#input-name')
//const NewUserDate = container.querySelector('#birth-date')
const NewUserPassword = container.querySelector('#input-password')
const ButtonRegister = container.querySelector('#button-register')

console.log(NewUserEmail.value);

ButtonRegister.addEventListener('click', (e) => {
e.preventDefault();
let alertmessage = document.querySelector('#message');
switch (newUser){
  case !NewUserEmail.value:
    alertmessage.innerHTML = 'Insira um e-mail'
    break;
    case !NewUserPassword.value:
      alertmessage.innerHTML = 'Crie uma senha'
      break;
      case NewUserEmail.value, NewUserPassword.value:
        alertmessage.innerHTML = 'Cadastro concluído'
        break;
}
//newUser(NewUserEmail.value, NewUserPassword.value);

//console.log(NewUserEmail.value)
//console.log(NewUserPassword.value)
;
})

return container;
}  
