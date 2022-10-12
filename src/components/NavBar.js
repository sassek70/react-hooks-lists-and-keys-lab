import React from "react";

function NavBar() {
  const links = ["#home", "#about", "#projects"];

  const displayLinks = links.map((link) => {
    return <a key={link} href={link}>{link}</a>
  })

  return (
  <nav>
    {displayLinks}
  </nav>
  );
}

export default NavBar;
