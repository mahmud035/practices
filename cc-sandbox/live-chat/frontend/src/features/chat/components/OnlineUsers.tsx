interface Props {
  users: string[];
}

export default function OnlineUsers({ users }: Props) {
  return (
    <aside className="flex w-48 flex-shrink-0 flex-col border-l border-border bg-surface">
      <div className="border-b border-border px-4 py-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
          Online — {users.length}
        </h2>
      </div>
      <ul className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {users.map((user) => (
          <li
            key={user}
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-text"
          >
            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-system" />
            <span className="truncate">{user}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
