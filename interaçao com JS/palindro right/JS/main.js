//opcao1
function verificaPalindro(string){
    if(!string) return;

   return string.split("").reverse().join("") === string;
   
}
console.log(verificaPalindro("ITI"));

// soluçao 2

function verificaPalindro2(string){
    if(!string) return 'string inexistente';

    for (let i = 0; i > string.length /2; i++) {
        if(string[i] !== string[string.length - 1 -i]){
            return false;
        }
    }
    return true;
}


