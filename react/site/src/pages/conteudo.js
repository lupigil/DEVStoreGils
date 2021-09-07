import { useState } from 'react';

import { ContainerConteudo } from './conteudo.styled.js'


import Api from '../service/api.js';
const api = new Api();


export default function Conteudo() {

    const [aluno, setAluno] = useState('');
    const [chamada, setChamada] = useState('');
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');

    return (
        <ContainerConteudo>
            
        </ContainerConteudo>
    )
}