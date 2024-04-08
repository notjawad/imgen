import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function decodeBase64<T>(data: string): T {
  return JSON.parse(atob(data));
}

export function getInitials(username: string) {
  return username
    .split(" ")
    .map((name) => name[0])
    .join("");
}

export function hexToRgba(hex: string, alpha: number): string {
  const sanitizedHex = hex.startsWith("#") ? hex.slice(1) : hex;

  const r = parseInt(sanitizedHex.substring(0, 2), 16);
  const g = parseInt(sanitizedHex.substring(2, 4), 16);
  const b = parseInt(sanitizedHex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
