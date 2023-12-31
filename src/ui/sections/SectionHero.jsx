import { CheckCircle } from 'lucide-react';
import ButtonCommander from '../../components/ButtonCommander';

const SectionHero = () => {
    return (
        <section className="px-8 py-12 bg-hero bg-cover bg-left">
            <div>
                <h1 className="text-5xl ">
                    Des Huiles qui Nourrissent et Protègent votre Santé
                </h1>

                <h2 className="text-4xl py-6">
                    Découvrez nos <span className='text-p11 font-semibold'>huiles végétales de graines germées</span>, riches en nutriments
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
                        <CheckCircle className="inline" /> Digestion facilitée
                    </li>
                    <li className="py-2">
                        <CheckCircle className="inline" /> Goût plus subtile et
                        doux
                    </li>
                </ul>
            </div>
            <ButtonCommander title="COMMANDER NOS HUILES" />
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
