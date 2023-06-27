import { useContext} from "react"
import { DataContext } from "../context/DataContextProvider"

const useData = () => {
    const data = useContext(DataContext)
    if(!data) {
        return "useData can be used only in DataContextProvider"
    }
    return data
}
export default useData