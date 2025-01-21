import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * @param {ClassValue[]} inputs
 *
 * @return {string}
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
