import BrowseCategories from "./Components/BrowseCategories";
import DiscoverMore from "./Components/DiscoverMore";
import Footer from "./Components/Footer";
import HowItWorks from "./Components/HowItWorks";
import JoinOurWeekly from "./Components/JoinOurWeekly";
import MagicMashrooms from "./Components/MagicMashrooms";
import Navbar from "./Components/Navbar";
import TopCreators from "./Components/TopCreators";
import TrendingCollection from "./Components/TrendingCollection";
import './Components/scss/layout/_navigation.scss';
import './Components/scss/base/_base.scss';
import './Components/scss/base/_reset.scss';
import './Components/scss/base/_typography.scss';
import './Components/scss/pages/_home.scss'
import './Components/scss/pages/_marketplace.scss'
import './Components/scss/pages/_rankings.scss'
import './Components/scss/layout/_footer.scss';
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <TrendingCollection/>
      <TopCreators/>
      <BrowseCategories/>
      <DiscoverMore/>
      <MagicMashrooms/>
      <HowItWorks/>
      <JoinOurWeekly/>
      <Footer/>
    </div>
  );
}

export default App;
