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

        if (precoDe <= 0|| precoPor <= 0 || avaliacao <= 0 || estoque <= 0)
            return resp.send({ erro: ' Somente números positivos!' });

        if (nome.length <= 4 || categoria.length <= 4 || descricao.length <= 4)
            return resp.send({ erro: ' Insira mais que 4 caracteres!' })

        let produtoRepetido = await db.tb_produto.findOne({ where: { nm_produto: nome } });
        if (produtoRepetido != null)
            return resp.send({ erro: 'Produto já existente' });


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
        resp.send({ erro: 'Deu erro' });
        console.log(e.toString());
    }
})

app.put('/produto/:id', async (req, resp) => {
    try {
        let { id } = req.params;
        let { nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem } = req.body;

        
        if (!nome || nome == '')
        return resp.send({ erro: 'Campo Nome é obrigatório!' });

        if (!categoria || categoria == '')
            return resp.send({ erro: 'Campo Categoria é obrigatório!' });

        if (!precoDe || precoDe == '')
            return resp.send({ erro: 'Campo Preço DE é obrigatório!' });

        if (!precoPor || precoPor == '')
            return resp.send({ erro: 'Campo Preço POR é obrigatório!' });

        if (!avaliacao || avaliacao == '')
            return resp.send({ erro: 'Campo Avaliação é obrigatório!' });

        if (!descricao || descricao == '')
        return resp.send({ erro: 'Campo Descrição é obrigatório!' });
        
        if (!estoque || estoque == '')
            return resp.send({ erro: 'Campo Estoque é obrigatório!' });

        if (!imagem || imagem == '')
            return resp.send({ erro: 'Campo Link Imagem é obrigatório!' });
        
        
        let produtoRepetido = await db.tb_produto.findOne({ where: { nm_produto: nome } });
        if (produtoRepetido != null)
            return resp.send({ erro: 'Produto já existente' });

        


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