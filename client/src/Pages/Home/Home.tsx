import RecommendedMuseums from '../../components/RecommendedMuseums/RecommendedMuseums';
import AllNews from '../../components/AllNews/AllNews';

function Home() {
  return (
    <>
      <h1>Добро пожаловать на наш сайт!</h1>
      <p>
        {' '}
        Здесь вы можете купить или продлить Музейную Карту, найти актуальную
        информацию о всех музеях, входящих в систему Музейной Карты, а также
        узнать о проходящих в них мероприятиях.
      </p>
      <RecommendedMuseums />
      <AllNews />
    </>
  );
}

export default Home;
