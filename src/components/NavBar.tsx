import ThemeModeToggle from "./ThemeModeToggle";

function NavBar() {
    return (
        <nav className="container w-full h-16 flex justify-between gap-4 items-center mb-4">
            <div>
                <span className="font-bold">GAMERZEST</span>
                <span className="sr-only">Logo</span>
            </div>
            <ThemeModeToggle />
        </nav>
    );
}

export default NavBar;
