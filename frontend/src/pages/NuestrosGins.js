import { useState } from "react"
import Loader from "../components/Loader"
import Card from '../components/Card'

const NuestrosGins = () => {
    const [cards, setCards] = useState(4)
    const [loading, setLoading] = useState(true)

    return (
        <div class="min-h-full min-w-min" >
            <div>filtros</div>
            <div class="grid-cols-3 w-max h-max">
                {loading ? 
                <Loader/>
                :
                cards && cards.map((card, index) => (
                    <Card card={card} key={index} />
                ))    
            }
            </div>
        </div>
    )
}

export default NuestrosGins
