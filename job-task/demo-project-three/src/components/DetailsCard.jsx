import SummaryCard from './SummaryCard';

const DetailsCard = ({ user }) => {
  const {
    name,
    address: { city, street, zipcode, geo, suite },
    company: { name: companyName },
    email,
    phone,
  } = user;

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <SummaryCard user={user} />

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-sm text-gray-600">Contact Person</h3>
            <p className="text-gray-800">{name}</p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-600">Company Name</h3>
            <p className="text-gray-800">{companyName}</p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-600">Email</h3>
            <p className="text-gray-800">{email}</p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-600">Phones</h3>
            <p className="text-gray-800">{phone}</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-sm text-gray-600">Address</h3>
            <p className="text-gray-800">{`${suite}, ${geo.lat}, ${geo.lng}`}</p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-600">City</h3>
            <p className="text-gray-800">{city}</p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-600">Street</h3>
            <p className="text-gray-800">{street}</p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-600">Zip Code</h3>
            <p className="text-gray-800">{zipcode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
