import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Alexander</em>
          </strong>
          <br />I am a frontend developer
        </h1>
        <div className="header__text"></div>
        {/* <a href="#!" className="button">
          Download CV
        </a> */}
      </div>
    </header>
  );
};

export default Header;
