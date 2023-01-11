import './App.css';
import Header from './layout/Header';
import Main from './layout/main/Main';
import { MathJaxContext } from 'better-react-mathjax';
import Footer from './layout/Footer';
import QueueProvider from './context/QueueContext';

function App() {
  return (
    <MathJaxContext>
      <QueueProvider>
        <div className="container max-w-screen-xl bg-slate-100 rounded-lg mx-auto">
          <div className="flex flex-col p-4 px-5 gap-4">
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      </QueueProvider>
    </MathJaxContext>
  );
}

export default App;
