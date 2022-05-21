import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionsList from './pages/QuestionsList';

export default function AppRouter () {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<QuestionsList/>}/>
			</Routes>
		</Router>
	);
}