document.getElementById('predictForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const mileage = document.getElementById('mileage').value;
    const age = document.getElementById('age').value;
    const brand = document.getElementById('brand').value;

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mileage, age, brand })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').style.display = 'block';
        document.getElementById('value').textContent = data.predicted_value.toFixed(2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
