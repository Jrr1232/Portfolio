import React from 'react';

function Footer() {
  return (
    <footer className="footer" >
      <div className="footercontainer">
        <ul>
          <li><a href="https://www.linkedin.com/in/joaquin-florencio/">< img src="/LI-Logo.png" alt="Linkedin Pic" className="footer-logo" /></a></li>
          <li> <a href="https://www.github.com/jrr1232/">< img src="/github-mark.png" alt="GitHub Pic" className="footer-logo" /></a></li>
          <li> <a href="https://www.tumblr.com/">< img src="/tumblr.png" alt="Tumblr Pic" className="footer-logo" /></a></li>
          <li> <a href="https://www.facebook.com/">< img src="/facebook.png" alt="Facebook Pic" className="footer-logo" /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
