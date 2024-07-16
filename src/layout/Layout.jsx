import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      Hello there..
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;