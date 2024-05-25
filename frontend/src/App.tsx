import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import PageOne from './Components/Pages/PageOne/PageOne';
import PageTwo from './Components/Pages/PageTwo/PageTwo';
import MainPage from './Components/Pages/MainPage/MainPage';
import Registration from './Components/Pages/Registration/Registration';
import LoginPage from './Components/Pages/Login/LoginPage'
import TeaPage from './Components/Pages/TeaPage/TeaPage';
import ProfilePage from './Components/Pages/ProfilePage/ProfilePage';
import AddTeaPage from "./Components/Pages/AddTeaPage/AddTeaPage"


function App(): React.ReactElement {
  let { teaId: string } = useParams();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="tea">
            <Route path=":teaId" element={<TeaPage />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
          <Route path='new-tea' element={<AddTeaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
