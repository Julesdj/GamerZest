import { Card, CardHeader, CardTitle } from "./ui/card";
import { Game } from "../hooks/useGames";

interface GameCardProps {
    game: Game;
}

function GameCard({ game }: GameCardProps) {
    return (
        <Card className="overflow-hidden">
            <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-48 object-cover"
            />

            <CardHeader>
                <CardTitle>{game.name}</CardTitle>
            </CardHeader>
        </Card>
    );
}

export default GameCard;
