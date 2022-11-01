import React, { useState } from 'react'

const Tabs = (props) => {
  const info = [
    {
      'name': 'Tab 1',
      'info': 'This is the info from Tab 1'
    },
    {
      'name': 'Tab 2',
      'info': 'This is the info from Tab 2'
    },
    {
      'name': 'Tab 3',
      'info': 'This is the info from Tab 3'
    }
  ]

  const [tabsContent, setTabsContent] = useState('')
  const [selectedIdx, setSelectedIdx] = useState(null)

  const handleTabClick = (idx) => {
    // save the index to conditionally render which button was clicked
    setTabsContent(info[idx].info)
    setSelectedIdx(idx)
  }

  return (
    <div className="container mt-20 mb-20">
      <div style={{color: "red"}} className="d-flex mx-auto w-400">
          {
            info.length > 0 && (
              info.map( (tab, i) => {
                if(i === selectedIdx){
                  return <button onClick={()=>handleTabClick(i)} className="btn btn-danger mr-10" key={i}>{tab.name}</button>
                }
                return <button onClick={()=>handleTabClick(i)} className="btn btn-primary mr-10" key={i}>{tab.name}</button>
              }
              ))
          }
      </div>
      <div className='mx-auto w-400 h-100 bg-light text-dark mt-10 p-10'>
        {
          tabsContent
        }
      </div>
      <br />
      <div className="dropdown-divider"></div>
    </div>
  )
}

export default Tabs