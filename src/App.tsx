import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <div className="flex gap-4 w-full min-h-[95vh] container">
                <aside className="hidden lg:block w-60 bg-white">Sidebar</aside>
                <main className="w-full flex-1 p-2">
                    <GameGrid />
                </main>
            </div>
        </>
    );
}

export default App;
