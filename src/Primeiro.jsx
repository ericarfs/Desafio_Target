import { useState } from "react";
import Layout from "./components/Layout";

export default function Primeiro (){
    const [numero, setNumero] = useState("");
    const [saida, setSaida] = useState("Informe um valor!");

    const calFibonacci = () => {
        const num = parseInt(numero);
        const mem = [0, 1]
        let i = 0
        let n = 0
        while (n < numero){
            n = mem[i] + mem[i+1]
            mem.push(n)
            i = i + 1
        }

        if (isNaN(num))
            setSaida("Informe um valor!")
        else if (mem.indexOf(num) != -1)
            setSaida(`O número ${num} pertence a sequência de Fibonacci!`)
        else
            setSaida(`O número ${num} não pertence a sequência de Fibonacci!`)  
    }

    return (
        <Layout>
            <section>
                <div className="content">
                    <h1> Desafio 01 </h1>
                    <div className="card enunciado">
                        Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
                        (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
                        ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
                    </div>
                    <h3>Informe um número:</h3>
                    <div className="card resposta">
                        <input
                            value={numero}
                            type="number"
                            min={0}
                            onChange={(e) => setNumero(e.target.value)}
                            onClick={() => setSaida("Informe um valor!")}
                            placeholder="Número"
                            required
                        />
                        <button className="btn btn-auth" onClick={() => calFibonacci()}>    
                        Enviar                   
                        </button>
                        {saida}
                    </div>
                </div>
                
            </section>
        </Layout>
    )
}