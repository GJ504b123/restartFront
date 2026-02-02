import { useEffect, useState } from "react"



export default function PatientTable(){
    const[list,setList] = useState([]);
    useEffect(() =>{
        const timer = setTimeout(() =>{
            const mockPatient = [
                {name:'张三',state:'已上链',age:18},
                {name:'李四',state:'未上链',age:33},
                {name:'王五',state:'已上链',age:16}
            ];
            setList(mockPatient)
            console.log('数据到了！')
        },1000);
        return () => clearTimeout(timer);
    },[]);
    return (
        <div>
            <h3>最近访问者</h3>
            {
                list.length ===0 ?<p>正在调取数据</p> : (
                    <ul>
                    {list.map((item,index) =>{
                        return(
                            <li key={index} style={{color:item.state === '已上链'?'green':'red'}} >
                            <p>{item.name}的年纪是：</p>
                            <p>{item.age}</p>
                            <p>病历{item.state}</p>
                        </li>
                        )
                    })}
                </ul>
                )
            }
        </div>
    )
}





 