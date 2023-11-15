import {useState} from "react";
import {useRouter} from "next/navigation";

const SearchBar = () => {
  const [ladingCode, setLadingCode] = useState("");
  const router = useRouter();
  console.log(ladingCode);
  const handleSubmit = () => {
    if (ladingCode.length === 0) router.push("/search");
    else router.push(`/search?ladingCode=${ladingCode}`)
  }
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={ladingCode}
          onChange={(e) => setLadingCode(e.target.value)}
          id="default-search"
          className="w-full p-4 ps-10 text-sm text-gray-900 border-2 border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-0"
          placeholder="Tra cứu mã vận đơn của bạn"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2"
        >
          Tra cứu
        </button>
      </div>
    </form>
  )
}

export default SearchBar;