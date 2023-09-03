import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className=" overflow-x-hidden ">
      <main className="bg-homebg  xl:h-screen relative ">
        <div className="bg-none my-2 h-screen relative xl:max-w-7xl xl:mx-auto">
          {/* LEFT IMAGE */}
          <div className="absolute md:-left-20 -left-2 xl:left-0 top-20 border-2 border-btngreen rounded-xl h-[150px] w-[100px]  md:h-[200px] md:w-[180px] lg:h-[300px] lg:w-[250px]  xl:h-[400px] xl:w-[300px] -rotate-[26deg] z-10 shadow-2xl" />
          <div className="absolute md:-left-20 xl:left-0 top-32  md:top-40  justify-center h-[150px] w-[100px] md:h-[200px] md:w-[180px] lg:h-[300px] lg:w-[250px] xl:h-[400px] xl:w-[300px] -rotate-[11deg] z-0">
            <Image
              className="h-full w-full object-fit grayscale-[100%] rounded-xl "
              src="https://plus.unsplash.com/premium_photo-1665590827405-51810e1fa565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
              // src={'/wheel.jpg'}
              alt="etsy-banner"
              width={500}
              height={500}
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute  top-32 md:top-52 right-0 md:-right-20 xl:top-64 xl:right-0 border-2 border-btngreen rounded-xl h-[150px] w-[100px]  md:h-[200px] md:w-[180px] lg:h-[300px] lg:w-[250px]  xl:h-[400px] xl:w-[300px] -rotate-[-26deg] z-10 shadow-2xl" />
          <div className="absolute top-32 md:top-52 right-0 md:-right-20 xl:top-64 xl:right-0   justify-center h-[150px] w-[100px] md:h-[200px] md:w-[180px] lg:h-[300px] lg:w-[250px] xl:h-[400px] xl:w-[300px] -rotate-[-11deg] z-0">
            <Image
              className="h-full w-full object-fit grayscale-[100%] rounded-xl "
              src="https://images.unsplash.com/photo-1533558493928-231014635309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2814&q=80"
              alt="etsy-banner"
              width={500}
              height={500}
            />
          </div>

          <div className="w-full h-full flex flex-col justify-center items-center align-middle relative z-20 px-1 ">
            <h1 className="text-5xl md:text-8xl xl:text-9xl uppercase text-white banner--text--purple">
              Lucky Wheel
            </h1>
            <Link href={'/luckydraw'}>
              <button className="animate-pulse py-[4px] font-semibold border-2 border-btngreen bg-btngreen text-white mt-10 w-[300px] rounded-2xl text-xl ">
                Lucky Draw
              </button>
            </Link>
          </div>
        </div>
      </main>
      <section className="bg-homebg md:h-screen relative  -mt-64 md:-mt-40 xl:mt-0 ">
        <div className="absolute right-0 top-28 border-2 border-btngreen rounded-full h-[470px] w-[300px] -rotate-[134deg] z-10 shadow-2xl" />
        <div className="w-full h-full flex flex-col justify-center items-center align-middle relative z-20 px-2">
          <h1 className="text-5xl md:text-8xl xl:text-9xl uppercase text-white banner--text--purple">
            Ready, Spin!
          </h1>
          <p className="text-white text-4xl px-10 md:px-20 xl:px-52 text-center mt-10 banner--text--purple ">
            Share your indomitable spirit with us. Add the names to the list and
            await the result with anticipation. Whether a reward or a penalty
            for the drawn name; the choice is yours. With your boundless
            imagination, reach the peaks of excitement in our app.
          </p>
          <Link href={'/luckydraw'}>
            <button className="animate-pulse py-[4px] font-semibold  border-2 border-btngreen bg-btngreen text-white mt-10 w-[300px] rounded-2xl text-xl ">
              Lucky Draw
            </button>
          </Link>
        </div>
      </section>
      <footer className="bg-homebg h-auto  py-20">
        <div className="flex items-center flex-col justify-center space-y-4">
          <div className=" text-white flex justify-center items-center gap-4">
            <div>© 2023 </div>
            <a
              target="_blank"
              className="hover:text-btngreen -mt-[2px] "
              href="https://tanselberkant.dev/"
            >
              @tanselberkant
            </a>{' '}
          </div>
          <a
            href="https://www.buymeacoffee.com/tanselberkant"
            className="w-[300px] h-20"
            target="_blank"
          >
            <Image
              width={500}
              height={500}
              src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
              alt="Buy Me A Coffee"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
