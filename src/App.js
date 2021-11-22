
import React from 'react';
import cough from "./images/cough.png"
import doctor from "./images/doctor.png"
import handwash from "./images/handwash.png"
import medicalmask from "./images/medical-mask.png"
import nocrowd from "./images/no-crowd.png"
import shakinghand from "./images/shaking-hands.png"
import vaccine from "./images/vaccine.png"
import windowopen from "./images/windowopen.png"
import socialdistancing from "./images/social-distancing.png"
import './App.css';
import PrecautionCard from './PrecautionCard';
function App() {
  let data =[
    {text:"Cover your mouth and nose with a bent elbow or tissue when you cough or sneeze. Dispose of used tissues immediately and clean hands regularly." , image:cough },
    {text:"Clean your hands frequently with alcohol-based hand rub or soap and water." , image:handwash },
    {text:"Avoid using shake hands." , image: shakinghand},
    {text:"Wear a properly fitted mask when physical distancing is not possible and in poorly ventilated settings." , image: medicalmask},
    {text:"Avoid the 3Cs: spaces that are closed, crowded or involve close contact." , image: nocrowd },
    {text:"Keep physical distance of at least 1 metre from others, even if they don’t appear to be sick" , image: socialdistancing},
    {text:"Open a window to increase the amount of natural ventilation when indoors.",image:windowopen},
    {text:"Get vaccinated as soon as it’s your turn and follow local guidance on vaccination. " , image:  vaccine},
    {text:"If you develop symptoms ,contact your doctor, self-isolate until you recover." , image:  doctor}

  ]
  return (
    <div className="container">
      {
        data.map((each,i)=>{
          console.log(i)
          return(
            <PrecautionCard key={i} num={i} each={each}/>
          )
        })
      }
      
    </div>
  );
}

export default App;