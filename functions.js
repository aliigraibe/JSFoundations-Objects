/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const channels = require("./channels.json");


// console.log(channels[0]);

/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
const  getChannelName = (channel) => channel.name

console.log(getChannelName(channels[0]))

/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
const numberOfVideos = (channel) => channel.videos.length

 console.log(numberOfVideos(channels[0]))

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
const channelHasVideo= (videoTitle, channel) => channel.videos.some((video => video.title===videoTitle));
      
    
  

 console.log(channelHasVideo("The Universal S", channels[0]));
 //console.log(channelHasVideo("The Universal S", channels[1]));

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
const getChannelByName = (channelName, channels) => channels.find((channel => channelName === channel.name))

 
 
 
 console.log(getChannelByName("PowerfulJRE", channels))
 //console.log(getChannelByName("Universal", channels))

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
 const  getChannelByVideoTitle = (videoTitle, channels)=> channels.find((channel) => channelHasVideo(videoTitle, channel));
// getChannelName(getChannelByName() , channelHasVideo() )

console.log(getChannelByVideoTitle("The Universal S", channels));

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
const searchChannels= (query, channels) => 

channels.filter(channel=> channel.description.includes(query)||channel.name.includes(query));



 console.log(searchChannels("the", channels))

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
};
