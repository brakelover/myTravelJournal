import './App.css'
import Header from './components/Header'
import data from './components/data'
import Place from './components/Place'

function App() {
  const placeList = data.map((place, i) => {
    if (i === data.length - 1) {
      return <Place {...place} />
    } else {
      return (
        <>
          <Place {...place} />
          <hr />
        </>
      )
    }
  });
  return (
    <div className='container'>
      <div className="subContainer">
        <Header />
        {placeList}
      </div>
    </div>
  )
}

export default App
