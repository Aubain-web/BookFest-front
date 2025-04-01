import Header from "../components/header.jsx";
import EventDisplayer from "../components/eventDisplayer";



export default function Acceuil(){
  return(
      <div>
        <Header/>
        <h1>Nos différents évènements</h1>
          <EventDisplayer/>
      </div>
  )
}