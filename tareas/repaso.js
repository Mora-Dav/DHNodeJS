//const nombres = ['asd', 'asd'];

const amigos = [
    {
        nombre: 'Gonza',
        edad: 13,
        amigos: ['Eduardo', 'Jime', 'Soledad'],
        saludar: function () {
            return 'Hola ' + this.nombre
        }
    }, 
    {
        nombre: 'Samie',
        edad: 18,
        amigos: ['Eduardo', 'Jime', 'Soledad'],
        saludar: function () {
            return 'Hola ' + this.nombre
        }
    }, 
    {
        nombre: 'Juli',
        edad: 15,
        amigos: ['Eduardo', 'Jime', 'Soledad'],
        saludar: function () {
            return 'Hola ' + this.nombre
        }
    }
]

let amigo;

for (let i = 0; i < amigos.length; i++) {
    amigo = amigos[i];
    console.log(amigo.nombre);
}

console.log(amigo.nombre);
