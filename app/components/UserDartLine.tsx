import { Link } from 'remix';
import { User } from '~/types';
import { UserButton } from './UserButton';

type Props = {
  user: User;
}
export const UserDartLine = ({ user }: Props) => {
  const userWalls = user.walls || [];
  const userAperos = user.aperos || [];

  const orderedWalls = userWalls.sort((a, b) =>  a.createdAt > b.createdAt ? 1 : -1);
  const lastWallTouched = orderedWalls[orderedWalls.length - 1];
  const lastWallTouchedDate = lastWallTouched ? new Date(lastWallTouched.createdAt.toString()).toLocaleDateString() : null;

  const currentWallCounter = Math.max(userWalls.length - 10 * userAperos.length, 0)

  return (
    <tr>
      <td>
        <div>
          <Link to={user.id!}>{ user.name }</Link>
          { lastWallTouchedDate && 
            <p className="small-text"><i>Dernier mur le {lastWallTouchedDate}</i></p>
          }
        </div>
      </td>
      
      <td><p className='ml-1 circle'>{ currentWallCounter }</p></td>

      <td><UserButton className="d-inline ml-2" user={user} action="add" ></UserButton></td>
      
      <td>{ currentWallCounter > 0 &&<UserButton className="d-inline ml-2" user={user} action="remove" ></UserButton> }</td>

      {/* <p className='d-inline ml-1'> Apéros déjà payés </p>
      <p className='d-inline ml-1'>{ user.aperos ? user.aperos.length : 0 }</p> */}
      <td>{ currentWallCounter >= 10 && <UserButton className="d-inline ml-2" user={user} action="apero" ></UserButton> }</td>
    </tr>
  )
}