import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Sidebar = () => {
  const [extened, setExtened] = useState(false);
  const {onSent,prevPromts,setRecentPromt,newChat} = useContext(Context)

  const loadPromt = async (prompt) =>{
    setRecentPromt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtened(prev=>!prev)} src={assets.menu_icon} alt="" className="menu" />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extened ? <p>New Chat</p> : null}
        </div>
        {extened ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPromts.map((item,index)=>{
              return (
                <div onClick={()=>loadPromt(item)} className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0,18)}...</p>
            </div>
              )
            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extened ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extened ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extened ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
