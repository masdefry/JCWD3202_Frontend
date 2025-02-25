const fetchData = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json() // Convert Format JSON -> Object JS
        
        return data
    } catch (error) {
        console.error(error)
    }
}

export default async function SSRPage(){
    const data = await fetchData()

    return(
        <>
            {
                data?.map((item, index: number) => {
                    return(
                        <div key={index}>
                            <h1 className='font-bold text-2xl'>{item?.title}</h1>
                            <p>{item?.body}</p>
                        </div>
                    )
                })
            }
        </>
    )
}