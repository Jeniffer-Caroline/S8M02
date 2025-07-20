import React from 'react';
import './Produtos.css';

function Produtos() {
    return (
        <section id="produtos" className="produtos-container">
            <div>
                <h1>Produtos</h1>
                <p>Lista de produtos disponíveis.</p>
            </div>
               <> <div className="Produtos-Items">
            <div className="produtos-card">
                <h2>Lampada Solar 30w - Bat Interna 6000 Mah 3,2v- Ensolar 30w</h2>
                <img className="imagem-produtos" src="./src/assets/lampada solar.webp" alt="" />
                <p>
                    - Luminosidade da luminária: 30w<br />
                    - Lumens: 300 LMs<br />
                    - Proteção: IP65<br />
                    - Tempo Estimado para Recarregar a Bateria Interna: 5 ~ 7 Horas de exposição ao sol;<br />
                    - Tempo de Uso com Bateria Carregada (Autonomia a Noite): Entre 10 a 14 horas<br />
                    - Alcance Aproximado do Controle Remoto: 12 metros<br />
                    - Angulo de Iluminação do Refletor: 120 Graus
                </p>
            </div>
            <div className="produtos-card">
                <h2>Luminária 300w Solar Bat 25ah 3,2v Litio + Placa 35w Ensolar</h2>
                <img className="imagem-produtos" src="./src/assets/luminaria solar.webp" alt="" />
                <p>
                    • Marca: Ensolar<br />
                    • Modelo: GY-SSL-M03-300W<br />
                    • Potência: 300W<br />
                    • Bateria Interna: 3,2 V, 25.000 mA lítio Lion<br />
                    • Painel Solar Correspondente: 5V, 35W<br />
                    • Carregador Ac: Solar<br />
                    • Lumens: 2.500 LM<br />
                    • CCT: 6.500K (Branca)<br />
                    • Certificação: GS, CE, Bis
                </p>
            </div>
            <div className="produtos-card">
                <h2>Inversor Deye On Grid 15.000w Sun-15kg05 C/ Wifi Integ</h2>
                <img className="imagem-produtos" src="./src/assets/inversor deye.webp" alt="" />
                <p>
                    Potência nominal de saída: 15 Kw<br />
                    Max potência ativa: 16,5 kw<br />
                    Tensão nominal da rede Ac: 220, 380, 230, 400 (V)<br />
                    Faixa de tensão da rede 277 ~ 460 Vac<br />
                    Fase Operacional: 60 Hz<br />
                    Fase Operacional: Trifásico<br />
                    Corrente nominal de saída da rede Ac: 21,8 A<br />
                    Fator de Potência de Saida: 0,8<br />
                    THD da grade: 3<br />
                    Corrente de injeção Cc: 05 (mA)
                </p>
                </div>
            </div>
            </>
        </section>
    );
}

export default Produtos;
