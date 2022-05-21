import './App.css';
import CreateQuestionForm from './pages/CreatQuestionForm/Index';
import QuestionsList from './pages/QuestionsList';

const App = () =>{
	return (
		<div>
			<CreateQuestionForm/>
			<QuestionsList/>
		</div>
	);
};

export default App;
