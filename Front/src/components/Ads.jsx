import React from 'react'

const Ads = () => {
  return (
    <section className='h-40 container flex w-screen'>
        <div className='flex gap-4 justify-between items-center w-full mx-auto'>
            <img src="src\assets\vodafone.png"  className='sm-size' alt="vodafone Logo" />
            <img src="src\assets\intel.png"  className='sm-size' alt="Intel Logo" />
            <img src="src\assets\tesla.png"  className='sm-size' alt="Tesla Logo" />
            <img src="src\assets\amd.png" className='sm-size' alt="Amd Logo" />
        </div>
    </section>
  )
}

export default Ads 