import { StatsTracker } from './stats-tracker';
import { test } from './test';

let tracker = StatsTracker.instance;

tracker.widgetViews = 90;
tracker.buttonClicks = 64;
tracker.facebookShares = 20;
tracker.twitterShares = 30;

console.log(`Widget Views:${tracker.widgetViews}`);
console.log(`Button clicks:${tracker.buttonClicks}`);
console.log(`Facebook Shares:${tracker.facebookShares}`);
console.log(`Twitter Shares:${tracker.twitterShares}`);

tracker.widgetViews++;
tracker.twitterShares += 2;

test();
