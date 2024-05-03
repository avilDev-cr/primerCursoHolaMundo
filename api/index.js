const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://andrezavilesrdz:Qwerty123@cluster0.rrzjzbv.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({
        username: 'Natalia',
        edad: 34
    })
    const savedUser = await user.save()
    console.log(savedUser)
    
}

// crear()

const buscarTodo = async() => {
    const users = await User.find()
    console.log(users)
}

// buscarTodo()

const buscar = async() =>{
    const user = await User.find({
        username: 'Natalia'})
    console.log(user)
}

// buscar()

const buscarUno = async()=>{
    const user = await User.findOne({
        username: 'Natalia'})
        console.log(user)
    }

// buscarUno()

const actualizar = async () => {

const user = await User.findOne({
    username: 'Natalia'})
console.log(user)
user.edad = 30

await user.save()

console.log(user)

}

// actualizar()

const eliminar = async() => {
    const user = await User.findOne({username: 'Natalia'})
    console.log(user)
    if(user){
        await user.deleteOne()
        console.log('Usuario eliminado')
    }
    
}

// eliminar()