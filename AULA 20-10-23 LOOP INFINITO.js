/* CRIAR FUNÇÃO
     CRIAR UM
   Encontrar UM
  encontrar todos
   atualizar UM
    deletar UM  */

    const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/test1');
    
    const Produto = mongoose.model('Produto',
    {
        codigo: Number,
        nome: String,
        preco: Number
    })
    
    async function criaMaterial(objeto) {
        await Produto.create(objeto)
    }

    // async function deletaProduto(nomeADeletar){
    //     await Produto.findOneAndDelete({nome: nomeADeletar})
    // }

    // async function exibeTodosOsProdutos(){
    //     console.log(await Produto.find())
    // }

    // async function atualizaProduto(objeto) {
    //     await Produto.findOneAndUpdate(objeto)
    // }

    const produtos = [
        {nome: "lapis", codigo: 1, preco: 1},
        {nome: "borracha", codigo: 2, preco: 3},
        {nome: "apontador", codigo: 3, preco: 5}
    ]

    async function criaMultiplosMateriais(materiais, vezes) {
        let i = 0
        while(i < vezes) {
            // console.log(materiais[i])
            //    console.log(await Material.findOneAndDelete(materiais[i]))
            console.log(await Material.create(materiais[i]))
            i++
        }
    }
