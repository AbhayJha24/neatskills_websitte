import Image from 'next/image'

export default function Home() {
  return (
    <section className="flex gap-x-48 gap-y-32 justify-center items-center flex-wrap bg-neutral-900 w-full h-full lg:h-screen px-32 py-20">
      <div className="flex flex-col gap-10">
        <h1 className="text-pink-500 text-center text-4xl">NEAT SKILLS</h1>
      <div className="rounded-full w-64 h-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[inset_0px_0px_20px_20px_#d758eb] backdrop-blur-sm">
      <Image src={`/register.jpg`} width={300} height={250} className='w-64 h-64'></Image>
      </div>
      </div>
      <div className="flex flex-col gap-y-10 items-center justify-center bg-neutral-700 shadow-xl rounded-xl w-80 px-6 py-10">
        <div className="flex flex-col">
          <h1 className="text-slate-200 text-center">Do you want to become a mentor ?</h1>
          <div className="flex gap-x-2 items-center justify-center">
          <h2 className="text-slate-200">Sign up below to </h2>
          <h2 className="text-pink-500">Register</h2>
          </div>
        </div>
         <div className="flex items-center justify-center flex-col gap-y-6">
          <input className="flex justify-start bg-neutral-500 rounded-2xl p-3 w-[15em] placeholder-slate-100 text-slate-100" placeholder='Enter your Email' />
          <input className="flex justify-start bg-neutral-500 rounded-2xl p-3 w-[15em] placeholder-slate-100 text-slate-100" placeholder='Enter your Email' />
          <button className="bg-pink-500 rounded-lg w-5/6 h-10">Sign Up</button>
          <p className="text-white text-xs">Let's make some awesome changes</p>
        </div>
      </div>
    </section>
  )
}
