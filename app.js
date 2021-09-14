function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('new call')
        return getPin()
    }   
};


function generatePin(){
    const pin = getPin()
    document.getElementById('input-box').value = pin;
     
};

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('input-fild');
    if(isNaN(number)){
        if(number == 'C')
           calcInput.value = '';
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }  
});

function verifyePin(){
   const pin = document.getElementById('input-box').value;
   const typesNumber = document.getElementById('input-fild').value;
   const successMassage = document.getElementById('notify-success')
   const failError = document.getElementById('notify-fail')
   if(pin == typesNumber){
       successMassage.style.display = 'block';
       failError.style.display = 'none';

   }
   else{
    successMassage.style.display = 'none';
    failError.style.display = 'block';
       
   }
};

