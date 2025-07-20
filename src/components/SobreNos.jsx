import React from 'react';


const SobreNos = () => {
    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px', backgroundColor: '#f8f5f5', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} id="sobre-nos">
            <h2 style={{ color: '#187769', fontSize: '30px', fontWeight: 'bold' }}>Sobre Nós</h2>
            <p style={{ color: '#187769', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Descubra o poder da energia solar e comece a investir em um futuro sustentável.</p>
            <img style={{ width: '50%', height: 'auto' }} src="download.jpg" alt=" Imagem Sobre Nós" />
        </section>
    );
}

export default SobreNos