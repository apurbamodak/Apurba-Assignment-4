let interviewList = [];
let rejectedList = [];

let total = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allCardsSection = document.getElementById("allCards");


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

    selected.classList.remove('bg-gray-50', 'text-black');
    selected.classList.add('bg-primary/80', 'text-white');



}