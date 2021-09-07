import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listarCadastros() {
        let r = await api.get(`/matricula`);
        return r.data;
    }

    async inserirAluno(aluno) {
        let r = await api.post(`/matricula`, { nome: aluno });
        return r.data;
    }
}