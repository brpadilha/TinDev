import React from 'react';
import './Main.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }){
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev"/>
      <ul>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/37818334?v=4" alt=""/>
          <footer>
            <strong>
              Bruno Padilha
            </strong>
            <p>
              Mechanical Engineer that loves to code, now I am studying for to be a software engineer.
            </p>
          </footer>
          <div className="buttons">
            <button type="button" >
              <img src={dislike} alt="Dislike"/>
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/37818334?v=4" alt="" />
          <footer>
            <strong>
              Bruno Padilha
            </strong>
            <p>
              Mechanical Engineer that loves to code, now I am studying for to be a software engineer.
            </p>
          </footer>
          <div className="buttons">
            <button type="button" >
              <img src={dislike} alt="Dislike" />
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/37818334?v=4" alt="" />
          <footer>
            <strong>
              Bruno Padilha
            </strong>
            <p>
              Mechanical Engineer that loves to code, now I am studying for to be a software engineer.Mechanical Engineer that loves to code, now I am studying for to be a software engineer.Mechanical Engineer that loves to code, now I am studying for to be a software engineer.
            </p>
          </footer>
          <div className="buttons">
            <button type="button" >
              <img src={dislike} alt="Dislike" />
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/37818334?v=4" alt="" />
          <footer>
            <strong>
              Bruno Padilha
            </strong>
            <p>
              Mechanical Engineer that loves to code, now I am studying for to be a software engineer.
            </p>
          </footer>
          <div className="buttons">
            <button type="button" >
              <img src={dislike} alt="Dislike" />
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}
