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
const moods = ["energetic", "anxious", "motivated", "happy", "depressed"];

document.getElementById("time_btn").addEventListener("click", update_date);

document.getElementById("today_survey_btn").addEventListener("click", collect_data);

function update_date() {
    time_text.innerHTML = Date();
}

function collect_data() {
    let entry = {hours_slept: parseInt(document.getElementById("sleep").value)}

    if (isNaN(entry.hours_slept)) {
        alert("Please enter a valid number for sleep")
        return;
    }

    for (let mood of moods) {
        entry[mood] = document.getElementById(mood).checked
        document.getElementById(mood).checked = false
    }

    user_data.push(entry)

    document.getElementById('sleep').value = ""

    recalculate_user_html()
}

function recalculate_user_html(){
    let totals = {hours_slept: 0}
    for (let mood of moods){
        totals[mood] = 0
    }

    for (let data of user_data) {
        totals.hours_slept += data.hours_slept
        for (let mood of moods) {
            totals[mood] += data[mood] ? 1 : 0
        }
    }

    document.getElementById("hours_slept").innerHTML = `Hours Slept: ${totals.hours_slept}`
    document.getElementById("day_count").innerHTML = `Days Logged: ${user_data.length}`
    document.getElementById("avg_hours_slept").innerHTML = `Hours Slept: ${totals.hours_slept/user_data.length}`
    console.log(totals.hours_slept)
    for (let mood of moods) {
        document.getElementById(`days_${mood}`).innerHTML = `Days ${mood}: ${totals[mood]}`
    }
}