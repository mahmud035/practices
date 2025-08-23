const ProfileData = ({ name, value }) => {
  console.log(name);
  return (
    <div className="grid w-full grid-cols-3 justify-between px-5 py-4">
      <p className="col-span-2 text-sm font-medium text-[#8C8C8C]">{name}</p>
      <p
        className={`text-sm font-semibold  ${
          value === 'Low' ? 'text-red-500' : 'text-[#14314E]'
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default ProfileData;
