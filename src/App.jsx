import './styles/Landing.module.css';
import song from '/assets/song.mp4';
import bckg from '/assets/bckg.png';
import Main from './components/Main'

function App() {
  return (
    <div
      className='hero min-h-screen bg-base-200'
      style={{ backgroundImage: `url(${bckg})` }}
    >
      <div className='hero-overlay bg-opacity-60' />
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <div className='hero'>
            <div className='hero-content flex-col lg:flex-row-reverse' />

            <div>
              <h1 className='text-5xl font-bold whitespace-nowrap'>
                Happy Birthday Mercy
              </h1>

              <div className='card space-x-4 mb-5 mt-10'>
                <figure className='w-full'>
                  <video
                    src={song}
                    width='250'
                    height='250'
                    autoPlay
                    controls
                    loop
                  />
                </figure>
              </div>

              <p className='py-6'>
                This is a special birthday website dedicated to Mercy. It
                showcases a captivating 3D art gallery with stunning photographs
                highlighting her special moments.
              </p>

              <Main />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
