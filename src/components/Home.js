import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

    // const handleClick = () => {
    //     console.log('Hello from Home.js')
    // }

    // const handleClickAgain = (e) => {
    //     console.log('hello ', e)
    // }

    return (
        <div className="home">
          <div>
            <h1>
              Login Here.
              <br />
            </h1>
            <Link to="/login"><button>
            Login
            </button>
            </Link>
          </div>
          <div>
            <h1>
              Sign Up Here.
              <br />
            </h1>
            <Link to="/SignUp"><button>
            Submit
            </button>
            </Link>
          </div>
        
        </div>
    )
}

export default Home;

