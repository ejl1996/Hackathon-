var ifRender = false

function scrollListener() {
    var top = document.documentElement.scrollTop
    if (top>400 && window.ifRender==false){
        renderChart()
        window,ifRender = true
        var elem = document.getElementsByClassName("part3Text")[0]
        elem.setAttribute("style", "opacity:1;margin-top:130px;")
    }
}

function renderChart(){
    
Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ' Unemployment population in Canada by provinces, January 2023',
        align: 'left',
        fontSize:'24px'
    },
    xAxis: {
        categories: [' '],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 20,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'British Columbia',
        data: [126.4]
    }, {
        name: 'Alberta',
        data: [155.9]
    }, {
        name: 'Saskatchewan',
        data: [26.5]
    }, {
        name: 'Manitoba',
        data: [29.6]
    }, {
        name: 'Ontario',
        data: [426.6]
    }, {
        name: 'Quebec',
        data: [185.3]
    }, {
        name: 'New Brunswick',
        data: [30.8]
    }, {
        name: 'Nova Scotia',
        data: [26.5]
    }, {
        name: 'Prince Edward Island',
        data: [7.0]
    }, {
        name: 'Newfoundland and Labrador',
        data: [31.4]
    }]
});

}
