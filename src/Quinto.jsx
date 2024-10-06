import Layout from "./components/Layout";

export default function Quinto (){

    return (
        <Layout>
            <section>
                <div className="content">
                    <h1> Desafio 05 </h1>
                    <div className="card enunciado">
                        Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. 
                        Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. 
                        Seu objetivo é descobrir qual interruptor controla qual lâmpada. 
                        Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? 
                    </div>
                    <h3>Respostas</h3>
                    <div className="card resposta">
                        Primeiro,  <br/> 
                        &emsp;&emsp;1, 3, 5, 7, 9 <br/>
                        b) Sequência das potências de 2:<br/> 
                        &emsp;&emsp;2, 4, 8, 16, 32, 64, 128 <br/>
                    </div>
                </div>
                
            </section>
        </Layout>
    )
}