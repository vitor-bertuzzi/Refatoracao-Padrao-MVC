import { pool } from "../config/db.js";

export const model_criar= async(nome, email)=>{
const[result] = await pool.query(
        "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
        [nome, email]
)
return result;}

export const model_listar= async()=>{const [rows] = await pool.query("SELECT * FROM usuarios")
    return rows;
}

export const model_atualizar= async (nome, email, id)=>{
const [result] = await pool.query(
            "UPDATE usuarios SET nome = COALESCE(?, nome), email = COALESCE(?, email) WHERE id = ?",
            [nome || null, email || null, id]
)
return result;}

export const model_deletar= async(id)=>{
const [result] = await pool.query(
            "DELETE FROM usuarios WHERE id = ?",
            [id]
)
return result;}