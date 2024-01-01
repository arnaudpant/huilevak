/* eslint-disable react/no-unescaped-entities */

import ButtonCommander from "../../components/ButtonCommander";

const SectionAlerte = () => {
    return (
        <section className="px-8 py-10 bg-p2 text-texte text-center text-4xl">
            <h2 className="text-4xl text-center py-6">
                ATTENTION ! STOCKS LIMITES
            </h2>
            <p className="py-2">
                Certains de nos produits phares sont sur le point de
                disparaître.
            </p>
            <p className="py-2">
                La prochaine fabrication est prévue dans plusieurs mois.
            </p>
            <p className="pb-2 pt-10">
                Profitez dès aujourd'hui de nos{' '}
                <span className="text-action drop-shadow-sm">
                    offres exceptionnelles
                </span>{' '}
                avant l'épuisement total des stocks.
            </p>
            <p className="pb-10 pt-2">
                Offrez-vous ces incontournables avant qu'il ne soit trop tard !
            </p>
            <ButtonCommander title="Consulter nos offres" />
        </section>
    );
};

export default SectionAlerte;
