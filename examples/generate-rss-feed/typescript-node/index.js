"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Load the RssApp SDK
var rss_generator_api_1 = __importDefault(require("site-to-rss"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create RssApp service object
var rssApp = new rss_generator_api_1.default({ apiKey: process.env.RSS_APP_API_KEY, apiSecret: process.env.RSS_APP_API_SECRET });
// Call RssApp to create the feed
rssApp.feed
    .create({ url: 'https://bbc.com' })
    .then(function (feed) {
    console.log('Success', feed);
})
    .catch(function (err) {
    console.log('Error', err);
});
// Call RssApp to list the feeds
rssApp.feed
    .list({ limit: 10, offset: 0 })
    .then(function (list) {
    console.log('Success', list.data);
})
    .catch(function (err) {
    console.log('Error', err);
});
