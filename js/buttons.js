const campusSelect = document.querySelector('#campusSelect');
const areaSelect = document.querySelector('#areaSelect');
const campusBtn = document.querySelector('#campusBtn');
const areaBtn = document.querySelector('#areaBtn');
const campusPathStart = 'https://www.georgiancollege.ca/academics/full-time-programs/?campus=';
const areaPathStart = 'https://www.georgiancollege.ca/academics/academic-areas/';

campusBtn.addEventListener('click', () => {
    if (campusSelect.value != '') {
        let campusPath = campusPathStart + campusSelect.value;
        location.assign(campusPath);
    }
});

areaBtn.addEventListener('click', () => {
    if (areaSelect.value != '') {
        let areaPath = areaPathStart + areaSelect.value;
        location.assign(areaPath);
    }
});