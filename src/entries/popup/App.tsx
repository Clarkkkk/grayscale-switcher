import "./App.css";
import { useOption } from '../../tools'

function App() {
  const [option, setOption] = useOption()

  return (
    <main>
      <div
        className={`switch-ball ${option.state === 'colored' ? 'color' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`switch-ball-shadow ${option.state === 'colored' ? 'color' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <button className="switch-button" onClick={() => {
        setOption({
          state: option.state === 'colored' ? 'gray' : 'colored'
        })
      }}>
        Switch
      </button>
    </main>
  );
}

export default App;
