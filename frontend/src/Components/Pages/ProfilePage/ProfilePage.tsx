import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../../../App.css";
import "./ProfilePage.css";
import Navbar from "../../common/Header/Header";
import { JsonFromBackInterface } from "./interface";

function ProfilePage(): JSX.Element {
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [teas, setTeas] = useState([]);
  // let {teaId} = useParams();
  const userAuth = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    const userFetch: Promise<JsonFromBackInterface | null | any> = fetch(
      `http://localhost:3000/profile`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({user_id: userAuth.id}),
      })
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);

  useEffect(() => {
    const commentsFetch: Promise<any> = fetch(`http://localhost:3000/profile`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({user_id: userAuth.id}),
    })
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, []);
  
  useEffect(() => {
    const teasFetch: Promise<any> = fetch(`http://localhost:3000/profile`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({user_id: userAuth.id}),
    })
      .then((res) => res.json())
      .then((data) => setTeas(data.teas));
  }, []);

  return (
    <div className="mainConteiner">
      <Navbar />
      <h1>Профиль пользователя</h1>
      { userAuth && userAuth.id === 1 ? 
      <div>
        <div>Спец мец пердложение для админа</div>
        <a href="/new-tea">
          <button>Добавление чая</button>
        </a>
      </div>
      : <></> }

      <div className="comments">{user.name}, Ваши комментарии</div>
      <div className="commentsMain">

      {comments &&
        comments.length &&
        comments.map((comment, idx) => {
          return (
            <div className="commentMain" key={idx}>
              <div>
                {teas.find((tea:any) => tea.id === comment.tea_id) ? (
                  <>
                    <div className="titleTea-inprofile">{teas.find((tea:any) => tea.id === comment.tea_id).title}</div>
                    <img src={teas.find((tea:any) => tea.id === comment.tea_id).image} alt="pic"/>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="usercomment">
               Вы написали: "{comment.content}"
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfilePage;
