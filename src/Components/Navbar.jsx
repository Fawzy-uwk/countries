/* eslint-disable react/prop-types */
function Navbar({ dark, setDark }) {
  return (
    <nav className={!dark?"bg-white py-5 px-2 sm:px-20 shadow-md w-full flex items-center justify justify-between":"bg-[#2b3945] py-5 px-2 sm:px-20 shadow-md w-full flex items-center justify justify-between"}>
      <h2 className={dark?"text-xl font-bold text-white":"text-xl font-bold"}>Where in the World?</h2>

      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setDark((dark) => !dark)}
      >
        {dark ? (
          <i className="fa-solid fa-sun text-xl text-white"></i>
        ) : (
          <i className="fa-solid fa-moon text-xl"></i>
        )}
        <p className={dark?"font-semibold text-white":"font-semibold text-black"}>{dark?"Light Mode":"Dark Mode"}</p>
      </div>
    </nav>
  );
}

export default Navbar;
