import SecondaryButton from './SecondaryButton';

const Table = () => {
  return (
    <>
      <div className="mb-20 mt-6 flex flex-col justify-center  rounded-xl bg-[#FCFFFE]  p-7 pb-10 shadow-md">
        <div className="flex items-center gap-1.5 ">
          <SecondaryButton classes={`bg-[#14314E] text-white w-28`}>
            Model
          </SecondaryButton>

          <SecondaryButton classes={`text-[#8C8C8C] bg-[#F7F7F7] w-28`}>
            Style
          </SecondaryButton>
        </div>

        {/* Create Table Data */}
        <div className="grid grid-cols-6 divide-x  divide-[#14314E]  pt-8 text-sm font-semibold text-[#14314E]">
          {/* 1 */}
          <div className="col-span-2 divide-y divide-[#14314E] border-y border-[#14314E]">
            <div>
              <div className="flex justify-between pb-9 pt-4 ">
                <p>Team</p>
                <div className="flex gap-6 pr-16">
                  <p>League</p>
                  <p>Season</p>
                  <p>Minutes</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between py-4 pt-4">
                <p>Atletico Huila</p>
                <div className="grid grid-cols-3 gap-6 pr-28">
                  <p className="justify-self-start">COL1</p>
                  <p>2021</p>
                  <p>346</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="col-span-2 divide-y divide-[#14314E] border-y  border-[#14314E]">
            <div className="flex justify-evenly pb-4 pt-4 text-center">
              <p>
                Ball <br /> Progressions
              </p>
              <p>
                Shot <br /> Creation
              </p>
              <p>Set-Plays</p>
              <p>
                Ball <br /> Retention
              </p>
            </div>
            <div className="flex justify-evenly py-4 pt-4">
              <p>3</p>
              <p>4</p>
              <p>3</p>
              <p>81</p>
            </div>
          </div>

          {/* 3 */}
          <div className="divide-y divide-[#14314E] border-y  border-[#14314E]">
            <div className="flex justify-evenly pb-4 pt-4 text-center">
              <p>
                Defending <br /> Impact
              </p>
              <p>
                Defending <br /> Frequency
              </p>
            </div>
            <div className="flex justify-evenly py-4 pt-4">
              <p>15</p>
              <p>4</p>
            </div>
          </div>

          {/* 4 */}
          <div className="divide-y divide-[#14314E] border-y border-[#14314E]">
            <div className="flex justify-evenly pb-9 pt-4 text-center">
              <p>Off</p>
              <p>Def</p>
              <p>Total</p>
            </div>
            <div className="] flex justify-evenly py-4 pt-4">
              <p>-0.13</p>
              <p>-0.03</p>
              <p className="rounded-full  bg-[#721C24]/[0.2] px-2.5 py-0.5 text-[#721C24]">
                -0.16
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
