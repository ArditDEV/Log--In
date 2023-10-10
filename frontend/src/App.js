import 'bootstrap/dist/css/bootstrap.min.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginUser from './LoginUser'
import CreateUser from './CreateUser'


function App() {

  return (

    <div className='App'>
      <BrowserRouter>

        <Routes>
          <Route path='/' element = {<LoginUser/>}/>
          <Route path='/create' element = {<CreateUser/>}/>
          
        </Routes>
        
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
