import React from 'react';
import './Rodape.css';


function Rodape() {
    return (
        <footer className="rodape">
            <div>
                <h2>Minha empresa</h2>
                <p>CNPJ: 12.345.678/0001-99</p>
                <p>Email: contato@minhaempresa.com</p>
                <p>Endereço: Rua Exemplo, 123 - Cidade Fictícia, SP</p>
                <p>© 2025 Meu App. Todos os direitos reservados.</p>
            </div>

            <div className='social-icons'>
                <a href="https://www.facebook.com/minhaempresa" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" style={{width: '24px', verticalAlign: 'middle', marginRight: '8px'}} />
                    Facebook
                </a>
                <br />
              
              
                <a href="https://www.linkedin.com/company/minhaempresa" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{width: '24px', verticalAlign: 'middle', marginRight: '8px'}} />
                    LinkedIn
                </a>
                <br />
                <a href="https://twitter.com/minhaempresa" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" style={{width: '24px', verticalAlign: 'middle', marginRight: '8px'}} />
                    Twitter
                </a>
            </div>
        </footer>
    );
}

export default Rodape;
