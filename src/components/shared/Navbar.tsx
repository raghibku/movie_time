import Link from "next/link"
import { ThemeSwap } from "../ui/ThemeSwap"

const navlinks = [
  {
    title: "Home",
    nav_link: "/",
  },
  {
    title: "Favorites",
    nav_link: "/favorites",
  }
]

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {
                navlinks.map((item, index) => {
                  return (
                    <li key={index}><Link href={item.nav_link}>{item.title}</Link></li>
                  )
                })
              }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Movie Time</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              navlinks.map((item, index) => {
                return (
                  <li key={index}><Link href={item.nav_link}>{item.title}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeSwap/>
        </div>
      </div>
    </div>
  )
}

export default Navbar