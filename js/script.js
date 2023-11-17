$(document).ready(function() {
    // Adiciona um evento de clique ao botão "Adicionar"
    $("#adicionartarefa").click(function() {
        // Obtém o valor do campo de entrada
        var novaTarefa = $("#novatarefa").val();

        // Verifica se o campo não está vazio
        if (novaTarefa !== "") {
            // Adiciona um novo item no início da lista
            $("#lista").prepend('<li class="list-group-item">' + novaTarefa + '</li>');

            // Limpa o campo de entrada
            $("#novatarefa").val("");
        }
    });
});