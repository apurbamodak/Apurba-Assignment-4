let interviewList = [];
let rejectedList = [];
let currentStatus = 'total';

let total = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allCardsSection = document.getElementById("allCards");
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');


function calculateCount() {
    total.innerText = allCardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();

const totalFilterBtn = document.getElementById("total-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

function toggleStyle(id) {
    totalFilterBtn.classList.remove('bg-primary/80', 'text-white');
    interviewFilterBtn.classList.remove('bg-primary/80', 'text-white');
    rejectedFilterBtn.classList.remove('bg-primary/80', 'text-white');

    totalFilterBtn.classList.add('bg-gray-50');
    interviewFilterBtn.classList.add('bg-gray-50');
    rejectedFilterBtn.classList.add('bg-gray-50');

    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-gray-50', 'text-black');
    selected.classList.add('bg-primary/80', 'text-white');

    if (id == 'interview-filter-btn') {
        allCardsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        randerInterview()
    } else if (id == 'total-filter-btn') {
        allCardsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    } else if (id == 'rejected-filter-btn') {
        allCardsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        randerReject();
    }

}

mainContainer.addEventListener("click", function (event) {


    if (event.target.classList.contains('interview-btn')) {
        const cardParentNode = event.target.parentNode.parentNode;

        const companyName = cardParentNode.querySelector(".companyName").innerText;
        const jobPosition = cardParentNode.querySelector(".jobPosition").innerText;
        const jobDetails = cardParentNode.querySelector(".jobDetails").innerText;
        const update = cardParentNode.querySelector(".update").innerText;
        const note = cardParentNode.querySelector(".note").innerText;


        cardParentNode.querySelector(".update").innerText = 'Interview';

        const cardinfo = {
            cardParentNode,
            companyName,
            jobPosition,
            jobDetails,
            update: "Interview",
            note
        }

        const cardExist = interviewList.find(item => item.cardParentNode == cardinfo.cardParentNode);

        if (!cardExist) {
            interviewList.push(cardinfo)
        }

        rejectedList = rejectedList.filter(item => item.cardParentNode != cardinfo.cardParentNode);

        calculateCount();

        if (currentStatus == 'rejected-filter-btn') {
            randerReject();
        }

    } else if (event.target.classList.contains('rejected-btn')) {

        const cardParentNode = event.target.parentNode.parentNode;
        const companyName = cardParentNode.querySelector(".companyName").innerText;
        const jobPosition = cardParentNode.querySelector(".jobPosition").innerText;
        const jobDetails = cardParentNode.querySelector(".jobDetails").innerText;
        const update = cardParentNode.querySelector(".update").innerText;
        const note = cardParentNode.querySelector(".note").innerText;

        cardParentNode.querySelector(".update").innerText = 'Rejected';
        const cardinfo = {
            cardParentNode,
            companyName,
            jobPosition,
            jobDetails,
            update: "Rejected",
            note
        }

        const cardExist = rejectedList.find(item => item.cardParentNode == cardinfo.cardParentNode);

        if (!cardExist) {
            rejectedList.push(cardinfo)
        }

        interviewList = interviewList.filter(item => item.cardParentNode != cardinfo.cardParentNode);

        if (currentStatus == 'interview-filter-btn') {
            randerInterview();
        }

        calculateCount();

    } else if (event.target.closest('.delete')) {

        const cardParentNode = event.target.closest('.card');

        // remove from interview list
        interviewList = interviewList.filter(item =>
            item.cardParentNode != cardParentNode
        );

        // remove from rejected list
        rejectedList = rejectedList.filter(item =>
            item.cardParentNode != cardParentNode
        );

        // remove from screen
        cardParentNode.remove();

        // update count
        calculateCount();

        // re-render filtered section if open
        if (currentStatus == 'interview-filter-btn') {
            randerInterview();
        }

        if (currentStatus == 'rejected-filter-btn') {
            randerReject();
        }

    }

})

function randerInterview() {
    filteredSection.innerHTML = '';

    for (let interview of interviewList) {
        console.log(interview)

        let div = document.createElement('div');
        div.className = 'card-1 flex justify-between bg-gray-100 p-3 rounded-2xl'
        div.innerHTML = `
            <div class="left-part">
                    <h3 class="companyName text-xl font-bold text-[#002C5C]">${interview.companyName}</h3>
                    <p class="jobPosition text-base-content/70 text-[16px]">${interview.jobPosition}</p>
                    <p class="jobDetails text-base-content/70 text-sm py-4">${interview.jobDetails}</p>
                    <div class="space-y-1 pb-4">
                        <p class="update">${interview.update}</p>
                        <p class="note text-base-content/70 text-sm">${interview.note}</p>
                    </div>
                    <div class="">
                        <button class="interview-btn btn text-green-400 border-green-400">Interview</button>
                        <button class="rejected-btn btn text-red-400 border-red-400">Rejected</button>
                    </div>
                </div>
                <div class="right-part">
                    <button class="delete btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filteredSection.appendChild(div)
    }
}

function randerReject() {
    filteredSection.innerHTML = '';

    for (let reject of rejectedList) {


        let div = document.createElement('div');
        div.className = 'card-1 flex justify-between bg-gray-100 p-3 rounded-2xl'
        div.innerHTML = `
            <div class="left-part">
                    <h3 class="companyName text-xl font-bold text-[#002C5C]">${reject.companyName}</h3>
                    <p class="jobPosition text-base-content/70 text-[16px]">${reject.jobPosition}</p>
                    <p class="jobDetails text-base-content/70 text-sm py-4">${reject.jobDetails}</p>
                    <div class="space-y-1 pb-4">
                        <p class="update">${reject.update}</p>
                        <p class="note text-base-content/70 text-sm">${reject.note}</p>
                    </div>
                    <div class="">
                        <button class="interview-btn btn text-green-400 border-green-400">Interview</button>
                        <button class="rejected-btn btn text-red-400 border-red-400">Rejected</button>
                    </div>
                </div>
                <div class="right-part">
                    <button class="delete btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filteredSection.appendChild(div)
    }
}