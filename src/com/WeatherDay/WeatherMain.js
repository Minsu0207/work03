import WeatherDay from "./WeatherDay";
import { useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import './Main.css';

const WeatherMain=()=> {
  const pm =  useParams().item2;
  let [day, setDay] = useState(3);

  const handleClick = (d) => {
    setDay(d);
    // console.log(d);
  }
  const navigate = useNavigate();
  const handle = (k) => {
    navigate(k);
  } 

  return (
    <>
      <h1>날씨예보-장기</h1>
      <button onClick={()=>handle('/')}>홈으로</button>
      <form>
        <button className="w-btn" onClick={(e) => {e.preventDefault(); handleClick(3);}}>3일 후 날씨</button>
        <button className="w-btn" onClick={(e) => {e.preventDefault(); handleClick(4);}}>4일 후 날씨</button>
        <button className="w-btn" onClick={(e) => {e.preventDefault(); handleClick(5);}}>5일 후 날씨</button>
        <button className="w-btn" onClick={(e) => {e.preventDefault(); handleClick(6);}}>6일 후 날씨</button>
      </form>
      <WeatherDay d={day}/>
    </>
  );

}

export default WeatherMain;