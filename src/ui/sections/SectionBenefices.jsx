import { ListCardsBenefices } from '../../Cards';
import CardBenefice from '../../components/CardBenefice';

const SectionBenefices = () => {
    return (
        <section className="px-8 py-10 bg-p2">
            <div className="flex flex-wrap gap-8 justify-center items-start">
                {ListCardsBenefices.map((card, index) => (
                    <CardBenefice card={card} key={index} />
                ))}
            </div>
        </section>
    );
};

export default SectionBenefices;
