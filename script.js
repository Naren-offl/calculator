let num = '';

document.body.addEventListener('keydown',(event)=>{
    console.log(event.key);
    if(event.key === '1')
        number(1);
    else if(event.key === '2')
        number(2);
    else if(event.key === '3')
        number(3);
    else if(event.key === '4')
        number(4);
    else if(event.key === '5')
        number(5);
    else if(event.key === '6')
        number(6);
    else if(event.key === '7')
        number(7);
    else if(event.key === '8')
        number(8);
    else if(event.key === '9')
        number(9);
    else if(event.key === '0')
        number(0);
    else if(event.key === '.')
        number('.');
    else if(event.key === '+')
        number(' + ');
    else if(event.key === '-')
        number(' - ');
    else if(event.key === '*')
        number(' * ');
    else if(event.key === '/')
        number(' / ');
    else if(event.key === '^')
        number(' ** ');
    else if(event.key === 'Backspace')
        remove();
    else if(event.key === 'Enter')
        ans()
    else if(event.key === 'c')
        clearScreen()
});



function number(a){
    num += a;
    document.querySelector(".ans").innerHTML = num;
}
function remove(){
    num=num.slice(0,-1);
    document.querySelector(".ans").innerHTML = num;
}
function ans(){
    num = String(eval(num));
    const a = document.querySelector(".ans");
    a.innerHTML = num;
    }

function clearScreen(){
    num = '';
    document.querySelector(".ans").innerHTML = '';
}