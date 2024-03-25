import { useState } from "react";

 export default function Main(){
    const [nome, setNome] = useState("");  
    const [telefone, setTelefone] = useState("");

return(
<main>
    
    <form>
    <p> your nome:</p>
    <input type ="text"name="contato-nome"id="nome" value= {nome} onChange={  (event)  => setNome(event.target.value)}/>
     {nome}

<p>your telefone:</p>
     <input type ="tel"name="contato-nome"id="telefone"value= {telefone} onChange={  (event)  => setTelefone(event.target.value)}/>
     {telefone}

     <button id= "my-botao">
            salvar
            </button>
    
     </form>
</main>

);
}