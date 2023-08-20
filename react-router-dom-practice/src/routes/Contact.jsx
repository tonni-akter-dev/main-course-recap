import { Form, useLoaderData } from "react-router-dom";
import "./index.css";

export default function userDetails() {
  const userDetails = useLoaderData();
  console.log(userDetails);
  return (
    <div id="userDetails">
      <div>
        <img key={userDetails.avatar} src="https://placekitten.com/g/200/200" />
      </div>
      <div>
        <h1>{userDetails.name ? <>{userDetails.name}</> : <i>No Name</i>}</h1>
        <h2>{userDetails.email}</h2>

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export async function loader({ params }) {
  const contact = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.contactId}`
  );
  return { contact };
}
function Favorite({ userDetails }) {
  // yes, this is a `let` for later
  let favorite = userDetails.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
