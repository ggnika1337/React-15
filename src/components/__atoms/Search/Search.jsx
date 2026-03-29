import React from "react";
import Magnifier from "../../../assets/Images/Search.svg";

function Search({ placeholder, onSubmit, onChange }) {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-6.75 pt-[36px] w-full  pr-[120px] group"
      >
        <img src={Magnifier} className="pb-[10px]" />
        <div className="flex flex-col gap-[15px] w-full">
          <input
            className="outline-none focus:ring-0 border-none w-full"
            type="text"
            placeholder={placeholder}
            onChange={onChange}
          />
          <div className="w-0 h-[1px] bg-[#5A698F] group-focus-within:w-full"></div>
        </div>
      </form>
    </>
  );
}

export default Search;
