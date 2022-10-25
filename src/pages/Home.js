import { Link, useNavigate } from "react-router-dom";

export default function Home(){
  
  const handleClik = (k) =>{
    const url = {
      '단기예보':'',
      '장기예보':'/p2?item=바나나&item2=과일',
    }
    navigate(url[k]);
  }
  
  const navigate = useNavigate();

  return(
    <>
    <h1>Home</h1>
        <ul>
          <li><Link to='/p1/단기예보'>단기예보</Link></li>
          <li><Link to='/p1/장기예보'>장기예보</Link></li>
        </ul>

        <h2>일기예보</h2>
          <button onClick={()=>handleClik('단기예보')}>단기예보</button>
          <button onClick={()=>handleClik('장기예보')}>장기예보</button>
    </>
  );
}