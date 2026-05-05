const ErrorScreen = (props) => {

    const {error, setCity} = props;

    return (
        <div className="error-screen">
            <h2>Ошибка</h2>
            <p>{error}</p>
            <button onClick={() => setCity("")}>Вернуться назад</button>
        </div>
    )
}

export default ErrorScreen