
const readLineSync=require("readline-sync");
var score=0;

var userName=readLineSync.question("Enter Your Username : ")
console.log("Hey "+userName+" Lets See how well do you know Carsbubu")
console.log("write answer to each question presented to you")

var que1={
    que:"Which is most Fastest Car ? ",
    ans:"Buggati"
}
var que2={
    que:"Which is largest car company in the world  ? ",
    ans:"Toyota"
}
var que3={
    que:"Which is most comfortable car ? ",
    ans:"Mercedes S-class"
}
var que4={
    que:"Which is most safest car brand ? ",
    ans:"Acura"
}


function play(que,ans){

  var answer=readLineSync.question(que)
  if(answer.toLowerCase()===ans.toLowerCase()){
    console.log("Right")
    score =score+1;
  }
  else{
    console.log("Wrong")
    score=score-1;
  }

}

var questions=[que1,que2,que3,que4];

questions.forEach((q)=>{
  play(q.que,q.ans)
})

console.log("Final Score is "+score);
console.log("-------------------");