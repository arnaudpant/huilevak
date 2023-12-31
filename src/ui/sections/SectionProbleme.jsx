/* eslint-disable react/no-unescaped-entities */
import { UserRoundMinus, UserRoundPlus } from 'lucide-react';

const SectionProbleme = () => {
    return (
        <section className="px-8 py-10 bg-p1">
            <div className='container mx-auto'>
                <h2 className="text-4xl text-center py-6">
                    Vous avez des difficultés à trouver des alternatives
                    naturelles et saines pour votre alimentation ?{' '}
                </h2>
                <ul className="font-serif text-xl py-10">
                    <li className="font-serif text-xl py-1">
                        <span className="pr-4">
                            <UserRoundMinus className="inline" />
                        </span>
                        Vous consommez trop de graisse saturées et pas assez de
                        source saines d’acides gras essentiels.
                    </li>
                    <li className="font-serif text-xl py-1">
                        <span className="pr-4">
                            <UserRoundMinus className="inline" />
                        </span>
                        Vous avez des préocupations concernant la qualité des
                        huiles disponibles sur le marché.
                    </li>
                    <li className="font-serif text-xl py-1">
                        <span className="pr-4">
                            <UserRoundMinus className="inline" />
                        </span>
                        Vous cherchez des options respectueuses de
                        l’environnement pour vos produits alimentaires.
                    </li>
                </ul>
                <p className="font-serif py-2 text-xl">
                    <span className="pr-4">
                        <UserRoundPlus className="inline" />
                    </span>
                    Nos huiles sont riche en acides gras oméga-3 et oméga-6,
                    bénéfiques pour la santé cardiaque et le métabolisme. Elles
                    préservent les nutriments et les bienfaits naturels des
                    graines, offrant des produits authentiques et riches en
                    éléments nutritifs.
                </p>
                <p className="font-serif py-1 text-xl">
                    <span className="pr-4">
                        <UserRoundPlus className="inline" />
                    </span>
                    Toutes nos huiles sont produites de manière écologique,
                    réduisant l'empreinte carbone en favorisant une agriculture
                    respectueuse de l'environnement.
                </p>
            </div>
        </section>
    );
};

export default SectionProbleme;
