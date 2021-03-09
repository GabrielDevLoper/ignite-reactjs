

export function RepositoryList(){

    const repositorio = "REPOSITORIO DO GABRIEL SANTOS DE LIMA BARRETO";
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
                <li>
                    <strong>{repositorio}</strong>
                    <p>Form in react</p>
                    <a href="">Acessar repositórios</a>
                </li>
                <li>
                    <strong>unforme</strong>
                    <p>Form in react</p>
                    <a href="">Acessar repositórios</a>
                </li>
                <li>
                    <strong>unforme</strong>
                    <p>Form in react</p>
                    <a href="">Acessar repositórios</a>
                </li>
                <li>
                    <strong>unforme</strong>
                    <p>Form in react</p>
                    <a href="">Acessar repositórios</a>
                </li>
            </ul>
        </section>
    );
}