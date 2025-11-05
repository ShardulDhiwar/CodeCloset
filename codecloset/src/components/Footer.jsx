const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white text-center py-4 ">
      <p>
        © {new Date().getFullYear()} Code Closet by{" "}
        <span className="font-semibold text-white">Shardul Dhiwar</span>
      </p>
    </footer>
  );
};

export default Footer;
