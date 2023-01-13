import {useLoaderData, Form} from 'react-router-dom'

function Show(props) {

  const cheese = useLoaderData()

    return (
      <div className="cheese">
          <h1>{cheese.name}</h1>
          <h3><i>Country of Origin:</i> {cheese.countryOfOrigin}</h3>
          <img src={cheese.image} alt={cheese.name} />

          <h3>Update {cheese.name}</h3>
          <Form action={`/update/${cheese._id}`} method="post">
              <input type="input" name="name" placeholder={cheese.name}/>
              <input type="input" name="countryOfOrigin" placeholder={cheese.countryOfOrigin}/>
              <input type="input" name="image" placeholder="cheese image url" />
              <input type="submit" value="Update" />
          </Form>
          <h2>Delete Person</h2>
          <Form action={`/delete/${cheese._id}`} method="post">
              <input type="submit" value={`delete ${cheese.name}`} />
          </Form>
      </div>
    )
  }
  
  export default Show