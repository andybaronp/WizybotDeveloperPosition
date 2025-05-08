export function formatDate(date: Date = new Date()): string {
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  const month = date.toLocaleString("en", { month: "short" });
  const day = date.getDate();

  return `${displayHours}:${minutes}${ampm} | ${month} ${day}`;
}
