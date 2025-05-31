import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logo, Container, LogoutBtn } from "../index";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "All blogs",
      slug: "/all-posts",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "|",
      slug: undefined,
      active: true,
    },
    {
      name: "My blogs",
      slug: "/my-blogs",
      active: authStatus,
    },
    {
      name: "My profile",
      slug: "/my-profile",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ];

  return (
    <header id="H0" className="py-3 bg-gray-500 shadow">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="48px" />
            </Link>
          </div>
          <ul className="flex ml-auto items-center gap-1">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  {item.slug ? (
                    <NavLink
                      to={item.slug}
                      className={({ isActive }) =>
                        `inline-block px-4 py-1 duration-200 rounded-full ${
                          isActive ? "text-white font-semibold" : "hover:bg-blue-100"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
