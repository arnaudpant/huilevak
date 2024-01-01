/* eslint-disable react/no-unescaped-entities */
import { ListAvisClients } from '../../types/Cards';
import CardAvisClient from '../../components/CardAvisClient';

const SectionAvisClients = () => {
    return (
        <section className="px-8 py-10 bg-p1">
            <h2 className="text-4xl text-center py-6">L'avis de nos clients</h2>
            <div className="flex flex-wrap gap-8 justify-center items-start">
                {ListAvisClients.map((card, index) => (
                    <CardAvisClient card={card} key={index} />
                ))}
            </div>
        </section>
    );
};

export default SectionAvisClients;
