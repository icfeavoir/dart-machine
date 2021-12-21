import styleUrl from '~/styles/dart.css';

import { db } from '~/utils/db.server';
import { LinksFunction, LoaderFunction, redirect, useLoaderData } from 'remix';
import type { ActionFunction } from 'remix';

// Components
import { UserDartLine } from '~/components/UserDartLine';
import { addApero, addWallTouched, removeWallTouched } from '~/services/dart.service';

// Types
import type { User } from '~/types';
import React from 'react';

type LoaderData = {
  usersList: Array<User>;
};

// CSS
export let links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styleUrl}]
}

// GET DATA
export const loader: LoaderFunction = async () => {
  const users: User[] = await db.user.findMany({
    include: {
      walls: true,
      aperos: true,
    }
  });

  const data: LoaderData = {
    usersList: users,
  };
  return data;
}


// POST ROUTE
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const userId: string = formData.get('userId')!.toString();
  const action = formData.get('actionType');

  switch (action) {
    case 'add':
      await addWallTouched({ userId });
      break;
    case 'remove':
      await removeWallTouched({ userId });
      break;
    case 'apero':
      await addApero({ userId });
      break;
    default:
      throw new Error('Unknown action type');
  }

  return redirect('/dart');
}

export default function DartIndex() {
  const data = useLoaderData<LoaderData>();

  return (
    <table className='text-left'>
      {data.usersList.map(user => (
        <React.Fragment key={user.id}>
          <UserDartLine user={user}></UserDartLine>
        </React.Fragment>
      ))}
    </table>
  );
}