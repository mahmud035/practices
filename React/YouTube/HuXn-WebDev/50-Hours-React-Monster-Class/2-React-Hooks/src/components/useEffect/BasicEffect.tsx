import { useEffect } from 'react';

export default function BasicEffect() {
  useEffect(() => {
    console.log('BasicEffect mounted');
  }, []);

  return <div>BasicEffect</div>;
}
