import { SearchIcon } from "@heroicons/react/solid";

function Search() {
  return (
    <div className="flex items-center justify-between border-2 border-neutral-300 p-2.5 rounded-lg my-5 md:my-0">
      <input
        type="text"
        className="w-full text-sm border-none outline-0 bg-inherit"
        placeholder="جستجو رمزارز"
      />
      <SearchIcon className="w-5 h-5 text-[#999999] mr-1.5" />
    </div>
  );
}

export default Search;
