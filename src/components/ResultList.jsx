import React from 'react'
import './ResultList.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export const ResultList = ({resultList}) => {

  return (
    <div className='display'>
        <h1>Results</h1>
        <div className='display-list'>
        {resultList.slice(0,15).map((item, index)=>(
            <div className='eachResult'>
            <div key={index} className='result-name'>
                {item.title}
            </div>
            <div className='addIcon'>
                <AddCircleOutlineIcon />
            </div>
            </div>
        ))} 
        </div>
    </div>
  )
}
