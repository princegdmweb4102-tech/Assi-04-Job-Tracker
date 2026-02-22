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


