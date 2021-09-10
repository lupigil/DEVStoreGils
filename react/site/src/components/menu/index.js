import { ContainerMenu, Barra } from './styled.js'

export default function Cabecalho() {
    return (
        <ContainerMenu>
            <div className="titulo-livro">
                <div className="gitlab"><img src="/assets/images/gitlab.png" alt="" /></div>
                <div className="titulo">Dev<span className="titulo1">Store</span></div>
            </div>
            <div className="faixa"></div>
            <div className="salas">
                <div className="geren">Gerenciamento</div>
                <div className="setinha"><img src="/assets/images/setinha-gerenciamento.png" alt="" /> </div>
            </div>
            <div className="fundos">
                <Barra />
                <div className="categorias">Produtos</div>
            </div>
        </ContainerMenu>
    )
}