import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

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
            Sign Up
            </button>
            </Link>
          </div>
        
        </div>
    )
}

export default Home;

