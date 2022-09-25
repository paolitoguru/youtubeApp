import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to=""></Link>
      <div class="ui attached stackable menu">
        <div class="ui container">
          <a class="item">
            <i class="home icon"></i> Home
          </a>
          <a class="item">
            <i class="grid layout icon"></i> Browse
          </a>
          <a class="item">
            <i class="mail icon"></i> Messages
          </a>
          <div class="ui simple dropdown item">
            More
            <i class="dropdown icon"></i>
            <div class="menu">
              <a class="item">
                <i class="edit icon"></i> Edit Profile
              </a>
              <a class="item">
                <i class="globe icon"></i> Choose Language
              </a>
              <a class="item">
                <i class="settings icon"></i> Account Settings
              </a>
            </div>
          </div>
          <div class="right item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..." />
              <i class="inverted circular search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
