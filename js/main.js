
function consultaCep(){
    $(".barra_progresso").show();
 var cep = document.getElementById("cep").value;

 var url = "https://viacep.com.br/ws/" + cep + "/json/";
 console.log(url);   
 $.ajax({
   url: url,
   type:"GET",
   success:function(response){
       console.log(response);
    
      $("#logradouro").html(response.logradouro);
       // document.getElementById("logradouro").innerHTML = response.logradouro;
       $("#bairro").html(response.bairro);
       $("#localidade").html(response.localidade);
       $("#uf").html(response.uf);
       $("#titulo_cep").html("CEP " + response.cep); 
       $(".cep").show();
       $(".barra_progresso").hide(1000);
       
   }

 })


}

$(function(){
   $(".cep").hide();
   $(".barra_progresso").hide();
});