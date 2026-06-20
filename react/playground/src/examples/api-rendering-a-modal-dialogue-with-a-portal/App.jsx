import NoPortalExample from './NoPortalExample.jsx';
import PortalExample from './PortalExample.jsx';
import './style.css';

export default function App() {
  return (
    <>
      <div className="clipping-container">
        <NoPortalExample />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </>
  );
}
