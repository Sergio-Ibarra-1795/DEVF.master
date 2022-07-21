//ARRAY de usuarios
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];


//ARRAY de PRODUCTOS
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


//función para crear IDs 
const obtenerUUID = () => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));


//Función para añadir un usuario nuevo (objetos con todas las propuedades) al array de usuarios
function Registro (username,email,password){
    let nuevoUsuario =  { _id: '',
    username: username,
    email: email,
    password: password,
    createdAt:'',
    isLoggedIn: false }
    
    users.push(nuevoUsuario);
    return nuevoUsuario;

}


console.log(Registro('S', 's@','1234'));
console.log(users);


// Función llamada ingresar que permita al usuario iniciar sesión en la aplicación

const ingresar = function ingresar(userId,password){
    for(i=0; i<users.length;i++){
         if (username ===users[i].username && password===users[i].password) {
         document.write('You are logging in')}
        
         else if (username !==users[i].username && password!==users[i].password){
            document.write('USER DOES NOT EXIST') }
    }
 }
 

    
