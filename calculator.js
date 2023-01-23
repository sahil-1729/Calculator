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