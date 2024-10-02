import React, { useContext, useEffect, useState } from 'react';
import diaz from  '/src/Components/images/daksh.jpg';
import hunt from  '/src/Components/images/devansh.jpeg';




import Banner from '../Components/Bodycomponents/Banner';
import Footer from '../Components/Bodycomponents/Footer';
import Navbar from '../Components/Navbarcomponents/Navbar';
import { UserContext } from '../Context/Clientcontext';
import Accountbar from '../Components/Navbarcomponents/Accountbar';
import LinearColor from '../Components/Bodycomponents/linearprogress';




export default function Team(){

    const members = [
        {name: "Daksh", role: "Co-Founder", image: diaz},
        {name: "Devansh Dang", role: "Business Owner(CEO)", image: hunt},        
       
               
    ]

    const {user} = useContext(UserContext);
    const [checkUser, setCheckUser] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setCheckUser(true)
        }, 1000);

        return () => {
            clearTimeout(timer);
          };
    },[user])

    return(
        <>
            {!checkUser && <LinearColor/>}
            {checkUser && 
            <div className="">
                {!user ? <Navbar/> : <Accountbar/>}
            <div className="container mx-auto my-24">
                <div className="grid lg:grid-cols-3 gap-6">
                    {members.map((member,index)=>(
                        <div key={index} className="bg-white flex flex-col  shadow-2xl rounded">
                        <div className=" flex justify-center">
                            <img src={member.image} alt="" />
                        </div>
                        <div className="text-center">
                            <h2 className='font-sans font-bold text-xl py-2'>{member.name}</h2>
                        </div>
                        <div className="text-center">
                            <h3 className="text-base font-bold text-[#777] pb-2">{member.role}</h3>
                        </div>  
                        </div>
                    ))}
                </div>
            </div>
            <Banner/>
            <Footer/>
            </div>}
        </>
    )
}