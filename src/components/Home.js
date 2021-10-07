const Home = () => {

    const handleClick = () => {
        console.log('Hello from Home.js')
    }

    const handleClickAgain = (e) => {
        console.log('hello ', e)
    }

    return (
        <div className="home">
                    <div className="links">
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
            </div>
            <div>
                <h1>This is the home page</h1>
            </div>
        </div>
    )
}

export default Home;

