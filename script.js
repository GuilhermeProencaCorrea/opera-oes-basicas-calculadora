let text = '';
       function soma () {
        let number1 = parseInt(document.getElementById("myInputnumberi").value, 10);
        //conversão de string para number, base 10
        let number2 = parseInt(document.getElementById("myInputnumberii").value, 10); 
        text = number1+number2
        document.getElementById("text").innerHTML= text;
       }
       function subtracao () {
        let number1 = document.getElementById("myInputnumberi").value;
        let number2 = document.getElementById("myInputnumberii").value;
        text = number1-number2;
        document.getElementById("text").innerHTML= text;
       }
       function multiplicacao () {
        let number1 = document.getElementById("myInputnumberi").value;
        let number2 = document.getElementById("myInputnumberii").value;
        text = number1*number2;
        document.getElementById("text").innerHTML= text;
       }
       function divisao () {
        let number1 = document.getElementById("myInputnumberi").value;
        let number2 = document.getElementById("myInputnumberii").value;
        text = number1/number2;
        document.getElementById("text").innerHTML= text;
       }