import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getFetch = async () => {
            const response = await fetch(url);

            const data = await response.json();

            setData(data)
        }
        getFetch()
    }, [url])

    return {data};
}

export default useFetch;