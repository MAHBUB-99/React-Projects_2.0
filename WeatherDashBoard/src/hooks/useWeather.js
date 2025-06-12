import { useState,useEffect } from 'react';

const useWeather =() =>{
    const [weather,setWeather] = useState({
        location:"",
        climate:"",
        temperature:"",
        maxTemp:"",
        minTemp:"",
        humidity:"",
        cloudPercentage:"",
        wind:"",
        time:"",
        longitude:"",
        latitude:""
    });
    const [loading,setLoading] = useState({
        state:false,
        message:""
    });
    const [error,setError] = useState(null);
    const fetchWeatherData = async (latitude,longitude) =>{
        try {
            setLoading({
                ...loading,
                state:true,
                message:"Featching weather data"
            });

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
            if(!response.ok)
            {
                const errorMessage = `Fetching weather data failed: ${response.status}`;
                console.log(errorMessage)
                throw new Error(errorMessage);
            }
            const data = await response.json();
            // console.log(data);
            const updatedData = {
                ...weather,
                location:data?.name,
                climate:data?.weather[0]?.main,
                temperature:data?.main?.temp,
                maxTemp:data?.main?.temp_max,
                minTemp:data?.main?.temp_min,
                humidity:data?.main?.humidity,
                cloudPercentage:data?.clouds.all,
                wind:data?.wind?.speed,
                time:data?.dt,
                longitude:longitude,
                latitude:latitude
            }
            setWeather(updatedData);
        } catch (error) {
            setError(error);
        }
        finally{
            setLoading({
                ...loading,
                state:false,
                message:""
            })
        };
    }

    useEffect(()=>{
        setLoading({
            ...loading,
            state:true,
            message:"Finding Location..."
        })
        navigator.geolocation.getCurrentPosition(function(position){
            fetchWeatherData(position.coords.latitude,position.coords.longitude)
        });
    },[]);

    return{
        weather,
        error,
        loading
    }
}

export default useWeather;