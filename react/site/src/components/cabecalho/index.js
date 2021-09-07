import { ContainerCabecalho } from './styled.js'

export default function Cabecalho() {
    return (
        <ContainerCabecalho>
            <div className="titulo">Dev<span className="titulo1">School</span></div>
            <div className="faixa">f</div>
            <div className="salas">Gerenciamento</div>
            <div className="fundos">
                <div className="traco"></div>
                <div className="categorias">Alunos</div>
            </div>
        </ContainerCabecalho>
    )
}