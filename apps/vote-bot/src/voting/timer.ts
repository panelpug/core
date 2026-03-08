const activeTimers = new Map<string, NodeJS.Timeout>();

export function scheduleSessionEnd(
  threadId: string,
  endsAt: number,
  callback: () => void,
): void {
  const delay = Math.max(0, endsAt - Date.now());
  const handle = setTimeout(callback, delay);
  activeTimers.set(threadId, handle);
}

export function cancelSessionTimer(threadId: string): void {
  const handle = activeTimers.get(threadId);
  if (handle !== undefined) {
    clearTimeout(handle);
    activeTimers.delete(threadId);
  }
}
