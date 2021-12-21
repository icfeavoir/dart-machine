import { ActionFunction, Form, redirect } from "remix"
import { createUser } from "~/services/users.service";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name')?.toString();

  if (name && name.length > 3) {
    await createUser({ name });
  } 

  return redirect('/dart');
}

export default function UserNew() {
  return (
    <div className="mt-5 col-4 offset-4">
      <h3 className="text-center">New user</h3>

      <Form method="post">
        <div className="form-group">
          <label>Nom</label>
          <input type="text" className="form-control" placeholder="Nom" name="name" />
        </div>
        <button type="submit" className="btn btn-primary">Enregistrer</button>
      </Form>
    </div>
  )
}