
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
        <header></header>
        <main></main>
    </body>
`
export function createHeader(){
    const header = document.querySelector('header')
    header.innerHTML = `
    <header>
    <button>
    <span class="material-symbols-outlined">
    menu
    </span>
    </button>
     <nav class='nav__menu'>
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
    </header>
`
}