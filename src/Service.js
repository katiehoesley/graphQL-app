
import "./styles.css";


function Service( { name, description, buttonText }) {
    return (
      <div className="service">
          Service: { name } 
          <br/><br/>
          Description: { description }
          <br/><br/>
          <button id="button">
            { buttonText }
        </button>
      </div>
    );
  }
  
  export default Service;