import { useState, useEffect } from 'react'

function DataFetcher() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {loading?(
                <h1 style={{color:'black'}}>Loading...</h1>
                ):(
                    // {console.log(data)}
                    <ul style={{color:'black'}}>
                        {data.map(post=>(
                            <li key= {post.id} >{post.title}</li>
                        ))}
                    </ul>
                )}

        </div>
    )
}

export default DataFetcher
