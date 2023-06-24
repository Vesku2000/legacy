import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Etusivu</Link>
          </li>
          <li>
            <Link to="/laitteet">Laitteet</Link>
          </li>
          <li>
            <Link to="/tuki">Tuki</Link>
          </li>
          <li>
            <Link to="/yhteystiedot">Yhteystiedot</Link>
          </li>
        </ul>
      </nav>
      <h1>Tervetuloa IT-tukipalveluihin</h1>
      <p>
        Tarjoamme laitteiden käyttöön liittyvää tukea henkilöille, jotka eivät osaa käyttää puhelimia, tietokoneita,
        tulostimia, televisioita ja muita vastaavia laitteita.
      </p>
    </div>
  );
};

export default Home;
