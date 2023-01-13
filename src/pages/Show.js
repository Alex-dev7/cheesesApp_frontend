import {useLoaderData, Form} from 'react-router-dom'

function Show(props) {

  const cheese = useLoaderData()

    return (
      <div className="container">
            <div className="cheese">
          <h1>{cheese.name}</h1>
          <h3><i>Country of Origin:</i> {cheese.countryOfOrigin}</h3>
          <img src={cheese.image} alt={cheese.name} />

          <h3>Update {cheese.name}</h3>
          <Form action={`/update/${cheese._id}`} method="post">
              <input type="input" name="name" placeholder={cheese.name}/>
              <input type="input" name="countryOfOrigin" placeholder={cheese.countryOfOrigin}/>
              <input type="input" name="image" placeholder="cheese image url" /><br/>
              <input type="submit" value="Update" />
          </Form>
          <h3>Delete {cheese.name}</h3>
          <Form action={`/delete/${cheese._id}`} method="post">
              <input type="submit" value='delete' />
          </Form>
      </div>

      </div>

    )
  }
  
  export default Show