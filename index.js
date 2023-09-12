function Header() {
  return (
  <header>
        <nav className="nav">
          <img className="nav-logo" src="./react-logo-png.png" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
  )
};

function MainContent() {
  return (
    <div>
    <h1 className="main">Reasons why i'm learning React</h1>
          <ol>
            <li>To become a front-end developer</li>
            <li>To become successful</li>
            <li>To learn a high paying skill for my future</li>
          </ol>
    </div>
  )
};

function Footer() {
  return (
    <footer className="footer">@ 2021 TonyCodes, All rights reserved.</footer>
  )
};

function Testing() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
};

ReactDOM.render(<Testing/>, document.getElementById("root"))