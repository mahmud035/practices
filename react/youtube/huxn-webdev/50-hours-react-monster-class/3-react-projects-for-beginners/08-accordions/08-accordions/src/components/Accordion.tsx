import { useState } from 'react';
import '../styles/index.css';
import Panel from './Panel';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Accordion</h2>
      <Panel
        title="What Is HTML?"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        The HyperText Markup Language or HTML is the standard markup language
        for documents designed to be displayed in a web browser. It can be
        assisted by technologies such as Cascading Style Sheets and scripting
        languages such as JavaScript.
      </Panel>
      <Panel
        title="What Is React?"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        React is a free and open-source front-end JavaScript library for
        building user interfaces based on UI components. It is maintained by
        Meta and a community of individual developers and companies.
      </Panel>
    </>
  );
}
