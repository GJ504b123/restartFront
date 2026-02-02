import { useState,useEffect } from "react"

export default function ColorGet(){
 const [color,setColor] = useState('')
 const [flag,setFlag] = useState(false)
    function ColorContent(){
        return(
            <p >color 的颜色是：{color}</p>

        )
    }
    useEffect(()=>{
        const controller = new AbortController()
         // 核心：只有 flag 为 true 时才发起请求
        if (!flag) return
        fetch('https://api.liulongbin.top/v1/color',{signal:controller.signal})
        .then((res) =>res.json())
        .then((res) =>{
            console.log(res)
            setColor(res.data.color)
        })
        .catch((err)=>console.log("消息：" + err.message))
        //return 清理函数
        /*清理函数的触发时机：
        1. 组件被卸载时
        2. effect副作用函数被执行之前，先执行清理函数 */

        return () => controller.abort()
    },[flag])
    
    return(
        <>
            <button onClick={()=>setFlag((prev) => !prev)}>Click it</button>
            {flag && <ColorContent/>}
        </>
    )
}