import { Container } from './styled.js'
import Conteudo from './conteudo.js'
import Cabecalho from '../components/cabecalho/index.js'


export default function devMonk() {
    return (
        <Container>
            <Cabecalho />
            <Conteudo />
        </Container>
    )
}