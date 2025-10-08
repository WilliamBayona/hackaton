export default function NavBar() {
  return (
    <nav
      className="rounded-md px-4 py-3"
      style={{
        backgroundColor: "#2c333a", 
        color: "#e5eef5",
        border: "1px solid #3b4752",
      }}
    >
      <div className="flex items-center gap-6">
       
        <div className="text-2xl font-extrabold tracking-wide shrink-0">Navbar</div>

        <ul className="hidden sm:flex items-center gap-6 text-xl/none font-medium opacity-90 shrink-0">
          <li className="hover:opacity-100 transition-opacity">Home</li>
          <li className="hover:opacity-100 transition-opacity">Features</li>
          <li className="hover:opacity-100 transition-opacity">Pricing</li>
          <li className="hover:opacity-100 transition-opacity">About</li>
        </ul>

        <div className="ml-auto flex items-center gap-3 flex-1 max-w-full">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 min-w-0 w-full rounded-md px-4 py-2 text-black"
            style={{
              backgroundColor: "#f1f5f9",
              border: "1px solid #8aa1b5",
            }}
          />
          <button
            className="rounded-md px-4 py-2 text-lg font-semibold shrink-0"
            style={{
              backgroundColor: "#2c333a",
              border: "2px solid #1aa3b0",
              color: "#1aa3b0",
            }}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
