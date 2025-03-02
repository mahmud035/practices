import { useState, useTransition } from 'react';
import Contact from './Contact';
import Home from './Home';
import Posts from './Posts';

export default function WithTransition() {
  const [activeTab, setActiveTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'posts':
        return <Posts />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button
          onClick={() => handleTabChange('home')}
          className="bg-black text-white px-4 py-2 mt-3 mr-1"
        >
          Home
        </button>
        <button
          onClick={() => handleTabChange('posts')}
          className="bg-black text-white px-4 py-2 mt-3 mr-1"
        >
          Posts
        </button>
        <button
          onClick={() => handleTabChange('contact')}
          className="bg-black text-white px-4 py-2 mt-3"
        >
          Contact
        </button>
      </div>

      {isPending && <p>Loading...</p>}

      <div className="content">{renderContent()}</div>
    </div>
  );
}
