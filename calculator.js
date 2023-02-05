function add(n1,n2){
    if(isNaN(n1) && isNaN(n2)){
        return ;
    }
    return n1 + n2;
}
function subtract(n1,n2){
    if(isNaN(n1) && isNaN(n2)){
    return ;
}
    return n1 - n2
}
function multiply(n1,n2){
        if(isNaN(n1) && isNaN(n2)){
        return ;
    }
        return n1*n2;
}
function divide(n1,n2){
    if(isNaN(n1) && isNaN(n2)){
        return ;
    }
    if(n2 === 0){
        return "Can't Divide";
    }
    return n1/n2;
}
function operate(n1,n2,OP){
    switch(OP){
        case "+":
            add(n1,n2);
            break;
        case "-":
            subtract(n1,n2);
            break;
        case "*":
            multiply(n1,n2);
            break;
        case "/":
            divide(n1,n2);
            break;
        default:
            return;
    }
}