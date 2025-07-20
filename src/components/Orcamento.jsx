import React from 'react';
import './Orcamento.css';

function Orcamento() {
    return (
        <section id="orcamento" className="orcamento-container">
            <h1>Faça um orçamento</h1>
            <p>Entre em contato conosco para receber um orçamento personalizado.</p>
            <form className="orcamento-form">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" required />

                <label htmlFor="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Orcamento;
