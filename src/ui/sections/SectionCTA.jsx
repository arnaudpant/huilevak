import ButtonCommander from "../../components/ButtonCommander";


const SectionCTA = () => {
    return (
        <section className="flex flex-col gap-4 items-center justify-center px-8 py-10 bg-p1">
            <div>
                <img src="laptop.png" />
            </div>
            <ButtonCommander title="Commander nos huiles" />
        </section>
    );
};

export default SectionCTA;