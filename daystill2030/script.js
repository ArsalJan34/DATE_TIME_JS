var today = new Date();
var doomsday = new Date("June 30, 2035");
var msToday = today.getTime();
var msDoomsday = doomsday.getTime();
var msDiff = msDoomsday - msToday;
var dDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));

console.log("Days till June 30, 2035:", dDiff);
