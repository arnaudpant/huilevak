/* eslint-disable react/no-unescaped-entities */
import { ListAvisClients } from '../../types/Cards';
import CardAvisClient from '../../components/CardAvisClient';

const SectionAvisClients = () => {
    return (
        <section className="px-4 sm:px-8 py-6 sm:py-12 bg-p1">
            <h2 className="text-4xl text-center">L'avis de nos clients</h2>
            <div className="flex flex-wrap gap-8 pt-6 sm:pt-10 justify-center items-start">
                {ListAvisClients.map((card, index) => (
                    <CardAvisClient card={card} key={index} />
                ))}
            </div>
        </section>
    );
};

export default SectionAvisClients;
