function validaArray(arr,num){
   try {
   if (!arr && !number) throw new ReferenceError("Envie os parâmetros");
   if (typeof arr !== 'object') throw new TypeError('Array precisa se do tipo object');
   if (typeof arr !== 'number') throw new TypeError('number precisa se do tipo object');
   if (arr.lenght !== num) throw new RangeError('tamanho invalido');
    return arr;
   } catch(e) {
    if(e instanceof ReferenceError){
        console.log("Este erro é um refenceError");
        console.log(e.message);
    }else if(e instanceof TypeError){
        console.log("Este erro é um typeError");
        console.log(e.message);
    }
     else if(e instanceof RangeError){
        console.log("Este erro é um RangeError");
        console.log(e.message);
    } else {
        console.log("erro nao encontrado"+e);
    }
    
   }
}


console.log(validaArray(5,5));