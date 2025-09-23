import logo from '../logo.svg';
import './App.css';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Article title="Процедурное программирование на языке C++" content="Изучаем базовые возможности языка!"/>
      <Article title="ООП на С++" content="Изучаем объектно-ориентирование!"/>
     <Footer/>
    </div>
  );
}

export default App;
