// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'
// import { useAppContext } from '../context/AppContext';

// const Navbar = () => {

    
//     const {navigate, token} = useAppContext()

//   return (
//     <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
//       <img onClick={()=>navigate('/')} src={assets.logoapp} alt="logo" className='w-32 sm:w-44 cursor-pointer' />
//       <button onClick={()=>navigate('/admin')}  className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>
//         {token ? 'Dashboard' : 'Login'}
//         <img src={assets.arrow} className='w-3' alt="arrow" />
//       </button>
//     </div>
//   )
// }

// export default Navbar
import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext';



const Navbar = () => {
  const { navigate, token } = useAppContext()

  return (
    // Full-width background, fixed on top, no rounded corners
    <div className="w-full bg-blue-900 text-white fixed top-0 left-0 z-50 shadow-md">
      {/* Inner content constrained and centered */}
      <div className="flex justify-between items-center py-5 px-4 sm:px-8 xl:px-20 max-w-[1400px] mx-auto">
        <img
          onClick={() => navigate('/')}
          src={assets.files}
          alt="logo"
          className="w-32 sm:w-44 cursor-pointer "
        />

        <button
          onClick={() => navigate('/admin')}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-8 py-2.5"
        >
          {token ? 'Dashboard' : 'Login'}
          <img src={assets.arrow} className="w-3" alt="arrow" />
        </button>
      </div>
    </div>
  )
}

export default Navbar

