import { Link, useLoaderData } from "react-router-dom"
import AddNew from "../components/AddNew"


function Index(props) {

    const cheeses = useLoaderData()

// import a form component in the return codeblock, instead of defining it here
    return(
        
        
    <div>

            <AddNew />


             {cheeses.map(cheese => (
            <div key={cheese._id} className='cheese'>
            <Link to={`/${cheese._id}`} >
                <h3>{cheese.name}</h3>
            </Link>
            <h4><i>Country of Origin:</i> {cheese.countryOfOrigin}</h4>
            <img src={cheese.image} alt={cheese.name} style={{width: "300px"}}/>
         
           </div>
        ))}
    </div>
        
)
}
  
  export default Index