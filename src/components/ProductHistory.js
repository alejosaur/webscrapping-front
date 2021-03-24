import React from 'react'
import Chart from 'react-apexcharts'
import { getHistoric } from '../services/products'

class ProductHistory extends React.Component {
    constructor(props) {
        super(props);

        var prices = [];
        var discountedPrices = [];

        var formatter = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
        });

        this.state = {
            url: props.url,
            series: [{
                name: 'Precio base',
                data: prices
            }, {
                name: 'Precio con descuento',
                data: discountedPrices
            }],
            options: {
                chart: {
                    type: 'area',
                    stacked: false,
                    height: 350,
                    zoom: {
                        type: 'x',
                        enabled: true,
                        autoScaleYaxis: false
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                title: {
                    text: "this.state.name",
                    align: 'left'
                },
                fill: {
                    type: 'solid',
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return formatter.format(val);
                        },
                    },
                    title: {
                        text: 'Precio'
                    },
                },
                xaxis: {
                    type: 'datetime',
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return formatter.format(val);
                        }
                    }
                }
            },
        };
    }

    async componentDidMount() {
        await this.updateGraph()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.url !== this.props.url) {
            this.setState({url:this.props.url}, this.updateGraph)
            console.log(this.props.url)
        }
    }

    updateGraph = async () => {
        console.log("AAAAA" + this.state.url)
        const response = await getHistoric(this.state.url)

        const responseJson = response.products[0]

        var prices = [];
        var discountedPrices = [];

        for (var i = 0; i < responseJson.Record.length; i++) {
            var dateParts = responseJson.Record[i].date.split("/");
            var date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
            prices.push([date.getTime(), responseJson.Record[i].base_price]);
            discountedPrices.push([date.getTime(), responseJson.Record[i].discounted_price]);
        }

        this.setState({
            series: [{
                name: 'Precio base',
                data: prices
            }, {
                name: 'Precio con descuento',
                data: discountedPrices
            }],
            options: {
                title: {
                    text: responseJson.name,
                    align: 'left'
                },
            }
        })
    }


    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
        )
    }
}

export default ProductHistory