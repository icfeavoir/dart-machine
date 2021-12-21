import { Link, LinksFunction } from "remix"
import styleUrl from '../styles/index.css';

export let links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styleUrl}]
}

export default function IndexRoute() {
  return (
    <div>
      <h1>Hello World!!!</h1>
      <Link to="/dart">Dart Machine</Link>
    </div>
  )
}