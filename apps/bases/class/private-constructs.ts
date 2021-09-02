(() => {
    class Chart {
        static instance: Chart

        private constructor(
            public name: string
        ) {
        }

        static createSinglenton(): Chart {
            if (!Chart.instance) {
                Chart.instance = new Chart('Singlenton')
            }

            return Chart.instance
        }

        changeName(newName: string){
            this.name = newName
        }
    }

    const chart = Chart.createSinglenton()
    const chart2 = Chart.createSinglenton()
    const chart3 = Chart.createSinglenton()

    chart.changeName('newName')

    console.log(
        chart,
        chart2,
        chart3
    )
})()