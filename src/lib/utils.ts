import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to format delay for staggered animations
 * @param index - Index for stagger calculation
 * @param baseDelay - Base delay in seconds
 * @returns Formatted delay string
 */
export function getStaggerDelay(index: number, baseDelay: number = 0.1): string {
  return `${baseDelay * index}s`;
} 