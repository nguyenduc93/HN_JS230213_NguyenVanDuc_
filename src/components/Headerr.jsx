import React, { useState } from "react";

function Header(props) {
  const { toSpend } = props;

  return (
    <div className="headerr">
      <div className="navbar-content">
        <div className="money"> To Spend: ${toSpend} </div>
        <div>You have money!</div>
      </div>
    </div>
  );
}

export default Header;
