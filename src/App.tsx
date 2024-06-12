import "./App.css";

function App() {
    return (
        <>
            <nav className="w-full bg-blue-500 mb-4">Navbar</nav>
            <div className="flex gap-4 w-full min-h-svh">
                <aside className="hidden lg:block w-full max-w-52 bg-red-500">
                    Sidebar
                </aside>
                <main className="w-full flex-1 bg-black">Main</main>
            </div>
        </>
    );
}

export default App;
