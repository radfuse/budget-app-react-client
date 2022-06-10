import axios from 'axios'
import { useEffect, useState } from 'react'
import StatisticCard from '../components/StatisticCard'

const Home = () => {
    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('/statistics')
            .then((response) => {
                setData(response.data)
                setLoaded(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);
    

    return (
        <div>
            { loaded && data && data.length ?
                data.map((month, i) => {
                    return (<div className="mb-3" key={month.month}>
                        <h2>{ month.month }</h2>

                        <div className="row">
                            { month.categories.map((category, i) => <StatisticCard category={category} key={category.name} />) }
                        </div>
                    </div>)
                })
            : null }
        </div>
    );
}

export default Home