/* eslint-disable react/prop-types */
function Filtering({ continent, setContinent,countryName,search,dark }) {
  return (
    <div className="sm:px-20 px-6 py-4 flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4">
      <div className={dark?"sm:w-96 w-full shadow-md rounded-md bg-[#2b3945] p-1 px-4 gap-2 flex items-center":"sm:w-96 w-full shadow-md rounded-md bg-white p-1 px-4 gap-2 flex items-center"}>
        <i className="fa-solid fa-magnifying-glass text-stone-300"></i>
        <input
          value={countryName}
          onChange={search}
          type="text"
          className={dark?"p-2  w-full font-semibold text-white text-lg border-none rounded-sm focus:outline-none  bg-transparent":"p-2 w-full font-semibold text-lg text-black border-none rounded-sm focus:outline-none bg-transparent"}
          placeholder="Search for a country..."
        />
      </div>

      <select
        onChange={(e) => setContinent(e.target.value)}
        value={continent}
        className={dark?" py-3.5 px-6 shadow-md rounded-md border-none focus:outline-none bg-[#2b3945] text-white":" py-3.5 px-6 shadow-md rounded-md border-none focus:outline-none bg-white"}
      >
        <option
          value="Filter by a Region"
          hidden
          
        >
          Filter by a Region
        </option>

        <option value="all" >
          All
        </option>

        <option value="africa" >
          Africa
        </option>

        <option value="north america" >
          North America
        </option>

        <option value="south america" >
          South America
        </option>

        <option value="asia" >
          Asia
        </option>

        <option value="europe" >
          Europe
        </option>

        <option value="oceania" >
          Oceania
        </option>
      </select>
    </div>
  );
}

export default Filtering;
