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
                        Primeiramente, eu ligo um dos interruptores, espero alguns minutos, e depois desligo. <br/> 
                        Em seguida, ligo outro interruptor e vou até uma das salas com lâmpada.
                        Se a lâmpada estiver ligada, pertence ao interruptor 2, se estiver apagada e quente, pertence ao interruptor 1, e se estiver apagada e fria, pertence ao interruptor 3. <br/>
                        Por fim, entre os dois interruptores restantes, deixo um ligado e o outro desligado e verifico outra sala.
                        Dessa forma, consigo descobrir qual interruptor liga cada uma das outras duas lâmpadas. <br/>

                    </div>
                </div>
                
            </section>
        </Layout>
    )
}