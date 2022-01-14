import Services from '../Services.js'

function App() {
  // const url = "https://api.bigcommerce.com/stores/vm1cxyyu1a/v3/catalog/products"

  // async function logData() {
  //   const response = await fetch(url, {
  //       method: 'GET', 
  //       mode: 'no-cors', 
  //       headers: {
  //         'content-type': 'application/json',
  //         'x-auth-client': 'c90d5a4607974508496f1dcf4b291985',
  //         'x-auth-token': 'hpwrs344uue60tiewq1ki8uynx4qzbl',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //   })
  //   .then(response => response.json())
  //   .then(res => console.log('RESULTS: ', res))
  // }
  // logData()




  const services = [
    { 
      name: "Make an API call to see all products", 
      description: "Use this to make an API call to see all products available in your store!", 
      buttonText: "Make an API Call" 
    },
    // { 
    //   name: "Get a Shipping Estimate", 
    //   description: "Use this to get a shipping estimate for your items.", 
    //   buttonText: "Get Shipping Estimate"
    // }
  ]


  return (
    <div className="App">
      Hello BigCommerce!
      <Services services={services}/>
    </div>
  );
}

export default App;
