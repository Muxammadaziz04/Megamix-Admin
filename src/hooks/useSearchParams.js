import { useSearchParams as useParams } from "react-router-dom"

function paramsToObject(entries) {
    const result = {}
    for (const [key, value] of entries) {
        result[key] = value;
    }
    return result;
}

const useSearchParams = () => {
    const [params, setSearchParams] = useParams()

    const customSearchParams = (query, queryParams) => {
        setSearchParams({ ...paramsToObject(params.entries()), ...query }, { replace: true, ...queryParams })
    }

    return [params, customSearchParams]
}

export default useSearchParams