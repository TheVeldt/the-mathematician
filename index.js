var events=[];


/* Set the actual event of your code */
module.exports.setEvent=(x)=>{
    events.push(x);
}
/* Get the actual event of your code */
module.exports.getLastEvent=()=>{
    if(events.length!=0){
        return events[events.length-1];
    }
    return null
}
