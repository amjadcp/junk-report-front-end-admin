const chart=(total, pending, completed, issues)=>{
    console.log(issues);
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Completed Ticket', 'Pending Ticket', 'Total Ticket', 'Total Issues'],
            datasets: [
                {
                label: 'Completed Ticket',
                data: [completed,0,0, 0],
                // backgroundColor: 'rgb(0, 0, 255)',
                borderColor: 'rgb(0, 0, 255)',
                borderWidth: 1
                },
                {
                    label: 'Pending Ticket',
                    data: [0, pending, 0, 0],
                    // backgroundColor: 'rgba(255, 0, 0)',
                    borderColor: 'rgb(255,0,0)',
                    borderWidth: 1
                },
                {
                    label: 'Total Ticket',
                    data: [0, 0, total, 0],
                    // backgroundColor: 'rgb(0,128,0)',
                    borderColor: 'rgb(0,128,0)',
                    borderWidth: 1
                },
                {
                    label: 'Total Issues',
                    data: [0, 0, 0, issues],
                    // backgroundColor: 'rgb(0,128,0)',
                    borderColor: 'rgb(0,128,0)',
                    borderWidth: 1
                },
    
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}