const mongoose = require("mongoose");
const Cliente = mongoose.model("Cliente");
module.exports = {
    async indexedDB (req, res) {
        const {page = 1} = req.query;
        const clientes = await Cliente.paginate({},{ page, limit :10 });

        return res.json(clientes);
    },

    async store(req, res){
         //Create 
      const clientes = await Cliente.create(req.body);
      return res.json(clientes);
    },

    async show(req, res){
        const clientes = await Cliente.findById(req.params.id);
        return res.json(clientes);
    },

    async update(req, res){
        const cliente = await Cliente.findByIdAndUpdate(req.params.id,req.body,{ 
            new: true
        });
        return res.json(cliente);
    },

    async destroy (req, res){
        const cliente = await Cliente.findByIdAndRemove(req.params.id);
        return res.send();
    }
};