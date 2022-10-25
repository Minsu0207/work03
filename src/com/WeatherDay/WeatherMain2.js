import weather2 from '../DB/weather2.json';
import item from '../DB/item.json';
import './Main.css';
import { Link,useNavigate } from 'react-router-dom';

const WeatherMain2=()=> {
const navigator=useNavigate();
const handeleClick = (k) => {
  navigator(k);
}
const w2 = weather2.response.body.items.item;
const PTY = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };
const SKY = { "1": "맑음", "3": "구름많음", "4": "흐림" };
console.log(w2)

// const lis = Object.entries(w2).map((m)=>(
  // m[1].category === 'PTY' ? 
  // (<li key ={m[1].category}>
  //   {item[m[1].category][0]}
  //   {m[1].obsrValue}
  //   {PTY[m[1].obsrValue]}
  // </li>) 
  // : (m[1].category === "SKY" ? 
  // (<li key ={m[1].category}>
  //   {item[m[1].category][0]}
  //   {m[1].obsrValue}
  //   {SKY[m[1].obsrValue]}
  // </li>) 
  // :(<li key={m[1].category}>
  //   {item[m[1].category][0]}
  //   {m[1].obsrValue}
  //   {item[m[1].category][1]}
  // </li>))));


//   (m[1].category === 'PTY' ?
//   (<li key={m[1].category}>
//           {item[m[1].category][0]} 
//           {m[1].obsrValue}  
//           {item[m[1].category][1]}
//   </li>)
  
// : (m[1].category === 'SKY' ?
// <li key={m[1].category}>
//     {item[m[1].category][0]} 
//     {SKY[1].obsrValue}  
// </li>

// : <li key={m[1].category}>
//     {item[m[1].category][0]} 
//     {m[1].obsrValue}  
//     {item[m[1].category][1]}

// </li>

// ))));

//새로운 배열 생성 : for  <map>함수가 하는일
// let lis = [];
// for (let m of w2){
//   lis.push(m);
// }

//map은 순회, 콜백함수를 가진다. 위랑 같은함수
//let lis = w2.map((m)=>"가져올값 콜백영역");  

let lis = w2.map((m)=>
  (m.category === 'PTY')
  ? <li key={m.category}>{item[m.category][0]} {PTY[m.obsrValue]}</li>
  :(m.category==='SKY')
  ? <li key={m.category}>{item[m.category][0]} {SKY[m.obsrValue]}</li>
  : <li key={m.category}>{item[m.category][0]} {m.obsrValue}{item[m.category][1]}</li>
  
  ); 


  console.log('lis',lis)
  // let lis = [];
  // for(let w of w2){
  //   console.log(w);
  //   if (w.category==-'PTY'){

  //   }
  //   else if(w.category==='SKY'){

  //   }
  //   else{
  //     lis.push (<li key={w.category}>{w.obsrValue}</li>)
  //   }
  // }

  return (
    <>
    <h1>날씨예보-단기</h1>
    <button onClick={()=>handeleClick('/')}>홈으로</button>
    <ul>
      <div className='li2'>
      {lis}
      </div>
    </ul>
    </>
  );

}

export default WeatherMain2;