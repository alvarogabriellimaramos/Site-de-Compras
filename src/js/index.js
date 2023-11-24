import { GetResponse } from "../api/getFetch.js";
import { createHeader} from "./elements/header.js";
import { BodyIndex } from "./elements/section.js";
import { SearchFunction } from "./modules/search/search.js";
import { FooterFunction } from "./elements/footer.js";
createHeader()
BodyIndex()
SearchFunction()
FooterFunction()
// Random Function 

const RandomIndex = array => Math.floor(Math.random() * array.length)
const Produtos = [
    'comidas',
    'bebidas',
    'eletronicos',
    'video games',
    'celulares',
    'computadores',
    'ferramentas',
    'utensilios'
]
const main = document.querySelector('main')
const CreateElements = (title,price,thumbnail,section) => {
    const Section = document.querySelector(section)
    const DivProduct = document.createElement('div')
    DivProduct.classList.add('div__product')
    const DivPriceTitle = document.createElement('div')
    const Title = document.createElement('span')
    const Price = document.createElement('strong')
    Title.textContent = title
    Price.textContent = `R$ ${price}`
    const Img = document.createElement('img')
    Img.src = thumbnail
    DivPriceTitle.appendChild(Title)
    DivPriceTitle.appendChild(Price)
    DivProduct.appendChild(Img)
    DivProduct.append(DivPriceTitle)
    Section.appendChild(DivProduct)  
    main.appendChild(Section)
}
const DisplayProduct = (array,section) => {
    let IndexRandom = 0
    const NewArray = []
    for (let c = 0 ; c <= 15 ; c++){
        IndexRandom = RandomIndex(Produtos)
        if (NewArray.indexOf(array[IndexRandom].title) === -1) NewArray.push(array[c])
    }
    for (let object of NewArray) CreateElements(object.title,object.price,object.thumbnail,section)
}
const SortedProduct = () => {
    let IndexRandom = 0
    for (let c = 0; c <= 15;c++) {
        IndexRandom = RandomIndex(Produtos)
    } 
    return IndexRandom
}
GetResponse(SortedProduct()).then(response => {
    DisplayProduct(response.results,'.products__1')
})
.catch(erro => console.log(erro))

GetResponse(SortedProduct()).then(response => {
     
     DisplayProduct(response.results,'.products__2')
})
.catch(erro => console.log(erro))

GetResponse(SortedProduct()).then(response => {
   
    DisplayProduct(response.results,'.products__3')
})
.catch(erro => console.log(erro))

const HoverCategory = () => {
    const DivCategorias = document.querySelector('.categorias')
    const Divs = DivCategorias.querySelectorAll('div')
    Divs.forEach(div => {
        const span = div.querySelector('span')
        div.addEventListener('mousemove',() => span.style.color = 'white')
        div.addEventListener('mouseout',() => span.style.color = '#0051ff')
    })
    console.log(DivCategorias)
}
HoverCategory()
