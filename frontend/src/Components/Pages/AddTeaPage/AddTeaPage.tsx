import { useEffect, useState } from 'react'
import Navbar from "../../common/Header/Header";


function AddTeaPage(): JSX.Element {

const [ inputTitle, setInputTitle ] = useState<string>('')
const [ inputPlaceCultivation, setInputPlaceCultivation ] = useState<string>('')
const [ inputDescription, setInputDescription ] = useState<string>('')
const [ inputImage, setInputImage ] = useState<string>('')
    
    async function addNewTea(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        const newTea = {
            title: inputTitle,
            place_cultivation: inputPlaceCultivation,
            description: inputDescription,
            image: inputImage
        }

        const response = await fetch('http://localhost:3000/new-tea', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newTea)
        })

        if (response.ok) {
            setInputTitle('')
            setInputPlaceCultivation('')
            setInputDescription('')
            setInputImage('')
            window.location.assign('/')
        }

    }

    const user = JSON.parse(localStorage.getItem("auth"));

    
    return (
        <>
            {user ? <div>
                <Navbar/>
                <form onSubmit={addNewTea} name="new-tea-form">
                    <div>
                        <input value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)} 
                        type="text" name="title" placeholder="tea name"/>
                    </div>
                    <div>
                        <input value={inputPlaceCultivation}
                        onChange={(e) => setInputPlaceCultivation(e.target.value)} 
                        type="text" name="place_cultivation" placeholder="place of cultivation"/>
                    </div>
                    <div>
                        <input value={inputDescription}
                        onChange={(e) => setInputDescription(e.target.value)} 
                        type="text" name="description" placeholder="description"/>
                    </div>
                    <div>
                        <input value={inputImage}
                        onChange={(e) => setInputImage(e.target.value)} 
                        type="text" name="image" placeholder="image"/>
                    </div>
                    <div>
                        <input  type="submit" value={"Сохранить"}/>
                    </div>
                </form>
            </div> : 
            <div>Ошибка 404</div>}
        </>
    )
}
    
export default AddTeaPage