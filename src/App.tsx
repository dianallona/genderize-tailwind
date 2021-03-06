import { useState } from "react";
import API from "./api";
import "./App.css";

interface IGenderData {
  name: string;
  gender: string;
  probability: number;
  count: number;
}

const App = () => {
  const [name, setName] = useState("");
  const [genderData, setGenderData] = useState<IGenderData>();
  const handleOnChangeBtn = async () => {
    if (name === "") return;
    const { data } = await API.get(`?name=${name}`);
    setGenderData(data);
  };

  const handleOnChangeName = (str: string) => {
    setName(str);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-purple-600">
      <div className="flex flex-col items-center w-1/2 h-full py-20">
        <div className="flex flex-col justify-center items-center w-full h-1/2">
          <p className="text-6xl text-white text-center font-bold">
            Genderize.
          </p>
          <p className="text-lg text-gray-300 text-center italic">
            Predict the gender of a person based on their name.
          </p>
          <div className="flex flex-row w-full justify-center items-center mt-5">
            <input
              type="text"
              className="shadow appearance-none border rounded-l-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your name here..."
              value={name}
              onChange={(e) => handleOnChangeName(e.target.value)}
            />
            <button
              className="h-full hover:bg-blue-500 flex justify-center items-center w-10 bg-blue-600 rounded-r-lg"
              onClick={handleOnChangeBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center w-full h-1/2">
          {genderData && (
            <>
              <div className="flex flex-col justify-center items-center mb-16">
                <p className="text-lg text-white text-left">Gender:</p>
                <p className="text-4xl text-white capitalize font-bold">
                  {genderData.gender}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-lg text-white text-left">Probability:</p>
                <p className="text-4xl text-white capitalize font-bold">
                  {genderData.probability} %
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
