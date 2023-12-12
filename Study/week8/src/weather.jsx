import { useEffect, useState } from "react";


export default function Weather() {
    const mykey = "7d30aeead897238c24c8dd4f72337978";
    const [cityname, setCityname] = useState("");
    const [loading, setLoading] = useState(false);

    //const Weatherapi = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={mykey}`;
    const GetLocation = async() => {
        const cityApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${mykey}`
        console.log(cityApi)
    }
    useEffect(() => {
        GetLocation();
    }, [cityname]);

    return (
        <div>
            <input type="text" placeholder="도시를 입력하세요" value={cityname} onChange={e => {setCityname(e.target.value)
            }}></input>
        </div>
    );
}