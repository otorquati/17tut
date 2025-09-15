const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer">
      <p className="Footer-text">Copyright &copy; {today.getFullYear()} - Thor4Web</p>
    </footer>
  );
};

export default Footer;