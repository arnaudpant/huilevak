import Header from '../ui/layout/Header';
import SectionBenefices from '../ui/sections/SectionBenefices';
import SectionHero from '../ui/sections/SectionHero';
import SectionProbleme from '../ui/sections/SectionProbleme';

const Home = () => {
    return (
        <>
            <Header />
            <SectionHero />
            <SectionProbleme />
            <SectionBenefices />
        </>
    );
};

export default Home;
