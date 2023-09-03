'use client';
import Navigation from '@/components/Navigation';
import SpinWheel from '@/components/SpinWheel';
import React, { useState } from 'react';

const Page = () => {
  const [names, setNames] = useState<string[]>([]);
  const [name, setName] = useState('');

  const handleAddName = (event: React.FormEvent<HTMLFormElement>) => {
    // Formun varsayılan davranışını engelliyoruz (sayfa yenilenmesini engellemek için)
    event.preventDefault();

    if (name.trim()) {
      setNames((prevNames) => [...prevNames, name.trim()]);
      setName('');
    }
  };

  return (
    <>
      <Navigation />
      <div className="h-screen py-20 px-2  ">
        <div className="grid grid-cols-12 gap-4 items-center h-full ">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex justify-center ">
              <form
                onSubmit={handleAddName}
                className="flex w-[300px]  md:w-[400px] relative"
              >
                <input
                  className="border-2 py-2 border-btngreen w-full pl-2 rounded-xl"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Competitor name..."
                />
                <button
                  type="submit"
                  className="bg-btnpurple text-white px-4 rounded-xl absolute right-0 py-[10px] "
                >
                  Add
                </button>
              </form>
            </div>
            <h1 className="text-center text-white text-5xl mt-10">Settings</h1>
            <div className="flex justify-center w-full">
              <button
                onClick={() => {
                  setNames([]);
                }}
                className="py-[4px] border-2 border-btngreen bg-btngreen text-white mt-2 px-10 rounded-2xl text-xl "
              >
                Reset Names
              </button>
            </div>
            <h1 className="text-center text-white text-5xl mt-10 mb-2">
              Competitors
            </h1>
            {names.map((name, index) => (
              <p className="text-xl text-white text-center" key={index}>
                -{name}
              </p>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-7 p-10 xl:p-24 lg:-mt-20">
            <SpinWheel names={names} setNames={setNames} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
