import React from 'react'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen'
    style={{backgroundImage:"url('https://photo-cdn2.icons8.com/Oyn6zZOP15VghVi1ERJ-6YNeFACkEWumXrnFSKq8uJg/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi9mMjYxMmE1YjYx/ZTA0YWU3YWYxZGU2/ZjkxMTRjYjgzNy5q/cGc.jpg')"}}
    >

      <Weather />
    </div>
  );
};

export default App