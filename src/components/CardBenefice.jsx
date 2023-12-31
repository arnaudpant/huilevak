import { CheckCircle } from 'lucide-react';

const CardBenefice = (card) => {
    const { text, logo } = card.card;

    return (
        <div className="relative flex flex-col items-center w-64 h-[350px] p-4 bg-fond shadow-lg">
            <div className="w-3/4">
                <img src={logo} alt={text} />
            </div>
            <p className="text-xl text-center pt-6">{text}</p>
            <CheckCircle className='absolute z-10 bottom-6' />
        </div>
    );
};

export default CardBenefice;
