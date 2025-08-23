import { useState } from 'react';
import Contact from './Contact';
import Home from './Home';
import Posts from './Posts';

export default function WithoutTransition() {
  const [activeTab, setActiveTab] = useState('home');

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
          onClick={() => setActiveTab('home')}
          className="bg-black text-white px-4 py-2 mt-3 mr-1"
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab('posts')}
          className="bg-black text-white px-4 py-2 mt-3 mr-1"
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className="bg-black text-white px-4 py-2 mt-3"
        >
          Contact
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
}
