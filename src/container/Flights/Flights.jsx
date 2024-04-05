import { useState } from "react";
import { Link } from "react-router-dom";

import { Desktop, Mobile } from "../../components/common/Responsive";
import { AirplantTilt, Holiday, Hotels, TravelInsurance, Visa } from "../../assets/SvgIcons";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { TRIP_OPTIONS } from "./constant";

import './Fights.scss'



const Flights = () => {
  //const [serviceLogo, setServiceLogo] = useState(SERVICES_LOGO);
  const [tripTabs, setTripTabs] = useState(TRIP_OPTIONS);

  const handleChangeTripTans = (index) => {
    setTripTabs(prev => prev.map((elem, ind) => index === ind ? { ...elem, isActive: !elem?.isActive } : { ...elem, isActive: false }))
  }

  return (
    <>
      <Desktop>
        
          
          <div className="flex justify-between text-sm ml-4 mb-1" >
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                className="gap-3"
              >
                {
                  tripTabs.map(({ title, isActive }, index) => (
                    <FormControlLabel
                      className="cursor-pointer"
                      key={index}
                      value={title}
                      checked={isActive}
                      control={<Radio style={{ color: '#ce5d43' }} size="" />}
                      label={<span className={ isActive ? 'font-extrabold text-sm' : 'font-normal text-sm' }>{title}</span>}
                      onChange={() => handleChangeTripTans(index)}
                    />
                  ))
                }
              </RadioGroup>
            </FormControl>
            <div>
              Book International and Domestic Flights
            </div>
          </div>
          
          <div className="grid book-flight-section rounded-lg cursor-pointer" >
            <div className="box flex flex-col px-5 pt-2.5 pb-3.5" >
              <div className="pb-2" >From</div>
              <div className="text-3xl font-bold text-black" >Delhi</div>
              <div className="text-sm" >DEL, Delhi Airport India</div>
            </div>
            <div className="box flex flex-col px-5 pt-2.5 pb-3.5" >
              <div className="pb-2" >To</div>
              <div className="text-3xl font-bold text-black" >Bengaluru</div>
              <div className="text-sm text-ellipsis" >BLR, Bengaluru International Airport</div>
            </div>
            <div className="box flex flex-col px-5 pt-2.5 pb-3.5" >
              <div className="pb-2" >Departure</div>
              <div className="flex gap-2 font-bold text-black" >
                <div className="text-3xl" >23</div>
                <div className="flex items-end gap-1 text-xl font-normal" > 
                  <div>Feb</div>
                  <div>24</div>
                </div>
              </div>
              <div className="text-sm" >Friday</div>
            </div>
            <div className="box flex flex-col px-5 pt-2.5 pb-3.5" >
              <div className="pb-2" >Departure</div>
              <div className="flex gap-2 font-bold text-black" >
                <div className="text-3xl" >24</div>
                <div className="flex items-end gap-1 text-xl font-normal" > 
                  <div>Feb</div>
                  <div>24</div>
                </div>
              </div>
              <div className="text-sm" >Friday</div>
            </div>
            <div className="box flex flex-col px-5 pt-2.5 pb-3.5" >
              <div className="pb-2" >Travellers & Class</div>
              <div className="font-bold text-black" >
                <span className="text-3xl" >1</span>
                <span>Traveller</span>
              </div>
              <div className="text-sm" >Economy/Premium Economy</div>
            </div>
          </div>

          <div className="search-btn-container flex justify-center absolute mb-4" >
            <div className="text py-2.5 font-bold text-xl rounded-full text-white flex justify-center cursor-pointer" >
              SEARCH
            </div>
          </div>

        
        <div>
          <div></div>
          <div>.</div>
          <div></div>
        </div>
      </Desktop>
      <Mobile>
        Mobile
      </Mobile>
    </>
  )
}

export default Flights;