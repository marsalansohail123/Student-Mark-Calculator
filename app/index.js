const submit = () => {
    let eng = document.getElementById('eng').value;
    let urdu = document.getElementById('urdu').value;
    let mths = document.getElementById('mths').value;
    let sci = document.getElementById('sci').value;
    let show = document.getElementById('showGrade');
    let totalMarks = parseFloat(eng) + parseFloat(urdu) + parseFloat(mths) + parseFloat(sci);
    let Grade = "";
    console.log(totalMarks);
    let perc = totalMarks / 400 * 100;
    console.log(perc)
    if (perc <= 100 && perc >= 80) {
        Grade = "A"
    } else if (perc <= 79 && perc >= 60) {
        Grade = "B"
    } else if (perc <= 59 && perc >= 40) {
        Grade = "C"
    } else {
        Grade = "F"
    }

    if (perc >= 40) {
        show.innerHTML += `Your Total Marks is ${totalMarks} out of 400 & Your Percentage is ${perc}. <br /> Your Grade is ${Grade} & You are Passed`;
    } else {
        show.innerHTML += `Your Total Marks is ${totalMarks} out of 400 & Your Percentage is ${perc}. <br /> Your Grade is ${Grade} & You are Failed`;
    }

}

const Reset = () => {
    let eng = document.getElementById('eng').value = "";
    let urdu = document.getElementById('urdu').value = "";
    let mths = document.getElementById('mths').value = "";
    let sci = document.getElementById('sci').value = "";
    let show = document.getElementById('showGrade');
    show.innerHTML = "";
}