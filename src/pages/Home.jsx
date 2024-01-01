import Footer from '../ui/layout/Footer';
import Header from '../ui/layout/Header';
import SectionAbout from '../ui/sections/SectionAbout';
import SectionAlerte from '../ui/sections/SectionAlerte';
import SectionAvisClients from '../ui/sections/SectionAvisClients';
import SectionBenefices from '../ui/sections/SectionBenefices';
import SectionCTA from '../ui/sections/SectionCTA';
import SectionHero from '../ui/sections/SectionHero';
import SectionImportant from '../ui/sections/SectionImportant';
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
            <SectionImportant />
            <SectionCTA />
            <Footer />
        </>
    );
};

export default Home;
