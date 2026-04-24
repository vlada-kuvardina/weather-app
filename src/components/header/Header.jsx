import SearchBar from "./SearchBar"

const Header = (props) => {

    const { city, setCity } = props

    return (
        <div className="flex justify-between items-start p-4">

            {/* ЛЕВАЯ ЧАСТЬ */}
            <div className="flex flex-col gap-2">
                <SearchBar setCity={setCity}/>
                <h2 className="text-2xl font-semibold">{city}</h2>
            </div>

            {/* ПРАВАЯ ЧАСТЬ */}
            <div>
                °C / °F
            </div>

        </div>
    )
}

export default Header