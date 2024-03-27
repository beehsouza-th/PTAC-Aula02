 import { useState } from "react";
     export default function Main(){
     const [nome, setNome] = useState(""); 
     const [telefone, setTelefone] = useState(); 
     const [listaContatos, setContatos] = useState ([]);


     const registrar = () => {
     alert("deu certo");
     }
return(
<main>
<form> 

     <label htmlFor ="nome"> Nome:</label>
     <input type ="text"name="contato-nome"id="nome" value= {nome} onChange={  (event)  => setNome(event.target.value)}/>
     {nome}

     <label htmlFor ="telefone"> Telefone:</label>
<input type ="tel"name="contato-nome"id="telefone"value= {telefone} onChange={  (event)  => setTelefone(event.target.value)}/>
{telefone}

     <button id="bot"> Salvar </button>
</form>
</main>

);}





























}