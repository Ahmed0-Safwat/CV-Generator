import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerr">
        <div className="footer-1">
          <h5>Connect with us on social media</h5>
          <br />
        </div>
        <div className="footer-2">
          <h5>JOB SEEKERS</h5>
          <a href="">Create a Resume</a>
          <a href="">Job Search</a>
        </div>
        <div className="footer-3">
          <h5>CAREER RESOURCES</h5>
          <a href="">Blog</a>
          <a href="">Career</a>
          <a href="">Help</a>
        </div>
        <div className="footer-4">
          <h5>OUR COMPANY</h5>
          <a href="">About Us</a>
          <a href="">Templates</a>
        </div>
        <div className="footer-5">
          <h5>SUPPORT</h5>
          <a href="">FAQ</a>
          <a href="">Contact Us</a>
          <a href="">Privacy</a>
          <a href="">Terms of Services</a>
        </div>
      </div>
      <div className="copyright">
        <h5>{`Copyright 2023 - CV Creator Team "ASMZ"`}</h5>
      </div>
    </div>
  );
};

export default Footer;
