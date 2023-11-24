
document.querySelector('html').innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/258/258276.png" type="image/x-icon">
    <link rel="stylesheet" href="src/js/elements/header.css">
    <link rel="stylesheet" href="src/style/desktop.css">
    <link rel="stylesheet" href="src/style/index.css">
    <link rel="stylesheet" href="src/style/mobile.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <title>Aplicativos de compras</title>
    <body>
        <div class='div__shadow'></div>
        <header></header>
        <main></main>
        <footer></footer>
    </body>
`
export function createHeader(){
    const header = document.querySelector('header')
    header.innerHTML = `
    <header>
    <button id='menu'>
    <span class="material-symbols-outlined">
    menu
    </span>
    </button>
     <nav class='nav__menu'>
     <button id='close'>
     <span class="material-symbols-outlined">
        close   
        </span>
        </button>
        <ul class='ul__menu'>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Histórico</a></li>
            <li><a href="#">Vender</a></li>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">Ofertas do dias</a></li>
        </ul>
    </nav>
        <form class='form__search'>
            <div>
                <input type="text" placeholder='Ex:Iphone'>
                <button type='submit'>
                    <span class="material-symbols-outlined">
                    search
                    </span>
                </button>
            </div>
        <ul>
        <li><a href="#">Cadastra-se</a></li>
        <li><a href="#">Login</a></li>
        <li>
        <a href="#">
            <span class="material-symbols-outlined">shopping_cart</span>
            </a>
        </li>
        </ul>
        </form>
    </header>`
    const NavMenu = document.querySelector('nav')
    const DivShadow = document.querySelector('.div__shadow')
    const Menu = document.getElementById('menu')
    Menu.addEventListener('click',() => {
        NavMenu.style.display = 'flex'
        DivShadow.style.display = 'block'
        document.body.style.overflowY = 'hidden'
    })
    const Close = document.getElementById('close')
    Close.addEventListener('click',() => {
        NavMenu.style.display = 'none'
        DivShadow.style.display = 'none'
        document.body.style.overflowY = 'auto'
    })
    const WidthWindow = setInterval(() => {
        const DisplayNav = window.getComputedStyle(NavMenu).display
        if (window.innerWidth > 800 && DisplayNav === 'none'){
            NavMenu.style.display = 'flex'
            DivShadow.style.display = 'none'
        }
        if (window.innerWidth < 800 && DisplayNav !== 'none') {
            NavMenu.style.display = 'flex'
            DivShadow.style.display = 'flex'
            }
    })
}

