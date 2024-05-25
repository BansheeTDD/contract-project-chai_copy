import { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';
import "../../../App.css";
import Navbar from "../../common/Header/Header";
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
      <h1>По чайковскому?</h1>
      <div className="map-tea-blends"><img className="tea-map" src="https://happylove.top/uploads/posts/2023-05/1683500499_happylove-top-p-samii-bolshoi-ostrov-yevrazii-pinterest-29.jpg" alt="map" /></div>
      {teas && teas.length && teas.map((tea: Tea) => {
        return (
          <div key={tea.id} className="tea-wrapper">
            <Link to={`/tea/${tea.id}`}>
              <div data-tea={`${tea.title}`} data-id={`${tea.id}`} className='titleTeaMap'>
                {/* <img src="https://e7.pngegg.com/pngimages/587/853/png-clipart-gps-navigation-systems-computer-icons-others-miscellaneous-logo.png" alt="tea" /> */}
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default MainPage;
