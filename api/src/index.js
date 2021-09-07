import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula', async (req, resp) => {
    try {
        let r = await db.tb_matricula.findAll();
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro' })
    }
})

app.post('/matricula', async (req, resp) => {
    try {
        let matricular = req.body;

        let matricula = await db.tb_matricula.findOne({ where: { nm_aluno: matricular.nome } });
        if (matricula != null) {
            return resp.send({ erro: 'Aluno já existe!' })
        }

        let r = await db.tb_matricula.create({
            nm_aluno: matricular.nome,
            nr_chamada: matricular.numero,
            nm_curso: matricular.curso,
            nm_turma: matricular.turma
        })

        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro' })
    }
})

app.delete('/matricula/:id', async (req, resp) => {
    try {
        let r = await db.tb_matricula.destroy({ where: { id_matricula: req.params.id } })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


app.listen(process.env.PORT,
            x => console.log(`Server up at port ${process.env.PORT}`))