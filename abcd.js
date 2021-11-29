var buttons = document.getElementsByClassName("number");
var display = document.getElementById("set-number");

var operand1 = null;
var operand2 = null;
var operator = null;

function isOperator(value){
    return value=="+" || value=="-" || value=="*" || value=="/";
}

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if(isOperator(value)){
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        }
        else if(value == "ac"){
            display.textContent = "";
        }
        else if(value == "sign"){
            operand1 = parseFloat(text);
            operand1 = -1*operand1;
            display.textContent = operand1;
        }
        else if(value=="."){
            if(text.length && !text.includes('.')){
                display.textContent = text + '.';
            }
        }
        else if(value=="%"){
            operand1 = parseFloat(text);
            operand1 = operand1/100;
            display.textContent = operand1;
        }
        else if(value=="^"){
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = " ";
           
        }
        else if(value=="=" && operator=="^"){
                operand2 = parseFloat(text);
                var result1 = Math.pow(operand1,operand2);
                display.textContent = result1;
                operand1 = result1;
                operand2 = null;
                operator = null;
        }
        else if(value=="√"){
           
            operand1 = parseFloat(text);
            operand1 = Math.sqrt(operand1);
            display.textContent = operand1;
        }
     
        else if(value=="log"){
            //operator = value;
            operator = parseFloat(value);
            display.textContent = "";
            operand1 = parseFloat(text);
            operand1 = Math.log(operand1);
            display.textContent = operand1;
        }
        else if(value=="="){
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if(result){
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            } 
            else if(result==0){
                display.textContent = result;
            }
        }
        else{
            display.textContent+=value;
        }
    });
}