import React,{useState} from 'react'
import {AiOutlineRight} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Home from './Home'
const Landing = () => {
    const [email, setEmail] = useState('')
    const {user} = UserAuth()
    
    if(user){
        return <Home/>
    }else{
  return (
    <div>
        <div className='text-white'>
        <img 
        className='w-full h-screen object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
        alt="netflix background" 
        />
        <div className='absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-black/80'></div>
        <div className='absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/80'></div>
        <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center'>
        <h1 className='text-3xl md:text-5xl w-[90%] md:w-[40%] text-center font-bold'>Unlimited movies, TV shows, and more.</h1>
        <h2 className='text-2xl text-center my-4'>Watch anywhere. Cancel anytime.</h2>
        <p className='text-2xl text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='flex items-center justify-center mt-3 w-full flex-col md:flex-row'>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='px-3 py-4 w-[80%] md:w-[40%] text-black' 
            type="email" 
            placeholder='Email address' 
            />
            <Link to='/signup'>
            <button className='bg-red-700 px-2 py-3 md:px-3 md:py-4 rounded flex justify-center items-center text-1xl md:text-2xl font-medium mt-3 md:mt-0'>Get Started <AiOutlineRight/></button>
            </Link>
        </div>
        </div>
        </div>
        <div className='grid md:grid-cols-2 text-white w-full border-t-4 border-gray-600'>
           <div className='flex flex-col justify-center items-center mt-3 md:mt-0'>
            <h1 className='text-2xl md:text-4xl font-bold text-center md:text-left'>Enjoy on your TV.</h1>
            <p className='text-xl md:text-2xl w-[80%] md:w-[70%] mt-3 text-center md:text-left'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div> 
            <div>
                <img 
                className='object-cover'
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" 
                alt="" 
                />
            </div>
        </div>
        <div className='grid md:grid-cols-2 text-white w-full border-t-4 border-gray-600'>
            <div>
                <img 
                className='object-cover'
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
                alt="" 
                />
            </div>
           <div className='flex flex-col justify-center items-center mt-3 md:mt-0'>
            <h1 className='text-2xl md:text-4xl font-bold text-center md:text-left'>Download your shows to watch offline.</h1>
            <p className='text-xl md:text-2xl w-[80%] md:w-[70%] mt-3 text-center md:text-left'>Save your favorites easily and always have something to watch.</p>
            </div> 
        </div>
        <div className='grid md:grid-cols-2 text-white w-full border-t-4 border-gray-600'>
           <div className='flex flex-col justify-center items-center my-16'>
            <h1 className='text-2xl md:text-4xl font-bold text-center md:text-left'>Watch everywhere.</h1>
            <p className='text-xl md:text-2xl w-[80%] md:w-[70%] mt-3 text-center md:text-left'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div> 
            <div>
                
            </div>
        </div>
        <div className='grid md:grid-cols-2 text-white w-full border-t-4 border-gray-600'>
            <div>
                <img 
                className='object-cover'
                src="https://occ-0-2435-6126.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" 
                alt="" 
                />
            </div>
           <div className='flex flex-col justify-center items-center mt-3 md:mt-0'>
            <h1 className='text-2xl md:text-4xl font-bold text-center md:text-left'>Create profiles for kids.</h1>
            <p className='text-xl md:text-2xl w-[80%] md:w-[70%] mt-3 text-center md:text-left'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div> 
        </div>
        <div className='grid md:grid-cols-2 text-white w-full border-t-4 border-gray-600'>
           <div className='flex flex-col justify-center items-center mt-3 md:mt-0'>
            <h1 className='text-2xl md:text-4xl font-bold text-center md:text-left'>Have an Android Phone? Get our new free plan!.</h1>
            <p className='text-xl md:text-2xl w-[80%] md:w-[70%] mt-3 text-center md:text-left'>Watch a selection of new movies and TV shows without adding any payment details!</p>
            <button className='my-3 flex  items-center'>Get the app <AiOutlineRight/></button>
            </div> 
            <div>
                <img 
                className='object-cover'
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/en.jpg" 
                alt="" 
                />
            </div>
        </div>
    </div>
  )
}
}

export default Landing