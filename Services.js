import Service from './Service.js'

function Services(props) {
    return (
      <div className="services">
        { props.services.map(service => <Service name={service.name} description={service.description} buttonText={service.buttonText}/>)}
      </div>
    );
  }
  
  export default Services;