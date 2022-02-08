import Layout from './hoc/Layout/Layout'
import {Route, Routes} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz.jsx'
import Auth from './containers/Auth/Auth.jsx'
import QuizCreator from './containers/QuizCreator/QuizCreator.jsx'
import QuizList from './containers/QuizList/QuizList.jsx'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/quiz-creator" element={<QuizCreator />}/>
          <Route path="/quiz/:id" element={<Quiz />}/>
          <Route path="/" element={<QuizList />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
