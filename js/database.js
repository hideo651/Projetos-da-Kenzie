// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "./img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "./img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "./img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "./img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "./img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "./img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
];




//---------------ACESSANDO OS PRODUTOS-------------------
let secaoCarrinho   = document.querySelector(".carrinhoCompras")
let cardProduto     = document.querySelector(".produtos")

function listarProduto (item, secao){
  for (let i = 0; i < item.length; i++){
    // console.log(item[i]);
    let produto = item[i]

    let card = criarCardProduto(produto)
    secao.appendChild(card)

    
  }
}

listarProduto (data, cardProduto)


//-------------------CRIANDO AS <li> DINAMICAMENTE----------------------

function criarCardProduto (item){

  let id          = item.id
  let img         = item.img
  let nameItem    = item.nameItem
  let description = item.description
  let value       = item.value
  let tag         = item.tag

  // console.log(id);

  let tagLi           = document.createElement("li")
  let tagImg          = document.createElement("img")
  let tagPTag         = document.createElement("p")
  let tagPDescription = document.createElement("p")
  let tagPValue       = document.createElement("p")
  let tagH3           = document.createElement("h3")
  let tagBtn          = document.createElement("button")
  let tagDiv          = document.createElement("div")
  

  tagImg.src                  = `${img}`
  tagImg.alt                  = tag
  tagPTag.innerText           = tag
  tagPDescription.innerText   = description
  tagPValue.innerText         = `R$ ${value}`
  tagH3.innerText             = nameItem
  tagBtn.innerText            = "Adicionar ao carrinho"





  tagBtn.addEventListener("click",function(event){
    interceptarCompra(event.target.id-1)
  })

  



//---------ADICIONANDO ID NO BOTÃO--------------
  

  tagBtn.setAttribute("id", id)
  
  
 //--------ADICIONANDO CLASSE NAS TAG's----------
  tagLi.classList.add("card")
  tagPTag.classList.add("tag")
  tagH3.classList.add("nameItem")
  tagPDescription.classList.add("description")
  tagPValue.classList.add("value")
  tagDiv.classList.add("cardDiv")


  tagLi.appendChild(tagImg)
  tagLi.appendChild(tagDiv)
  tagDiv.appendChild(tagPTag)
  tagDiv.appendChild(tagH3)
  tagDiv.appendChild(tagPDescription)
  tagDiv.appendChild(tagPValue)
  tagDiv.appendChild(tagBtn)

  
  

  return tagLi


}

// cardProduto.addEventListener("click", interceptarCompra)



let carrinhoCompras = []

function interceptarCompra(event){
  
  carrinhoCompras.push(data[event])

  adicionarCarrinho(carrinhoCompras)


  // let btnComprar = event.target
  // if (btnComprar.tagName == "BUTTON"){
   
  //     let idProduto = btnComprar.id
      
  //     let produto = data.find(function(produto){
  //       if (produto.id == idProduto){
  //         return produto 
  //       }
  //     })  
      // adicionarCarrinho(produto)
  // } 

 
}

//--------REMOVER PRODUTO----------------------------




function capturarId(id){
  console.log(id);


  

  
}

//----------------------------------------------------






function adicionarCarrinho (item){

  secaoCarrinho.innerHTML = ""

  for (let i = 0; i < item.length; i++){

    let id          = item[i].id
    let img         = item[i].img
    let nameItem    = item[i].nameItem
    let description = item[i].description
    let value       = item[i].value
    let tag         = item[i].tag
  
    // console.log(id);
  
    let tagLi           = document.createElement("li")
    let tagImg          = document.createElement("img")
    let tagPTag         = document.createElement("p")
    let tagPDescription = document.createElement("p")
    let tagPValue       = document.createElement("p")
    let tagH3           = document.createElement("h3")
    let tagBtn          = document.createElement("button")
    let tagDiv          = document.createElement("div")
    
  
    tagImg.src                  = `${img}`
    tagImg.alt                  = tag
    tagPTag.innerText           = tag
    tagPDescription.innerText   = description
    tagPValue.innerText         = `R$ ${value}`
    tagH3.innerText             = nameItem
    tagBtn.innerText            = "Remover do carrinho"
  
  
  
  
  
    tagBtn.addEventListener("click",function(event){
      removendoProduto(i)
    })
  
    
  
  
  
  //---------ADICIONANDO ID NO BOTÃO--------------
    
  
    tagBtn.setAttribute("id", id)
    
    
   //--------ADICIONANDO CLASSE NAS TAG's----------
    tagLi.classList.add("card")
    tagPTag.classList.add("tag")
    tagH3.classList.add("nameItem")
    tagPDescription.classList.add("description")
    tagPValue.classList.add("value")
    tagDiv.classList.add("cardDiv")
  
  
    tagLi.appendChild(tagImg)
    tagLi.appendChild(tagDiv)
    tagDiv.appendChild(tagPTag)
    tagDiv.appendChild(tagH3)
    tagDiv.appendChild(tagPDescription)
    tagDiv.appendChild(tagPValue)
    tagDiv.appendChild(tagBtn)
    
    secaoCarrinho.appendChild(tagLi)
  
    

  }
  // carrinhoCompras.push(produto)
  // listarProduto(carrinhoCompras, secaoCarrinho )

  // addInfo(carrinhoCompras)

  // function addInfo (item){
    
  //   function somaTotal (){
  //     let total = 0
  //     for (i = 0; i < item.length; i++){
  //         total += item[i].value
          
  //     }return total
  // }
  
  // let vitrineInfo = document.querySelector(".valor")
  // vitrineInfo.innerHTML = ""



    // let quantidade = item.length
  
  
    // let tagUl            = document.createElement("ul")
    // let tagValueLi       = document.createElement("li")
    // let tagQuantidadeLi  = document.createElement("li")
  
    // tagUl.classList.add("infoValor")


    // tagValueLi.innerText      = `${somaTotal()}`
    // tagQuantidadeLi.innerText = quantidade
  
    // tagUl.appendChild(tagQuantidadeLi)
    // tagUl.appendChild(tagValueLi)

    // vitrineInfo.appendChild(tagUl)
  
    // console.log(tagUl);
    // console.log(tagValueLi);
    // console.log(tagQuantidadeLi);
    

  
  

}


//---------------------------------------------------------------
function removendoProduto(produto){
  carrinhoCompras.splice(produto,1)

  adicionarCarrinho(carrinhoCompras)

}




// addInfo(carrinhoCompras)

// function addInfo (item){
  

// }
// function somaTotal (){
//   let total = 0
//   for (i = 0; i < item.length; i++){
//       total += item[i].value
      
//   }return total
// }


