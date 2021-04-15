var http = new XMLHttpRequest();
http.open("GET", "http://5d76bf96515d1a0014085cf9.mockapi.io/quiz", true);
http.onreadystatechange = function () {
    if (this.readyState === 4) {
        var my_quiz = document.getElementById("my-quiz");
        for (var j = 0; j < 5; j++) {
            var div_form = document.createElement("div");
            div_form.appendChild(document.createElement("br"));
            var my_form = document.createElement("form");
            var ques = document.createElement("h1").appendChild(document.createTextNode("What is your name"));
            my_form.appendChild(ques);
            my_form.appendChild(document.createElement("br"));
            for (var i = 0; i < 4; i++) {
                var label_qn = document.createElement("label");
                label_qn.setAttribute("for", "q1");
                label_qn.innerHTML = "klkl";
                var option = document.createElement("input");
                option.setAttribute("type", "radio");
                option.setAttribute("id", "q1");
                my_form.appendChild(label_qn);
                my_form.appendChild(option);
                my_form.appendChild(document.createElement("br"));
            }

            div_form.appendChild(my_form);
            my_quiz.appendChild(div_form);
        }
    }
}
http.send();
// var my_quiz = document.getElementById("my-quiz");
// for (var j = 0; j < 5; j++) {
//     var div_form = document.createElement("div");
//     div_form.appendChild(document.createElement("br"));
//     var my_form = document.createElement("form");
//     var ques = document.createElement("h1").appendChild(document.createTextNode("What is your name"));
//     my_form.appendChild(ques);
//     my_form.appendChild(document.createElement("br"));
//     for (var i = 0; i < 4; i++) {
//         var label_qn = document.createElement("label");
//         label_qn.setAttribute("for", "q1");
//         label_qn.innerHTML = "klkl";
//         var option = document.createElement("input");
//         option.setAttribute("type", "radio");
//         option.setAttribute("id", "q1");
//         my_form.appendChild(label_qn);
//         my_form.appendChild(option);
//         my_form.appendChild(document.createElement("br"));
//     }

//     div_form.appendChild(my_form);
//     my_quiz.appendChild(div_form);
// }

