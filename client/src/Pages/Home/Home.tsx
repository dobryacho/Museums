import Navbar from '../../components/Navbar/Navbar';
import RecommendedMuseums from '../../components/RecommendedMuseums/RecommendedMuseums';
import AllNews from '../../components/AllNews/AllNews';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <RecommendedMuseums />
      <AllNews />
      <Footer />
    </>
  );
}

export default Home;
