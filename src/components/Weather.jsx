import React, { useEffect, useRef, useState } from 'react'
import search_icon from '../assets/search.png'
// import clear from '../assets/clear.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
import axios from 'axios'

const Weather = () => {

  const [weatherData, setWeatherData] = useState({});
  const [searchData, setSearchData] = useState("");

  const refData = useRef();

  function dataSearch() {
    // cityData = 
    setSearchData(refData.current.value)
  }


  const search = async (searchData) => {
    try {
      const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await axios.get(weather_url);
      const data = await response.data;
      console.log("The fetched data is: ", data);

      setWeatherData({
        humidity_data: data?.main?.humidity,
        temp_data: Math.floor(data?.main?.temp),
        wind_data: data?.wind?.speed,
        location: data?.name,
        icon: `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`
      })

      console.log("humdidity: ", weatherData.humidity_data)


    }
    catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    search(searchData)
  }, [searchData])


  return (
    <div className='absolute flex flex-col text-center bg-gray-600 rounded-3xl w-2/6 h-[33rem] px-3'>
      <h1 className='mt-4 font-bold font-poppins text-lg text-white'>Weather Application</h1>
      <div className=" mt-10 flex justify-center text-center gap-2">
        <input className='bg-white px-3 py-2 w-4/6 h-7 rounded-3xl ' type="text" placeholder='Search' ref={refData} />
        <img className='w-7 h-7 rounded-full bg-white p-1' src={search_icon} alt="" onClick={() => dataSearch()} />
      </div>

      
        {
          searchData === "" ? (<img className='mt-10 w-[135px] border-2 rounded-full h-33 place-self-center object-fit bg-gray-300' src="https://img.icons8.com/clouds/100/apple-weather.png" alt="apple-weather" />) :
            (<img src={weatherData?.icon ?? "Image not found"} className='mt-10 w-[135px] border-4 border-blue-400 rounded-full h-33 place-self-center object-fit object-contain bg-gray-400' alt="" />)

        }     
      
        
        <p className='mt-5 font-bold text-white text-4xl'>{weatherData?.temp_data ?? 0} °C</p>
        <p className='mt-5 font-semi-bold text-white text-2xl'>{weatherData?.location}</p>

      <div className="weather-data flex flex-row justify-center gap-20 mt-10">
        <div className='humidity-data flex flex-row justify-center gap-3'>

          <img src={humidity_icon} className='w-10 h-10 object-cover' alt="" />

          <div>
            <p className='text-center text-white text-sm'>{weatherData?.humidity_data ?? 0} %</p>
            <span className='text-center text-white text-1xl'>Humidity</span>
          </div>
        </div>
        <div className='humidity-data flex flex-row gap-3'>
          <img src={wind_icon} className='w-10 h-10 object-cover' alt="" />
          <div>
            <p className='text-center text-white text-sm'> {weatherData?.wind_data ?? 0} Km/h </p>
            <span className='text-center text-white text-1xl'>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather