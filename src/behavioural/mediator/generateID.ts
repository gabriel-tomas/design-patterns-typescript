export function generateID(length: number = 12, interval: number = 4): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];

    if (i !== length - 1 && (i + 1) % interval === 0) {
      id += '-';
    }
  }

  return id;
}
