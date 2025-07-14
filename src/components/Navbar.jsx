import React from "react";
import { FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

import { MdPerson } from "react-icons/md";

function Navbar() {
  const location = useLocation();
  const currentPath = window.location.pathname;
  const { id } = useParams();
  return (
    <div>
      {console.log(currentPath)}
      <nav
        className="nav-bar"
        style={{ display: "flex", alignItems: "center",gap:"20vw" }}>
        <h1>TravelMedia.in</h1>
        <div style={{ display:"flex",backgroundColor: "white",padding:"7px",width:"25vw",justifyContent:"space-evenly",borderRadius:"20px" }}>
          <FaHome
            style={{
              color:
                currentPath === "/home"
                  ? "orangered"
                  : "rgba(255, 214, 193, 1)",
              fontSize: "20px",
              cursor: "pointer",
            }}
          />
          <Link to="/">
            <FaBell
              style={{ fontSize: "20px", color: "rgba(255, 214, 193, 1)" }}
            />
          </Link>
          <BsBookmarkFill
            style={{
              color: currentPath.includes("/item/")
                ? "orangered"
                : "rgba(255, 214, 193, 1)",
              fontSize: "20px",
            }}
          />
          <MdPerson style={{ fontSize: "20px", color: "rgba(255, 214, 193, 1)"}} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
