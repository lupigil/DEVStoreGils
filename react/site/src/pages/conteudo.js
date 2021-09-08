import { useState } from 'react';

import { ContainerConteudo, Traco } from './conteudo.styled.js'
import { DevInput, DevButton } from '../components/outros/inputs/inputs'


import Api from '../service/api.js';
const api = new Api();


export default function Conteudo() {

    const [aluno, setAluno] = useState('');
    const [chamada, setChamada] = useState('');
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');

    return (
        <ContainerConteudo>
            <div className="cabecalhoConteudo">
                <div className="perfil">
                    <div className="imgPerfil"><img src="" alt="" /></div>
                    <div className="msgPerfil">Olá, Gilson Torres</div>
                </div>
                <div className="comandos">
                    <div className="atualizar"><img src="" alt="" /></div>
                    <div className="logout"><img src="" alt="" /></div>
                </div>
            </div>

            <div className="cadastros">
                <div className="titulo">
                    <Traco />
                    <div className="novoAluno">Novo Aluno</div>
                </div>

                <div className="containerInput1">
                    <div className="box-input">
                        <div className="label">Nome:</div>
                        <DevInput value={aluno} onChange={e => setAluno(e.target.value)} />
                    </div>
                
                    <div className="box-input1">
                        <div className="label">Curso:</div>
                        <DevInput value={curso} onChange={e => setCurso(e.target.value)} />
                    </div>
                </div>

                <div className="containerInput2">
                    <div className="box-input">
                        <div className="label">Chamada:</div>
                        <DevInput value={chamada} onChange={e => setChamada(e.target.value)} />
                    </div>
                
                    <div className="box-input1">
                        <div className="label">Turma:</div>
                        <DevInput value={turma} onChange={e => setTurma(e.target.value)} />
                    </div>

                    <DevButton className="btn-cadastro">Cadastrar</DevButton>
                </div>
            </div>

            <div className="matriculados">
                <div className="titulo">
                    <Traco />
                    <div className="alunosMatri">Alunos Matriculados</div>
                </div>
            </div>
        </ContainerConteudo>
    )
}