import React, { useState, useEffect } from "react";
import * as J from './Home.styles'
import axios from "axios";

function Home() {

    const [repository, setRepository] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/jeymes/repos')
            .then((response) => {
                setRepository(response.data)
            })
    }, [])

    return (


        <J.Container>

            <J.ContainerTitle>
                <h1>
                    Repository Github
                </h1>
            </J.ContainerTitle>

            <J.SubContainer>

                {repository.map((post, Key) => {
                    return (
                        <div Key={Key}>
                            <J.Repository>

                                <h2>
                                    {post.name}
                                </h2>

                                <div className="Opcoes">
                                    <h3>Descrição</h3>
                                    <p>
                                        {post.description}
                                    </p>
                                    <h3>Linguagem</h3>
                                    <p>
                                        {post.language}
                                    </p>
                                </div>

                                <div className="ContainerButton">
                                    <button>
                                        <a href={post.html_url}>Repository</a>
                                    </button>
                                </div>
                            </J.Repository>
                        </div>
                    )
                })}

            </J.SubContainer>
        </J.Container>
    )
}

export default Home;