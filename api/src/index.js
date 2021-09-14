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
        let { nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem } = req.body;

        if (nome == '' || categoria == '' || precoDe == '' || precoPor == '' || avaliacao == '' || descricao == '' || 
            estoque == '' || imagem == '')
                return resp.send({ erro: ' Preencha todos os campos!' })


        if (nome.length <= 4)
            return resp.send({ erro: ' Insira mais que 4 caracteres no campo Nome!' })

        if (categoria.length <= 4)
            return resp.send({ erro: ' Insira mais que 4 caracteres no campo Categoria!' })

        if (descricao.length <= 4)
            return resp.send({ erro: ' Insira mais que 4 caracteres no campo Descrição!' })

        if (imagem.length <= 4)
            return resp.send({ erro: ' Insira mais que 4 caracteres no campo Link Imagem!' })



        if (precoDe <= 0 || precoPor <= 0 || avaliacao <= 0 || estoque <= 0)
            return resp.send({ erro: ' Insira apenas números positivos!' })
        


        if (isNaN(precoDe) === true)
            return resp.send({ erro: ' Campo Preço De só recebe números!' })

        if (isNaN(precoPor) === true)
            return resp.send({ erro: ' Campo Preço Por só recebe números!' })

        if (isNaN(avaliacao) === true)
            return resp.send({ erro: ' Campo Avaliação só recebe números!' })

        if (isNaN(estoque) === true)
            return resp.send({ erro: ' Campo Estoque só recebe números!' })


        let produtoRepetido = await db.tb_produto.findOne({ where: { nm_produto: nome } });
        if (produtoRepetido != null)
            return resp.send({ erro: ' Produto já existente' });


        let r = await db.tb_produto.create({
            nm_produto: nome,
            ds_categoria: categoria,
            vl_preco_de: precoDe,
            vl_preco_por: precoPor,
            vl_avaliacao: avaliacao,
            ds_produto: descricao,
            qtd_estoque: estoque,
            img_produto: imagem,
            bt_ativo: true,
            dt_inclusao: new Date()
        })

        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})

app.put('/produto/:id', async (req, resp) => {
    try {
        let { id } = req.params;
        let { nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem } = req.body;
        

    
        if (nome == '' || categoria == '' || precoDe == '' || precoPor == '' || avaliacao == '' || descricao == '' || 
            estoque == '' || imagem == '')
                return resp.send({ erro: ' Preencha todos os campos!' })

        if (nome.length <= 4 || categoria.length <= 4 || descricao.length <= 4 || imagem.length <= 4)
            return resp.send({ erro: ' Insira mais que 4 caracteres!' })

        if (precoDe <= 0 || precoPor <= 0 || avaliacao <= 0 || estoque <= 0)
            return resp.send({ erro: ' Insira apenas números positivos!' })
        
            
        if (isNaN(precoDe) === true)
            return resp.send({ erro: ' Campo Preço De só recebe números!' })

        if (isNaN(precoPor) === true)
            return resp.send({ erro: ' Campo Preço Por só recebe números!' })

        if (isNaN(avaliacao) === true)
            return resp.send({ erro: ' Campo Avaliação só recebe números!' })

        if (isNaN(estoque) === true)
            return resp.send({ erro: ' Campo Estoque só recebe números!' })


        let r = await db.tb_produto.update({
            nm_produto: nome,
            ds_categoria: categoria,
            vl_preco_de: precoDe,
            vl_preco_por: precoPor,
            vl_avaliacao: avaliacao,
            ds_produto: descricao,
            qtd_estoque: estoque,
            img_produto: imagem,
            bt_ativo: true,
            dt_inclusao: new Date()
        },
        {
            where: { id_produto: id }
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

        let r = await db.tb_produto.destroy({ where: { id_produto: id } })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


app.listen(process.env.PORT,
            x => console.log(`Server up at port ${process.env.PORT}`))