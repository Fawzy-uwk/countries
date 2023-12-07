
import Cards from "./Cards";
import Navbar from "./Navbar";
/* eslint-disable react/prop-types */
function AppLayout({dark,setDark}) {
  
  return (
    <div className={!dark?"body":"body dark"}>
      <Navbar dark={dark} setDark={setDark} />

      <Cards dark={dark} />
    </div>
  );
}

export default AppLayout;
