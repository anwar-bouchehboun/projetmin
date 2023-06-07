var id=parseInt(100*Math.random());
function calcule(){
var ch=document.querySelectorAll("input[type=checkbox]:checked");
var prix=0;
var prixTTC;
for (var i=0; i<ch.length;i++) {
	prix+=parseInt(ch[i].value);		
}
prixTTC=prix+(prix*0.07);
alert("identifiant :"+id+"\n"+"le prix totale :" +prix+"\n"+"le prix totale TTC :"+ prixTTC);

}
$("envoyer").click(function(){

	var prix= $('input:radio:checked').val() ;
	$.ajax({
type : 'post',
url : 'data.json',
data :'identifiant=' + id + '&leprixtotale =' + prix + '&leprixtotaleTTC=' + prixTTC,

success: function(msg) {alert(msg);}
});
  });


   





