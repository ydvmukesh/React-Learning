import './App.css'
import Card from './components/Card'

function App() {
  let myObj ={
    username:'Mason',
    age: 24
}
  return (
    <>
    <div className='gap-5 flex'>
     <Card username = "Mukesh" btnText = "Click Me"/>
     <Card username="Yadav" btnText = "Visit Me"/>
     </div>
    </>
  )
}

export default App
