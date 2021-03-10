
export function RepositoryItem({ repository }){
    return(
        <li>
            <strong>{repository.name ?? "default"}</strong>
            <p>{repository.description ?? "default"}</p>
            <a href={repository.html_url ?? "https://www.google.com"} target="_blank">Acessar repositórios</a>
        </li>
    );
}