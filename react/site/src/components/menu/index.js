import { ContainerMenu, Barra } from './styled.js'

export default function Cabecalho() {
    return (
        <ContainerMenu>
            <div className="titulo-livro">
                <div className="livrinho"><img src="/assets/images/book.png" alt="" /></div>
                <div className="titulo">Dev<span className="titulo1">School</span></div>
            </div>
            <div className="faixa"></div>
            <div className="salas">
                <div className="geren">Gerenciamento</div>
                <div className="setinha"><img src="/assets/images/setinha-gerenciamento.png" alt="" /> </div>
            </div>
            <div className="fundos">
                <Barra />
                <div className="categorias">Alunos</div>
            </div>
        </ContainerMenu>
    )
}