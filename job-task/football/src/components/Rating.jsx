import RatingCard from './RatingCard';
import SecondaryButton from './SecondaryButton';

const Rating = () => {
  return (
    <>
      <div className="flex flex-col justify-center  rounded-xl  bg-[#FCFFFE] py-6 shadow-md">
        <div className="flex items-center gap-1.5 px-5">
          <SecondaryButton classes={`bg-[#14314E] text-white w-36`}>
            Duel Rating
          </SecondaryButton>

          <SecondaryButton classes={`text-[#8C8C8C] bg-[#F7F7F7] w-40`}>
            Finish/Saving
          </SecondaryButton>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 px-5 pt-5">
          <RatingCard
            name="Aerial"
            value={'68/100'}
            outerColor="bg-[#FFEEBA]"
            innerColor="bg-[#856404]"
            innerOnePosition="left-0 right-[35%]"
            innerTwoPosition="-top-2 right-[35%]"
          />
          <RatingCard
            name="Aerial Set-Play"
            value={'48/100'}
            outerColor="bg-[#BEE5EB]"
            innerColor="bg-[#0C5460]"
            innerOnePosition="left-0 right-[55%]"
            innerTwoPosition="-top-2 right-[55%]"
          />
          <RatingCard
            name="Dribbling"
            value={'20/100'}
            outerColor="bg-[#C3E6CB]"
            innerColor="bg-[#155724]"
            innerOnePosition="left-0 right-[93%]"
            innerTwoPosition="-top-2 right-[93%]"
          />
          <RatingCard
            name="Tackling"
            value={'60/100'}
            outerColor="bg-[#F5C6CB]"
            innerColor="bg-[#721C24]"
            innerOnePosition="left-0 right-[30%]"
            innerTwoPosition="-top-2 right-[30%]"
          />
        </div>
      </div>
    </>
  );
};

export default Rating;
