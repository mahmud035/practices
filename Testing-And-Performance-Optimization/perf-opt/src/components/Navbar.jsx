const getN = () => {
  let n = 0;

  for (let i = 0; i < 900_000_000; i++) {
    n = n + i;
  }

  return n;
};

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        // marginBottom: '32px',
      }}
    >
      <h3>Brand Name: {getN()}</h3>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          fontWeight: '700',
        }}
      >
        <a style={{ color: 'black', textDecoration: 'none' }} href="#ne">
          One
        </a>
        <a style={{ color: 'black', textDecoration: 'none' }} href="#two">
          Two
        </a>
        <a style={{ color: 'black', textDecoration: 'none' }} href="#three">
          Three
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
