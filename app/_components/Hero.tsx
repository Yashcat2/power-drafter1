import React from 'react'

function Hero() {
  return (
    <div>
        <section className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-sky-300 font-extrabold sm:text-5xl">
        Document & diagrams
        <strong className="font-extrabold text-white sm:block"> for engineerning teams </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-slate-100">
        All in one markdown editor, collaborative canvas and diagram-as code builder
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-sky-300 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>

       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero