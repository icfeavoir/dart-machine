import { Link, Outlet } from 'remix';

export default function Dart() {
  return (
    <div className='text-center col-4 offset-4'>
      <h3 className='m-3'>Dart Machine</h3>
      <Outlet />
    </div>
  )
}