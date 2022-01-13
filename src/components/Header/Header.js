import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div>
      <header onClick={()=>window.scroll(0,0)}  className="App-header">Philm-Time 🍿</header>
    </div>
  );
};

export default Header;
