import { useEffect, useState } from 'react';
import { Question } from './types/Question';
import { db } from './libs/firebase';
import { readDocuments } from './services/firebaseService';
import './App.css';
import { collection } from 'firebase/firestore';

const App = () =>{
	interface Provider {
		connected: boolean;
		type: string;
	}
	const [questions,setQuestions] = useState<Question[]>([
		{
			id: '',
			banca: '',
			nivel: '',
			cargo: '',
			concurso: '',
			ano:  0,
			assunto: '',
			enunciado: '',
			alternativas:[
				'',
				'',  
				'',
				'',
				''
			],
			resposta: '',
			observacao: '',
		}
	]);
	const questionsCollectionRef = collection(db,'engSegTrab');

	useEffect(() => { 
		const getQuestions = async ()=>{
			const data = await readDocuments('engSegTrab');
			console.log(typeof data);
			setQuestions(data);
		};

		getQuestions();
		console.log(questions);

	},[]);

	return (
		<div>
			{questions[0].banca}
		</div>
	);
};

export default App;
