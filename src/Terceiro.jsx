import Layout from "./components/Layout";

export default function Terceiro (){

    return (
        <Layout>
            <section>
                <div className="content">
                    <h1> Desafio 03 </h1>
                    <div className="card enunciado">
                        <p>Observe o trecho de código abaixo: </p>
                        int INDICE = 12, SOMA = 0, K = 1; <br />
                        enquanto K &lt; INDICE faça &#123; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;K = K + 1; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;SOMA = SOMA + K; <br />
                        &#125; <br />
                        imprimir(SOMA);
                        <p>Ao final do processamento, qual será o valor da variável SOMA?</p> 
                    </div>
                </div>
                
            </section>
        </Layout>
    )
}