import React from "react";
import img1 from '../Images/TestLogo.svg'
import not1 from '../Images/not1.svg'
import not2 from '../Images/not2.svg'
import not3 from '../Images/not3.svg'
import not4 from '../Images/not4.svg'
import not5 from '../Images/not5.svg'
import notMain from '../Images/ps/srr.png'
import setting from '../Images/NotiSet.svg'
import dot from '../Images/NotiDot.svg'

import '../components/Styles/Notification.css'
const Notification = () => {
  return <div>
    <div id="NotifyBar" className="flex justify-between px-4 items-center bg-[#ffffff]">
        <img src={img1} alt="logo" />
        <div className="flex gap-4 items-center">
            <div id="notifytitle1"><div className="flex gap-3 "><img src={not1} alt="img"></img>Overview</div></div>
            <div id="notifytitle1"><div className="flex gap-3 bg-[#01F0D0] rounded-full px-2 py-1"><img src={not2} alt="img"></img>Patients</div></div>
            <div id="notifytitle1"><div className="flex gap-3"><img src={not3} alt="img"></img>Schedule</div></div>
            <div id="notifytitle1"><div className="flex gap-3"><img src={not4} alt="img"></img>Messages</div></div>
            <div id="notifytitle1"><div className="flex gap-3"><img src={not5} alt="img"></img>Transactions </div></div>
        </div>
        <div>
            <div className="flex gap-2 items-center">
                <div className="grid grid-rows-4 gap-x-2 grid-flow-col">
                    <div className="row-span-4 col-span-1 h-12 w-12 flex justify-center items-center" ><img src={notMain} alt="img"></img></div>
                    <div className="row-span-2  col-span-2 text-base font-bold">Dr. Jose Simmons</div>
                    <div className="row-span-2 col-span-2 text-sm text-[#707070]">General Practitioner</div>

                </div>
                <div className="flex gap-4 items-center">
                    <div className="text-[#707070] ">|</div>
                    <div> <img src={setting} alt="img"></img></div>
                    <div> <img src={dot} alt="img"></img></div>
                </div>
            </div>
        </div>
    </div>
  </div>;
};

export default Notification;
