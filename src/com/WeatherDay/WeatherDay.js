import weather from '../DB/weather.json';

export default function WeatherDay(props) {
  const d = props.d;
  const witem = weather.response.body.items.item[0];
  //item배열의 가져올값이 있는곳 경로
  const items = [];
  const keys = [`rnSt${d}Am`, `rnSt${d}Pm`, `wf${d}Am`, `wf${d}Pm`];
  // console.log(keys);
  for(let k of keys) {
    items.push(witem[k]);
  }

  

  return (
    <>
      <ul className='ul1'>
        <li className='li1'>{d}일 후 오전 강수량 {items[0]}%</li>
        <li className='li1'>{d}일 후 오후 강수량 {items[1]}%</li>
        <li className='li1'>{d}일 후 오전 날씨 예보  {items[2]}</li>
        <li className='li1'>{d}일 후 오후 날씨 예보  {items[3]}</li>
      </ul>
    </>
  );

}