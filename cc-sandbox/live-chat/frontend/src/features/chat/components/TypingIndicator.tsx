interface Props {
  typingUsers: string[];
}

export default function TypingIndicator({ typingUsers }: Props) {
  if (typingUsers.length === 0) return null;

  const names =
    typingUsers.length === 1
      ? typingUsers[0]
      : typingUsers.length === 2
        ? `${typingUsers[0]} and ${typingUsers[1]}`
        : `${typingUsers[0]} and ${typingUsers.length - 1} others`;

  const verb = typingUsers.length === 1 ? 'is' : 'are';

  return (
    <p className="px-5 py-1 text-xs italic text-text-muted">
      {names} {verb} typing…
    </p>
  );
}
