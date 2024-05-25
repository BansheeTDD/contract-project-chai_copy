import { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';
import "../../../App.css";
import Navbar from "../../common/Navbar/Navbar";
import "./MainPage.css";

function MainPage(): JSX.Element {
  const [teas, setTeas] = useState([]);

  useEffect(() => {
    const teas = fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setTeas(data));
  }, []);

  type Tea = {
    id: number,
    title: string,
    description: string,
    plance_cultivation: string,
    image: string,
    createdAt: string,
    updatedAt: string
  }

  return (
    <div className="mainConteiner">
      <Navbar />
      <p>Главная страница</p>
      <h1>CHAEPITIE</h1>
      {teas && teas.length && teas.map((tea: Tea) => {
        return (
          <div key={tea.id}>
            <Link className='titleTea' to={`/tea/${tea.id}`}>{tea.title}</Link>
            <div className='cardTea'>
              <div className="descrTea">{tea.description}</div>
              <img src={tea.image} alt="pic"/>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default MainPage;
