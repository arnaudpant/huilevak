import Header from '../ui/layout/Header';
import SectionAbout from '../ui/sections/SectionAbout';
import SectionAlerte from '../ui/sections/SectionAlerte';
import SectionAvisClients from '../ui/sections/SectionAvisClients';
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
            <SectionAvisClients />
            <SectionAlerte />
            <SectionAbout />
        </>
    );
};

export default Home;
