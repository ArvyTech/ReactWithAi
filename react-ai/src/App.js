import CG-logo from './src/CG-logo.png';
import './App.css';

function App() {
  return (
    <div className="wrapper">
        <form>
            <img src={logo} alt='' className="cg-logo" />
            <input 
              type = "text"
              value = ""
              placeholder = "Ask anything... :)"
            />
            <button type="submit">Ask</button>
         </form>

         <p className="responserArea">
            Here will be response from AI...
         </p>

         <div className="footer">~ Rikshit-Development ~</div>
    </div>
  );
}

export default App;
