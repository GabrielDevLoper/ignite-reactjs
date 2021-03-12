import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

type Repository = {
    id?: number;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() =>{
        fetch("https://api.github.com/orgs/rocketseat/repos")
        .then(data => data.json())
        .then(result => {
            setRepositories(result);
        });
    },[]);
  
        
    return(
        <section className="repository-list">
            {console.log(repositories)}
            <h1>Lista de repositorios</h1>
            <ul>
                {repositories.map(repository => (
                    <RepositoryItem key={repository.id} repository={repository}/>
                ))}
            </ul>
        </section>
    );
}