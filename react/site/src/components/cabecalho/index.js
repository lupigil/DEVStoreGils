import { ContainerCabecalho, Barra } from './styled.js'

export default function Cabecalho() {
    return (
        <ContainerCabecalho>
            <div className="titulo">Dev<span className="titulo1">School</span></div>
            <div className="faixa"></div>
            <div className="salas">Gerenciamento</div>
            <div className="fundos">
                <Barra />
                <div className="categorias">Alunos</div>
            </div>
        </ContainerCabecalho>
    )
}