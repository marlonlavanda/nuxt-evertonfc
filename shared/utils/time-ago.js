const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

function getDateDiff(timestamp) {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.floor(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
}

export function getTimeAgo(timestampStr) {
  const date = new Date(timestampStr);
  const timestamp = date.getTime();

  if (!Number.isFinite(timestamp)) {
    console.error("Invalid timestamp:", timestampStr);
    return "Invalid date";
  }

  const { value, unit } = getDateDiff(timestamp);

  const rtf = new Intl.RelativeTimeFormat("en", { style: "long" });
  return rtf.format(value, unit);
}
