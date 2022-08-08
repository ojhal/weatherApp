import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import img1 from "./weatherIcon.webp"
import { useEffect, useState } from 'react';
import axios from 'axios';




function  App(){

const apiKey = "f13fba2800b1086c378e3a7b25805d1f"
  const [cityName,setCityName] = useState("")
  const[data, setData] = useState({})

  const getWeatherDetails = (cityName) =>{
    if(!cityName) return
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiUrl).then((res) =>{
      setData(res.data)
      console.log("res",res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  }
  const handleChange = (e) =>{
    // console.log("value",e.target.value)
    setCityName(e.target.value)
  }

  const handleSearch = () => {
    getWeatherDetails(cityName)
    // console.log("clicked")
    }

  // useEffect(() => {
  //   getWeatherDetails("delhi")
  // },[])
  return (
    <div className='col-md-12'>
      <div className='weatherBg'>
        <h1 className='heading'>Weather App</h1>
        <div className='d-grid gap-3 col-4 mt-4'>
          <input type="text" placeholder="Enter city name"className='from-control' 
          value={cityName}
          onChange={handleChange}/>
          <button className='btn btn-primary' type='button'
           onClick={handleSearch}>Search</button>
        </div>
        </div>
        {Object.keys(data).length > 0 &&
        <div className='col-md-12 text-center mt-5'>
         <div className='shadow rounded weatherResultBox'>
          <img className='weatherIcon' src={img1} alt=''/>
          <h5 className='weatherCity'>{data.name}</h5>
          <h6 className='weatherTemp'>{((data.main.temp) - 273.15).toFixed(2)} °C</h6>
          </div> 
        </div>
        }

    </div>
    
  );
}

export default App;
