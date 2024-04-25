import React,{useState} from 'react'
import './ResultList.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export const ResultList = ({resultList}) => {
const [chosen, setChosen]=useState([]);
const handleClick =(item)=>{
    if (chosen.includes(item.title)) {
        alert(`${item.title} is already chosen.`);
        return; // Return early if the item is already chosen
      }
      // Add the item's title to the chosen array
      setChosen((prev) => [...prev, item.title]);
};
const handleClear =(id)=>{
    let reduceList=[...chosen];
    reduceList.splice(id,1);
    setChosen(reduceList)
};
  return (

    <div className='result-wrapper'>



    <div className='display'>
        <h1>Results</h1>
        <div className='display-list'>
        {resultList.slice(0,15).map((item, index)=>(
            <div className='eachResult'>
            <div key={index} className='result-name'>
                {item.title}
            </div>
            <div className='icon' onClick={()=>handleClick(item)}>
                <AddCircleOutlineIcon />
            </div>
            </div>
        ))} 
        </div>
    </div>



    <div className='save-result'>
        <h1>Playlist</h1>

        <div className='display-list'>
        {chosen.map((item,id)=>(
            <div className='eachResult'>
            <div key={id} className='result-name'>{item}</div>
            <div className='icon' onClick={()=>handleClear(id)}>
            <DeleteIcon />
            </div>
        </div>
        ))}
        </div>
    
    </div>



    </div>
  )
}
