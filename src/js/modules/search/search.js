
import { GetResponse } from "../../../api/getFetch.js"
import { createHeader } from "../../elements/header.js"
import { FooterFunction } from "../../elements/footer.js"
export const SearchFunction = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit',event => {
         const Input = document.querySelector('input').value
        event.preventDefault()
        if (Input === '' || Input === undefined) return;
        else{
            GetResponse(Input).then(response => CreateBody(Input,response))
            .catch(erro => console.log(erro))
        }
    })
}

const CreateBody = (title,response) => {
    document.querySelector('html').innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/258/258276.png" type="image/x-icon">
    <link rel="stylesheet" href="src/js/modules/search/search.css">
    <link rel="stylesheet" href="src/js/elements/header.css">
    <link rel="stylesheet" href="src/style/index.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"/>
        <title> Site de compras || ${title} </title>
    `
    document.body.innerHTML = ` 
    <div class='div__shadow'></div>
    <header>
    </header>
    <main></main>
    `
    createHeader()
    SearchFunction()
    CreateMain(response)
}

const CreateMain = response => {
    const {results} = response 
    const main = document.querySelector('main')
    for (let object of results){
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
}