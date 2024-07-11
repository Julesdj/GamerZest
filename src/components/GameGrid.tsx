import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
    const { games, errors } = useGames();

    return (
        <>
            {errors && <p>{errors}</p>}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </ul>
        </>
    );
}

export default GameGrid;
