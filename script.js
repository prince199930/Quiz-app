
var my_quiz = document.getElementById("my-quiz");
const data = async () => {
    const f = await fetch("http://5d76bf96515d1a0014085cf9.mockapi.io/quiz");
    const data = await f.json();


    //--------------------------------------------------------------------------------

    console.log(data)
    var answers = [];
    for (var x = 0; x < 5; x++) {
        // answers[x]=data[x].answer;
        answers.push(data[x].answer)

       
    }
    var score = 0;
    const func = (e) => {
        
        var xx=e.target.id;
        console.log(xx)
        console.log(e.target.name)
        
        if (xx==answers[Number(e.target.name)]){
            score+=1;
            console.log(score)
        }
}

const compile = () => {
    alert(`your score is : ${score}` )
    location.reload();
}
console.log(answers);
for (var j = 0; j < data.length; j++) {
    var div_form = document.createElement("div");
    div_form.style.boxShadow = "0 2px 8px #a4a3a3"
    div_form.style.width = "77%";
    div_form.style.marginTop = "3%";
    div_form.style.padding = "2%";
    div_form.appendChild(document.createElement("br"));
    var my_form = document.createElement("form");
    my_form.className = "quesn";
    // my_form.setAttribute('id', data[j].id)
    // my_form.setAttribute("onsubmit", `func(e)`);
    var ques = document.createElement("B");
    ques.style.fontSize = "99%"
    ques.style.marginBottom = "2%"
    ques.appendChild(document.createTextNode(data[j].question));
    my_form.appendChild(ques);
    my_form.appendChild(document.createElement("br"));
    for (var i = 0; i < data[j].options.length; i++) {
        var label_qn = document.createElement("label");
        label_qn.setAttribute("for", j + i);
        label_qn.innerHTML = data[j].options[i];
        var option = document.createElement("input");
        option.setAttribute("type", "radio");
        option.setAttribute("id",  i);
        option.setAttribute("name", j);
        option.setAttribute("value", i + 1);
        option.addEventListener("click", (e) => func(e));
        my_form.appendChild(label_qn);
        my_form.appendChild(option);
        my_form.appendChild(document.createElement("br"));


    }


    div_form.appendChild(my_form);
    my_quiz.appendChild(div_form);


}
var submit = document.createElement("button");
submit.style.marginTop = "3%";
submit.style.marginBottom = "3%";
submit.style.borderRadius = "29%";
submit.style.width = "20%";
submit.style.border = "none";
submit.style.backgroundColor = "#009688";
submit.style.height = "2rem";
submit.innerHTML = "SUBMIT";
submit.addEventListener("click", ()=>compile())
my_quiz.appendChild(submit);


}


data();