import andji from '/src/assets/portrait-andji.png';
import bottle from '/src/assets/bouteille-huile-noix.png';
import { Link } from 'react-router-dom';

const SectionAbout = () => {
    return (
        <section className="flex flex-col flex-wrap md:flex-row w-full justify-center gap-8 px-4 sm:px-8 py-6 sm:py-12 bg-p1">
            {/* Partie gauche */}
            <div className="flex flex-col gap-4 max-w-2xl">
                {/* Avatar et Nom */}
                <div className="flex justify-start items-center h-24 gap-4">
                    {/* <div className=" overflow-hidden">
                        <img
                            src={andji}
                            alt="portrait de Andji"
                            className="w-20 h-20 rounded-full"
                        /> 
                    </div>*/}
                    <div>
                        <h3 className="text-2xl">Andji KAELE</h3>
                        <p>Créateur d’HuilesVak</p>
                    </div>
                </div>
                {/* Titre et texte */}

                <h3 className="text-2xl">Présentation</h3>
                <div className="text-md font-serif py-1">
                    <p>
                        Huilesvak est une marque de produits créée et déposée en
                        2022.
                    </p>
                    <p>
                        Elle se donne pour objectif de promouvoir les bienfaits
                        des huiles végétales extraites de graines oléagineuses
                        préalablement germées.
                    </p>
                    <p>
                        Elle défend l’accès à une alimentation saine, patrimoine
                        universel, dans une démarche globalisante mettant
                        l’humain comme épicentre du social et de
                        l’environnement, dans la gestion des ressources
                        disponibles pour son bien-être.
                    </p>
                </div>
                <div>
                    <Link
                        to={'/'}
                        className="text-xl text-action drop-shadow-sm font-sans"
                    >
                        En savoir plus ...
                    </Link>
                </div>
            </div>

            {/* Partie droite */}
            <div className="flex justify-center">
                <img
                    src={bottle}
                    alt="bouteille d'huile de noix avec des noix autour"
                />
            </div>
        </section>
    );
};

export default SectionAbout;
