const ctx = document.querySelector('#chart').getContext('2d');

const caGradient = ctx.createLinearGradient(300, 0, 300, 200);
caGradient.addColorStop(0, 'rgba(255, 100, 100, .3)');
caGradient.addColorStop(1, 'rgba(255, 100, 100, .05');
const caColor = 'red';

const itGradient = ctx.createLinearGradient(300, 0, 300, 200);
itGradient.addColorStop(0, 'rgba(0, 255, 150, .3)');
itGradient.addColorStop(1, 'rgba(0, 255, 150, 0.03');
const itColor = 'green' ;

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            '12 March', 
            '13 March', 
            '14 March', 
            '15 March', 
            '16 March', 
            '17 March', 
            '18 March', 
            '19 March', 
            '20 March', 
            '21 March', 
            '22 March', 
            '23 March', 
            '24 March', 
            '25 March', 
            '26 March', 
            '27 March',
            '28 March',
            '29 March',
            '30 March',
            '31 March',
            '01 April',
            '02 April',
            '03 April',
            '04 April',
            '05 April',
            '06 April',
            '07 April',
            '08 April',
        ],
        datasets: [{
            label: 'Covid Cases in Canada',
            data: [
                21, 
                40, 
                42, 
                59, 
                84, 
                100, 
                156, 
                130, 
                145, 
                215, 
                244, 
                139, 
                621, 
                701, 
                617, 
                634, 
                714, 
                898, 
                665, 
                1128, 
                1143, 
                1140, 
                1552,
                1266,
                1469,
                1495,
                1155,
                1230,
                1394
            ],
            backgroundColor: caGradient,
            borderColor: caColor,
            pointRadius: 3,
            pointHoverRadius: 6,
            pointBackgroundColor: caColor,
            pointHitRadius: 32,
            tension: 0.3
        }, {
            label: 'Covid Cases in Italy',
            data: [
                2651, 
                2547,
                3497,
                3590,
                3233,
                3526,
                4207,
                5322,
                5986,
                6557,
                5560,
                4789,
                5249,
                5210,
                6153,
                5959,
                5974,
                5217,
                4050,
                4053,
                4782,
                4668,
                4585,
                4805,
                4316,
                3599,
                3039,
                3836
            ],
            backgroundColor: itGradient,
            borderColor: itColor,
            pointRadius: 3,
            pointHoverRadius: 6,
            pointBackgroundColor: itColor,
            pointHitRadius: 32,
            tension: 0.3
        }]
    },
    options: {
        tooltips: {
            backgroundColor: 'white',
            titleFontColor: 'rgba(0, 0, 0, 0.5)',
            bodyFontSize: 16,
            bodyFontColor: 'rgba(0, 0, 0, 0.7)',
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 1,
            xPadding: 16,
            yPadding: 16,
            mode: 'index',
            intersect: false
        }
    }
})