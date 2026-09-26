import {
  toColorClass,
  getDomainColorClass,
  type ColorShades,
} from "./domainColor";

type DomainColorSummary = {
  website: string;
  color: string;
};

const domainColors = new Map<string, ColorShades>();

export const saveDomainColors = (summaries: DomainColorSummary[]): void => {
  for (const summary of summaries) {
    if (!summary?.website) continue;
    domainColors.set(summary.website.toLowerCase(), toColorClass(summary.color));
  }
};

export const getDomainColor = (domainName: string): ColorShades => {
  const color = domainColors.get(domainName.toLowerCase());
  if (color) return color;
  return getDomainColorClass(domainName);
};
