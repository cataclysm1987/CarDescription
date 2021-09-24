import React, { Component } from 'react';

export default class Top10Cars extends Component {
    static displayName = Top10Cars.name;

    constructor(props) {
        super(props);
        this.state = { cars: [], loading: false };
        this.populateCarData = this.populateCarData.bind(this);
    }

    

    static renderCarsTable(cars) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(car =>
                        <tr key={car.make}>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>${car.price}</td>
                            <td>{car.type}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Top10Cars.renderCarsTable(this.state.cars);

        return (
            <div id="top10cars">
                <h1 id="cars-label" >Top 10 Cars</h1>
                <p>Wondering what the top 10 cars of 2021 are?</p>
                <button class="btn btn-lg btn-primary" onClick={this.populateCarData}>Click here to load top 10 cars</button>
                {contents}
            </div>
        );
    }

    async populateCarData() {
        this.setState({ cars: [], loading: true });
        const response = await fetch('car');
        const data = await response.json();
        this.setState({ cars: data, loading: false });
    }
}
