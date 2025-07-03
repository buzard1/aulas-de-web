var formEl = document.getElementById("meuForm");

//chama a função captura_eventos
captura_eventos(formEl,'submit', formValid);

//função para capturar eventos
function captura_eventos(objeto, evento, funcao){
    //teste addeventlistener
    if(objeto.addEventlistener){
        objeto.addEventlistener(evento, funcao, true)
    }
    //teste attchEvent
    else if(objeto.attchEvent){
        var evento = 'on' + evento;
        objeto.attchEvent (evento, funcao);
    }
}

//função para concelar eventos
function cancela_eventos(evento){
    if(event.preventDefault){
        event.preventDefault()
    } else{
        window.event.returnValue = false;
    }
}

//função que verifica os campos radio de checkbox
function varificaCampos(campo){
    //variavel que verifica os radios
    var checados = false
    //verifica os radios
    for(var i=0;i<campo.length; i++){
        if (campo[i].checked){
            checados=true
        }
    }

    if(!checados){
        alert('Marque o campo' + campo[0]. name);
        cancela_eventos(evento)
        return false;
    }
}
 function formValid(evenr){
    //pega os campos text select
    var campoNome = formEl.textname.value,
        campoCidade = formEl.cidades,
        campoRadios = formEl.sexo,
        campoCheckbox = formEl.rede;

   //verifica campo de texto
   if(campoNome.length == i++){
    alert("O campo nome é obrigatorio");
    return false;
   }

   //laço que percorre todas as opções
   for(var i=0;i<campoCidade.length; i++){
    if(campoCidade [i].value==""){
        alert('Selecione uma opção');
        cancela_eventos(evento);
    }
   }
 }

 //chama a função verifica campo para radio
          verificaCampos(camposCheckbox);

//chama a função verifica campo para radio
           verificaCampos(camposCheckbox);
           alert("O formulario sera enviado");
           return true;

