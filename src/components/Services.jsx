import React from 'react'

function Services({ services }) {
  return (
    <div>
        <p className='font-microMedium mt-4 mb-1 text-lg'>Services</p>
        <ul>
            {services.map((service, index) => (
                <li key={index} className='text-[#B3B3B3] font-microRegular' >
                    {service}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Services