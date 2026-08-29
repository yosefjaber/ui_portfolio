let time_text = document.getElementById("time_text");

let example_user_data_1 = {
    hours_slept: 2,
    feelings: ['anxious', 'depressed']
}

let example_user_data_2 = {
    hours_slept: 10,
    feelings: ['energetic', 'motivated']
}

let example_user_data_3 = {
    hours_slept: 8,
    feelings: ['happy']
}

let user_data = [example_user_data_1, example_user_data_2, example_user_data_3]

document.getElementById("time_btn").addEventListener("click", update_date);

time_text.innerHTML = Date();

function update_date() {
    time_text.innerHTML = Date();
}