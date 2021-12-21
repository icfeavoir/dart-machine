import { Link, Links, LiveReload, Outlet } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Dart Machine</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        <Links />
      </head>
      <body>

        <div className="meny text-center border p-3 bg-dark">
          <Link className="ml-5 mr-5 text-light" to="/">Home</Link>
          <Link className="ml-5 mr-5 text-light" to="/dart">Dart Machine</Link>
          <Link className="ml-5 mr-5 text-light" to="/users">Users</Link>
        </div>
        <Outlet></Outlet>
        {process.env.NODE_ENV === "development" ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  );
}
