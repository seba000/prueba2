document.querySelector('#dolar').addEventListener('click', function(){
    obtenerDatos('dolar');
});
document.querySelector('#bitcoin').addEventListener('click', function(){
    obtenerDatos('bitcoin');
});
document.querySelector('#euro').addEventListener('click', function(){
    obtenerDatos('euro');
});

function obtenerDatos(valor){
   let url = `https://mindicador.cl/api/${valor}`;
   const api = new XMLHttpRequest();
   api.open('GET',url,true);
   api.send();

   api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
          
            let datos = JSON.parse(this.responseText);
            console.log(datos.serie);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            let i = 0;

            for(let item of datos.serie){
                //console.log(item.fecha);
                i++;
                resultado.innerHTML += `<li>"FECHA :"${item.fecha.substr(0,10)} |"VALOR :" ${item.valor}</li>`;
                if(i>0){
                    break;
                }
            }
                
            
        }

   }
}