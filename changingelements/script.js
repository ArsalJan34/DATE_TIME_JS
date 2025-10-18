var d = new Date();
console.log("Before change:", d);

d.setFullYear(2001);
// we are setting months to 11 because december according to index is at 11
d.setMonth(11);
d.setDate(25);
// we are setting the hours in 24 hours format so 15 here means 3 so we are is me
// my self dont bother
d.setHours(15);
d.setMinutes(30);
d.setSeconds(45);

console.log("After changing:", d);
