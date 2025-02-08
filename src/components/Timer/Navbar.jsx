import React from 'react'
import { AiOutlineCloseCircle as Cross} from 'react-icons/ai';
import { MdDragIndicator as Drag} from "react-icons/md";
const Navbar = () => {
  return (
    <div className='bg-[#D9D9D9] px-[4vw] py-[3vh] rounded-b-3xl shadow-2xl flex flex-row items-center justify-between'>
        <div className='font-[AbrilFatface] text-xl hover:underline'>
            TO-DO LIST
        </div>
        <div className='flex flex-row gap-4 items-center'>
            <div>
                <Drag size={30}/>
            </div>
            
            <div>
                <Cross size={20}/>
            </div>
        </div>

      
    </div>
  )
}

export default Navbar
