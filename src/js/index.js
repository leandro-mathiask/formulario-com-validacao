function verificacao() {
    const inputs = document.querySelectorAll('.input');
    let formValido = true; // Verifica se o formulário está válido
  
    inputs.forEach(input => {
      const label = input.nextElementSibling; // A label de notificação correspondente
  
      if (input.value.trim() === "") {
        // Se o campo estiver vazio, adiciona a borda vermelha e mostra a notificação
        input.classList.add('erro');
        input.classList.remove('sucesso');
        label.style.visibility = 'visible';
        formValido = false; // Formulário inválido se algum campo estiver vazio
      } else {
        // Se o campo estiver preenchido, adiciona a borda verde e esconde a notificação
        input.classList.add('sucesso');
        input.classList.remove('erro');
        label.style.visibility = 'hidden';
      }
    });
  
    // Impede o envio do formulário se estiver inválido
    if (!formValido) {
      event.preventDefault();
    }
  }