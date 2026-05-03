const UnitToggle = ({ unit, setUnit }) => {
  return (
    <div
      onClick={() => setUnit(unit === "C" ? "F" : "C")}
      className="
        relative
        w-20 h-10
        bg-white/20
        backdrop-blur-md
        rounded-full
        flex items-center
        cursor-pointer
        p-1
      "
    >
      {/* Ползунок */}
      <div
        className={`
          absolute
          top-1
          left-1
          w-8 h-8
          glass-panel
          rounded-full
          transition-all
          duration-300
          ${unit === "F" ? "translate-x-10" : ""}
        `}
      />

      {/* Текст */}
      <div className="w-full flex justify-between px-2 text-m text-pink-500 z-10">
        <span>°C</span>
        <span>°F</span>
      </div>
    </div>
  );
};

export default UnitToggle;