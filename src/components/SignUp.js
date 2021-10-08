import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
        <form>
            <input type="text" placeholder='UserName'/>
            <input type="text" placeholder="email" />
            <input type="text" placeholder='password' />
            <Link to="/"><button>
            Submit
            </button>
            </Link>
        </form>
        </div>
      );
}
 
export default SignUp;