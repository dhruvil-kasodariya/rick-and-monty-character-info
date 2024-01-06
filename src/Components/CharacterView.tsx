import React from "react";
import { CharacterData } from "../store/characters/characters.type";

type CharacterViewProps  ={
    data: CharacterData;
  }
  
  const CharacterView: React.FC<CharacterViewProps> = ({ data }) => {
  return (
    <div>
      <div className="w-full h-screen p-5 flex flex-row items-center justify-between">
        <div className="w-full h-screen flex items-center justify-center">
          <img
            src={data?.image}
            className="rounded-xl"
            alt={data?.name}
          />
        </div>
        <div className="w-full h-screen flex flex-col items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mt-24">
          <div className="w-full flex flex-row text-center py-4 px-2 mb-2">
            <h1 className="w-full font-bold text-3xl">{data?.name}</h1>
          </div>
          <div className="w-full flex flex-row justify-between gap-4">
            <div className="w-full flex flex-row items-center justify-between py-4 px-2 mb-2 gap-4">
              <h1 className="w-full font-bold text-xl">Species </h1>
              <span className="w-full text-lg text-start">
                {data?.species}
              </span>
            </div>
            <div className="w-full py-4 px-2 mb-2 flex flex-row gap-4">
              <h1 className="w-full font-bold text-xl">Gender</h1>
              <span className="w-full text-start text-lg">
                {data?.gender}
              </span>
            </div>
          </div>
          <div className="w-full py-4 px-2 mb-2 flex flex-row gap-8">
            <h1 className="w-full font-bold text-xl flex-1">Status</h1>
            <span className="w-full text-lg text-start">
              {data?.status}
            </span>
          </div>
          <div className="w-full py-4 px-2 mb-2 flex flex-row gap-8">
            <h1 className="w-full font-bold text-xl flex-1">Origin</h1>
            <a
              className="w-full text-lg text-start"
              href={data?.origin.url}
            >
              {data?.origin.name}
            </a>
          </div>
          {data?.type && (
            <div className="w-full py-4 px-2 mb-2 flex flex-row gap-8">
              <h1 className="w-full font-bold text-xl flex-1">Type</h1>
              <span className="w-full text-lg text-start">
                {data?.type}
              </span>
            </div>
          )}
          <div className="w-full py-4 px-2 mb-2">
            <h1 className="font-bold text-xl">
              Feacher Episodes list of Character
            </h1>
            {data?.episode.map((url, index:number) => {
              return (
                <div key={index} className="w-full break-all pl-10 my-4">
                  <a className="underline text-lg">{url}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterView;
