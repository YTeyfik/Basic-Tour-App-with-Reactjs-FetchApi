import './App.css';
import {useState,useEffect} from 'react'
import Loading from './Components/Loading';
import Tours from './Components/Tours';


const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])

  const removeTour=(id)=>{
    const oldTours=tours.filter((tour)=>tour.id!==id)
    setTours(oldTours)
  }

  const fetchTour=async()=>{
    setLoading(true)
    try {
      const response=await fetch(url)
    const tours =await response.json()
    setLoading(false)
    setTours(tours)
    } catch (error) {
     setLoading(false)
     console.log(error) 
    }
    
  }
  // lifecycle methodlarını taklit eder componentDidmount 1 kez çalışır renderdan sonra componentDidupdate her renderda tekrar çalışır ComponentWillUnmount
  useEffect(() => {
    fetchTour()
  },[])

  if(loading){
    return (
      <div>
        <Loading/>
      </div>
    )
  }
  if(tours.length===0){
    return (
      <div>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="custom-btn btn-2" onClick={()=>{
            fetchTour()
          }}>Refresh</button>
        </div>
      </div>
    )
  }
  return (
    <div>
     <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
