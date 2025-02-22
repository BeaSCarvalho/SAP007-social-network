import { forgotPassword } from '../../configs/authentication.js';

export default function recover() {
  const container = document.createElement('div');
  container.classList.add('content-login');

  const templateRecoverPassword = `
    <img class="logo-site" src="img/logo-eu-poesia-r.png">

    <form class="form-login">
      <p class="title-recover">Redefinir Senha</p>
      <p class="text-recover">Insira o seu email e enviaremos um link para você poder criar uma nova senha.</p>
      <input type="email" id="input-email" class="input-email" placeholder="E-mail">
      <span class="message" id="msg-recover"></span>
      <button type="button" id="button-send" class="button-login">Enviar link</button>
      <a href="#login" class="link-login">Voltar ao Login</a>
    </form>    
  `;

  container.innerHTML = templateRecoverPassword;

  const sendLinkButton = container.querySelector('#button-send');
  const msgAlert = container.querySelector('#msg-recover');
  const userEmail = container.querySelector('#input-email');

  sendLinkButton.addEventListener('click', (e) => {
    e.preventDefault();
    forgotPassword(userEmail.value)
      .then(() => {
        msgAlert.innerHTML = 'Email enviado.';
      })
      .catch((error) => {
        const errorCode = error.code;
        let errorMessage = error.message;

        switch (errorCode) {
          case 'auth/invalid-email':
            errorMessage = 'Email inválido.';
            msgAlert.innerHTML = errorMessage;
            break;
          case 'auth/user-not-found':
            errorMessage = 'Usuário não encontrado.';
            msgAlert.innerHTML = errorMessage;
            break;
          case 'auth/missing-email':
            errorMessage = 'Insira um email.';
            msgAlert.innerHTML = errorMessage;
            break;
          default:
            msgAlert.innerHTML = 'Erro Desconhecido';
        }
      });
  });

  return container;
}
