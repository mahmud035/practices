import Button from '@/app/components/Button';
import thumb from '@/public/images/thumb.jpg';
import Image from 'next/image';

const MissionPage = () => {
  return (
    <main className="mt-10">
      <h1>Our mission page content</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        maxime libero veniam quod nam laudantium perferendis impedit! Esse vitae
        quidem nemo nesciunt, adipisci maiores nam culpa excepturi aut, magni
        sunt?
      </p>

      <div className="w-[400px]">
        <Image src={thumb} alt="thumb image" placeholder="blur" />
      </div>

      <Button />
    </main>
  );
};

export default MissionPage;
