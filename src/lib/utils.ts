import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function convertTime(duration: number) {
  const secondTimeToMinute = Math.floor(duration / 60);
  const timeToSecond = Math.floor(duration) % 60;

  return `${secondTimeToMinute.toString().padStart(2, "0")}:${timeToSecond.toString().padStart(2, "0")}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

