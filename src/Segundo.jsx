import { useState } from "react";
import Layout from "./components/Layout";

export default function Segundo (){
    const [string, setString] = useState("");
    const [saida, setSaida] = useState("Informe uma string");

    const verificarString = () => {
        if (string == '')
            setSaida("Informe uma string!")
        else if(!string.toUpperCase().includes('A'))
            setSaida("A string não contém a letra A!")
        else {
            const count = [...string.toUpperCase()].filter(l => l === 'A').length;
            setSaida(`A letra A aparece ${count} vez(es) na string!`)
        }
            
    }

    return (
        <Layout>
            <section>
                <div className="content">
                    <h1> Desafio 02 </h1>
                    <div className="card enunciado">
                        Escreva um programa que verifique, em uma string, a existência da letra 'a', 
                        seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
                    </div>
                    <h3>Informe uma string:</h3>
                    <div className="card resposta">
                        <input
                            value={string}
                            type="text"
                            min={0}
                            onChange={(e) => setString(e.target.value)}
                            onClick={() => setSaida("Informe uma string")}
                            placeholder="String"
                            required
                        />
                        <button className="btn btn-auth" onClick={() => verificarString()}>    
                        Enviar                   
                        </button>
                        {saida}
                    </div>
                </div>
                
            </section>
        </Layout>
    )
}