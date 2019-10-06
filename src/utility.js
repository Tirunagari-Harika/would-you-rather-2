// converts object {i:{},j:{}} into an array [{},{}]
export const getArray = (data) => {
    let Arr = [];
    for(let j in data){
        Arr.push(data[j]);
    }
    return Arr;
}

// finds out '1' in [1,2,3]
export const checkSingleEleInArr = (arr,ele) => {
    if(arr.length){       
        if(arr.indexOf(ele) !== -1){
            return true;
        }
    }
    return false;    
}



// getArray in entire users
export const getAnswersArrUsers = (users) => {
    let updatedArr = [];
    for(let i=0; i<users.length; i++){
        let questionArr = getArray(users[i].answers);
        updatedArr.push({...users[i], answers:questionArr });
    }
    return updatedArr;
}

//sort array based on the questions answered and created
export const sortUsersArr = (users) => {
    let updatedArr = [];
    updatedArr = users.sort(function(a, b) {
        var x = a["answers"].length + a["questions"].length; 
        var y = b["answers"].length + b["questions"].length;
      //  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
    return updatedArr;
}


export const getItemInObj = (obj,id) => {
    return obj[id];
}


// checking the vote in optionOne and OptionTwo
export const checkUserAnsweredQuestion = (question,currentUserId) => {
   // console.log("Options Checking ", question);
    if((!question.optionOne.votes && !question.optionTwo.votes) ||
        (!question.optionOne.votes.length && !question.optionTwo.votes.length)){
           // console.log("Options Checking not option ", question);
        return false;
    }
    // votes of optionOne
    if(question.optionOne.votes && 
        checkSingleEleInArr(question.optionOne.votes,currentUserId)){
           // console.log("option checking optionOne");
        return true;
    }
    // votes of optionTwo
    if(question.optionTwo.votes && 
        checkSingleEleInArr(question.optionTwo.votes,currentUserId)){
          //  console.log("option checking optionTwo");
        return true;
    }   

   // console.log("no option checking ");

    return false;
}
