import React from 'react';
import {Link} from 'react-router-dom';


const Login = () => {
    return (
        <div>
                  <form>
            <input type="text" placeholder="email" />
            <input type="text" placeholder='password' />
            <Link to="/welcome"><button>
            Submit
            </button>
            </Link>
        </form>
        </div>
      );
}
 
export default Login;