import { useNavigate } from "react-router-dom";

export default function Home(){
  const handleClick = (k) =>{
    const url = {
      '단기예보':'/p2',
      '장기예보':'/p1',
    }
    console.log(k);
    navigate(url[k]);
  }
  
  const navigate = useNavigate();

  return(
    <>
    <h1>날씨예보</h1>
    <button className="Mbtn" onClick={()=>handleClick('단기예보')}>단기예보</button>
    <button className="Mbtn" onClick={()=>handleClick('장기예보')}>장기예보</button>
    </>
  );
}