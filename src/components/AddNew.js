import { Form } from "react-router-dom";



function AddNew() {

    return ( <>
        <h2>Add a new type of cheese!</h2>
        <Form action="/create" method="post">
            <input type="input" name="name" placeholder="Cheese Name" />
            <input type="input" name="image" placeholder="Image Adress" />
            <input type="input" name="countryOfOrigin" placeholder="Country of Origin" />
            <input type="submit" value="Add" />
        </Form>
    </>)
}

export default AddNew