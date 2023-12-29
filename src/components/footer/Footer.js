import linkedIn from './../../img/icons/linkedIn.svg'
import gitHub from './../../img/icons/gitHub.svg'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://github.com/Liasnik"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/alexander-liasnik/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 Portfolio by Liasnik. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
