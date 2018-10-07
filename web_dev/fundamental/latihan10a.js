function fib(n){
    if(n==1||n==2){
        return 1;
    }
    else if(n<1){
        return("None");
    }
    else{
        return fib(n-2)+fib(n-1);
    }   
}

function pal(kata){
    const karakter = kata.split('');
    if (karakter.join('') === karakter.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

function 
console.log(pal("asssssda"));
