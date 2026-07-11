import {useParams} from 'react-router-dom'

const Prams = () => {
    const {id}=useParams()
    return (
        <div>
            Prams: {id}
        </div>
    )
}

export default Prams
