import { GetResponse } from "../api/getFetch.js";
import { createHeader} from "./elements/header.js";
import { BodyIndex } from "./elements/section.js";
import { SearchFunction } from "./modules/search/search.js";
createHeader()
BodyIndex()
SearchFunction()

// Random Function 

const RandomIndex = array => Math.floor(Math.random() * array.length)
const Produtos = [
    'eletronicos',
    'video games',
    'celulares',
    'computadores',
    'ferramentas',
    'utensilios'
]
const main = document.querySelector('main')
const CreateElements = (title,price,thumbnail) => {
    const DivProduct = document.createElement('div')
    DivProduct.classList.add('div__product')
    const DivPriceTitle = document.createElement('div')
    const Title = document.createElement('span')
    const Price = document.createElement('strong')
    Title.textContent = object.title
    Price.textContent = `R$ ${object.price}`
    const Img = document.createElement('img')
    Img.src = object.thumbnail
    DivPriceTitle.appendChild(Title)
    DivPriceTitle.appendChild(Price)
    DivProduct.appendChild(Img)
    DivProduct.append(DivPriceTitle)
    main.appendChild(DivProduct)  
}
const DisplayProduct = array => {
    for (let c = 0; c <= 15;c++) RandomIndex(array)
}
GetResponse(DisplayProduct(Produtos)).then(response => console.log(response))
.catch(erro => console.log(erro))