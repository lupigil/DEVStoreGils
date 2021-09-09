import { useState, useEffect } from 'react';

import { ContainerConteudo, Traco } from './conteudo.styled.js'
import { DevInput, DevButton } from '../components/outros/inputs/inputs'


import Api from '../service/api.js';
const api = new Api();


export default function Conteudo() {

    const [alunos, setAlunos] = useState([]);
    const [aluno, setAluno] = useState('');
    const [chamada, setChamada] = useState('');
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');

    async function listarAlunos() {
        let r = await api.listarCadastros();
        setAlunos(r);
    }

    useEffect(() => {
        listarAlunos();
    }, [])

    return (
        <ContainerConteudo>
            <div className="cabecalhoConteudo">
                <div className="perfil">
                    <div className="imgPerfil"><img src="/assets/images/usuario.jpg" alt="" /></div>
                    <div class="notificacao">3</div>    
                </div>

                <div className="msgPerfil">Olá, <b>Gilson Torres</b></div>

                <div className="comandos">
                    <div className="atualizar"> <button> <img src="/assets/images/refresh.png" alt="" /> </button> </div>
                    <div className="logout"> <button> <img src="/assets/images/log-out.png" alt="" /> </button> </div>
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
                    <div className="novoAluno">Alunos Matriculados</div>
                </div>
  
                <table>

                    <thead>
                        <tr className="cabecalhoTb">
                            <th className="idTb">ID</th>
                            <th className="alunoTb">Nome</th>
                            <th className="numeroTb">Chamada</th>
                            <th className="turmaTb">Turma</th>
                            <th className="cursoTb">Curso</th>
                            <th className="espaço"></th>
                            <th className="espaço"></th>
                        </tr>
                    </thead>

                    <tbody>

                        {alunos.map(item => 

                            <tr className="registroTb1">
                                <td class="idTb1">{item.id_matricula}</td>
                                <td>{item.nm_aluno}</td>
                                <td>{item.nr_chamada}</td>
                                <td>{item.nm_turma}</td>
                                <td>{item.nm_curso}</td>
                                <td> <button> <img src="/assets/images/edit.png" alt="" /> </button> </td>
                                <td> <button> <img src="/assets/images/trash.png" alt="" /> </button> </td>
                            </tr>

                        )}

                    </tbody>

                </table>
            </div>
        </ContainerConteudo>
    )
}