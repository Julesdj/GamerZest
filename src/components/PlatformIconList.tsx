import { Platform } from "@/hooks/useGames";

interface Props {
    platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
    // TODO: add icons
    return (
        <>
            {platforms.map((platform) => (
                <p key={platform.id} className="text-gray-400">
                    {platform.name}
                </p>
            ))}
        </>
    );
}

export default PlatformIconList;
