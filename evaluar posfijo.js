var exp,ce;
var op1,op2,res;
exp = ['6','2','+','3','*','2','2','^','/','4','-'];
var pilaNumero = new Array();


for(i=0;i<exp.length;i++){

    ce=exp[i];
    console.log("ce: "+ce);

    if(exp[i]=='1'||exp[i]=='2'||exp[i]=='3'||exp[i]=='4'||exp[i]=='5'||exp[i]=='6'||exp[i]=='7'||exp[i]=='8'||exp[i]=='9'||exp[i]=='10'){
            pilaNumero.push(ce);
    }
        if(exp[i]=='*'||exp[i]=='/'||exp[i]=='^'||exp[i]=='-'||exp[i]=='+'){
        op2 = pilaNumero.pop();
        console.log("op2: "+ op2);
        op1 = pilaNumero.pop();
        console.log("op1: "+ op1);
        
        switch(ce){
            case '+': res=op2 + op1;   break;
            case '-': res= op2 - op1;   break;
            case '*': res= op2 * op1;   break;
            case '/': res= op2 / op1;   break;
            case '^': res= Math.pow(op2,op1);   break;
        }
        console.log("resultado: "+res);
        pilaNumero.push(res);
    }

}
pilaNumero.pop();







       /* if(exp[i]=='+'){
            res=op2 + op1;
        }else if (exp[i]=='-'){
            res=op2 - op1;
        }else if (exp[i]=='*'){
            res=op2 * op1;
        }else if (exp[i]=='/'){
            res=op2 / op1;
        }else {
            res= Math.pow(op2,op1);
        }*/