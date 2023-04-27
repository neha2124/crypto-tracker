import { convertDate } from "./converDate"
export const settingChartData = (setChartData,price1 , price2) =>{
    if(price2){
        setChartData({
            labels: price1.map((item) => convertDate(item[0])),
            datasets: [{
                label: 'Crypto 1' , 
                data: price1.map((item) => (item[1])),
                fill: false,
               tension: 0.25,
                borderColor: '#3a80e9',
                borderWidth: 2,
                backgroundColor: "rgba(58 , 128 ,233 ,0.1)",
                pointRadius: 0,
                yAxisID: "crypto1",
            },
            {
            label: 'Crypto 2' , 
            data: price2.map((item) => (item[1])),
            fill: false,
           tension: 0.25,
            borderColor: '#61c965',
            borderWidth: 2,
            backgroundColor: "rgba(58 , 128 ,233 ,0.1)",
            pointRadius: 0,
            yAxisID: "crypto2",
            }

        ]
        })

    }
    else{
    setChartData({
        labels: price1.map((item) => convertDate(item[0])),
        datasets: [{

            data: price1.map((item) => (item[1])),
            fill: true,
            tension: 0.25,
            borderColor: '#3a80e9',
            borderWidth: 2,
            backgroundColor: "rgba(58 , 128 ,233 ,0.1)",
            pointRadius: 0,
            yAxisID: "crypto1",
        
        }]
    })
}
}