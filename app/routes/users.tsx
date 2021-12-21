import { Outlet } from 'remix';

export default function Users() {
  return (
    <div className='text-center col-4 offset-4'>
      <h3 className='m-3'>Users</h3>
      <Outlet />
    </div>
  )
}