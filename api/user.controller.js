const User = {
    get: (req, res)=>{
        res.status(200).send('Este es un cliente')
    },
    list: (req,res) =>{
        res.status(200).send('Hola Cliente')
    },
    create: (req, res)=> {
        res.status(201).send('Creando cliente')
    },
    update: (req,res) => {
        res.status(204).send('Actualizando cliente')
    },
    destroy: (req, res) => {
        res.status(204).send('Eliminando cliente')
    }
}

module.exports = User