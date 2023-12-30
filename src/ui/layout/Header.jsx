

const Header = () => {
    return (
      <div className="flex justify-between items-center h-20 bg-p1">
        <p className="font-serif pl-4 text-2xl">HuilesVak</p>
        <button className="w-44 h-12 flex justify-center items-center bg-action text-3xl text-text mr-5 rounded shadow">
          Commander
        </button>
      </div>
    );
};

export default Header