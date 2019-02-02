window.onload = function(){
    var name=prompt('Как Ваше имя?', ''); // return string | null      
    var reg = /\d/; //проверка наличие цифр
    var upperCase = name;

     if(!name){
         // будет истина только если вернет строку
         alert('Вы не указали свое имя!');                    
         
     }
     else {
         if (reg.test(name)){
            //перевод к верхнему регистру                 
            alert('Ваше имя ' +name.toUpperCase()+ '!');            
         }
         else{                      
            //реверс 
             alert('Ваше имя '+name.split("").reverse().join("")+'!');             
         }
     }     
 };