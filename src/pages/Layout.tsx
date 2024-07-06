import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vods">Vods</Link>
          </li>
          <li>
            <Link to="/emotes">emotes</Link>
          </li>
          <li>
            <Link to="/clip-compilations">Clip Compilations</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
