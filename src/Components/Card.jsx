import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Card({ country, dark }) {
  const navigate = useNavigate();
  return (
    <div
      className={
        dark
          ? "h-auto w-auto pb-12 bg-[#2b3945] text-white space-y-4 shadow-sm flex flex-col rounded-md"
          : "h-auto w-auto pb-12 bg-white space-y-4 shadow-sm flex flex-col rounded-md"
      }
    >
      <img
        src={country.flags.png}
        className="w-full rounded-t-md h-44 cursor-pointer"
        onClick={() => navigate(`/${country.cca3}`)}
      />

      <div className={dark ? "dark px-6 space-y-1" : "px-6 space-y-1"}>
        <h2 className="font-bold text-xl mb-4">{country.name.common}</h2>
        <p>
          <strong className="text-black">Population: </strong>
          {country.population.toLocaleString()}
        </p>
        <p>
          <strong className="text-black">Region: </strong>
          {country.region}
        </p>
        <p>
          <strong className="text-black">Capital: </strong>
          {country.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
