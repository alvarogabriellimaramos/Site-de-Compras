const footer = document.querySelector("footer")

export const FooterFunction = () => {
    footer.innerHTML = `
    <div>
        <strong>Comunidades</strong>
        <ul>
            <li>
                <a href='#'> Desenvolvedores </a>
            </li>
            <li>
                <a href='#'> Designs </a>
            </li>
            <li>
                <a href='#'> Patrocinadores </a>
            </li>
            <li>
                <a href='#'> Investidores </a>
            </li>
        </ul>
    </div>
    <div>
        <strong>Redes Socias</strong>
        <ul>
            <li>
                <a href='#'> Twitter </a>
            </li>
            <li>
                <a href='#'> Facebook </a>
            </li>
            <li>
                <a href='#'> Instagram </a>
            </li>
            <li>
                <a href='#'> YouTube </a>
            </li>
        </ul>
    </div>
    <div>
        <strong>Suporte</strong>
        <ul>
            <li>
                <a href='#'> Problemas ao receber entrega </a>
            </li>
            <li>
                <a href='#'> Problemas para tenta fazer pagamento   </a>
            </li>
            <li>
                <a href='#'>  Problemas para tenta fazer Reembolso </a>
            </li>
            <li>
                <a href='#'> Termos e codições </a>
            </li>
        </ul>
    </div>
    <div>
    <strong>Serviços</strong>
    <ul>
        <li>
            <a href='#'>Login </a>
        </li>
        <li>
            <a href='#'> Cadastrar  </a>
        </li>
        <li>
            <a href='#'> Carrinho de compras </a>
        </li>
        <li>
            <a href='#'> Nosso Cartão </a>
        </li>
    </ul>
</div>
    `
}