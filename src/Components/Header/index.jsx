import React from "react";
import * as J from './Header.styles'

function Header() {

    return (
        <J.Container>

            <J.SubContainer>

                <J.ContainerImg>
                    <img src="./img/jeymes.png" alt="FotoPerfil" />
                </J.ContainerImg>

                <J.ContainerProfile>

                    <J.ContainerTitle>
                        <h1>Jeymes Sousa</h1>
                    </J.ContainerTitle>

                    <J.ContainerDescricao>
                        <h2>Olá, Seja Bem Vindo ao Meu Perfil!</h2>
                    </J.ContainerDescricao>

                </J.ContainerProfile>

                <J.ContainerContactor>
                <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"/>
                <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" target="_blank"/>
                <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
                <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"/>
                </J.ContainerContactor>

            </J.SubContainer>
        </J.Container>
    )
}

export default Header;