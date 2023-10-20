// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const GatoModelo = mongoose.model('Gato', {
//     raca: String,
//     idade: Number,
//     cor: String
// })

// const gatoQueAcheiNaRua = new GatoModelo({
//     raca: "Siames",
//     idade: 3,
//     cor: "Branco"
// })

// gatoQueAcheiNaRua.save().then(console.log("Gato salvo com sucesso"))


//////////////////////////////////////////////////////////////////////
////////////////////// Modelo do Produto /////////////////////////////
/////////////////////////////////////////////////////////////////////


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

// ///////////////////////////////////////////////
//             Modelo do Produto               //
//       codigo de barras - String ou Number   //
//       nome - String                         //
//       preco - Number                        //
// ///////////////////////////////////////////////

const ModProduto = mongoose.model("Produto", { 
    codigoDeBarras: Number,
    nome: String, 
    preco: Number 
});

// const Produto = new ModProduto({ 
//     codigoDeBarras: 123456789,
//     nome: "arroz",
//     preco:15.5
    
//  })

 const Produto = new ModProduto({ 
    codigoDeBarras: 321654,
    nome: "Farinha",
    preco:8.20
 })

 Produto.save().then (console.log("Produtos Adicionado"))


///////////////////////////////////////////////////////////////////
///                         FUNÇÃO 
//             FIND- 
//            ASYNC-
//            AWAIT         //
///////////////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////////////
/////////////////  "find" todos produtos          /////////////////
///////////////////////////////////////////////////////////////////

//  async function exibirTodosProdutos(){
//     console.log(await ModProduto.find())
//  }

//  exibirTodosProdutos()

////////////////////////////////////////////////////////////////////
//////////       " findOne " um produto          ///////////////////
////////////////////////////////////////////////////////////////////

//  async function exibirUmProduto(){
//     console.log(await ModProduto.findOne({nome:"Farinha" }))
//  }
//  exibirUmProduto()
 

//                     encontra um e deleta 

//  async function exibirUmProduto(){
//     console.log(await ModProduto.findOneAndDelete({nome:"Farinha" }))
//  }

//                        Encontra e remove


//  async function exibirUmProduto(){
//    console.log(await ModProduto.findOneAndRemove{nome:"Farinha" }))
// }



// async function exibirUmProduto(){
//    console.log(await ModProduto.findOneAndReplace({nome:"Farinha" }))
// }



//////////////////////////////////////////////////////////////////
//             " findOneAndUpdate " encontra e atualiza         //
/////////////////////////////////////////////////////////////////

// await Produto.findOneAndUpdate(
//    {preco: 1100},
//    {
//        codigo: 2,
//        nome: "Monitor Genérico DELL",
//        preco: 400
//    }
// )

///////////////////////////////////////////////////////////////
//                 PROGRAMA RODADO PELO PROFESSOR            //
///////////////////////////////////////////////////////////////

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// async function main () {
//     const Produto = mongoose.model('Produto',
//     {
//         codigo: Number,
//         nome: String,
//         preco: Number
//     })

//     Produto.create({
//         codigo: 1,
//         nome: "Monitor AOC FullHD 144hz",
//         preco: 1100
//     })

//     await Produto.findOneAndUpdate(
//         {preco: 1100},
//         {
//             codigo: 2,
//             nome: "Monitor Genérico DELL",
//             preco: 400
//         }
//     )

//     await Produto.findOneAndDelete({preco: 400})

    
//     console.log(await Produto.find())

//     console.log(await Produto.findOne({preco: 1100}))

// }

// main()