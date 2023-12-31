import { ChevronRight } from 'lucide-react';

const BoxSpecificites = (box) => {
    const { title, texte } = box.box;
    return (
        <div>
            <h3 className="text-2xl pb-1">
                <span className="pr-1">
                    <ChevronRight className="inline" />
                </span>
                {title}
            </h3>
            <p className="text-lg font-serif font-light py-1">{texte}</p>
        </div>
    );
};

export default BoxSpecificites;
