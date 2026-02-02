import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import StaticCard from './StaticCard.jsx'
import NavBar from './navbar.jsx'
import PatientTable from './PatientTable.jsx'
import Counter from './Counter.jsx'
import ColorGet from './ColorGet.jsx'
function App() {
  const [activeTitle, setActiveTitle] = useState("请选择卡片")
  const navData = [
    {title:"今日待处理",count:12},
    {title:"本月新增",count:28},
    {title:"待审查成功病历",count:5},
    {title:"需要重新诊断",count:2}
]
  const handleChildClick = (name) =>{
    setActiveTitle(name)
  }
  return (
    <>
    <h1>
      当前的title：{activeTitle}
    </h1>
    <div className="nav-box " style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
      {
        // navData.map((item,i) =>{
        //   <StaticCard key = {i} title={item.title} count = {item.count}/>
        // })//错误的大括号，有大括号就要写return
      }
      {
        navData.map((item,i) =>{
          return(
            <StaticCard title = {item.title} count = {item.count} key={i} onCardClick= {handleChildClick} />
          )
        })
      }
      {/* <StaticCard/> */}
    </div>
    <div style={{position:'fixed', marginLeft:'600px'}}> 
      <NavBar />
    </div>
    <PatientTable/>
      <Counter/>
      <ColorGet/>
    </>
  )
}

export default App
