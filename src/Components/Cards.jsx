import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Card from "./Card";
import Filtering from "./Filtering";
/* eslint-disable react/prop-types */
function Cards({ dark }) {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const countriesPerPage = 8;
  const [visibleCount, setVisibleCount] = useState(countriesPerPage);
  const [continent, setContinent] = useState("Filter By Region");
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    async function getCountry() {
      setIsLoading(true);
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
        setIsLoading(false);
        setDisplayedCountries(data.slice(0, visibleCount));
      } catch (error) {
        // Handle any errors here
        console.log("Error");
      }
    }

    getCountry();
  }, [visibleCount]);

  useEffect(() => {
    if (continent !== "all" && continent !== "Filter By Region") {
      const filtered = countries.filter((country) => {
        return country.continents[0].toLowerCase() === continent.toLowerCase();
      });

      setDisplayedCountries(filtered.slice(0, visibleCount));
    } else {
      setDisplayedCountries(countries.slice(0, visibleCount));
    }
  }, [continent, countries, visibleCount]);

  const showMoreCountries = () => {
    setVisibleCount((prevVisibleCount) => prevVisibleCount + countriesPerPage);
  };

  const search = (e) => {
    e.preventDefault();
    setCountryName(e.target.value);
    const searched = countries.filter((country) =>
      country.name.common.toLowerCase().includes(countryName)
    );
    setDisplayedCountries(searched.slice(0, visibleCount));
  };
  if (isLoading) return <Spinner />;

  return (
    <>
      <Filtering
        dark={dark}
        continent={continent}
        setContinent={setContinent}
        search={search}
        countryName={countryName}
        setCountryName={setCountryName}
      />
      <div className="grid md:grid-cols-4 relative sm:grid-cols-2 gap-20 sm:px-20 px-16 rounded-md place-content-center mb-1">
        {displayedCountries.length ? (
          displayedCountries.map((country) => (
            <Card country={country} key={country.name.common} dark={dark} />
          ))
        ) : (
          <p className="absolute m-auto left-[45%] mb-4 text-sky-400 font-semibold text-lg">
            No Countries Found 😢{" "}
          </p>
        )}
      </div>

      <button
        className="bg-blue-700 text-white text-base font-semibold mb-2 shadow-sm p-2 px-4 rounded-md mx-auto"
        onClick={() => showMoreCountries()}
      >
        Show More
      </button>
    </>
  );
}

export default Cards;

// // Card.js
// import React from "react";
// import { useHistory } from "react-router-dom";

// function Card({ country }) {
//   const history = useHistory();

//   const handleClick = () => {
//     history.push(`/country/${country.cca2}`);
//   };

//   return (
//     <div className="card" onClick={handleClick}>
//       <h3>{country.name.common}</h3>
//       {/* Other details */}
//     </div>
//   );
// }

// export default Card;

// CountryDetails.js
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function CountryDetails() {
//   const { countryCode } = useParams();
//   const [country, setCountry] = useState(null);

//   useEffect(() => {
//     async function fetchCountryDetails() {
//       try {
//         const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
//         const data = await res.json();
//         setCountry(data);
//       } catch (error) {
//         // Handle any errors here
//         console.log("Error fetching country details");
//       }
//     }

//     fetchCountryDetails();
//   }, [countryCode]);

//   if (!country) {
//     return <div>Loading country details...</div>;
//   }

//   return (
//     <div>
//       <h2>{country.name.common}</h2>
//       {/* Display other details of the selected country */}
//     </div>
//   );
// }

// export default CountryDetails;
