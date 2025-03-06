
function showGuide() {
    document.getElementById('guide').style.display = 'block';
}
function showMessage() {
    alert("Your plan is created!");
}
function validateExercises() {

    const exerciseName = document.getElementById('exerciseName').value.trim();
    const repetitions = document.getElementById('repetitions').value.trim();
    const intensity = document.getElementById('intensity').value.trim();


    const validExerciseRegex = /^(Push-ups|Squats|Cardio Training)$/;


    const validIntensityRegex = /^(High|Low)$/;


    document.getElementById('errorMsg').style.display = 'none';
    document.getElementById('intensityErrorMsg').style.display = 'none';


    if (!validExerciseRegex.test(exerciseName)) {
        document.getElementById('errorMsg').style.display = 'block';
        return; 
    }


    if (isNaN(repetitions) || repetitions <= 0) {
        alert('Please enter a valid number of repetitions.');
        return;
    }


    if (!validIntensityRegex.test(intensity)) {
        document.getElementById('intensityErrorMsg').style.display = 'block';
        return; 
    }

    alert('Workout logged successfully!');
}
function guide(){
    const guide = document.getElementById('guide')
    guide.style.display = 'block';
}