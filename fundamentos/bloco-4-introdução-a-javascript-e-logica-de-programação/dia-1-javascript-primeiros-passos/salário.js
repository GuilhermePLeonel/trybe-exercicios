let salario =3000;
let inss;
let ir;


    if (salario<=1556.94){
        inss = (8/100*salario);
        salario = (salario-inss);
        
    }

    else if (salario>1556.95 && salario<2594.92){
        inss = (9/100*salario);
        salario = (salario-inss);
        
    }

    else if (salario>2594.93 && salario<5189.82){
        inss = (11/100*salario);
        salario = (salario-inss);
        
    }

    else {
        inss = 570.88;
        salario = (salario-inss);
        
     }


     if (salario<1903.98){
        console.log ("isento de imposto de renda")
    }

    else if (salario>1903.99 && salario<2826.65){
        ir = ((7.5/100*salario)-142.80)
        salario = (salario-ir)
    }

    else if (salario>2826.66 && salario<3751.05){
        ir = ((15/100*salario)-354.80)
        salario = (salario-ir)
    }

    else if (salario>3751.06 && salario<4664.68){
        ir = ((22.5/100*salario)-638.13)
        salario = (salario-ir)
    }

    else if (salario>4664.68){
        ir = ((27.5/100*salario)-869.36)
        salario = (salario-ir)
    }
    console.log(salario);




    
    