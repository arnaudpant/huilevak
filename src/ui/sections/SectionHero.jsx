import { CheckCircle } from 'lucide-react';

const SectionHero = () => {
    return (
        <section className="px-8 bg-gradient-to-br from-p1 to-p4">
            <div>
                <h1 className="text-5xl py-10">
                    Des Huiles qui Nourrissent et Protègent votre Santé
                </h1>

                <h2 className="text-4xl py-6">
                    Découvrez nos huiles végétales germées riches en nutriments
                    essentiels, idéales pour une cuisine saine, éthique, et
                    responsable.
                </h2>

                <p className="text-4xl py-3">
                    Éveillez vos papilles au quotidien avec des huiles aux
                    arômes du monde entier.
                </p>

                <ul className="font-serif text-xl py-10">
                    <li className="py-2">
                        <CheckCircle className="inline" /> Riche en vitamines,
                        antioydants, oméga 3 et 6
                    </li>
                    <li className="py-2">
                        <CheckCircle className="inline" /> Pauvre en acides gras
                        saturés
                    </li>
                    <li className="py-2">
                        <CheckCircle className="inline" /> Digestion facilitée
                        Goût plus subtile et doux
                    </li>
                </ul>
            </div>
            <div className="flex justify-center">
                <button className="px-6 py-4 flex justify-center items-center bg-action text-4xl text-text rounded shadow-lg">
                    COMMANDER NOS HUILES
                </button>
            </div>
            <div>
                <p className="py-4 text-xm text-center">
                    Toutes nos huiles végétales sont issues de graines et
                    oléagineux germés avant pression, puis pressés à froid{' '}
                </p>
            </div>
        </section>
    );
};

export default SectionHero;
