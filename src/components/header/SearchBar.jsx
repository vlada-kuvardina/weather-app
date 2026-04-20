import IconBtn from "../../assets/magnifying-glass.svg"

const SearchBar = () => {
    return (
        <div className="flex items-center gap-2">
        
            <input
                type="text"
                placeholder="Enter city..."
                className="
                flex-1
                px-4 py-2
                rounded-full
                bg-white/20
                backdrop-blur-md
                text-white
                placeholder-white/70
                outline-none
                "
            />

            <button
                className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-white/20
                backdrop-blur-md
                hover:bg-white/30
                transition
                "
            >
                <img src={IconBtn} alt="search" className="w-5 h-5" />
            </button>

        </div>
    )
}

export default SearchBar