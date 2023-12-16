import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [color, setColor] = useState('bg-lime-500');

  const handleChangeBgColor = (color) => {
    console.log('clicked', color);
    setColor(color);
  };

  return (
    <>
      <div className={`w-full h-screen duration-200 ${color}`}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-[#fafafa] px-3 py-2 rounded-xl">
            <Button
              name="Red"
              bgColor="bg-red-500"
              handleChangeBgColor={handleChangeBgColor}
            />
            <Button
              name="Green"
              bgColor="bg-green-500"
              handleChangeBgColor={handleChangeBgColor}
            />
            <Button
              name="Blue"
              bgColor="bg-blue-500"
              handleChangeBgColor={handleChangeBgColor}
            />
            <Button
              name="Olive"
              bgColor="bg-lime-500"
              handleChangeBgColor={handleChangeBgColor}
            />
            <Button
              name="Gray"
              bgColor="bg-gray-500"
              handleChangeBgColor={handleChangeBgColor}
            />
            <Button
              name="Yellow"
              bgColor="bg-yellow-500"
              handleChangeBgColor={handleChangeBgColor}
            />
            <Button
              name="Pink"
              bgColor="bg-pink-500"
              handleChangeBgColor={handleChangeBgColor}
            />
            <Button
              name="Purple"
              bgColor="bg-purple-500"
              handleChangeBgColor={handleChangeBgColor}
            />
            <Button
              name="Lavender"
              bgColor="bg-slate-500"
              handleChangeBgColor={handleChangeBgColor}
            />
            <Button
              name="White"
              bgColor="bg-white"
              handleChangeBgColor={handleChangeBgColor}
            />
            <Button
              name="Black"
              bgColor="bg-black"
              handleChangeBgColor={handleChangeBgColor}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
