import CarierJourney from './home/partials/carierJourney';
import Experiences from './home/partials/experiences';
import Features from './home/partials/features';
import { Footers } from './home/partials/footers';
import FormContact from './home/partials/formContact';
import FrequentlyAsk from './home/partials/frequentlyAsk';
import Hero from './home/partials/hero';
import ImpactStatistics from './home/partials/impactStatistic';
import Navbar from './home/partials/navbar';
import PeopleSayMarque from './home/partials/peopleSayMarque';
import SkillStatistics from './home/partials/skillStatistic';

const Home = () => {
  return (
    <div className='relative mx-auto my-0 h-[100%] max-w-[1442px] overflow-hidden'>
      <Navbar />
      <Hero />
      <ImpactStatistics />
      <CarierJourney />
      <SkillStatistics />
      <FrequentlyAsk />
      <Features />
      <Experiences />
      <PeopleSayMarque />
      <FormContact />
      <Footers />
    </div>
  );
};

export default Home;
