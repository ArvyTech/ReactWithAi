import {useState} from 'react';
import axios from 'axios';

import CGlogo from './CGlogo.png'; 
import './App.css';

function App() {
  const {prompt, setPrompt} = useState('');
  const {response, setResponse} = useState('');
  const {loading, setLoading} = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      axios.post("http://localhost:3000/chat", {prompt})
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <img src={CGlogo} alt='' className={loading ? 'cg-logo loading' : 'cg-logo'} />
            <input 
              type = "text"
              value = {prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder = "Ask anything... :)"
            />
            <button type="submit">Ask</button>
         </form>

         <p className="responserArea">
            {loading ? 'loading..' : response }
            {/* Here will be response from AI... */}
         </p>

         <div className="footer">~ Rikshit-Development ~</div>
    </div>
  );
}

export default App;
