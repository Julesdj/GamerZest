import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([]);
    const [errors, setErrors] = useState("");

    useEffect(() => {
        apiClient
            .get<FetchGamesResponse>("/games")
            .then((res) => {
                setGames(res.data.results);
            })
            .catch((err) => {
                setErrors(err.message);
            });
    }, []);

    return (
        <>
            {errors && <p>{errors}</p>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
}

export default GameGrid;
