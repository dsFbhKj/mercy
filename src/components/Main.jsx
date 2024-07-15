import * as THREE from 'three';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Preload, Image as ImageImpl } from '@react-three/drei';
import { ScrollControls, Scroll, useScroll } from './ScrollControls';
import '../styles/Main.module.css';

function Image(props) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();
  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(
      group.current.position.z,
      Math.max(0, data.delta * 50),
      4,
      delta
    );
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      Math.max(0, 1 - data.delta * 1000),
      4,
      delta
    );
  });
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  );
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  return (
    <group {...props}>
      <Image
        position={[-width * w, 0, -1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[0]}
      />
      <Image
        position={[0, 0, 0]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[1]}
      />
      <Image
        position={[width * w, 0, 1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[2]}
      />
    </group>
  );
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  return (
    <>
      <Page
        position={[-width * 1, 0, 0]}
        urls={['/assets/img.png', '/assets/img1.png', '/assets/img2.png']}
      />
      <Page
        position={[width * 0, 0, 0]}
        urls={['/assets/img3.png', '/assets/img4.png', '/assets/img5.png']}
      />
      <Page
        position={[width * 1, 0, 0]}
        urls={['/assets/img6.png', '/assets/img7.png', '/assets/img8.png']}
      />
      <Page
        position={[width * 2, 0, 0]}
        urls={['/assets/img.png', '/assets/img1.png', '/assets/img2.png']}
      />
      <Page
        position={[width * 3, 0, 0]}
        urls={['/assets/img3.png', '/assets/img4.png', '/assets/img5.png']}
      />
      <Page
        position={[width * 4, 0, 0]}
        urls={['/assets/img6.png', '/assets/img7.png', '/assets/img8.png']}
      />
    </>
  );
}
const Main = () => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <a
        role='button'
        className='btn btn-primary mt-5 w-full'
        onClick={() => document.getElementById('my_modal_5').showModal()}
      >
        {' '}
        Get Started
      </a>

      <dialog id='my_modal_5' className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>

          {/* the 3d frames here */}
          <h3 className='font-bold text-lg'>Hello!</h3>

          <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
            <Suspense fallback={null}>
              <ScrollControls
                infinite
                horizontal
                damping={4}
                pages={4}
                distance={1}
              >
                <Scroll>
                  <Pages />
                </Scroll>
                <Scroll html>
                  <h1
                    style={{ position: 'absolute', top: '20vh', left: '-75vw' }}
                  >
                    happy
                  </h1>
                  <h1
                    style={{ position: 'absolute', top: '20vh', left: '25vw' }}
                  >
                    birth
                  </h1>
                  <h1
                    style={{ position: 'absolute', top: '20vh', left: '125vw' }}
                  >
                    day
                  </h1>
                  <h1
                    style={{ position: 'absolute', top: '20vh', left: '225vw' }}
                  >
                    happy
                  </h1>
                  <h1
                    style={{ position: 'absolute', top: '20vh', left: '325vw' }}
                  >
                    birth
                  </h1>
                  <h1
                    style={{ position: 'absolute', top: '20vh', left: '425vw' }}
                  >
                    day
                  </h1>
                </Scroll>
              </ScrollControls>
              <Preload />
            </Suspense>
          </Canvas>
        </div>
      </dialog>
    </>
  );
}

export default Main
