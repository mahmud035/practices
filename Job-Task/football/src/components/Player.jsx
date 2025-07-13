import player from '../assets/images/person.png';

const Player = () => {
  return (
    <div>
      <div className="flex h-full flex-col rounded-xl bg-[#FCFFFE] pt-6 shadow-md">
        <img
          src={player}
          alt=""
          className="mx-auto my-8 aspect-square h-40 w-40 rounded-full border-[6px] border-[#FD413B] p-1.5"
        />
        <div className="space-y-4 ">
          <div className="my-2 space-y-1 pb-4 text-center">
            <h2 className="text-xl font-bold sm:text-3xl">Ronaldo Zuniga</h2>
            <p className="px-5 text-xs font-medium text-[#8C8C8C] sm:text-lg">
              Atletico Huila
            </p>
          </div>
          <div className="mb-8 border border-[#DEDEDE]"></div>

          <div className="w-[65%] py-4 pl-5 !text-left">
            <div className="flex pb-3.5 font-medium text-[#8C8C8C]">
              <p>Height</p>
              <p className="px-9">:</p>
              <div>
                <p className="text-left font-semibold text-[#14314E]">{`6'2"`}</p>
              </div>
            </div>
            <div className="flex pb-3.5 font-medium text-[#8C8C8C]">
              <p>Weight</p>
              <p className="px-8">:</p>
              <div>
                <p className="ml-[4px] font-semibold text-[#14314E] ">{`194kg`}</p>
              </div>
            </div>
            <div className="flex pb-3.5 font-medium text-[#8C8C8C]">
              <p>Age</p>
              <p className="px-14">:</p>
              <div>
                <p className="ml-[-18px] !text-left font-semibold text-[#14314E]">
                  27
                </p>
              </div>
            </div>
            <div className="flex font-medium text-[#8C8C8C]">
              <p>Foot</p>
              <p className="px-[50px]">:</p>
              <div>
                <p className="ml-[-12px] !text-left font-semibold text-[#14314E]">
                  Right
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border border-[#DEDEDE]"></div>

          <div className="px-5 pt-4">
            <select className="select-bordered select mb-3.5 w-full bg-[#FCFFFE] font-normal text-[#8C8C8C]">
              <option disabled selected>
                Position
              </option>
              <option>Han Solo</option>
            </select>

            <select className="select-bordered select mb-3.5 w-full bg-[#FCFFFE] font-normal text-[#8C8C8C]">
              <option disabled selected>
                Season
              </option>
              <option>Han Solo</option>
            </select>

            <select className="select-bordered select mb-3.5 w-full bg-[#FCFFFE] font-normal text-[#8C8C8C]">
              <option disabled selected>
                League
              </option>
              <option>Han Solo</option>
            </select>

            <select className="select-bordered select mb-3.5 w-full bg-[#FCFFFE] font-normal text-[#8C8C8C]">
              <option disabled selected>
                Team
              </option>
              <option>Han Solo</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
