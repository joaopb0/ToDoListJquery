$(document).ready(function() {
    $("#adicionartarefa").click(function() {
        var novaTarefa = $("#novatarefa").val();
        if (novaTarefa !== "") {
            $("#instrucao").remove();
            $("#lista").append('<li class="list-group-item">' + novaTarefa + '</li>');
            $("#novatarefa").val("");
        }
    });
});