
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="App h-screen w-screen max-w-screen bg-blue-400 flex flex-col items-center">
      <h1 className='font-bold border rounded-lg text-lg bg-white w-11/12 mt-[40px] text-center px-[10px] py-2'>RANDOM GIFS</h1>
      <div className='h-screen w-screen bg-blue-400 flex flex-col items-center'>

        <Random></Random>
        <Tag />
      </div>
    </div>
  );
}

export default App;
