// Função para manipular o envio de comentário
function submitComment() {
    var userInput = document.getElementById('userInput').value;
    var commentSection = document.getElementById('comment');

    // Se o campo de entrada estiver vazio, avise o usuário
    if (userInput.trim() === "") {
        commentSection.innerHTML = "Por favor, digite um comentário!";
        commentSection.style.color = "red";
    } else {
        commentSection.innerHTML = "Obrigado pelo seu comentário: " + userInput;
        commentSection.style.color = "green";
        document.getElementById('userInput').value = ""; // Limpa o campo após envio
    }
}
