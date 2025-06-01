// aiaska-app: Minimal Telegram WebApp template

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
  const [matchedUser, setMatchedUser] = React.useState(null);

  React.useEffect(() => {
    // Имитация рандомного подбора пары
    setTimeout(() => {
      setMatchedUser({
        username: 'Алиса',
        age: 31,
        hobby: 'читает Гессе под дождём',
        quote: 'Ищу того, с кем можно молчать',
      });
    }, 1000);
  }, []);

  return (
    <div className="app">
      <h1>Aiaska</h1>
      <p className="tagline">Один чат. Один шанс. Один день.</p>
      {matchedUser ? (
        <div className="match">
          <h2>{matchedUser.username}, {matchedUser.age}</h2>
          <p>{matchedUser.hobby}</p>
          <em>{matchedUser.quote}</em>
          <button>Начать чат</button>
        </div>
      ) : (
        <p>Ищем тебе пару...</p>
      )}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
