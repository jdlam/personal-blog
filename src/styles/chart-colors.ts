/**
 * Centralized chart color configuration
 * All chart colors are defined here for consistency across the application
 */

export interface ChartColorPalette {
  /** Background colors for chart segments/datasets (with transparency) */
  colors: string[];
  /** Border colors for chart segments/datasets (solid) */
  borders: string[];
  /** Text color for labels, legends, and axis ticks */
  text: string;
  /** Grid line color for chart axes */
  grid: string;
}

/**
 * Dark theme chart colors
 * Vibrant, distinct colors optimized for dark backgrounds
 */
export const darkThemeColors: ChartColorPalette = {
  colors: [
    'rgba(45, 212, 191, 0.9)',   // Teal (primary)
    'rgba(251, 146, 60, 0.9)',   // Orange
    'rgba(168, 85, 247, 0.9)',   // Purple
    'rgba(251, 191, 36, 0.9)',   // Amber/Yellow
    'rgba(236, 72, 153, 0.9)',   // Pink
    'rgba(34, 197, 94, 0.9)',    // Green
    'rgba(96, 165, 250, 0.9)',   // Blue
  ],
  borders: [
    'rgb(45, 212, 191)',         // Teal
    'rgb(251, 146, 60)',         // Orange
    'rgb(168, 85, 247)',         // Purple
    'rgb(251, 191, 36)',         // Amber/Yellow
    'rgb(236, 72, 153)',         // Pink
    'rgb(34, 197, 94)',          // Green
    'rgb(96, 165, 250)',         // Blue
  ],
  text: 'rgb(244, 244, 245)',
  grid: 'rgba(63, 63, 70, 0.5)',
};

/**
 * Light theme chart colors
 * Vibrant, distinct colors optimized for light backgrounds
 */
export const lightThemeColors: ChartColorPalette = {
  colors: [
    'rgba(13, 148, 136, 0.85)',  // Teal (primary)
    'rgba(234, 88, 12, 0.85)',   // Orange
    'rgba(147, 51, 234, 0.85)',  // Purple
    'rgba(202, 138, 4, 0.85)',   // Amber/Yellow
    'rgba(219, 39, 119, 0.85)',  // Pink
    'rgba(22, 163, 74, 0.85)',   // Green
    'rgba(37, 99, 235, 0.85)',   // Blue
  ],
  borders: [
    'rgb(13, 148, 136)',         // Teal
    'rgb(234, 88, 12)',          // Orange
    'rgb(147, 51, 234)',         // Purple
    'rgb(202, 138, 4)',          // Amber/Yellow
    'rgb(219, 39, 119)',         // Pink
    'rgb(22, 163, 74)',          // Green
    'rgb(37, 99, 235)',          // Blue
  ],
  text: 'rgb(41, 37, 36)',
  grid: 'rgba(214, 211, 209, 0.7)',
};

/**
 * Get the appropriate color palette based on theme
 */
export function getChartColors(isDark: boolean): ChartColorPalette {
  return isDark ? darkThemeColors : lightThemeColors;
}

/**
 * Color name references for documentation/debugging
 */
export const colorNames = [
  'teal',
  'orange',
  'purple',
  'amber',
  'pink',
  'green',
  'blue',
] as const;

export type ChartColorName = typeof colorNames[number];
