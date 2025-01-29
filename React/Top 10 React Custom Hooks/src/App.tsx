import ClickOutsideExample from './components/ClickOutsideExample';
import CopyToClipboardExample from './components/CopyToClipboardExample';
import DebounceExample from './components/DebounceExample';
import FetchExample from './components/FetchExample';
import HoverExample from './components/HoverExample';
import KeyPressExample from './components/KeyPressExample';
import LocalStorageExample from './components/LocalStorageExample';
import PreviousExample from './components/PreviousExample';
import ToggleExample from './components/ToggleExample';
import WindowSizeExample from './components/WindowSizeExample';

export default function App() {
  return (
    <div className="container mx-auto max-w-7xl grid grid-cols-1 gap-4 px-10 py-4">
      <ToggleExample />
      <LocalStorageExample />
      <FetchExample />
      <DebounceExample />
      <PreviousExample />
      <ClickOutsideExample />
      <CopyToClipboardExample />
      <HoverExample />
      <WindowSizeExample />
      <KeyPressExample />
    </div>
  );
}
