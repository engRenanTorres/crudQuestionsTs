import './App.css';
import CreateQuestionForm from './pages/CreatQuestionForm/Index';
import QuestionsList from './pages/QuestionsList';

const App = () =>{
	return (
		<div>
			<QuestionsList/>
			<CreateQuestionForm/>
		</div>
	);
};

export default App;
