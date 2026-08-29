window.onload = function() {
  recalculate_user_html();
};

let time_text = document.getElementById("time_text");
time_text.innerHTML = Date();

let example_user_data_1 = {
    hours_slept: 2,
    energetic: false,
    anxious: true,
    motivated: false,
    happy: false,
    depressed: true
}

let example_user_data_2 = {
    hours_slept: 10,
    energetic: true,
    anxious: false,
    motivated: true,
    happy: false,
    depressed: false
}

let example_user_data_3 = {
    hours_slept: 8,
    energetic: false,
    anxious: false,
    motivated: true,
    happy: true,
    depressed: false
}

let user_data = [example_user_data_1, example_user_data_2, example_user_data_3]

document.getElementById("time_btn").addEventListener("click", update_date);

document.getElementById("today_survey_btn").addEventListener("click", collect_data);

function update_date() {
    time_text.innerHTML = Date();
}

function collect_data() {
    energetic = document.getElementById('energetic').checked
    anxious = document.getElementById('anxious').checked
    motivated = document.getElementById('motivated').checked
    happy = document.getElementById('happy').checked
    depressed = document.getElementById('depressed').checked
    sleep = parseInt(document.getElementById('sleep').value)

    if (isNaN(sleep)) {
        alert("Please enter a valid number for sleep")
        return;
    }

    user_data.push({
        hours_slept: sleep,
        energetic: energetic,
        anxious: anxious,
        motivated: motivated,
        happy: happy,
        depressed: depressed
    })

    document.getElementById('energetic').checked = false
    document.getElementById('anxious').checked = false
    document.getElementById('motivated').checked = false
    document.getElementById('happy').checked = false
    document.getElementById('depressed').checked = false
    document.getElementById('sleep').value = ""

    recalculate_user_html()
}

function recalculate_user_html(){
    let hours_slept = document.getElementById("hours_slept")
    let avg_hours_slept = document.getElementById("avg_hours_slept")
    let days_energetic = document.getElementById("days_energetic")
    let days_anxious = document.getElementById("days_anxious")
    let days_motivated = document.getElementById("days_motivated")
    let days_happy = document.getElementById("days_happy")
    let days_depressed = document.getElementById("days_depressed")

    let hours_slept_total = 0
    let days_energetic_total = 0
    let days_anxious_total = 0
    let days_motivated_total = 0
    let days_happy_total = 0
    let days_depressed_total = 0
    let num_days = user_data.length

    for (let data of user_data) {
        console.log(data.hours_slept)
        hours_slept_total += data.hours_slept
        days_energetic_total += data.energetic ? 1: 0
        days_anxious_total += data.anxious ? 1: 0
        days_motivated_total += data.motivated ? 1: 0
        days_happy_total += data.happy ? 1: 0
        days_depressed_total += data.energetic ? 1: 0
    }

    hours_slept.innerHTML = `Hours Slept: ${hours_slept_total}`
    days_energetic.innerHTML = `Days energetic: ${days_energetic_total}`
    days_anxious.innerHTML = `Days anxious: ${days_anxious_total}`
    days_motivated.innerHTML = `Days anxious: ${days_motivated_total}`
    days_happy.innerHTML = `Days anxious: ${days_happy_total}`
    days_depressed.innerHTML = `Days anxious: ${days_depressed_total}`
    avg_hours_slept.innerHTML = `Hours Slept on average: ${hours_slept_total/num_days}`
}