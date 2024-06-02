 import { useState } from "react";

 export default function Main() {
     const [nome, setNome] = useState(""); 
     const [telefone, setTelefone] = useState(0);
     const [email, setEmail] = useState(""); 
     const [listaContatos, setListaContatos] = useState([]);


     const registrar = (event) =>{
     event.preventDefault();  //remover  
     alert("aamewm");

     setListaContatos([...listaContatos,
      {
          nomeSalvo: nome,
          telefoneSalvo: telefone,
          emailSalvo: email
      }
      ]);
   
      };
     console.table(listaContatos); //adicionar

 return(
 <main>
    <form>
 <div>
     <label htmlFor = "nome"> Nome :</label>
          <input type = "text"  nome = "nome-contato"  id = "nome" value = {nome} onChange={(event) => setNome(event.target.value)}/>
          {nome}

     <label htmlFor = "telefone"> Telefone :</label>
          <input type = "text"  nome = "telefone-contato"  id = "telefone" value = {telefone} onChange={(event) => setTelefone(event.target.value)}/>
          {telefone}

     <label htmlFor = "email"> Email :</label>
     <input type = "text"  nome = "email-contato"  id = "email" value = {email} onChange={(event) => setEmail(event.target.value)}/>
     {email}

     <button class = "botao" > Salvar </button>
     </div>
     </form>
    
 </main>
 );
}



























