import gif from "../assets/bg_searchScreen.gif"
import SearchBar from "../components/header/SearchBar"

const SearchScreen = (props) => {

  const { setCity, onSearch } = props

    return (
        <div className="h-screen flex items-center justify-center bg-pink-200">

      {/* Карточка с фоном */}
      <div
        className="
          w-[350px] h-[200px] 
          rounded-2xl 
          overflow-hidden 
          relative
          bg-cover bg-center
          flex flex-col justify-between
          p-5
        "
        style={{
          backgroundImage: `url(${gif})`
        }}
      >

        {/* затемнение поверх гифки */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

        {/* контент */}
        <div className="relative z-10 flex flex-col h-full justify-between">

          <h1 className="text-white text-xl font-semibold text-center">
            Узнай погоду
          </h1>

          <SearchBar 
            setCity={setCity}
          />

        </div>
      </div>
    </div>
    )

}

export default SearchScreen