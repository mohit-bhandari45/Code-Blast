const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6 border-t">
      <p>&copy; 2024 CodeDuel - All rights reserved.</p>
      <div className="mt-4">
        <a href="/privacy" className="text-gray-400 hover:text-white px-2">
          Privacy Policy
        </a>
        <a href="/terms" className="text-gray-400 hover:text-white px-2">
          Terms & Conditions
        </a>
        <a href="/contact" className="text-gray-400 hover:text-white px-2">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
