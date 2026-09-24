const COLOR_CLASS: Record<string, string> = {
  red: "bg-red-500",
  orange: "bg-orange-500",
  amber: "bg-amber-500",
  yellow: "bg-yellow-500",
  lime: "bg-lime-500",
  green: "bg-green-500",
  emerald: "bg-emerald-500",
  teal: "bg-teal-500",
  cyan: "bg-cyan-500",
  sky: "bg-sky-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
  violet: "bg-violet-500",
  purple: "bg-purple-500",
  fuchsia: "bg-fuchsia-500",
  pink: "bg-pink-500",
  rose: "bg-rose-500",
  black: "bg-black",
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

export const toColorClass = (name: string): string =>
  COLOR_CLASS[name] ?? "bg-slate-500";

export const getDomainColorClass = (domainName: string): string => {
  const label = domainName
    .toLowerCase()
    .replace(/^www\./, "")
    .split(":")[0]
    .split(".")[0];
  const color = COLOR_BY_DOMAIN[label] ?? PALETTE[hash(label) % PALETTE.length];
  return COLOR_CLASS[color] ?? "bg-slate-500";
};
