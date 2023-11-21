$(document).ready(function() {
    $("#adicionartarefa").click(function() {
        var novaTarefa = $("#novatarefa").val();
        if (novaTarefa !== "") {
            $("#instrucao").remove();
            $("#lista").append('<li class="list-group-item textarea">' + novaTarefa + '<button type="button" class="btn btn-danger btn-sm float-end deletar">Deletar</button></li>');
            $("#novatarefa").val("");
        }
    });

    $('ul').on('click','.btn-danger',function(){
        $(this).parent('li').fadeOut();
    });

    $('ul').on('click', '.textarea', function() {
        $(this).toggleClass('concluir');
    });
});