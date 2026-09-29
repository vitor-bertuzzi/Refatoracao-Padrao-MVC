import { model_atualizar, model_criar, model_deletar, model_listar } from "../models/usuarioModel.js";

export const controller_criacao = async (req, res)=>{
    try{
    const {nome, email} = req.body;
        const result = await model_criar(nome, email);
    res.status(201).json({id: result.insertId, nome, email});
    }catch (e){
        res.status(500).json({erro: "Falha ao criar usuário"});
    }
}

export const controller_lista= async (req, res)=>{
    try{
        const rows =await model_listar();
        res.json(rows);
    } catch (e) {
        res.status(500).json({erro: "Falha ao listar usuários"});
    }
}

export const controller_atualizar= async (req, res)=>{
    try{
        const {id} = req.params;
        const {nome, email} = req.body;
        const result = await model_atualizar(nome, email, id);
        if(!result.affectedRows){
            return res.status(404).json({erro: "Usuário não encontrado"});
        }
        res.json({mensagem: "Atualizando com sucesso"});
    } catch (e){
        res.status(500).json({erro: "Falha ao atualizar usuario"});
    }
}

export const controller_deletar= async (req, res)=>{
    try{
        const {id} = req.params;
        const result = await model_deletar(id);
        if(!result.affectedRows){
            return res.status(404).json({erro: "Usuário não encontrado"});
        }
        res.json({mensagem: "Deletado com sucesso"});
    } catch (e){
        res.status(500).json({erro: "Falha ao deletar usuário"});
    }
}
