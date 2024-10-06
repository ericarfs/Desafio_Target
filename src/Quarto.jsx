import Layout from "./components/Layout";

export default function Quarto (){

    return (
        <Layout>
            <section>
                <div className="content">
                    <h1> Desafio 04 </h1>
                    <div className="card enunciado">
                        <p>Descubra a lógica e complete o próximo elemento:</p> 
                        a) 1, 3, 5, 7, ___ <br/>
                        b) 2, 4, 8, 16, 32, 64, ____ <br/>
                        c) 0, 1, 4, 9, 16, 25, 36, ____ <br/>
                        d) 4, 16, 36, 64, ____ <br/>
                        e) 1, 1, 2, 3, 5, 8, ____ <br/>
                        f) 2, 10, 12, 16, 17, 18, 19, ____
                    </div>
                    <h3>Respostas</h3>
                    <div className="card resposta">
                        a) Sequência dos números ímpares: <br/> 
                        &emsp;&emsp;1, 3, 5, 7, 9<br/>
                        b) Sequência das potências de 2:<br/> 
                        &emsp;&emsp;2, 4, 8, 16, 32, 64, 128 <br/>
                        c) Sequência dos quadrados dos números naturais:<br/>
                        &emsp;&emsp;0, 1, 4, 9, 16, 25, 36, 49 <br/>
                        d) Sequência dos quadrados dos números pares:<br/>
                        &emsp;&emsp;4, 16, 36, 64, 100 <br/>
                        e) Sequência de Fibonacci: <br/> 
                        &emsp;&emsp;1, 1, 2, 3, 5, 8, 13 <br/>
                        f) Sequência dos números que começam com D: <br/>
                        &emsp;&emsp;2, 10, 12, 16, 17, 18, 19, 200
                    </div>
                </div>
                
            </section>
        </Layout>
    )
}