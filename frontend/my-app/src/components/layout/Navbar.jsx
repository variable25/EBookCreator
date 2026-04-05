import {useState, useEffect} from 'react'
import {useAuth} from '../../context/AuthContext'
import ProfileDropdown from './ProfileDropdown'
import {Menu, X, BookOpen, LogOut} from 'lucide-react'

const Navbar = () => {
  const {user, logout, isAuthenticated} = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)

  const navLinks = [
    {
      name: 'Features',
      href: '#features'
    },
    {
      name: 'Testimonials',
      href: '#testimonials'
    }
  ]

  useEffect(() => {
    const handleClickOutside = () => {
      if(profileDropdownOpen) {
        setProfileDropdownOpen(false)
      }
    }

    document.addEventListener('click',handleClickOutside)
    return () => document.removeEventListener('click',handleClickOutside)
  },[profileDropdownOpen])

  return (
    <header>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/*Logo*/}
          <a href="/" className='flex items-center space-x-2.5 group'>
            <div className='w-9 h-9 bg-linear-to-br from-green-300 to-emerald-500 rounded-xl flex items-center justify-center shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300 group-hover:scale-105'>
              <BookOpen className='w-5 h-5 text-blue-200' />
            </div>
            <span className='text-xl font-semibold text-emerald-500 tracking-tight'>
              AI Ebook Creator
            </span>
          </a>
          {/*Desktop Navigation*/}
          <nav className='hidden lg:flex items-center space-x-1'>
            {navLinks.map((link)=>(
              <a 
                key={link.name}
                href={link.href}
                className='px-4 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-500 rounded-lg hover:bg-cyan-200/10 transition-all duration-200'
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/*Auth Buttons and Profile*/}
          <div className='hidden lg:flex items-center space-x-3'>
            {!isAuthenticated ? (
              <ProfileDropdown
                isOpen={profileDropdownOpen}
                onToggle={(e)=>{
                  e.stopPropogation()
                  setProfileDropdownOpen(!profileDropdownOpen)
                }}
                avatar = {user?.avatar || ''}
                companyName = {user?.name || ''}
                email = {user?.email || ''}
                role = {user?.role || ''}
                onLogout = {() => console.log('Logout')}
              />
            ): (
              <>
                <a 
                  href="/login"
                  className='px-4 py-2 text-sm font-medium text-emerald-700 hover:text-teal-400 rounded-lg hover:bg-cyan-200 transition-all duration-200'
                >
                  Login
                </a>
                <a 
                  href="/signup"
                  className='px-5 py-2 font-medium text-sm text-emerald-700 bg-linear-to-r from-cyan-100 to-cyan-300 rounded-lg hover:from-emerald-400 hover:to-emerald-200 shadow-lg shadow-green-200/20 hover:shadow-emerald-300/20 transition-all duration-200 hover:scale-105'
                >
                  Get Started
                </a>
              </>
            
            )}
          </div>

          {/*Mobile Menu Button*/}
          <button
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            className='lg:hidden p-2 rounded-lg  text-emerald-700 hover:text-emerald-400 hover:bg-cyan-200 transition-all duration-200'  
          >
            {isOpen ? <X className='h-5 w-5'/> : <Menu className=''/>}
          </button>
        </div>
      </div>
      {/*Mobile Menu */}
      {
        isOpen && (
          <div className='lg:hidden bg-cyan-100 border-t border-emerald-200 animate-mobile-menu'>
            <nav className='px-4 py-4 space-y-1'>
              {navLinks.map((link)=>(
                <a 
                  key={link.name}
                  href={link.href}
                  className='block px-4 py-2.5 rounded-lg text-sm font-medium text-emerald-700 hover:text-emerald-400 hover:bg-cyan-500/10  transition-all duration-200'
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className='px-4 py-4 border-t border-green-600'>
              {isAuthenticated ? (
                <div className=' space-y-3'>
                  <div className='flex items-center space-x-3 px-2'>
                    <div className='w-8 h-8 bg-linear-to-br from-cyan-200 to-emerald-100 rounded-xl flex items-center justify-center'>
                      <span className='text-emerald-700 font-semibold text-sm'>
                        {user?.name?.charAt(0)?.toUpperCase()}
                      </span>
                    </div>
                    <div className='text-sm font-medium text-emerald-700'>
                      {user?.name}
                    </div>
                    <div className='text-xs text-emerald-300'>{user?.email}</div>
                  </div>
                  <button 
                    className='w-full px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-300 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2'  
                    onClick={()=>logout()}
                  >
                    <LogOut className='w-4 h-4'/>
                    <span>Sign out</span>
                  </button>
                </div>

              ):(
                <div className='space-y-2'>
                  <a 
                    href="/login"
                    className='block text-center px-4 py-2.5 text-sm font-medium text-emerald-700 hover:text-emerald-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200'
                  >
                    Login
                  </a>
                  <a 
                    href="/signup"
                    className='block text-center px-4 py-2.5 text-sm font-medium text-emerald-600 bg-linear-to-r from-green-400 to-emerald-100 rounded-lg shadow-lg shadow-emerald-100 transition-all duration-200 '
                  >
                    Get Started
                  </a>
                </div>
                
              )}
            </div>
          </div>
        )
      }
    </header>
  )
}

export default Navbar
