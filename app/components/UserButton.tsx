import { Form } from 'remix';
import type { User } from '~/types';

type Props = {
  user: User;
  action: string;
  className: string;
}

export const UserButton = ({ user, action, className }: Props) =>  {
  const classMap = new Map([
    ['add', 'btn-warning'],
    ['remove', 'btn-primary'],
    ['apero', 'btn-success'],
  ]);

  const textMap = new Map([
    ['add', '+'],
    ['remove', '-'],
    ['apero', 'Apéro 🎉'],
  ]);

  return (
    <Form className="d-inline" method="post">
      <input type="hidden" name="userId" value={user.id} />
      <input type="hidden" name="actionType" value={action} />
      <button type="submit" className={`btn ${classMap.get(action)} ${className}`}>{textMap.get(action)}</button>
    </Form>
  )
}