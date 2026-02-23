let interviewList = [];
let rejectedList = []
let currentStatus = 'all'



let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')


function calculateCount() {
    total.innerText = allCardSection.children.length 
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
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


// step 2 delegation  
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.closest('.card');

        const plantName = parenNode.querySelector('.plantName')?.innerText || ''
        const light = parenNode.querySelector('.light')?.innerText || ''
        const water = parenNode.querySelector('.water')?.innerText || ''
        const status = parenNode.querySelector('.status')?.innerText || ''
        const notes = parenNode.querySelector('.notes')?.innerText || ''

        const statusNode = parenNode.querySelector('.status')
        if (statusNode) statusNode.innerText = 'Interview'

        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Interview',
            notes
        }

        const plantExist = interviewList.find(item => item.plantName == cardInfo.plantName)
        if (!plantExist) interviewList.push(cardInfo)

        // removing the plant from rejected list
        rejectedList = rejectedList.filter(item => item.plantName != cardInfo.plantName)

        // remove from All view so it only appears in the Interview module
        if (allCardSection.contains(parenNode)) parenNode.remove()

        // after remove rerender the html if needed
        if (currentStatus == 'rejected-filter-btn') renderRejected()

        calculateCount()

    } else if (event.target.classList.contains('rejected-btn')) {
        const parenNode = event.target.closest('.card');

        const plantName = parenNode.querySelector('.plantName')?.innerText || ''
        const light = parenNode.querySelector('.light')?.innerText || ''
        const water = parenNode.querySelector('.water')?.innerText || ''
        const status = parenNode.querySelector('.status')?.innerText || ''
        const notes = parenNode.querySelector('.notes')?.innerText || ''

        const statusNode = parenNode.querySelector('.status')
        if (statusNode) statusNode.innerText = 'Rejected'

        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Rejected',
            notes
        }

        const plantExist = rejectedList.find(item => item.plantName == cardInfo.plantName)
        if (!plantExist) rejectedList.push(cardInfo)

        // removing the plant from interview list
        interviewList = interviewList.filter(item => item.plantName != cardInfo.plantName)

        // remove from All view so it only appears in the Rejected module
        if (allCardSection.contains(parenNode)) parenNode.remove()

        // after remove rerender the html if needed
        if (currentStatus == "interview-filter-btn") renderInterview();
        calculateCount()
    }

    else {
        const deleteBtn = event.target.closest ? event.target.closest('.btn-delete') : null;
        if (deleteBtn) {
            const parenNode = deleteBtn.closest('.card');
            if (!parenNode) return;

            const plantName = parenNode.querySelector('.plantName')?.innerText || ''

            // remove from data arrays
            interviewList = interviewList.filter(item => item.plantName != plantName)
            rejectedList = rejectedList.filter(item => item.plantName != plantName)

            // remove DOM node from whichever section it's in
            parenNode.remove()

            // rerender filtered view if currently showing that filter
            if (currentStatus == 'interview-filter-btn') renderInterview()
            if (currentStatus == 'rejected-filter-btn') renderRejected()

            calculateCount()
            return
        }
    }

})





// step 3  html file create
function renderInterview() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // if no interview items, show a friendly placeholder card
    if (interviewList.length === 0) {
        const emptyDiv = document.createElement('div')
        emptyDiv.className = 'card flex flex-col items-center justify-center border p-8 text-center'
        emptyDiv.innerHTML = `
            <p class="text-2xl font-semibold">No interview jobs available</p>
            <p class="text-sm text-gray-600 mt-2">There are currently no jobs marked for interview.</p>
        `
        filterSection.appendChild(emptyDiv)
        return
    }

    // crating innerHtml
    for (let interview of interviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8'
        div.innerHTML = `
         <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="plantName text-4xl">${interview.plantName}</p>
                        <p class="latinName">Latin Name</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="light bg-gray-200 px-5">${interview.light}</p>
                        <p class="water bg-gray-200 px-5">${interview.water}</p>
                    </div>
                    <!-- part 3 -->
                     <p class="status">${interview.status}</p>
                     <p class="notes">${interview.notes}</p>

                     <div class="flex gap-5">
                        <button class="interview-btn bg-green-200 px-4 py-2">INTERVIEW</button>
                        <button class="rejected-btn bg-red-200 px-4 py-2">REJECTED</button>
                     </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
        `
        filterSection.appendChild(div)
    }
}

function renderRejected() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''
    // if no rejected items, show a friendly placeholder card
    if (rejectedList.length === 0) {
        const emptyDiv = document.createElement('div')
        emptyDiv.className = 'card flex flex-col items-center justify-center border p-8 text-center'
        emptyDiv.innerHTML = `
            <p class="text-2xl font-semibold">No rejected jobs available</p>
            <p class="text-sm text-gray-600 mt-2">There are currently no jobs marked as rejected.</p>
        `
        filterSection.appendChild(emptyDiv)
        return
    }
    // crating innerHtml
    for (let rejected of rejectedList) {

        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8'
        div.innerHTML = `
         <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="plantName text-4xl">${rejected.plantName}</p>
                        <p class="latinName">Latin Name</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="light bg-gray-200 px-5">${rejected.light}</p>
                        <p class="water bg-gray-200 px-5">${rejected.water}</p>
                    </div>
                    <!-- part 3 -->
                     <p class="status">${rejected.status}</p>
                     <p class="notes">${rejected.notes}</p>

                     <div class="flex gap-5">
                        <button class="interview-btn bg-green-200 px-4 py-2">INTERVIEW</button>
                        <button class="rejected-btn bg-red-200 px-4 py-2">REJECTED</button>
                     </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
        `
        filterSection.appendChild(div)
    }
}