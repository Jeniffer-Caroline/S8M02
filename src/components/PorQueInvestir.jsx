import React from 'react';
import './PorQueInvestir.css';
function PorQueInvestir() {
return (
    <section id='por-que-investir' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px', backgroundColor: '#f8f5f5', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div>
            <h2>Por que investir em energia solar?</h2>
            <p>A energia solar é uma fonte limpa e renovável que pode ajudar a reduzir sua conta de luz e contribuir para um futuro mais sustentável.</p>
        </div>
    
            <h3>Benefícios:</h3>
            <> <div className="benefits">
           
                <div className="card">
                    <h2>Economia</h2>
                    <h4>Redução de custos com energia elétrica</h4>
                </div>
       
            <div className="card">
                <h2>Valorização</h2>
                <h4>Valorização do imóvel</h4>
            </div>
            <div className="card">
                <h2>Sustentabilidade</h2>
                <h4>Contribuição para um futuro sustentável</h4>
            </div>
            <div className="card">
                <h2>Redução de Emissões</h2>
                <h4>Redução de emissões de gases de efeito estufa</h4>
            </div>
        </div>
        </>
    </section>
);
}

export default PorQueInvestir;