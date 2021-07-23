import CONFIG from "../config";

const Footer = () => (
  <footer>
    <p>
      <a href={CONFIG.SOURCE_CODE_URL}>source code</a>
    </p>
    <style jsx>{`
      footer {
        padding: 2.5rem 1rem 1rem;
      }
      a {
        color: #555;
      }
    `}</style>
  </footer>
);

export default Footer;
