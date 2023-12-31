import Header from '../ui/layout/Header';
import SectionBenefices from '../ui/sections/SectionBenefices';
import SectionHero from '../ui/sections/SectionHero';
import SectionInfos from '../ui/sections/SectionInfos';
import SectionProbleme from '../ui/sections/SectionProbleme';
import SectionSpecificites from '../ui/sections/SectionSpecificites';

const Home = () => {
    return (
        <>
            <Header />
            <SectionHero />
            <SectionProbleme />
            <SectionBenefices />
            <SectionSpecificites />
            <SectionInfos />
        </>
    );
};

export default Home;
