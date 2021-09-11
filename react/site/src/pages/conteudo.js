import { useState, useRef, useEffect } from 'react';

import { ContainerConteudo, Traco } from './conteudo.styled.js'
import { DevInput, DevButton, DevTextArea } from '../components/outros/inputs/inputs'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import LoadingBar from 'react-top-loading-bar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Api from '../service/api.js';
const api = new Api();


export default function Conteudo() {

    const [produtos, setProdutos] = useState([]);
    const [imagem, setImagem] = useState('');
    const [produto, setProduto] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precoDe, setPrecoDe] = useState('');
    const [estoque, setEstoque] = useState('');
    const [precoPor, setPrecoPor] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idAlterando, setidAlterando] = useState(0);

    const loading = useRef(null);

    async function listar() {
        loading.current.continuousStart();

        let r = await api.listarCadastros();
            setProdutos(r);

        loading.current.complete();
    }

    async function inserir() {
        if (idAlterando !== 0) {
            let alter = await api.alterarProduto(idAlterando, produto, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem);
            
            if (alter.erro)
                toast.error(`❌ ${alter.erro}`)
            else 
                toast.dark('✔️ Produto alterado com sucesso');
                

        } else {
            let inse = await api.inserirProduto(produto, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem);
            
            if (inse.erro) {
                toast.error(`❌ ${inse.erro}`)
                limparCampos();
            }
            else {
                toast.dark('✔️ Produto inserido com sucesso');
            }
        }

        limparCampos();
        listar();
    }

    function limparCampos() {
        setImagem('');
        setProduto('');
        setCategoria('');
        setPrecoDe('');
        setEstoque('');
        setPrecoPor('');
        setAvaliacao('');
        setDescricao('');
        setidAlterando(0);
    }

    async function remover(id) {
        confirmAlert({
            title: 'Remover produto',
            message: `Tem certeza que deseja remover o produto ${id} ?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async () => {
                    let r = await api.removerProduto(id);
                    if (r.erro)
                        toast.error(`${r.erro}`);
                    else {
                        toast.dark('✔️ Produto removido!')
                        listar();
                    }
                }
              },
              {
                label: 'Não'
              }
            ]
        });
    }

    async function onlyNumber(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        var regex = /^[0-9.]+$/;
        if( !regex.test(key) ) {
           theEvent.returnValue = false;
           if(theEvent.preventDefault) theEvent.preventDefault();
                toast.error(`❌ Somente números são permitidos!!`)
        }
     }


    async function alterando(item) {
        setImagem(item.img_produto)
        setProduto(item.nm_produto);
        setCategoria(item.ds_categoria);
        setPrecoDe(item.vl_preco_de);
        setEstoque(item.qtd_estoque);
        setPrecoPor(item.vl_preco_por);
        setAvaliacao(item.vl_avaliacao);
        setDescricao(item.ds_produto);
        setidAlterando(item.id_produto);
    }

    useEffect(() => {
        listar();
    }, [])

    return (
        <ContainerConteudo>
            <LoadingBar color='#119FDC' ref={loading} />
            <ToastContainer />
            <div className="cabecalhoConteudo">
                <div className="perfil">
                    <div className="imgPerfil"><img src="/assets/images/usuario.jpg" alt="" /></div>
                    <div className="notificacao">3</div>    
                </div>

                <div className="msgPerfil">Olá, <b>Gilson Torres</b></div>

                <div className="comandos">
                    <div className="atualizar" onClick={listar}> <button> <img src="/assets/images/refresh.png" alt="" /> </button> </div>
                    <div className="logout"> <button> <img src="/assets/images/log-out.png" alt="" /> </button> </div>
                </div>
            </div>

            <div className="cadastros">
                <div className="titulo">
                    <Traco />
                    <div className="novoAluno">{idAlterando === 0 ? 'Novo Produto' : 'Alterando Produto ' + idAlterando}</div>
                </div>


                <div className="containerInput1">
                    <div className="box-input">
                        <div className="label1">Nome:</div>
                        <DevInput type="text" value={produto} onChange={e => setProduto(e.target.value)} />
                    </div>
                
                    <div className="box-input1">
                        <div className="label2">Preço DE:</div>
                        <DevInput type="text" onKeyPress={onlyNumber} value={precoDe} onChange={e => setPrecoDe(e.target.value)} />
                    </div>
                </div>

                <div className="containerInput2">
                    <div className="box-input">
                        <div className="label3">Categoria:</div>
                        <DevInput type="text" value={categoria} onChange={e => setCategoria(e.target.value)} />
                    </div>
                
                    <div className="box-input1">
                        <div className="label4">Preço POR:</div>
                        <DevInput type="text" onKeyPress={onlyNumber} value={precoPor} onChange={e => setPrecoPor(e.target.value)} />
                    </div>    
                </div> 

                <div className="containerInput3">
                    <div className="box-input2">
                        <div className="label5">Avaliação:</div>
                        <DevInput type="text" onKeyPress={onlyNumber} value={avaliacao} onChange={e => setAvaliacao(e.target.value)} />
                    </div>
                
                    <div className="box-input1">
                        <div className="label6">Estoque:</div>
                        <DevInput type="text" onKeyPress={onlyNumber} value={estoque} onChange={e => setEstoque(e.target.value)} />
                    </div>
                </div>  

                <div className="containerInput4">
                    <div className="box-input">
                        <div className="label7">Link Imagem:</div>
                        <input className="input-link" type="text" value={imagem} onChange={e => setImagem(e.target.value)} />
                    </div>
                </div>  

                <div className="containerInput5">
                    <div className="box-input">
                        <div className="label8">Descrição:</div>
                        <DevTextArea type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </div>
                
                    <DevButton onClick={inserir} className="btn-cadastro">{idAlterando === 0 
                        ? 'Cadastrar' 
                        : 'Alterar'}
                    </DevButton>
                </div>     
            </div>


            <div className="matriculados">
                <div className="titulo">
                    <Traco />
                    <div className="novoAluno">Produtos Cadastrados</div>
                </div>
  
                <table>

                    <thead>
                        <tr className="cabecalhoTb">
                            <th className="imagem"></th>
                            <th className="idTb">ID</th>
                            <th className="alunoTb">Produto</th>
                            <th className="numeroTb">Categoria</th>
                            <th className="turmaTb">Preço</th>
                            <th className="cursoTb">Estoque</th>
                            <th className="espaço"></th>
                            <th className="espaço"></th>
                        </tr>
                    </thead>

                    <tbody>

                        {produtos.map((item, i) => 

                            <tr className={i % 2 === 0 ? "linha-alternada" : ""}>
                                <td title={item.img_produto}>
                                    <img src={item.img_produto} alt="" style={{ width: '40px', height: '35px' }} /> 
                                </td>
                                <td className="idTb1">{item.id_produto}</td>
                                
                                <td title={item.nm_produto}>
                                    {item.nm_produto != null && item.nm_produto.length >= 25
                                        ? item.nm_produto.substr(0, 25) + '...'  : item.nm_produto}       
                                </td>
                                <td>{item.ds_categoria}</td>
                                <td>{item.vl_preco_de}</td>
                                <td>{item.qtd_estoque}</td>
                                <td className="botao-visivel"> <button onClick={() => alterando(item) } > <img src="/assets/images/edit.png" alt="" /> </button> </td>
                                <td className="botao-visivel"> <button onClick={() => remover(item.id_produto) } > <img src="/assets/images/trash.png" alt="" /> </button> </td>
                            </tr>

                        )}

                    </tbody>

                </table>
            </div>
        </ContainerConteudo>
    )
}