// import React, { useEffect, useState } from "react";


// function APIRequest({ city }) {
//     const API_KEY = '8be71cd1c58713b215c738287dde46b9'

//     const [weather, setWeather] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)
//     useEffect(async () => {
//         setLoading(true)
//         try {
//             const response = await fetcht(
//                 `https://api.openweathermap.org/data/4.0/onecall/timeline/1min?lat=51.5&lon=-0.1&appid=${API_KEY}`
//             )
//             const data = await response.json()
            
//             console.log(data)

//             setWeather(data)
//         } catch (error) {
//             setError(error.message)
//         }
//     }, [])
// }


// export default APIRequest