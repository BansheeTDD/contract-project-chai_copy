import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../../App.css'
import "./TeaPage.css";
import Navbar from "../../common/Header/Header"

function TeaPage(): JSX.Element {
    const [ tea, setTea ] = useState({}) 
    const [ comments, setComments ] = useState([])
    const [users, setUsers] = useState([]);
    let { teaId } = useParams();
    // console.log(teaId);
  
    useEffect(() => {
        
      const teaFetch = fetch(`http://localhost:3000/tea/${ teaId }`)
      .then(res => res.json())
      .then(data => setTea(data))
    }, [])

    useEffect(() => {
    const teaComments = fetch(`http://localhost:3000/tea/${ teaId }/comments`)
    .then(res => res.json())
    .then(data => setComments(data.teas))
    }, [])

    useEffect(() => {
      const usersComments = fetch(`http://localhost:3000/tea/${ teaId }/comments`)
      .then(res => res.json())
      .then(data => setUsers(data.users))
      }, [])
  

    // type Tea = {
    //     id: number,
    //     title: string,
    //     description: string,
    //     plance_cultivation: string,
    //     image: string,
    //     createdAt: string,
    //     updatedAt: string
    //   }

    const user = JSON.parse(localStorage.getItem("auth"));
    const [ inputContent, setInputContent ] = useState<string>('')
    async function addCommentHeandler(event: React.FormEvent<HTMLFormElement>): Promise<void> {
      try {
        event.preventDefault();
        const content: string = inputContent
        
        console.log(content);

        const newCommentFetch = await fetch(`http://localhost:3000/tea/api/addcomment`, {
          method: 'POST',
          headers: {
              'Content-type': 'application/json',
          },
          body: JSON.stringify({content, tea_id: teaId, user_id: user ? user.id : null})
        })

        if (newCommentFetch.ok) {
          const res = await newCommentFetch.json()
          console.log(res);
          
        } else {
          console.log("Ошибкассссс....");
        }
        // setInputContent('');
        
      } catch (error) {
        console.log({error});
      }
    }

    return (
      <div className='mainConteiner'>
        <Navbar/>
        <h1>
          Страница чая
        </h1>
        <h3>{tea.title}</h3>

        <div className='titleTea'>{tea.place_cultivation}</div>
        <div className='cardTea' data-id={`${tea.id}`}>
          <div className="descrTea">{tea.description}</div>
          <img src={tea.image} alt="pic"/>
        </div>

        { user ? (<div>
          <form onSubmit={addCommentHeandler}>
            <input type="text" name='content' onChange={(e) => setInputContent(e.target.value)} placeholder='новый комментарий' />
            <input type="submit" value="добавить" />
          </form>
        </div>) : <></>}

          {
            comments && comments.length && comments.map((comm, idx) => {
              return (
                <div key={idx}>
                  {users.find((user:any) => user.id === comm.user_id) ? (
                  <>
                    <div className="titleTea-inprofile">{users.find((user:any) => user.id === comm.user_id).name}</div>
                  </>
                ) : (
                  <></>
                )}
                  {comm.content}
                </div>
              )
            })
          }
      </div>
    )
  }
  
export default TeaPage
  