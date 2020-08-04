import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/66227219?s=460&u=c99b9c6d3539ff9de7823673c83df61b28f33cf4&v=4" alt="Leonardo Campello" />
                <div>
                    <strong>Leonardo Campello</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias te química avançada.
            <br />
                <br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atráves de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

            <footer>
                <p>
                    Preço/Hora
                <strong>R$ 50,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem