document.addEventListener('DOMContentLoaded', function() {
    const formContacto = document.getElementById('form-contacto');

    formContacto.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        const contato = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        };

        alert(`Mensagem enviada!\nNome: ${contato.nome}\nEmail: ${contato.email}\nAssunto: ${contato.assunto}\nMensagem: ${contato.mensagem}`);

        // Opcional: Aqui você poderia adicionar código para enviar os dados para um servidor
        formContacto.reset(); // Limpa o formulário após o envio (simulado)
    });
});