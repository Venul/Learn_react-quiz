import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz.jsx'

function App() {
  return (
    <div className="App">
      <Layout>
        <Quiz/>
      </Layout>
    </div>
  );
}

export default App;
