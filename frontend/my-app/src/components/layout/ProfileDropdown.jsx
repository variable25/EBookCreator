import { ChevronDown } from "lucide-react"
import {useNavigate} from 'react-router-dom' 

const ProfileDropdown = ({
  isOpen,
  avatar,
  onToggle,
  companyName,
  email,
  onLogout
}) => {
  const Navigate = useNavigate()
  return (
    <div className="relative">
      <button 
        onClick={onToggle}
        className="flex items-center space-x-3 p-2 rounded-xl hover:bg-amber-100 transition-colors duration-300"  
      >
        {avatar ? 
          (
            <img 
              src={avatar} 
              alt="Avatar" 
              className="h-9 w-9 rounded-xl object-cover" 
            />
          ):(
            <div className="h-8 w-8 bg-linear-to-r from-emerald-400 to-emerald-200">
              <span className="text-emerald-400 font-semibold text-sm">
                {companyName.charAt(0).toUpperCase()}
              </span>
            </div>
          )
        }

        <div className="hidden sm:block text-left">
          <p className="text-sm font-medium text-emerald-600">{companyName}</p>
          <p className="text-xs text-emerald-500">{email}</p>
        </div>
        <ChevronDown className="h-4 w-4 text-emerald-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-amber-100 rounded-xl shadow-lg border border-gray-100 py-2 z-50">
          <div className="">
            <p className="">{companyName}</p>
            <p className="">{email}</p>
          </div>

          <a 
            onClick={()=>Navigate('/profile')}
            className=""  
          >
            View Profile
          </a>
          <div className="">
            <a 
              href="#"
              onClick={onLogout}
            >
              Signout
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileDropdown