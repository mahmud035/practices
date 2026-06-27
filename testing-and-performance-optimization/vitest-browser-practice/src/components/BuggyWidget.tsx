interface BuggyWidgetProps {
  shouldThrow: boolean;
}

export function BuggyWidget({ shouldThrow }: BuggyWidgetProps) {
  if (shouldThrow) {
    // Error boundaries only catch errors thrown during render — not
    // in event handlers or useEffect. This is exactly that case.
    throw new Error('BuggyWidget exploded');
  }

  return <p>Widget is working fine</p>;
}
