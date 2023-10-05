
function EventItem({ name, date, image}) {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{date}</h2>
        <img src={image} alt={name} />
        
    </div>

    )
}

export default EventItem