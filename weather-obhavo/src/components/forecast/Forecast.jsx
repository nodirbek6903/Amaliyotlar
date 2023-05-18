// import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
// import Loader from '../Loader/Loader';
// import "./Forecast.css"


// const WEEK_DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

// const Forecast = ({ data }) => {
//     console.log(data);
// // console.log(data.list);
//     const dayInAWeek = new Date().getDay();
//    const forecastDays =  WEEK_DAYS.slice(dayInAWeek,WEEK_DAYS.length).concat(
//     WEEK_DAYS.slice(0,dayInAWeek))

//     if(data.list.length === 0){
//         return <Loader />
//     }

//   return (
//     <>
//         <label className='title'>Daily</label>
//         <Accordion allowZeroExpanded >
//             {data.list.splice(0, 7).map((item,idx) => (
//                 <AccordionItem key={idx}>
//                     <AccordionItemHeading>
//                         <AccordionItemButton>
//                             <div className='daily-item'>
//                                 <img className='icon-small' src={`icons/${item.weather[0].icon}.png`} alt="weather" />
//                                 <label className='day'>{forecastDays[idx]}</label>
//                                 <label className='description'>{item.weather[0].description}</label>
//                                 <label className='min-max'>{Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}°C</label>
//                             </div>
//                         </AccordionItemButton>
//                     </AccordionItemHeading>
//                     <AccordionItemPanel></AccordionItemPanel>
//                 </AccordionItem>
//             ))}
//         </Accordion>
//     </>
//   )
// }

// export default Forecast


// 222222


import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import Loader from '../Loader/Loader';
import "./Forecast.css"


const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// const Forecast = ({ data }) => {
//     console.log(data);
//     // console.log(data.list);
//     const dayInAWeek = new Date().getDay();
//     const forecastDays = WEEK_DAYS.slice(dayInAWeek).concat(WEEK_DAYS.slice(0, dayInAWeek))

//     if (!data || !data.list || data.list.length === 0) {
//         return <Loader />
//     }

//     return (
//         <>
//             <label className='title'>Daily</label>
//             <Accordion allowZeroExpanded >
//                 {data.list.splice(0, 7).map((item, idx) => {
//                     if (idx >= WEEK_DAYS.length) idx = idx % WEEK_DAYS.length;
//                     return (
//                         <AccordionItem key={idx}>
//                             <AccordionItemHeading>
//                                 <AccordionItemButton>
//                                     <div className='daily-item'>
//                                         <img className='icon-small' src={`icons/${item.weather[0].icon}.png`} alt="weather" />
//                                         <label className='day'>{forecastDays[idx]}</label>
//                                         <label className='description'>{item.weather[0].description}</label>
//                                         <label className='min-max'>{Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}°C</label>
//                                     </div>
//                                 </AccordionItemButton>
//                             </AccordionItemHeading>
//                             <AccordionItemPanel></AccordionItemPanel>
//                         </AccordionItem>
//                     )
//                 })}
//             </Accordion>
//         </>
//     )
// }

// export default Forecast


//333333333

const Forecast = ({ data }) => {
    console.log(data);
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))
  
    if (!data || !data.list || data.list.length === 0) {
      return <Loader />;
    }
  
    return (
      <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
          {data.list.slice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      className="icon-small"
                      src={`icons/${item.weather[0].icon}.png`}
                      alt="weather"
                    />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">{item.weather[0].description}</label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </>
    );
  };
  
  export default Forecast