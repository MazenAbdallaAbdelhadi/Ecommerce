import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CartDrawer } from "./Navbar/CartDrawer"
export const Navbar = () => {
  const user = useSelector(state=>state.user)
  return (
    <nav className="p-4 shadow flex justify-between items-center">
      {/* logo */}
      <div className="uppercase text-lg flex-1"> <Link to='/'><span className="text-green-500">Renoshop</span>bee</Link> </div>
      {/* nav links */}
      <div className="flex gap-5 uppercase flex-1">
        <Link to='/' className="hover:text-green-500">home</Link>
        <Link to='/categories/electronics' className="hover:text-green-500">electronics</Link>
        <Link to='/categories/jewelery' className="hover:text-green-500">jewelery</Link>
        <Link to='/categories/men' className="hover:text-green-500">men</Link>
        <Link to='/categories/women' className="hover:text-green-500">women</Link>
      </div>
      {/* search and chart */} 
      <div className="flex gap-4 items-center justify-end  flex-1">
        <CartDrawer/>
        {!user.user.id ? <Link to='/login' className="px-2 py-1 bg-green-500 text-white">Login </Link>:<span className="text-white bg-green-500 px-2 py-1">Hi, {user.user.name.firstname}</span>  }
      </div>
      
    </nav>
  )
}
