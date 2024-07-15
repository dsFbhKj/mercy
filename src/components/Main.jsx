import '../styles/Main.module.css';

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
          <p className='py-4'>Press ESC key or click on ✕ button to close</p>
          
        </div>
      </dialog>
    </>
  );
};

export default Main;
