

const ButtonCommander = (title) => {
    return (
        <div className="flex justify-center">
            <button className="px-6 py-4 flex justify-center items-center bg-action text-4xl text-text rounded shadow-lg">
                {title.title}
            </button>
        </div>
    );
};

export default ButtonCommander;