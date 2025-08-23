const RatingCard = ({
  name,
  value,
  outerColor,
  innerColor,
  innerOnePosition,
  innerTwoPosition,
}) => {
  return (
    <>
      <div className="rounded-lg border border-[#DEDEDE] bg-[#FCFFFE] p-5">
        <div>
          <div className="flex justify-between text-[#14314E]">
            <p>{name}</p>
            <p>{value}</p>
          </div>
          <div className="pb-1.5 pt-5">
            <div className={`relative h-2 rounded-full ${outerColor}`}>
              <div
                className={`absolute h-2 rounded-full ${innerOnePosition} ${innerColor}`}
              ></div>
              <div
                className={`absolute h-6 w-1.5 rounded-full ${innerTwoPosition} ${innerColor}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingCard;
