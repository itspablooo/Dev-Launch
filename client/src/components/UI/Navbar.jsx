export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
