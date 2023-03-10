import { Link, useLoaderData } from "react-router-dom"
import AddNew from "../components/AddNew"


function Index(props) {

    const cheeses = useLoaderData()


    return(<>
        <div className="addForm">
            <AddNew />
        </div>
         
        <div className="container">
             {cheeses.map(cheese => (
            <div key={cheese._id} className='cheese'>
            <Link to={`/${cheese._id}`} >
                <h3>{cheese.name}</h3>
            </Link>
    
            <img src={cheese.image} alt={cheese.name} style={{width: "300px"}}/>
         
           </div>
        ))}
     </div>

    </>

)
}
  
  export default Index