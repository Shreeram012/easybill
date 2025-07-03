import logo from "../../public/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 flex justify-between items-center w-full p-5 border-b-0 border-gray-200 bg-main shadow-md z-50 h-20">
      <a href="">
        <img src={logo} alt="Easybill Logo" className="" />
      </a>
      <div className="flex items-center space-x-4 text-lg">
        <a href="/home"><p  className="px-2">Home</p></a>
        <a href="/features"><p  className="px-2">Features</p></a>
        <a href="/about"><p  className="px-2">About Us</p></a>
        <a href="/contact"><p  className="px-2">Contact Us</p></a>
        {/* <a href="">
          <img
            className="w-10 h-10 rounded-full"
            src="https://avatar.iran.liara.run/public"
            alt="Rounded avatar"
          />
        </a> */}
        <a href="/login">
          <button className="px-4 py-2 text-white bg-button rounded-lg hover:brightness-110 transition">
            Login
          </button>
        </a>
      </div>
    </nav>
  );
}
