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


//----------------------CAPTURANDO EVENTO-----------------

let btnVitrine = document.querySelector(".produtos")
let carrinho   = document.querySelector(".carrinho ul")

btnVitrine.addEventListener("click", adicionarCarrinho)

console.log(btnVitrine);

function adicionarCarrinho(event){
  
  let checkBtn = event.target
  if (checkBtn.tagName == "BUTTON"){
   
      
      let produto = checkBtn.closest("li").cloneNode(true)
      console.log(produto);
      carrinho.appendChild(produto)
  }
}






//---------------ACESSANDO OS PRODUTOS-------------------

let cardProduto = document.querySelector(".produtos")

function listarProduto (item){
  for (let i = 0; i < item.length; i++){
    // console.log(item[i]);
    let produto = item[i]

    let card = criarCardProduto(produto)
    cardProduto.appendChild(card)

    
  }
}

listarProduto (data)


//-------------------CRIANDO AS <li> DINAMICAMENTE----------------------

function criarCardProduto (item){

  let id          = item.id
  let img         = item.img
  let nameItem    = item.nameItem
  let description = item.description
  let value       = item.value
  let tag         = item.tag

  console.log(id);

  let tagLi           = document.createElement("li")
  let tagImg          = document.createElement("img")
  let tagPTag         = document.createElement("p")
  let tagPDescription = document.createElement("p")
  let tagPValue       = document.createElement("p")
  let tagH3           = document.createElement("h3")
  let tagBtn          = document.createElement("button")
  

  tagImg.src                  = `${img}`
  tagImg.alt                  = tag
  tagPTag.innerText           = tag
  tagPDescription.innerText   = description
  tagPValue.innerText         = `R$ ${value}`
  tagH3.innerText             = nameItem
  tagBtn.innerText            = "Adicionar ao carrinho"



//---------ADICIONANDO ID NO BOTÃO--------------
  

  tagBtn.setAttribute("id", id)
  
  
 //--------ADICIONANDO CLASSE NAS TAG's----------
  tagLi.classList.add("card")
  tagPTag.classList.add("tag")
  tagH3.classList.add("nameItem")
  tagPDescription.classList.add("description")
  tagPValue.classList.add("value")
  


  tagLi.appendChild(tagImg)
  tagLi.appendChild(tagPTag)
  tagLi.appendChild(tagH3)
  tagLi.appendChild(tagPDescription)
  tagLi.appendChild(tagPValue)
  tagLi.appendChild(tagBtn)
  


  /* <li class="card">
      <img src="./img/camiseta_preta.svg" alt="camiseta preta">
      <p class="tag">Camiseta</p>
      <h3 class="nameItem">T-Shirt</h3>
      <p class="description">Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...</p>
      <p class="value">R$ 100</p>
      <button><strong>Adicionar ao carrinho</strong></button>
</li> */

  // console.log(tagLi);
  // console.log(tagImg);
  // console.log(tagPTag);
  // console.log(tagPDescription);
  // console.log(tagPValue);
  // console.log(tagH3);
  // console.log(tagBtn );
  // console.log("-----------------------------");

  return tagLi


}


