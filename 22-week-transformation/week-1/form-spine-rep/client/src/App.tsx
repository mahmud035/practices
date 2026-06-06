import FeedbackForm from './features/feedback/components/FeedbackForm';
import FeedbackList from './features/feedback/components/FeedbackList';

export default function App() {
  return (
    <main
      style={{ fontFamily: 'system-ui', padding: 24, display: 'grid', gap: 24 }}
    >
      <h1>Feedback - form spine rep</h1>
      <FeedbackForm />

      <section>
        <h2>Submitted</h2>
        <FeedbackList />
      </section>
    </main>
  );
}
