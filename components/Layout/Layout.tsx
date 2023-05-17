import { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar'
import Line from '../Figures/Line'
import { motion } from 'framer-motion'

const Layout = ({ children }: any) => {
  useEffect(() => {
    const options = {
      damping: 0.07,
    }
    // Scrollbar.init(document.querySelector('#main'), options)
  }, [])

  return (
    <div className='bg-[#18001d]'>
      <div
        className={`hidden w-[100px] h-[100vh] bg-[#18001d] border-r-[1px] border-r-[#310050] overflow-hidden fixed left-0 top-0 z-10  justify-center items-center md:flex `}
      >
        <Line className='absolute h-screen' />
        <div className='w-[30px] h-[100px] border-[1px] border-[#310050] flex flex-col items-center justify-center gap-[30px]'></div>
      </div>
      <div
        className={`hidden w-[100px] h-[100vh] bg-[#18001d] border-l-[1px] border-l-[#310050] overflow-hidden fixed right-0 top-0 z-10  justify-center items-center md:flex `}
      >
        <Line className='absolute h-screen scale-x-[-1]' />
        <div className='w-[30px] h-[100px]  border-[1px] border-[#310050] flex flex-col items-center justify-center gap-[30px]'></div>
      </div>
      <div
        className={`hidden w-screen h-[100px] bg-[#18001d] border-b-[1px] border-b-[#310050] overflow-hidden fixed right-0 top-0 z-[5]  justify-center items-center md:flex `}
      >
        <div className='w-[100px] h-[30px] border-[1px] border-[#310050] flex flex-col items-center justify-center gap-[30px]'></div>
      </div>
      <motion.div
        animate={{ width: ['100%', '0%'], height: ['2px', '100px'] }}
        transition={{ duration: 3, times: [0, 1], delay: 5 }}
        className={`w-screen left-[50%] translate-x-[-50%] h-[2px] bg-[#ff60ff] shadow-[0px_0px_15px_1px_#ff60ff] overflow-hidden fixed top-0 z-[5] flex justify-center items-center md:hidden `}
      ></motion.div>
      <main id='main' className='w-full h-screen'>
        <div className='max-w-[1440px] px-[20px] mx-auto md:w-[calc(100%-200px)]'>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
