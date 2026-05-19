const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-amber-400 z-50">
            <div className="relative">
                <h2 className="animate-spin text-4xl font-bold text-pink-500 tracking-wider">
                Loading...
                </h2>
                
                <div className="absolute inset-0 animate-ping opacity-20 rounded-full bg-pink-300 blur-xl"></div>
            </div>
        </div>
    )
}

export default LoadingScreen