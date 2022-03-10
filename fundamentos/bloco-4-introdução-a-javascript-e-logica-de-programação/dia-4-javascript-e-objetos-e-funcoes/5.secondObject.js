let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recurrent: 'Yes',
  };

  

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics *178',
    nota: 'O último MacPatinhas',
    recurrent: 'Yes',
  };

  for(let key in info2){
    if(info[key]===info2[key] ){
        console.log("both recurrent");
    }
    else{
    console.log(info[key],  "e" , info2[key]);
    }
  }
  