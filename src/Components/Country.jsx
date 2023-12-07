import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Spinner from "./Spinner";

/* eslint-disable react/prop-types */
function Country({ dark, setDark }) {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country details", error);
      }
    }

    fetchCountry();
  }, [cca3]);

  if (!country) {
    return <Spinner />;
  }

  return (
    <div className={dark ? "body dark" : "body"}>
      <Navbar dark={dark} setDark={setDark} />
      <div>
        <button
          className={
            dark
              ? "sm:mx-20 mx-10 px-8 bg-[#2b3945] text-white py-2 shadow-lg mt-8 text-lg rounded-md"
              : "sm:mx-20 mx-10 px-8 bg-white py-2 shadow-lg mt-8 text-lg rounded-md"
          }
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
        <div></div>
      </div>
      {country.length > 0 &&
        country.map((item) => (
          <div
            className="sm:px-20 px-10 flex items-center flex-col md:flex-row gap-16 sm:gap-28 mt-12 sm:mt-16"
            key={item.area}
          >
            <img
              src={item.flags.png}
              className="w-full h-96 rounded-sm shadow-md"
            />
            <div className="w-full">
              <h1
                className={
                  dark
                    ? "text-3xl text-white font-bold mb-6"
                    : "text-2xl font-bold mb-6"
                }
              >
                {item.name.common}
              </h1>
              <div className="grid  sm:grid-cols-2 gap-2 mb-16 w-full ">
                <p>
                  <strong className="text-black">Native Name: </strong>
                  {Object.values(item.name.nativeName)[0].common}
                </p>
                <p>
                  <strong className="text-black">Top Level Domain: </strong>
                  {item.tld}
                </p>

                <p>
                  <strong className="text-black">Population: </strong>
                  {item.population.toLocaleString()}
                </p>

                <p>
                  <strong className="text-black">Currency: </strong>
                  {Object.values(item.currencies)[0].name}
                </p>

                <p className="mb-10">
                  <strong className="text-black">Region: </strong>
                  {item.region}
                </p>

                <p>
                  <strong className="text-black">Languages: </strong>
                  {Object.values(item.languages).join(" , ")}
                </p>

                <p>
                  <strong className="text-black">Sub Region: </strong>
                  {item.subregion}
                </p>

                <p>
                  <strong className="text-black">Capital: </strong>
                  {item.capital}
                </p>
              </div>

              <div className="flex items-center">
                <div className="gap-4 flex w-full sm:items-center mb-3 flex-col sm:flex-row">
                  <strong className="text-black">Border Countries: </strong>
                  <div className="flex gap-2 items-center">
                    {item.borders
                      ? item.borders.map((border, index) => (
                          <p
                            className={
                              dark
                                ? "p-1 text-black shadow-md rounded-md px-6 bg-[#2b3945] items-center"
                                : "p-1 text-black shadow-md rounded-md px-6 bg-white items-center"
                            }
                            key={index}
                          >
                            {border}
                          </p>
                        ))
                      : "no Borders!"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Country;
// <div>
//
//           </div>
//           <div>
//             <h2>{country.name.common}</h2>
//             <div>
//               <p>
//                 <strong>Native Name: </strong>
//                 {country.name}
//               </p>
//               <p>
//                 <strong>Top Level Domain: </strong>
//                 {country.topLevelDomain}
//               </p>

//               <p>
//                 <strong>Population: </strong>
//                 {toLocaleString(country.population)}
//               </p>

//               <p>
//                 <strong>Currency: </strong>
//                 {country.currencies.name}
//               </p>

//               <p>
//                 <strong>Region: </strong>
//                 {country.region}
//               </p>

//               <p>
//                 <strong>Languages: </strong>
//                 {country.languages.name}
//               </p>

//               <p>
//                 <strong>Sub Region: </strong>
//                 {country.subregion}
//               </p>

//               <p>
//                 <strong>Capital: </strong>
//                 {country.capital}
//               </p>
//             </div>

//             <div>
//               <p>Border Countries: </p>{" "}
//               {Object.keys(country.borders).map((item) => (
//                 <button key={item}>{item}</button>
//               ))}
//             </div>
//           </div>
