const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/tes');

async function main () {
    const Material = mongoose.model('Material',
    {
        codigo: Number,
        nome: String,
        preco: Number
    })

    // Material.create({
    //     codigo: 123,    
    //     nome: "Cabo utp 305 mts",
    //     preco: 220

    // })

    // Material.create({
    //     codigo: 1234,    
    //     nome: "Cabo utp 150 mts",
    //     preco: 120

    // })

    // Material.create({
    //     codigo: 12345,    
    //     nome: "Alicate",
    //     preco: 19

    // })

    // Material.create({
    //     codigo: 123456,    
    //     nome: "Chave de Fenda",
    //     preco: 10

    // })




    // await Material.findOneAndUpdate(
    //     {preco:220},
    //     {
    //         codigo: 123,    
    //         nome: "Cabo utp 305 mts",
    //         preco: 200

    //     }
    // )

    // await Material.findOneAndDelete({preco: 200})

     //await Material.findOneAndDelete({codigo:123})
     //await Material.findOneAndDelete()

    console.log(await Material.find())

    // console.log(await Material.findOne({codigo: 1234}))






////////////////////////////////////////////////////////////////////////
    
    // async function criaMaterial(material) {
    //     console.log(await Material.create(material))
    // }

    // async function criaMultiplosMateriais(materiais, vezes) {
    //     let i = 0
    //     while(i < vezes) {
    //         // console.log(materiais[i])
    //         //    console.log(await Material.findOneAndDelete(materiais[i]))
    //         console.log(await Material.create(materiais[i]))
    //         i++
    //     }
    // }

    // const criacoes = [
    //     {
    //         codigo: 123,    
    //         nome: "Cabo utp 305 mts",
    //         preco: 220
    
    //     },
    //     {
    //         codigo: 543,    
    //         nome: "Cabo utp 150 mts",
    //         preco: 120
    
    //     }
    // ]


    // // criaMultiplosMateriais(criacoes, 2)

    //     console.log(await Material.find())
    }

    main()