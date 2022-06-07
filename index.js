const searchButton = document.querySelector('button');
const input = document.querySelector('input');
const age_box = document.getElementById('age')

let age;
input.addEventListener('change', e => {
    age = e.target.value;
})

const display = () => {
    searchButton.addEventListener('click', e => {
        // alert(`wibu có tuổi đời là ${age}`)
        if (age === undefined) {
            age_box.innerText = `wibu vạn tuế`
            return
        }
        else if (age >= 100) {
            age_box.innerText = 'wibu bất tử'
            return
        }
        age_box.innerText = `wibu có tuổi đời là ${age}`
    })
}

display();