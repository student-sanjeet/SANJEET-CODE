import React, { useState, useEffect } from 'react';
import { AirplantTilt, Holiday, Hotels, TravelInsurance, Visa } from "../../../assets/SvgIcons";
import { Link } from "react-router-dom";

const SERVICES_LOGO = [
    { name: 'Flights', linkUrl:"/", icon: (color) =>  <AirplantTilt color={color} /> },
    { name: 'Hotels', linkUrl:'/hotels', icon: (color) => <Hotels { ...{color} } /> },
    { name: 'Holiday Packages', linkUrl:'', icon: (color) => <Holiday { ...{color} } /> },
    { name: 'Travel Insurance', linkUrl:'/travelinsurance', icon: (color) => <TravelInsurance { ...{color} } /> },
    { name: 'Visa', linkUrl:'', icon:(color) => <Visa { ...{color} } /> }
  ]

const Tabs = ()=>{
    const [activeTab, setActiveTab] = useState('Flights');

    useEffect(()=>{
        const {pathname} = window.location;
        if(pathname.includes("/") || pathname.includes("/flight")){
            setActiveTab('Flights')
        }
        if(pathname.includes("/hotels") ){
            setActiveTab('Hotels')
        }
        if(pathname.includes("/holiday") ){
            setActiveTab('Holiday Packages')
        }
    },[])

    return(
        <div className="flex gap-10 bg-white rounded-lg px-8 py-3 absolute left-1/2 logo-container shadow-lg" >
            {
                SERVICES_LOGO.map(({ name, icon, linkUrl }, index) => (
                <Link to={linkUrl} onClick={()=>setActiveTab(name)} key={index}>
                <div className={`flex flex-col items-center w-1/5 gap-3 cursor-pointer ${activeTab === name ? 'active-logo' : ''}`} >
                  <div className="w-10 h-8" >
                    {icon(activeTab === name ? '#ce5d43' : '#000000')}
                  </div>
                  <div className="text-center text-sm"  >{name}</div>
                </div>
                </Link>
              ))
            }
          </div>
    )
}

export default Tabs;