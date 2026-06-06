import { useFeedbackList } from '../feedback.hooks';

export default function FeedbackList() {
  const { data, isPending, isError } = useFeedbackList();

  if (isPending) return <p>Loading feedback...</p>;
  if (isError)
    return <p style={{ color: 'crimson' }}>Could not load feedback</p>;
  if (data.length === 0) return <p>No feedback yet - be the first</p>;

  return (
    <ul>
      {data.map((feedback) => (
        <li key={feedback.id}>
          <strong>{feedback.name}</strong> - {feedback.rating}/5 .{' '}
          {feedback.category} . {feedback.message}
        </li>
      ))}
    </ul>
  );
}
