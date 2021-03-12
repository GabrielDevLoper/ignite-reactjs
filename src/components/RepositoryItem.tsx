
type RepositoryItemProps = {
    repository:{
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem({ repository }: RepositoryItemProps){
    return(
        <li>
            <strong>{repository.name ?? "default"}</strong>
            <p>{repository.description ?? "default"}</p>
            <a href={repository.html_url ?? "https://www.google.com"} target="_blank">Acessar repositórios</a>
        </li>
    );
}