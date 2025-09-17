import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Rooms', path: '/rooms/' },
        { name: 'Experience', path: '' },
        { name: 'About', path: '' },
    ];



    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {openSignIn} = useClerk()
    const {user}=useUser()
    const navigate= useNavigate()
    const location= useLocation()

    const BookIcon=()=>(
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)


    useEffect(() => {
        if(location.pathname !== '/'){
            setIsScrolled(true);
            return;

        }
        else{
            setIsScrolled(false)
        }
        setIsScrolled(prev => location.pathname !=="/ " ? true : prev);

        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        
       
            <nav className={`fixed top-0 left-0 bg-neutral-700/75 text-black  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-black/80  text-white  py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <img src={"https://www.svgrepo.com/show/394205/hotel.svg"} alt="logo"
                     className={`h-12 ml-2 ${isScrolled && "invert opacity-80"}`} />
                     <h3  className={`font-semibold text-xl ml-0 cursor-pointer `}>BOOKING</h3>
                </a>

                {/* Desktop Nav */}
               <div className="hidden md:flex items-center gap-4 lg:gap-15">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-white" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-white" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                  
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                      <img src={"https://www.svgrepo.com/show/532551/search-alt-1.svg"} alt="search" className={`${isScrolled && 'invert'} h-7 transition-all duration-500 `} />

                      {user ?
                        (<UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Bookings" labelIcon={<BookIcon/>} onClick={()=> navigate('/My Bookings')}/>
                            </UserButton.MenuItems>
                                </UserButton>)
                        :
                    
                        ( <button onClick={openSignIn} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-black bg-white" : "bg-black text-white"}`}>
                        Login
                    </button>)}
                   
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    {user && <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Bookings" labelIcon={<BookIcon/>} onClick={()=> navigate('/My Bookings')}/>
                            </UserButton.MenuItems>
                                </UserButton> }
                  <img onClick={()=>setIsMenuOpen(!isMenuOpen)} src={"https://www.svgrepo.com/show/532203/menu-alt-1.svg"} alt="" className={`${isScrolled && 'invert'} h-4`} />
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-white transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <img src={"https://www.svgrepo.com/show/324716/wrong-delete-remove-trash-minus-cancel-close-2.svg"} alt="" className ="h-6.5" />
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                    {user &&<UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Bookings" labelIcon={<BookIcon/>} onClick={()=> navigate('/My Bookings')}/>
                            </UserButton.MenuItems>
                                </UserButton> }

                    {!user && <button  onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>}
                </div>
            </nav>
        
    );
}

export default Navbar