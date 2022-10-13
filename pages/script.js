const scriptURL = 'https://script.google.com/a/plugify.com.br/macros/s/AKfycby5-zzLTf6ENugBqp-y7Y6iEL2XxNrR_bxvja6b/exec'
    const form = document.forms['google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        // .then(response => $("#form_alerts").html("<a onclick='M.toast({html: 'I am a toast'})class='Toast!</a>"))
        // .catch(error => $("#form_alerts").html("<a onclick='M.toast({html: 'I am a toast'})class='Toast!</a>"))
    });
const number = 13456.78;

console.log(new Intl.NumberFormat('pt-BR').format(number));

    
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
       });


       //$('.dinheiro').mask('#,##0.00', {reverse: true});
$('.validate').mask('#.##0,00', {reverse: true});
$('.validate').on('change', function(ev){console.log(ev.target.value.replace(',','')); console.log(new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(parseFloat(ev.target.value.replace(',',''))))})