import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/produto', async (req, resp) => {
    try {
        let r = await db.tb_produto.findAll({ order: [[ 'id_produto', 'desc' ]] });
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/produto', async (req, resp) => {
    try {
        let { produto, precoDe, categoria, precoPor, avaliacao, estoque, imagem } = req.body;

        if (!nome || nome == '')
            return resp.send({ erro: 'Campo Nome é obrigatório!' });


        let produtoRepetido = await db.tb_produto.findOne({ where: { nm_produto: produto } });
        if (produtoRepetido != null)
            return resp.send({ erro: 'Produto já existente' });
        

        let r = await db.tb_produto.create({
            nm_produto: nome,
            vl_preco_de: precoDe,
            ds_categoria: categoria,
            vl_preco_por: precoPor,
            vl_avaliacao: avaliacao,
            qtd_estoque: estoque,
            img_produto: imagem
        })

        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Deu erro' });
        console.log(e.toString());
    }
})

app.put('/produto/:id', async (req, resp) => {
    try {
        let { produto, precoDe, categoria, precoPor, avaliacao, estoque, imagem } = req.body;
        let { id } = req.params;

        if (!nome || nome == '')
        return resp.send({ erro: 'Campo Nome é obrigatório!' });


        let produtoRepetido = await db.tb_produto.findOne({ where: { nm_produto: produto } });
        if (produtoRepetido != null)
            return resp.send({ erro: 'Produto já existente' });


        let r = await db.tb_matricula.update(
            {
                nm_aluno: nome,
                nr_chamada: chamada,
                nm_curso: curso,
                nm_turma: turma
            },
            {
                where: { id_matricula: id }
            }
        )
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.delete('/produto/:id', async (req, resp) => {
    try {
        let { id } = req.params;

        let r = await db.tb_matricula.destroy({ where: { id_matricula: id } })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


app.listen(process.env.PORT,
            x => console.log(`Server up at port ${process.env.PORT}`))