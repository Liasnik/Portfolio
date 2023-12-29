const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Kyiv, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / Viber</h2>
            <p>
              <a href="tel:+380509426247">+38 (050) 942-62-47</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:alexanderliasnik@gmail.com">
                AlexanderLiasnik@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
