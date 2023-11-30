
// {
//   import React from 'react';
// import Person from "./Components/Person"; 
// import Aadharcard from "./Components/Aadharcard" 


// const App = () => 
// {

//   return (
//     <>
//     <div className='superman'>
//       <Person name={"laxman"} age={22} gmail={"laxman@gmail.com"}
//       fathername={"ashok joshi"}/><br/>
//       <Person name={"yash"} age={72} gmail={"YAsh@gmail.com"}/><br/>
                
//       <Person /><br/>
//       <Aadharcard />
//     </div>
//     </>
//   );

// };

// export default App }

// .............


// import React from 'react';
// import Counter from "./Components/Counter";


// const App = () => 
// {
  
  //   return (
    //     <>
    //     <Counter />
    
//     </>
//   )

// };

// export default App

// .............


// --------------------------------------------------------

// import React from 'react';
// import Userstateexam from "./Components/Userstateexam";


// const App = () => 
// {
  
//     return (
//         <>
//         <Userstateexam/>
    
//     </>
//   )

// };

// export default App

// -----------------------------------------------------------
import React from 'react';
import Products from './Components/Products'


const App = () => 
{
  const product = [
      {
        id:1,
        title:"Nothing Phone (2) 5G (White, 12GB RAM, 512GB Storage)",
        description:"【RAM, ROM & Expandable Storage】:- 12 GB RAM | 512 GB ROM(Inbuilt Memory) | Not Expandable | Dual SIM (Nano-SIM, dual stand-by) | RAM Type : LPDDR5 | Storage Type : UFS 3.1 | OTG Support || SIM1: Nano, SIM2: Nano | Network : 5G Connectivity on Both SIM Slots | Dual VoLTE(4G) | Wi-Fi 6; BT 5.3; NFC | Type C OTG Supportable | Type C Fast Charging Tecnology Support | Type C Earphone Support.",
        price:49997,
        imgUrl:"https://m.media-amazon.com/images/I/71YoqE7ZJrL._SX679_.jpg",
        Catagory:"Mobiles",
      },
      {
        id:2,
        title:"Fire-Boltt Ninja Call Pro Plus 1.83",
        description:"【1.83 HD Display Smart Watch】- The 46.48mm (1.83-inch) HD display makes the display clear and true-to-life with vivid colours ensuring smooth readability and keeping the watch as exquisite to look at as when you first lay your eyes on it The watch has a 280 NITS Peak Brightness",
        price:1499,
        imgUrl:"https://m.media-amazon.com/images/I/61AHiYyu3ZL._SX679_.jpg",
        Catagory:"Watches",
      },
      {
        id: 3,
        title: "TechMaster Tablet Pro 10 (Silver, 8GB RAM, 256GB Storage)",
        description: "&#8203;``【oaicite:3】``&#8203;:- 8 GB RAM | 256 GB ROM (Expandable up to 1TB) | Triple SIM (Nano-SIM, Micro-SIM, eSIM) | RAM Type: DDR4X | Storage Type: SSD | Quad VoLTE(4G) | Wi-Fi 6; Bluetooth 5.2; GPS | USB-C OTG Support | Fast Charging Technology | 3.5mm Headphone Jack.",
        price: 699.99,
        imgUrl: "https://m.media-amazon.com/images/I/41i007TB3IL._SX300_SY300_QL70_FMwebp_.jpg",
        category: "Tablets"
      },
      {
        id: 3,
        title: "FusionX Soundbar 2.1 Channel (Black)",
        description: "&#8203;``【oaicite:2】``&#8203;:- 120W Output | Wireless Subwoofer | Bluetooth 5.0 | HDMI ARC | Optical Input | USB Playback | Dolby Atmos Support | Wall Mountable | Remote Control Included.",
        price: 249.95,
        imgUrl: "https://m.media-amazon.com/images/I/61L3I2glcjL._SL1500_.jpg",
        category: "Electronics"
      },
      {
        id: 4,
        title: "MaxFit Smart Fitness Tracker Watch (Blue)",
        description: "&#8203;``【oaicite:1】``&#8203;:- Heart Rate & Blood Oxygen Monitor | Sleep Tracker | Step Counter | IP67 Waterproof | 1.4\" OLED Display | Bluetooth 5.1 | Call & Message Notifications | Multi-Sport Modes | Long Battery Life.",
        price: 79.99,
        imgUrl: "https://example.com/maxfitwatch.jpg",
        category: "Wearable Technology"
      },
     
  ]
  
    return (
    <>
    <div>
        <Products product={product} />
    </div>
    </>
  )

};

export default App;