import React, {useState, useEffect} from 'react';

const dataAddress = './companiesData.json'
export const DataContext = React.createContext();

export const DataContextProvider = ({ children }) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(dataAddress)
        .then(response => response.json())
        .then(data => {
            setData(data)
            setIsLoading(false)
        })
    }, [])
    
    return (
        <DataContext.Provider value={{ data, isLoading }}>
        {children}
        </DataContext.Provider>
    );
}