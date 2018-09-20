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
module.exports.getFullEventAsString=()=>{
    fullEvents="";
    if(events.length==0){
        return "There are no events to show"
    }
    fullEvents=fullEvents+"1st - "+ events[0] +"\n";
    if(events.length>1){
        fullEvents=fullEvents+"2nd - "+ events[1] +"\n";
    }
    if(events.length>2){
        fullEvents=fullEvents+"3rd - "+ events[2] +"\n";
    }
    for(i=3;i<=event.length;i++){
            fullEvents=fullEvents+i.toString()+"th - "+ events[i]+"\n";
    }
    return fullEvents;
}
