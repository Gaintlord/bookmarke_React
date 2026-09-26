export type ColorShades = [string, string, string];

const COLOR_CLASS: Record<string, ColorShades> = {
  red: ["bg-red-400", "bg-red-500", "bg-red-600"],

  orange: ["bg-orange-400", "bg-orange-500", "bg-orange-600"],

  amber: ["bg-amber-400", "bg-amber-500", "bg-amber-600"],

  yellow: ["bg-yellow-400", "bg-yellow-500", "bg-yellow-600"],

  lime: ["bg-lime-400", "bg-lime-500", "bg-lime-600"],

  green: ["bg-green-400", "bg-green-500", "bg-green-600"],

  emerald: ["bg-emerald-400", "bg-emerald-500", "bg-emerald-600"],

  teal: ["bg-teal-400", "bg-teal-500", "bg-teal-600"],

  cyan: ["bg-cyan-400", "bg-cyan-500", "bg-cyan-600"],

  sky: ["bg-sky-400", "bg-sky-500", "bg-sky-600"],

  blue: ["bg-blue-400", "bg-blue-500", "bg-blue-600"],

  indigo: ["bg-indigo-400", "bg-indigo-500", "bg-indigo-600"],

  violet: ["bg-violet-400", "bg-violet-500", "bg-violet-600"],

  purple: ["bg-purple-400", "bg-purple-500", "bg-purple-600"],

  fuchsia: ["bg-fuchsia-400", "bg-fuchsia-500", "bg-fuchsia-600"],

  pink: ["bg-pink-400", "bg-pink-500", "bg-pink-600"],

  rose: ["bg-rose-400", "bg-rose-500", "bg-rose-600"],

  black: ["bg-gray-400", "bg-gray-500", "bg-gray-600"],
};

// Mirrors the backend map so locally-added cards get the same brand color.
// Keys are bare domain names (first label of the registrable domain).
const DOMAIN_COLORS: Record<string, string[]> = {
  red: [
    "youtube",
    "netflix",
    "doordash",
    "zomato",
    "airbnb",
    "pinterest",
    "adobe",
    "quora",
    "gitlab",
    "oracle",
    "coca-cola",
    "cnn",
    "espn",
    "target",
    "hulu",
  ],
  orange: [
    "reddit",
    "pornhub",
    "stackoverflow",
    "soundcloud",
    "ycombinator",
    "etsy",
    "firefox",
    "hubspot",
    "codecademy",
  ],
  amber: ["amazon", "paypal", "tripadvisor", "ebay"],
  yellow: ["snapchat", "imgur", "imdb", "bestbuy", "mcdonalds"],
  lime: ["kickstarter", "lime"],
  green: [
    "spotify",
    "whatsapp",
    "evernote",
    "shopify",
    "starbucks",
    "android",
    "robinhood",
    "xbox",
    "greenhouse",
  ],
  emerald: ["mint", "trello", "asana"],
  teal: ["tumblr", "vimeo", "mailchimp", "atlassian"],
  cyan: ["skype", "messenger", "mastodon", "line", "weebly"],
  sky: [
    "twitter",
    "telegram",
    "facebook",
    "linkedin",
    "google",
    "microsoft",
    "behance",
    "dropbox",
    "zoom",
    "ibm",
    "intel",
    "hp",
    "mozilla",
    "flipkart",
  ],
  blue: [
    "salesforce",
    "visa",
    "mastercard",
    "americanexpress",
    "coinbase",
    "venmo",
    "yelp",
    "indeed",
    "coursera",
    "udemy",
    "wordpress",
  ],
  indigo: ["discord", "samsung", "sap"],
  violet: ["figma", "twitch", "stripe", "linear", "pipedrive"],
  purple: ["canva", "yahoo", "verizon"],
  fuchsia: ["instagram", "tinder", "dribbble"],
  pink: ["lyft"],
  rose: [],
  black: [
    "x",
    "apple",
    "github",
    "notion",
    "uber",
    "threads",
    "tiktok",
    "medium",
    "steam",
    "steamcommunity",
  ],
};

const COLOR_BY_DOMAIN: Record<string, string> = {};
for (const [color, domains] of Object.entries(DOMAIN_COLORS)) {
  for (const domain of domains) {
    if (!(domain in COLOR_BY_DOMAIN)) COLOR_BY_DOMAIN[domain] = color;
  }
}

const PALETTE = Object.keys(DOMAIN_COLORS);

const hash = (value: string): number => {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
};

export const toColorClass = (name: string): ColorShades =>
  COLOR_CLASS[name] ?? ["bg-slate-400", "bg-slate-500", "bg-slate-600"];

export const getDomainColorClass = (domainName: string): ColorShades => {
  const label = domainName
    .toLowerCase()
    .replace(/^www\./, "")
    .split(":")[0]
    .split(".")[0];
  const color = COLOR_BY_DOMAIN[label] ?? PALETTE[hash(label) % PALETTE.length];
  return COLOR_CLASS[color] ?? ["bg-slate-400", "bg-slate-500", "bg-slate-600"];
};
