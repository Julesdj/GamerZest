import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

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
            <CardContent className="flex gap-2 flex-wrap">
                <PlatformIconList
                    platforms={game.parent_platforms.map((p) => p.platform)}
                />
            </CardContent>
        </Card>
    );
}

export default GameCard;
