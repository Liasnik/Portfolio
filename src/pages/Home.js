import Header from './../components/header/Header'

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h3 className="title-3">
                {' '}
                React, NextJS, HTML, CSS, SCSS, JavaScript, TypeScript
              </h3>
            </li>
            <li className="content-list__item">
              <h3 className="title-3">
                {' '}
                ReduxToolkit, RTK-Query, MaterialUI, Git, GitHub
              </h3>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
