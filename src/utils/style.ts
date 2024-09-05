export function getCellColor(value: number | "mine" | null): string {
  switch (value) {
    case 1:
      return "text-blue-500";
    case 2:
      return "text-green-500";
    case 3:
      return "text-red-500";
    case 4:
      return "text-purple-500";
    case 5:
      return "text-yellow-500";
    case 6:
      return "text-pink-500";
    case 7:
      return "text-teal-500";
    case 8:
      return "text-gray-500";
    default:
      return "";
  }
}
