import React from 'react';

import { Link } from 'react-router';

  const MainPage = () => {
    return (
      <div>
        <Link to={`/createquiz`}><button>Create Quiz</button></Link>
      </div>
    );
  };


export default MainPage;
