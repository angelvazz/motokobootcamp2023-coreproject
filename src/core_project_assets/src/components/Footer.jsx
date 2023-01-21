import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>MOTOKO BOOTCAMP ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
