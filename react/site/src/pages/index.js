import { Container } from './styled.js'
import Cabecalho from '../components/cabecalho/index.js'
import Conteudo from './conteudo.js'


export default function devMonk() {
    return (
        <Container>
            <Cabecalho />
            <Conteudo />
        </Container>
    )
}