// Master list of course codes and their full names, greatly expanded
const courseNameMap = {
    // MBA & Management (MMPC, MMPH, MS)
    "MMPC001": "Management Functions and Organisational Processes",
    "MMPC002": "Human Resource Management",
    "MMPC003": "Business Environment",
    "MMPC004": "Accounting for Managers",
    "MMPC005": "Quantitative Analysis for Managerial Applications",
    "MMPC006": "Marketing Management",
    "MMPC007": "Business Communication",
    "MMPC008": "Information Systems for Managers",
    "MMPC009": "Management of Machines and Materials",
    "MMPC010": "Managerial Economics",
    "MMPC011": "Social Processes and Behavioural Issues",
    "MMPC012": "Strategic Management",
    "MMPC013": "Business Law",
    "MMPC014": "Financial Management",
    "MMPC015": "Research Methodology for Management Decisions",
    "MMPC016": "International Business Management",
    "MMPH1": "Organisational Theory and Design",
    "MMPH2": "Human Resource Development",
    "MMPH4": "Industrial and Employment Relations",
    "MMPH7": "Compensation and Reward Management",
    "MS01": "Management Functions and Behaviour",
    "MS02": "Management of Human Resources",
    "MS03": "Economic and Social Environment",
    "MS05": "Management of Machines and Materials",
    "MS06": "Marketing for Managers",
    "MS08": "Information Systems for Managers",
    "MS09": "Managerial Economics",

    // English (MEG, BEGE, BEGC)
    "MEG01": "British Poetry",
    "BEGE101": "From Language to Literature",
    "BEGC131": "Individual and Society",
    "BEGC132": "Selections from Indian Writing: Cultural Diversity",
    "BEGC133": "British Literature",
    "BEGC134": "Reading The Novel",

    // Hindi (BHDE, BHDAE, EHD, BHDC)
    "BHDE101": "Hindi Gadya",
    "EHD01": "Hindi Gadya",
    "BHDAE182": "Hindi Bhasha aur Sampreshan",
    "BHDC131": "Hindi Sahitya Ka Itihas",
    "BHDC132": "Madhyakaleen Hindi Kavita",
    "BHDC133": "Aadhunik Hindi Kavita",
    "BHDC134": "Hindi Gadya Sahitya",

    // Foundational & Common Courses (FST, BEVAE, BSHF)
    "FST01": "Foundation Course in Science and Technology",
    "BEVAE181": "Environmental Studies",
    "BSHF101": "Foundation Course in Humanities and Social Sciences",

    // History (MHI, EHI, BHIC)
    "MHI01": "Ancient and Medieval Societies",
    "MHI02": "Modern World",
    "MHI04": "Political Structures in India",
    "MHI05": "History of Indian Economy",
    "EHI01": "Modern India: 1857-1964",
    "BHIC131": "History of India from the Earliest Times upto c. 300 CE",
    "BHIC132": "History of India from c. 300 to 1206",
    "BHIC133": "History of India from c. 1206 to 1707",
    "BHIC134": "History of India from 1707 to 1950",

    // Economics (ECO, BECC)
    "ECO01": "Business Organization",
    "ECO02": "Accountancy-I",
    "BECC131": "Principles of Microeconomics-I",
    "BECC132": "Principles of Microeconomics-II",
    "BECC133": "Principles of Macroeconomics-I",
    "BECC134": "Principles of Macroeconomics-II",

    // Political Science (MPS, BPSC)
    "MPS001": "Political Theory",
    "MPS002": "International Relations: Theory and Problems",
    "MPS003": "India: Democracy and Development",
    "MPS004": "Comparative Politics: Issues and Trends",
    "BPSC131": "Introduction to Political Theory",
    "BPSC132": "Indian Government and Politics",

    // Sociology (MSO, BSOC)
    "MSO001": "Sociological Theories and Concepts",
    "MSO002": "Research Methodologies and Methods",
    "BSOC131": "Introduction to Sociology",
    "BSOC132": "Sociology of India",

    // Computer Science (MCS, BCS)
    "MCS011": "Problem Solving and Programming",
    "MCS012": "Computer Organization and Assembly Language Programming",
    "BCS011": "Computer Basics and PC Software",
    "BCS012": "Mathematics",
};

// FULL AND ORIGINAL Schedule Data
const scheduleData = [
    { date: "01.12.2025 MON", shift1: "MS01/BHC005/MER001/PHE11/MAW001/MIS021/MBC007/BANC133/BECC133/BSOE145/BANC101/", shift2: "MEG01/MEV003/MGS041/MUD001/CHE04/ECO11/BES061/MEDS051/MMPC014/BAM001/BLI011/BEYE022/BPHCT131/BCHET149/BHIE141/BPCE145/" },
    { date: "02.12.2025 TUE", shift1: "MS08/BHC006/FST01/MPH001/BANC134/BECC134/", shift2: "MUD002/MAL001/MMPC008/BNRI101/CHE06/BSM015/TS07/BLI012/MIS031/BEYE025/BSKG172/BCHCT131/BGDG172/BEGG172/BEGG174/BPAG172/BPAG174/BPCG172/BPCG174/BPCG176/BSOG176/BPYG172/" },
    { date: "03.12.2025 WED", shift1: "MS02/MAW002/BPSE212/BLE004/IBO04/MIS022/MBC009/BHDAE182/", shift2: "MCS231/BPY010/BGS04/BSM016/BES062/MEDS052/MMPC015/BAM002/MST020/BLII013/MAM051/BPCS187/BSOS185/BEGS185/BCOS185/" },
    { date: "04.12.2025 THU", shift1: "ECO09/MEC008/MEC108/MECE104/MPH011/BBCCT113/BEGLA137/", shift2: "EHI01/MRWE002/BPY009/BHC012/BLII014/MIS032/BTSC101/MCH019/BSKC111/BHDE144/BSKE150/" },
    { date: "05.12.2025 FRI", shift1: "BEGE101/MIS023/MBCE015/MMPL001/BCOC135/BEGC134/BHDC134/BUDC134/BSKC134/BPHCT137/", shift2: "BHDE101/EHD01/BAM003/MST021/BES063/BEYE026/BSKG178/BRLI112/" },
    { date: "06.12.2025 SAT", shift1: "MDI106/BNS111/BNS211/MANE007/MSE030/BLE003/CBKG004/MEC002/MEC102/MPH002/MPH003/MAEE001/BGGCT135/BZYCT137/BEGG173/BHDG173/BPAG173/BPCG173/BSOG173/BSKG173/", shift2: "MEG18/MVS003/MET003/BGS012/CVG003/MCS021/BPY002/MSW011/BSMA004/MTT032/MNM014/MCI004/MMPH1/MMPO008/MMPM009/MMPF007/MCO024/BGS03/BFO010/BAM004/MST022/BRLI114/BEY004/MZO001/MIS033/BTSC102/BSOE148/BHDLA136/MCH018/" },
    { date: "08.12.2025 MON", shift1: "MCMM001/MCMM101/MHD02/MPS001/MS09/MSO001/MEC101/MEC001/MLII101/MGP001/MFN001/MSW001/MES011/MPY001/MFC001/MTT010/MJM001/MJM020/MJM120/MED001/MLIS101/MES004/MES081/MIP101/MEV001/IBO01/BEDS004/BEG005/BFEE102/BHC014/BHME102/BNS014/BNS102/BNS202/BPOI001/BPOI101/BPR005/BHC007/DCE04/DTG004/MIR011/MEV024/MVE001/BRL006/MVEI011/MME301/ECO12/BGP01/LSE07/MER002/OVA001/MBCE017/", shift2: "MSK01/MHI01/MHI101/MPC001/MPA001/MPA011/MANI001/MCFT001/MDE411/MEV11/MDV101/MGS001/MMT001/MMPC009/MCH001/MPC051/MLE011/MSD011/MBP001/MCS011/MCS201/BAB101/BPVI011/OSEI041/OULE001/OUL001/MGS042/BMS001/BSL001/CHR11/CNSHC001/BSMA001/BEV001/BPYE001/BSHF101/BSSI011/BES121/MAL002/MRW005/PHE16/BBCET141/BEY006/BEGG171/BPAG171/BPCG171/BSOG171/BABG171/BPYG171/BHDG175/ONR003/BPCG175/BCOG171/BMDG171/" },
    { date: "09.12.2025 TUE", shift1: "MHD03/MPS002/MLII102/MGP002/MFN002/MSW002/MS03/MES012/MAE005/MPYE001/MFC002/MAW003/MTT011/MJM002/MJM021/MLIS102/MES005/MES082/MIP102/MEV002/MPH012/MCH020/IBO02/BAP002/OVA002/BGP02/BCS091/AFW-E/BHDA101/BSOC134/BESC134/", shift2: "MSK02/MPC002/MPA002/MPA012/MANI002/MRD102/MRD202/MCFT002/MDE412/MEV12/MDV102/MGS002/MMT002/MMPC016/MCH002/MPC052/MLE012/MSD012/MBP002/MCS012/MCS202/MCS230/BSM001/BEV002/MME011/MGS043/LSE06/BES122/MER005/BNRI102/BPY012/BLI221/BAM005/MST023/BRLI111/MBG001/BFO018/MAM052/BPHCT133/BBCCT107/MNM037/BPAS186/BPCS188/BEGS186/BCOS186/BFLS183/BUDC101/MZO002/" },
    { date: "10.12.2025 WED", shift1: "MHD04/MSO002/MS06/MGP003/MFN003/MSW003/MES013/MPYE002/MFC003/MJM022/MED002/MLIS103/MES006/MIP103/MEV004/MVE003/ECO03/PHE06/BRL008/MCH021/MMPB003/MMPC001/BPHET141/BEVAE181/", shift2: "MSK03/MHI02/MHI102/MPA003/MPA013/MANE001/MCFT003/MDE413/MEV13/MDV103/MGS003/MMT004/MMPC010/MCH003/MPC053/MLE013/MSD013/MBP003/MTE01/MCS013/MCS203/MVEI012/BSM002/BEV003/MME012/BPYE002/BPY001/BES123/MER006/MSW013/MRW001/BLI222/MZO003/MMPH2/" },
    { date: "11.12.2025 THU", shift1: "MSO003/MS05/MGP004/MFN004/MSW004/MES014/MPYE003/MJM023/MJM123/MED003/MLIS104/MES007/MES083/MIP104/MEV005/MVE004/ECO05/PHE09/MMPB004/MMPC002/BCOC131/BEGC131/BHDC131/BUDC131/BSKC131/BZYET141/BANE145/", shift2: "MPC003/MPA004/MPA014/MANE002/MCFT004/MDE414/MEV14/MDV104/MGS004/MMT005/MCH004/MPC054/MLE014/MSD014/MBP004/MTE02/MVEI013/MGS044/BSM003/MME013/BPYE003/BRL002/BES124/MSW012/LSE02/BLI223/MZO004/BSOE141/" },
    { date: "12.12.2025 FRI", shift1: "MHD06/MPS003/MLI101/MSOE001/MS04/MEC103/MEC003/MPYE004/MFN005/MJM024/MJM124/MED004/MLIS001/MES008/MES084/MIP105/MEV015/MVE005/BHDE107/EHD07/IBO05/ECO07/PHE07/PHE(L)08/MMPB005/MMPC003/BBYCT131/BGYCT131/BGGCT131/BPHCT135/", shift2: "MSK04/MHI04/MHI104/MPC004/MPA015/MANE003/MCFT005/MDE416/MEV15/MDV105/MGS005/MMT006/MCH005/MPC055/MLE015/MSD015/MBP005/MTE03/MVEI014/BEV005/MGS045/BPY003/BES125/MTE09/BLI224/BCOC132/BEGC132/BHDC132/BUDC132/BSKC132/BPSC132/BANS183/BANE146/BANE143/" },
    { date: "13.12.2025 SAT", shift1: "MHD07/MPS004/MLIE101/MSOE002/MS07/MEC004/MECE004/MFN006/MED005/MLIS002/MIP106/MEV016/IBO06/ECO14/PHE10/MMPB006/MMPC004/BSWE001/BRL005/BANE144/", shift2: "MSK05/MHI05/MHI105/MPC005/MPA016/MANE004/MCFT006/MEV16/MGS006/MMT007/MCH006/MPC056/MLE016/MSD016/MBP006/MTE04/BCS011/MGS046/BPY004/BES126/LSE03/MTE10/BLI225/BHDE106/EHD06/MMPH4/" },
    { date: "15.12.2025 MON", shift1: "MSOE003/MS11/MEC005/MEC105/MECE001/MPYE005/MJM025/MJM125/MED006/MLIS003/MEV017/MVE006/IBO03/ECO06/MMPB007/MMPC005/BCOC136/BEGC133/BHDC133/BSOC133/BPSC133/BUDC133/BSKC133/BZYET143/", shift2: "MPC006/MPA017/MANI003/MCFT007/MEV17/MGS007/MMT008/MCH007/MPC057/MSD017/MBP007/MTE05/BCS012/MGS047/BPY005/BES127/LSE04/LSE(L)14/MTE11/BLI226/BHDE108/EHD08/BANS184/" },
    { date: "16.12.2025 TUE", shift1: "MSOE004/MS10/MEC006/MEC106/MPYE006/MFN007/MJM026/MJM126/MED007/MLIS004/MEV018/MVE007/ECO01/MMPC006/BPAC132/BPCC132/BSOC132/BHIC132/", shift2: "MPA018/MANE005/MRD101/MRD201/MEV18/MGS008/MCH008/MPC058/MSD018/MBP008/MTE06/MGS048/BPY006/BES128/LSE01/MTE12/BLI227/BRL001/BEGAE182/" },
    { date: "17.12.2025 WED", shift1: "MS41/MS041/MEC007/MEC107/MECE003/MPYE007/MFN008/MJM027/MJM127/MED008/MLIS005/MEV019/MVE008/ECO13/MMPC007/BPCCHN/BPCSHN/BPCSHNE/BPCHH/BPCSHHE/BPCGH/BPCGHE/BPCC133/BSOC131/BPAC131/BHIC131/", shift2: "MHI08/MHI108/MGS009/MCH009/MPC059/MSD019/MBP009/MTE07/MGS049/BPY007/BES129/LSE05/LSE(L)08/MTE13/BLI228/BRL003/BPAC101/" },
    { date: "18.12.2025 THU", shift1: "MS42/MS042/MPYE008/MFN009/MJM028/MJM128/MED009/MLIS006/MEV006/MVE009/ECO02/MMPC011/BPCCH/BPCSH/BPCSHE/BPCHHN/BPCSHNE/BPCGHN/BPCGHNE/BHIC134/BPCC134/BPAC134/", shift2: "MHI09/MHI109/MPY002/MGS010/MCH010/MPC060/MSD020/MBP010/MTE08/BCS040/MGS050/BPY008/LSE09/MTE14/BLI229/BPAC102/BCHCT133/" },
    { date: "19.12.2025 FRI", shift1: "MS43/MS043/MJM029/MJM129/MED010/MLIS007/MEV007/MVE010/ECO10/MMPC012/BHIC133/BPAC133/BPCC131/BSOC133/", shift2: "MHI10/MHI110/MGS011/MCH011/MPC061/MSD021/MBP011/MGS051/LSE10/BLIE221/BPSC131/" },
    { date: "20.12.2025 SAT", shift1: "MS44/MS044/MLIE102/MPYE009/MJM030/MJM130/MEV008/MMPC013/BPAC103/", shift2: "MPYE015/MCH012/MPC062/MSD022/MBP012/MGS052/LSE11/BLIE222/BPSC134/MMPH7/" },
    { date: "22.12.2025 MON", shift1: "MS45/MS045/MPYE010/MJM031/MJM131/MEV009/BPAE104/", shift2: "MPYE016/MCH013/MPC063/MSD023/MBP013/MGS053/BLIE223/BPAC104/BPSC133/" },
    { date: "23.12.2025 TUE", shift1: "MS46/MS046/MPYE011/MJM032/MJM132/MEV010/BCHCT137/BPSE141/", shift2: "MPYE017/MCH014/MPC064/MSD024/MBP014/MGS054/BLIE224/BPSC105/BPSE143/" },
    { date: "24.12.2025 WED", shift1: "MS51/MPYE012/MEV020/PHE01/BPSE145/", shift2: "MPYE018/MCH015/MPC065/MSD025/MBP015/MGS055/BLIE225/BPSC106/BPSE142/" },
    { date: "26.12.2025 FRI", shift1: "MS52/MJM033/MJM133/PHE02/BPSE144/", shift2: "MCH016/MPC066/MSD026/MBP016/BLIE226/BPSC107/BPSE146/" },
    { date: "27.12.2025 SAT", shift1: "MS53/MJM034/MJM134/ECO08/PHE04/PHE(L)05/", shift2: "MCH017/MPC067/MSD027/MBP017/BLIE227/BPSC108/BPAE141/" },
    { date: "29.12.2025 MON", shift1: "MS54/MJM035/MJM135/ECO04/", shift2: "MPC068/MSD028/MBP018/BLIE228/BPSC109/BPAE143/" },
    { date: "30.12.2025 TUE", shift1: "MS55/MJM036/MJM136/", shift2: "MSD029/MBP019/BLIE229/BPSC110/BPAE144/" },
    { date: "31.12.2025 WED", shift1: "MS56/MPYE013/MJM037/MJM137/", shift2: "MSD030/MBP020/BPSC132/" },
    { date: "01.01.2026 THU", shift1: "MS57/MPYE014/", shift2: "MSD031/MBP021/BCOC137/" },
    { date: "02.01.2026 FRI", shift1: "MS58/", shift2: "MBP022/BCOC138/" },
    { date: "03.01.2026 SAT", shift1: "MS61/MS061/", shift2: "MS21/MS021/" },
    { date: "05.01.2026 MON", shift1: "MS62/MS062/", shift2: "MS22/MS022/" },
    { date: "06.01.2026 TUE", shift1: "MS63/MS063/", shift2: "MS23/MS023/" },
    { date: "07.01.2026 WED", shift1: "MS64/MS064/", shift2: "MS24/MS024/" },
    { date: "08.01.2026 THU", shift1: "MS65/MS065/", shift2: "MS25/MS025/" },
    { date: "09.01.2026 FRI", shift1: "MS66/MS066/", shift2: "MS26/MS026/" },
    { date: "10.01.2026 SAT", shift1: "MS68/MS068/", shift2: "MS27/MS027/" },
    { date: "12.01.2026 MON", shift1: "MS91/MS091/", shift2: "MS28/MS028/" },
    { date: "13.01.2026 TUE", shift1: "MS95/MS095/", shift2: "MS421/MS0421/" },
    { date: "14.01.2026 WED", shift1: "", shift2: "MS422/MS0422/" }
];

let allPaperCodes = [];
let selectedCodes = [];

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
    Object.keys(courseNameMap).forEach(code => codeSet.add(code.toUpperCase()));
    
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
        const name = courseNameMap[code] || ''; 
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
