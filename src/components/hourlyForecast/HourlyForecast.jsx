const HourlyForecast = () => {
    return (
        <div className="mt-6 px-4 overflow-x-auto">
            <div className="flex gap-4">

                <div className="min-w-[60px] text-center">
                <div>12:00</div>
                <div>☀️</div>
                <div>22°</div>
                </div>

                <div className="min-w-[60px] text-center">
                <div>15:00</div>
                <div>☁️</div>
                <div>21°</div>
                </div>

            </div>
        </div>
    )
}

export default HourlyForecast