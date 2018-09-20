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
    fullEvents=fullEvents+"1st - "+ events[0] +"    /    ";
    if(events.length>1){
        fullEvents=fullEvents+"2nd - "+ events[1] +"    /    ";
    }
    if(events.length>2){
        fullEvents=fullEvents+"3rd - "+ events[2] +"    /    ";
    }
    for(i=3;i<events.length;i++){
            fullEvents=fullEvents+(i+1).toString()+"th - "+ events[i]+"    /    ";
    }
    return fullEvents;
}
module.exports.getFullEventAsArray=()=>{
    return events;
}
