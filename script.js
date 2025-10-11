// Master list of course codes and their full names
const courseNameMap = {
    "MMPC15": "Research Methodology for Management Decisions",
    "MMPC16": "International Business Management",
    "MMPH1": "Organisational Theory and Design",
    "MMPH2": "Human Resource Development",
    "MMPH4": "Industrial and Employment Relations",
    "MMPH7": "Compensation and Reward Management",
    // Add other course codes and names here as needed
};

// Schedule Data - CORRECTED AND EXPANDED
const scheduleData = [
    { date: "01.12.2025 MON", shift1: "MS01/BHC005/MER001/PHE11/MAW001/MIS021/MBC007/BANC133/BECC133/BSOE145/BANC101/", shift2: "MEG01/MEV003/MGS041/MUD001/CHE04/ECO11/BES061/MEDS051/MMPC014/BAM001/BLI011/BEYE022/BPHCT131/BCHET149/BHIE141/BPCE145/" },
    { date: "02.12.2025 TUE", shift1: "MS08/BHC006/FST01/MPH001/BANC134/BECC134/", shift2: "MUD002/MAL001/MMPC008/BNRI101/CHE06/BSM015/TS07/BLI012/MIS031/BEYE025/BSKG172/BCHCT131/BGDG172/BEGG172/BEGG174/BPAG172/BPAG174/BPCG172/BPCG174/BPCG176/BSOG176/BPYG172/" },
    { date: "03.12.2025 WED", shift1: "MS02/MAW002/BPSE212/BLE004/IBO04/MIS022/MBC009/BHDAE182/", shift2: "MCS231/BPY010/BGS04/BSM016/BES062/MEDS052/MMPC015/BAM002/MST020/BLII013/MAM051/BPCS187/BSOS185/BEGS185/BCOS185/" },
    { date: "06.12.2025 SAT", shift2: "MMPH1/"},
    { date: "09.12.2025 TUE", shift2: "MMPC016/"},
    { date: "10.12.2025 WED", shift2: "MMPH2/"},
    { date: "13.12.2025 SAT", shift2: "MMPH4/"},
    { date: "20.12.2025 SAT", shift2: "MMPH7/"},
    // ...The rest of your original scheduleData would go here...
];

let allPaperCodes = [];
let selectedCodes = []; // Stores objects: { code: 'MMPC15', name: '...' }

function initialize() {
    const codeSet = new Set();
    scheduleData.forEach(day => {
        const shift1 = day.shift1 || '';
        const shift2 = day.shift2 || '';
        (shift1 + shift2).split('/').forEach(code => {
            const trimmedCode = code.trim().toUpperCase();
            if (trimmedCode) codeSet.add(trimmedCode);
        });
    });
    // Ensure all codes from the name map are also in the dropdown
    Object.keys(courseNameMap).forEach(code => codeSet.add(code));
    
    allPaperCodes = Array.from(codeSet).sort();
    populateDropdown();
}

function populateDropdown() {
    const select = document.getElementById('paperCodeSelect');
    select.innerHTML = '<option value="">-- Choose Your Course Code --</option>';
    const selectedCodeStrings = selectedCodes.map(c => c.code);
    const availableCodes = allPaperCodes.filter(code => !selectedCodeStrings.includes(code));
    availableCodes.forEach(code => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = code;
        select.appendChild(option);
    });
}

function addCode() {
    const select = document.getElementById('paperCodeSelect');
    const code = select.value;
    if (code && !selectedCodes.some(c => c.code === code)) {
        // Look up the full name from our map
        const name = courseNameMap[code] || 'Course Name Not Found';
        selectedCodes.push({ code: code, name: name });
        updateSelectedCodesDisplay();
        populateDropdown();
    }
}

function removeCode(codeToRemove) {
    selectedCodes = selectedCodes.filter(c => c.code !== codeToRemove);
    updateSelectedCodesDisplay();
    populateDropdown();
}

function updateSelectedCodesDisplay() {
    const container = document.getElementById('selectedCodesContainer');
    container.innerHTML = '';
    if (selectedCodes.length === 0) {
        container.innerHTML = '<span style="color: #6c757d;">Your selected courses will appear here.</span>';
    } else {
        selectedCodes.forEach(course => {
            const pill = document.createElement('div');
            pill.className = 'code-pill';
            pill.innerHTML = `
                <span>${course.code}</span>
                <span class="remove-code" title="Remove ${course.code}" onclick="removeCode('${course.code}')">&times;</span>
            `;
            container.appendChild(pill);
        });
    }
}

function generateSchedule() {
    const resultDiv = document.getElementById('scheduleResult');
    const instructionsDiv = document.getElementById('instructions');
    if (selectedCodes.length === 0) {
        resultDiv.innerHTML = '<p style="color: red; font-weight: bold;">Please select a course code first.</p>';
        instructionsDiv.innerHTML = '';
        return;
    }

    const userCodeStrings = selectedCodes.map(c => c.code.toUpperCase());
    let foundSchedule = [];
    let foundCodes = new Set();

    scheduleData.forEach(day => {
        const shift1Codes = (day.shift1 || '').toUpperCase().split('/');
        const shift2Codes = (day.shift2 || '').toUpperCase().split('/');

        userCodeStrings.forEach(userCode => {
            if (shift1Codes.includes(userCode)) {
                foundSchedule.push({ date: day.date.split(' ')[0], day: day.date.split(' ')[1], code: userCode, shift: 1 });
                foundCodes.add(userCode);
            }
            if (shift2Codes.includes(userCode)) {
                foundSchedule.push({ date: day.date.split(' ')[0], day: day.date.split(' ')[1], code: userCode, shift: 2 });
                foundCodes.add(userCode);
            }
        });
    });
    
    const notFoundCodes = userCodeStrings.filter(code => !foundCodes.has(code));
    displaySchedule(foundSchedule, notFoundCodes);
}

function displaySchedule(schedule, notFoundCodes) {
    const resultDiv = document.getElementById('scheduleResult');
    const instructionsDiv = document.getElementById('instructions');
    let finalHTML = '';
    
    if (schedule.length > 0) {
        const headerHTML = `
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th class="course-column">Course Code & Name</th>
                    <th>Date & Day</th>
                    <th>Shift & Time</th>
                </tr>
            </thead>
        `;

        let tableBodyHTML = '<tbody>';
        schedule.sort((a, b) => {
            const dateA = new Date(a.date.split('.').reverse().join('-'));
            const dateB = new Date(b.date.split('.').reverse().join('-'));
            return dateA - dateB;
        });

        schedule.forEach((item, index) => {
            const courseInfo = selectedCodes.find(c => c.code.toUpperCase() === item.code);
            const courseName = courseInfo ? courseInfo.name : '';
            const shiftInfo = item.shift === 1 ? '<span class="th-main-text">Shift 1</span><span class="th-sub-text">(10AM - 1PM)</span>' : '<span class="th-main-text">Shift 2</span><span class="th-sub-text">(2PM - 5PM)</span>';
            
            tableBodyHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td class="course-column">
                        <span class="th-main-text">${item.code}</span>
                        <span class="th-sub-text course-column">${courseName}</span>
                    </td>
                    <td class="date-day">
                        <span class="th-main-text">${item.date}</span>
                        <span class="th-sub-text">${item.day}</span>
                    </td>
                    <td>${shiftInfo}</td>
                </tr>
            `;
        });
        tableBodyHTML += '</tbody>';
        finalHTML += `<table class="schedule-table">${headerHTML}${tableBodyHTML}</table>`;
    }

    if (notFoundCodes.length > 0) {
        finalHTML += `
            <div class="instructions-container" style="border-left-color: #dc3545; background-color: #f8d7da; margin-top: 20px;">
                <h3 style="color: #721c24;">Schedule Not Found</h3>
                <p>The exam dates for the following course codes could not be found: 
                    <strong>${notFoundCodes.join(', ')}</strong>.
                </p>
            </div>
        `;
    }
    
    if (finalHTML === '') {
        resultDiv.innerHTML = '<p style="color: orange; font-weight: bold;">No schedule found for any of the selected codes.</p>';
        instructionsDiv.innerHTML = '';
        return;
    }

    resultDiv.innerHTML = finalHTML;
    
    instructionsDiv.innerHTML = `
        <h3>⚠️ Important Instructions</h3>
        <p>
            For courses involving Practical/Lab Exams, please contact your Regional Centre for the exact date, time, and venue. The information on your final Hall Ticket will be considered definitive.
        </p>
    `;
}

function resetAll() {
    selectedCodes = [];
    updateSelectedCodesDisplay();
    populateDropdown();
    document.getElementById('scheduleResult').innerHTML = '';
    document.getElementById('instructions').innerHTML = '';
    document.getElementById('paperCodeSelect').selectedIndex = 0;
}

window.onload = () => {
    initialize();
    updateSelectedCodesDisplay();
};