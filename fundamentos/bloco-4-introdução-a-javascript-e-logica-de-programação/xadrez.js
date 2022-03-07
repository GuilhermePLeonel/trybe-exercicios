let peça = "RAINHA"

switch(peça .toLowerCase()){
    case "bispo":
        console.log("diagonais");
        break;

        case "peão":
        console.log("a frente uma casa");
        break;

        case "rainha":
        console.log("em linha reta para qualquer direção quantas casas quiser");
        break;

        case "rei":
        console.log("para qualquer direção apenas uma casa");
        break;

        case "cavalo":
        console.log("se movimenta em L seja horizontal ou verticalmente, podendo passar por cima de outras peças");
        break;

        case "torre":
        console.log("anda em linha reta horizontal ou verticalmente quantas casas quiser");
        break;

}
