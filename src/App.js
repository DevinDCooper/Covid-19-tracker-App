import React from 'react';

import { Cards, Chart, CountryPicker} from './component';
import styles from './App.module.css';
import { fetchData } from './api';

import Covid from './images/Covid.png'

class App extends React.Component{
    state = {
        data: {},
        country: '',

    } 



   async componentDidMount() {
        const fetchedData = await fetchData()

        this.setState({ data: fetchedData })
    }

handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)


    this.setState({ data: fetchedData, country: country })
// set the state

}





    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={Covid} alt="Covid-19"/>
             <Cards data={data}/>
             <CountryPicker  handleCountryChange={this.handleCountryChange}/>
             <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;