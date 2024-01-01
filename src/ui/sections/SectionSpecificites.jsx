import {
    ListSpecificitesGauche,
    ListSpecificitesDroite,
} from '../../types/Cards';
import BoxSpecificites from '../../components/BoxSpecificites';

const SectionSpecificites = () => {
    return (
        <section className="px-8 py-10 bg-p1">
            <h2 className="text-4xl text-center py-6">
                Spécifités de nos huiles
            </h2>

            <div className="container mx-auto flex flex-col md:flex-row gap-10 justify-center items-start">
                <div className="flex flex-col gap-6">
                    {ListSpecificitesGauche.map((box, index) => (
                        <BoxSpecificites box={box} key={index} />
                    ))}
                </div>

                <div className="flex flex-col gap-6">
                    {ListSpecificitesDroite.map((box, index) => (
                        <BoxSpecificites box={box} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionSpecificites;
