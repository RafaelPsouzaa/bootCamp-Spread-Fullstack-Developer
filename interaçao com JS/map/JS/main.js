function getAdmins(map){
    let admins =[];
    for([key,value] of map){
        if(value === 'admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set('Luiz','admin');
usuarios.set('Rafael','admin');
usuarios.set('Junior','user');
usuarios.set('Renato','admin');
usuarios.set('Bryan','admin');

console.log(getAdmins(usuarios));
