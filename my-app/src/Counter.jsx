import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function add() {
    setCount((count) =>count + 1);
  }
//   console.log(document.querySelector('.count')?.innerText)//不能实时更新

// useEffect(() =>{
//     console.log(document.querySelector('.count')?.innerText)
// },[])//1. 空数组的位置是依赖项，只会执行1次
// useEffect(() =>{
//     console.log(document.querySelector('.count')?.innerText)
// })//2. 但是如果不写依赖项就代表每次组件渲染后再执行
useEffect(() =>{
    console.log(document.querySelector('.count')?.innerText)
},[count])//3. 只在组件渲染和判断count是否改变后再执行

// useEffect(() =>{
    // setCount((prev) =>prev + 1)
    // console.log(document.querySelector('.count')?.innerText)
//})//4. 在useEffect里不要改变依赖数组的值

// ### 核心原因（极简版）
// 1. 组件顶层打印两次 → React**开发环境严格模式**会让组件函数额外执行一次；
// 2. useEffect里只打印一次 → React对useEffect特殊处理，跳过严格模式的重复执行，仅在DOM更新后执行一次。

// （补充：点击按钮时useEffect会随count更新继续打印，你看到的“只打印一次”是初始渲染的结果）

//5. 多个功能副作用尽量分开声明，写在不同的useEffect里


//6. 清理副作用：如果useEffect里面有return(() =>{清理自己的操作}) 
/*清理网络请求，清理事件绑定，先执行清理函数再执行副作用 */

// useEffect(()=>{
//     return(() =>{})
// },[])
 return (
    <div>
      <div className="count">count 的值：{count}</div>
      <button onClick={add}> + 1 </button>
    </div>
  );
}
