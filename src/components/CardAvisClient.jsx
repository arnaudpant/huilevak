const CardAvisClient = (card) => {
    const { avatar, name, job, text } = card.card;
    return (
        <div className="relative flex flex-col items-center w-64 min-h-[420px] p-4 bg-fond shadow-lg">
            <div className="flex gap-4 h-24 pb-2">
                <div className="w-1/4">
                    <img src={avatar} alt={text} />
                </div>
                <div>
                    <h3 className="text-xl">{name}</h3>
                    <p>{job}</p>
                </div>
            </div>

            <p className="text-sm font-serif text-left pb-6">{text}</p>
        </div>
    );
};

export default CardAvisClient;
