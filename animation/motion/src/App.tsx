import DragConstraints from './components/animation/DragConstraints';
import DragLockDirection from './components/animation/DragLockDirection';
import HTMLContent from './components/animation/HTMLContent';
import Keyframes from './components/animation/Keyframes';
import Reordering from './components/animation/Reordering';
import SharedLayoutAnimation from './components/animation/SharedLayoutAnimation';
import StateAnimations from './components/animation/StateAnimations';
import Variants from './components/animation/Variants';
import EnterAnimation from './components/getStarted/EnterAnimation';
import ExitAnimation from './components/getStarted/ExitAnimation';
import Gestures from './components/getStarted/Gestures';
import LayoutAnimation from './components/getStarted/LayoutAnimation';
import Rotate from './components/getStarted/Rotate';
import ScrollLinked from './components/getStarted/ScrollLinked';
import ScrollTriggered from './components/getStarted/ScrollTriggered';

export default function App() {
  return (
    <div>
      {/* Get Started */}
      <Rotate />
      <EnterAnimation />
      <Gestures />
      <ScrollTriggered />
      <ScrollLinked />
      <LayoutAnimation />
      <ExitAnimation />

      {/* Animation */}
      <StateAnimations />
      <Keyframes />
      <Variants />
      <HTMLContent />
      <DragConstraints />
      <DragLockDirection />
      <Reordering />
      <SharedLayoutAnimation />

      {/* Components */}
    </div>
  );
}
