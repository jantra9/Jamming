import React,{useEffect, useState} from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { ResultList } from './ResultList';

export const SearchBar = () => {
const [filterData, setFilterData]=useState([]);
const [input,setInput]=useState("");
const [resultList,setResultList]=useState([]);
const fetchData =(input)=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((result)=>{
        const resultList= result.filter((item)=>{
        return item.title.toLowerCase().includes(input.toLowerCase())
        });
        setFilterData(resultList);
    })
    .catch((error) => console.error('Error fetching data:', error));
}
const handleChange =(input)=>{
    fetchData(input);
    setInput(input)
};
const handleClear =()=>{
    setInput("")
    setFilterData([])
    setResultList([])
};

const handleClick=(filterData)=>{
    const displayResult= filterData
    setResultList(displayResult);
    setFilterData([])
    
}


return(
    <div className='main'>
        <div className='search-and-list'>
        <div className='search-wrapper'>
            <input
            value={input}
            type='text'
            onChange={(e)=>{handleChange(e.target.value)}}  
            onKeyDown={(e)=>{if(e.key==="Enter"){handleClick(filterData)}}}
            />
            {!input && <div className='search-icon' ><SearchIcon /></div>}
            {input && <div className='clear-icon' onClick={handleClear} ><ClearIcon /></div>}
        </div>
       
        {input && filterData.length>0 && 
        <div className='results'>
            {filterData.slice(0,15).map((item,index)=>(
                <li 
                key={index}
                >{item.title}</li>
            ))}
        </div>}
        </div>
        
        <div className='result-and-savePlaylist'>
        <div className='result-list'>
            <ResultList resultList={resultList}/>
        </div>
        </div>
    </div>
)    
}