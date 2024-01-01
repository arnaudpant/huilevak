/* eslint-disable react/no-unescaped-entities */

import ButtonCommander from "../../components/ButtonCommander";

const SectionAlerte = () => {
    return (
        <section className="px-4 sm:px-8 py-6 sm:py-12 bg-p3 text-texte text-center text-3xl sm:text-4xl">
            <h2 className="text-center pb-6 sm:pb-10 underline">
                ATTENTION ! STOCKS LIMITES
            </h2>
            <p className="pb-4">
                Certains de nos produits phares sont sur le point de
                disparaître.
            </p>
            <p className="pb-10">
                La prochaine fabrication est prévue dans plusieurs mois.
            </p>
            <p className="pb-10">
                Profitez dès aujourd'hui de nos{' '}
                <span className="text-action drop-shadow-sm">
                    offres exceptionnelles
                </span>{' '}
                avant l'épuisement total des stocks.
            </p>
            <p className="pb-10">
                Offrez-vous ces incontournables avant qu'il ne soit trop tard !
            </p>
            <ButtonCommander title="Consulter nos offres" />
        </section>
    );
};

export default SectionAlerte;
