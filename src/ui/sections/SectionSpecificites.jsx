import {
    ListSpecificitesGauche,
    ListSpecificitesDroite,
} from '../../types/Cards';
import BoxSpecificites from '../../components/BoxSpecificites';

const SectionSpecificites = () => {
    return (
        <section className="px-4 sm:px-8 py-6 sm:py-12 bg-fond">
            <h2 className="text-3xl sm:text-4xl text-center">
                Spécificités de nos huiles
            </h2>

            <div className="container mx-auto mt-6 sm:mt-10 flex flex-col md:flex-row gap-10 justify-center items-start">
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
