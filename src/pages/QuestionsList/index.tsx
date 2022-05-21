import { useEffect, useState } from 'react';
import { Question } from '../../types/Question';
import { readDocuments } from '../../services/firebaseService';

const QuestionsList = () =>{

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

	useEffect(() => { 
		const getQuestions = async ()=>{
			const data = await readDocuments('engSegTrab');
			setQuestions(data);
		};

		getQuestions();
		console.log(questions);

	},[]);

	return (
		<div>
			{questions.map((question: Question)=> <article key={question.id}> 
				<h2>Banca: {question.banca}</h2> 
				<p>Concurso: {question.concurso}</p>
				<p>Assunto: {question.assunto}</p>
				<p>Cargo: {question.cargo}</p>
				<p>Ano: {question.ano}</p>
				<p>Enunciado: {question.enunciado}</p>
				<p>{question.alternativas[0]}</p>
				<p>{question.alternativas[1]}</p>
				<p>{question.alternativas[2]}</p>
				<p>{question.alternativas[3]}</p>
				<p>{question.alternativas[4]}</p>
				<p>Resposta: {question.resposta}</p>
				<p>{question.observacao}</p>

			</article>)}
		</div>
	);
};

export default QuestionsList;