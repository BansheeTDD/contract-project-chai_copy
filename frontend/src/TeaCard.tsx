import React from 'react'
// import ReactDOM from 'react-dom/client'
import './index.css'

interface TeaType {
	uuid: number;
    title: string,
    place_cultivation: string,
    description: string,
    image: string
}

interface TeaItemProps {
	tea: TeaType;
	index: number;
	setTeas: React.Dispatch<
		React.SetStateAction<
			{
                uuid: number;
                title: string,
                place_cultivation: string,
                description: string,
                image: string
			}[]
		>
	>;
}

const TeaCard: React.FC<TeaItemProps> = ({ setTeas, tea, index }) => {
	const getTeaHandler = (uuid: number) => {
		const ourTeas = fetch(`http://localhost:3000/tea/${uuid}`, {
			method: 'GET',
		})
        ourTeas.then(res => res.json()
    .then(data => console.log('Наши чаи: ', data)
    ));
        
		setTeas(previousState => [...previousState, tea]);
	};

	return (
		<div>
			<div>{index + 1}</div>
			<div>{tea.title}</div>
			<div onClick={() => getTeaHandler(tea.uuid)}>DELETE</div>
		</div>
	);
};

  export default TeaCard
