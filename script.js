let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount');

const allCardSection = document.getElementById('allCards');

function calculateCount() {
    total.innerText = allCardSection.children.length 
}

calculateCount()