import React from 'react';

const umm = '/organizer/org-logo.png'; // Update with your image path
const rit = '/organizer/rit.png'; // Update with your image path
const globalnxt = '/organizer/globalnxt.svg'; // Update with your image path

function Organizer() {
    return (
        <section className="bg-gradient-to-r from-rose-50/60 to-blue-100 rounded-xl p-8 text-center shadow-lg max-w-7xl mx-auto my-8 px-2">
            <h2 className="text-5xl font-semibold mb-6 text-slate-900 ">
                Our <span className='bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text'>Organizing Partner</span>
            </h2>
             <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
            <img
                src={umm}
                alt="Organizing Partner Logo"
                className="max-w-xl w-auto h-40 rounded-lg   p-4 mx-auto"
            />
            <img
                src={rit}
                alt="Organizing Partner Logo"
                className="max-w-xl w-auto h-40 rounded-lg   p-4 mx-auto"
            />  <img
                src={globalnxt}
                alt="Organizing Partner Logo"
                className="max-w-xl w-auto h-32 rounded-lg   p-4 mx-auto"
            />
            </div>
        </section>
    );
}

export default Organizer;
