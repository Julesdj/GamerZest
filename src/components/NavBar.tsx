import ThemeModeToggle from "./ThemeModeToggle";

function NavBar() {
    return (
        <nav className="container w-full h-16 shadow-md backdrop-blur-sm bg-card/90 flex justify-between gap-4 items-center mb-4 2xl:my-4 rounded-md">
            <div>
                <span className="font-bold">GAMERZEST</span>
                <span className="sr-only">Logo</span>
            </div>
            <ThemeModeToggle />
        </nav>
    );
}

export default NavBar;
