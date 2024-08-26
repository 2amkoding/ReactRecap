import React from 'react'

const Home = () => {
  
  const handleClick = () => {
    console.log('this is a click event');
  }

  const invokeFunction = (name) =>{
    console.log(name + ', invoke by using an annonymous function');
  }

    return (
    <div className='home'>
        <button onClick={handleClick}>click events</button>
        <button onClick={() => invokeFunction('coder')}>invokeFuncButton</button>
    </div>
  )
}

export default Home