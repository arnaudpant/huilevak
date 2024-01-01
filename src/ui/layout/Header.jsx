const Header = () => {
    return (
        <header className="flex justify-between items-center h-12 md:h-16 bg-p1">
            <p className="font-serif pl-4 text-2xl">HuilesVak</p>
            <button className=" hidden w-44 h-12 md:flex justify-center items-center bg-action text-3xl text-text mr-5 rounded shadow">
                Commander
            </button>
        </header>
    );
};

export default Header;
