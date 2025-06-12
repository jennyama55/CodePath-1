import './App.css';
import Card from './components/Card'

const App = () => {

  return (
    <div className="App">
      <h1>Obon Festivals</h1>
      <div className="card-container">
        <h2>June: </h2>
        <div className="month-container">
          <Card name='Venice Japanese Community Center' date="June 21 - 22" link="https://www.vjcc.com/upcoming-events"/>
          <Card name='West Covina Buddhist Temple' date="June 28" link="https://livingdharma.org/index.php/our-temple/upcoming-events/"/>
          <Card name='San Fernando Valley Hongwanji Buddhist Temple' date="June 28 - 29" link="https://www.sfvhbt.org/obon-festival/"/>
        </div>
        <h2>July: </h2>
        <div className="month-container">
           <Card name='Senshin Buddhist Temple' date="July 5" link="https://senshintemple.org/obon/"/>
          <Card name='Oxnard Buddhist Temple' date="July 12" link="https://www.oxnardbuddhisttemple.org/activities/calendar"/>
          <Card name='Pasadena Buddhist Temple' date="July 19" link="https://www.pasadenabuddhisttemple.org/calendar.html"/>
          <Card name='Venice Hongwanji Buddhist Temple' date="July 19 - 20" link="https://vhbt.org/calendar/"/>
          <Card name='Higashi Hongwanji Buddhist Temple' date="July 26 - 27" link="https://hhbt-la.org/?p=216"/>
          <Card name='West Los Angeles Buddhist Temple' date="July 26 - 27" link="https://www.wlabt.org/obon-festival"/>
        </div>
        <h2>August: </h2>
        <div className="month-container">
          <Card name='Gardena Buddhist Temple' date="August 2 - 3" link="https://www.gardenabuddhistchurch.org/upcoming-events"/>
        </div>
      </div>
    </div>
  )
}

export default App