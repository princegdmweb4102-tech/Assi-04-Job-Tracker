let interviewList = [];
let rejectedList = []
let currentStatus = 'all'

let total = document.getElementById('total');
let thrivingCount = document.getElementById('interviewCount')
let strugglingCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn')
const thrivingFilterBtn = document.getElementById('interview-filter-btn')
const strugglingFilterBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')


function calculateCount() {
    total.innerText = allCardSection.children.length 
    thrivingCount.innerText = interviewList.length
    strugglingCount.innerText = rejectedList.length
}

calculateCount()

// step 1;
function toggleStyle(id) {
    // adding gray bg for all
    allFilterBtn.classList.add('bg-transparent', 'text-black')
    interviewFilterBtn.classList.add('bg-transparent', 'text-black')
    rejectedFilterBtn.classList.add('bg-transparent', 'text-black')

    // if any button has black then remove
    allFilterBtn.classList.remove('bg-transparent', 'text-white')
    interviewFilterBtn.classList.remove('bg-transparent', 'text-white')
    rejectedFilterBtn.classList.remove('bg-transparent', 'text-white')

    // console.log(id);
    const selected = document.getElementById(id)//this is the button that clicked for filter

    currentStatus = id
    console.log(currentStatus);
    // console.log(selected);

    // adding black bg for current button
    selected.classList.remove('bg-transparent', 'text-black')
    selected.classList.add('bg-sky-500', 'text-white')
    // step 1 finish
// show and hidden particular section
    // step 4 start
    // filtering while clicking the filter button (All, interview, rejected)
    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected()
    }
}