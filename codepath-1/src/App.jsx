import './App.css';
import Card from './components/Card'

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1>2025 Obon Festivals</h1>
    </div>
      <div className="card-container">
        <h2>June: </h2>
        <div className="month-container">
          <Card name='Venice Japanese Community Center' date="June 21 - 22" link="https://www.vjcc.com/upcoming-events" img="https://i0.wp.com/rafu.com/wp-content/uploads/2020/03/vjcc.jpg?w=672&ssl=1"/>
          <Card name='West Covina Buddhist Temple' date="June 28" link="https://livingdharma.org/index.php/our-temple/upcoming-events/" img="https://www.japanese-city.com/calendar/events/themes/lib/lid/1003.webp"/>
          <Card name='San Fernando Valley Hongwanji Buddhist Temple' date="June 28 - 29" link="https://www.sfvhbt.org/obon-festival/" img="https://s3-media0.fl.yelpcdn.com/bphoto/psTqZYNOKX7UC3BgM01X3A/l.jpg"/>
        </div>
        <h2>July: </h2>
        <div className="month-container">
           <Card name='Senshin Buddhist Temple' date="July 5" link="https://senshintemple.org/obon/" img="https://images.squarespace-cdn.com/content/v1/5e6aae896f9265361ba24f48/1635373015213-N13N00DSDO9IOCFPYHID/IMG_4010.jpg"/>
          <Card name='Oxnard Buddhist Temple' date="July 12" link="https://www.oxnardbuddhisttemple.org/activities/calendar" img="https://images.squarespace-cdn.com/content/v1/60a974545b5c3643c474eda2/1622938559805-A5R2A7EGYV68Z5BTKM3T/IMG_6985.jpeg"/>
          <Card name='Pasadena Buddhist Temple' date="July 19" link="https://www.pasadenabuddhisttemple.org/calendar.html" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucZ6lNHnhFiZ8_nv_XOFZW5MhFj0rvIaubw&s"/>
          <Card name='Venice Hongwanji Buddhist Temple' date="July 19 - 20" link="https://vhbt.org/calendar/" img="https://www.japanese-city.com/calendar/events/themes/lib/lid/439.webp"/>
          <Card name='Higashi Hongwanji Buddhist Temple' date="July 26 - 27" link="https://hhbt-la.org/?p=216" img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/14/15/higashi-honganji-buddhist.jpg?w=900&h=500&s=1"/>
          <Card name='West Los Angeles Buddhist Temple' date="July 26 - 27" link="https://www.wlabt.org/obon-festival" img="https://www.japanese-city.com/calendar/events/themes/lib/lid/452.webp"/>
        </div>
        <h2>August: </h2>
        <div className="month-container">
          <Card name='Gardena Buddhist Temple' date="August 2 - 3" link="https://www.gardenabuddhistchurch.org/upcoming-events" img="https://www.japanese-city.com/calendar/events/themes/lib/lid/12.webp"/>
        </div>
      </div>
    </div>
  )
}

export default App