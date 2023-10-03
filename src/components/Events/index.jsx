import { useEffect, useState } from "react"
import EventItem from "./components/Eventitem"

function Events() {

  const [events, setEvents] = useState([])
  console.log(events) 

  useEffect(() => {
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=0G3BHot8PXuRI835Pz5gGHrruR4LQ89C")
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      setEvents(res._embedded.events)
    })
  }, [])  



  return (
    <div>
        <h1>Events</h1>
        {events.map((event) => {
          return <EventItem
          key={event.id}
          name={event.name}
          date={event.dates.start.localDate}
          image={event.images[0].url}
          />
        }
        )}
                  
    </div>
    
  )
}

export default Events