/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import { linksFooter } from '../../types/links';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="bg-p10 text-fond px-4 sm:px-8 py-6 sm:py-12">
            <h2 className="container mx-auto text-4xl pb-6 sm:pb-10">
                HuilesVak <span className="text-xl text-p6">Andji KAELE</span>
            </h2>
            <div className="container mx-auto flex flex-col gap-4 justify-between md:flex-row">
                {/* Gauche */}
                <div>
                    <h3 className="text-2xl pb-2">A propos</h3>
                    <div className="flex flex-col">
                        {linksFooter.map((link, index) => (
                            <Link
                                to={link.url}
                                key={index}
                                className="hover:text-action"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Centre */}
                <div>
                    <h3 className="text-2xl pb-2">Liens</h3>
                    <Link to="/" className="hover:text-action">
                        Notre site E-commerce
                    </Link>
                </div>
                {/* Droite */}

                <div className="flex gap-4 mt-4 items-end">
                    <Facebook
                        onClick={() => navigate('/')}
                        className="cursor-pointer hover:text-action"
                    />
                    <Twitter
                        onClick={() => navigate('/')}
                        className="cursor-pointer hover:text-action"
                    />
                    <Instagram
                        onClick={() => navigate('/')}
                        className="cursor-pointer hover:text-action"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
