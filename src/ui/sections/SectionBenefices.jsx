import { ListCardsBenefices } from '../../types/Cards';
import CardBenefice from '../../components/CardBenefice';

const SectionBenefices = () => {
    return (
        <section className="px-4 sm:px-8 py-6 sm:py-12 bg-p1">
            <div className="flex flex-wrap gap-4 sm:gap-8 justify-center items-start">
                {ListCardsBenefices.map((card, index) => (
                    <CardBenefice card={card} key={index} />
                ))}
            </div>
        </section>
    );
};

export default SectionBenefices;
