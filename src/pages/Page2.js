import {useLocation} from "react-router-dom";
import qs from "query-string" ;

export default function Page2(){
  const loc = useLocation().search ;

  const q = qs.parse(loc);

  // let loc2 = loc.replace('?','').split('&')

  return(
    <>
    <h1>Page2</h1>
    { q.item && <h2>{q.item+'('+q.item2 +')'}</h2>}
    </>
  );
}