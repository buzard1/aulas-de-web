document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-fornecedor');
  
    form.addEventListener('submit', function (e) {
      const nome = document.getElementById('nome').value.trim();
      const cnpj = document.getElementById('cnpj').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
  
      // Verifica se algum campo está vazio
      if (!nome || !cnpj || !email || !telefone) {
        alert('Por favor, preencha todos os campos.');
        e.preventDefault(); // Impede envio do formulário
        return;
      }
  
      // Validação CNPJ
      const cnpjRegex = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/;
      if (!cnpjRegex.test(cnpj)) {
        alert('CNPJ inválido. Ex: 12.345.678/0001-90');
        e.preventDefault();
        return;
      }
  
      // Validação E-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('E-mail inválido.');
        e.preventDefault();
        return;
      }
  
      // Validação Telefone
      const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
      if (!telefoneRegex.test(telefone)) {
        alert('Telefone inválido. Ex: (11) 98765-4321');
        e.preventDefault();
        return;
      }
  
      // Se tudo OK
      alert('Fornecedor cadastrado com sucesso!');
    });
  });
  