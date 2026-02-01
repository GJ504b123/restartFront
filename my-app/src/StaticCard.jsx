export default function StaticCard(props) {
  return (
    <div style={{ width: "400px", border:"1px solid"}}>
      <p style={{ width: "400px", height: "30px", marginLeft:"20px" }}>
        {props.title}
      </p>
      <div style={{ width: "400px", height: "90px",display:"flex", }}>
        <div
          style={{
            width: "90px",
            height: "90px",
            display: "flex",
            justifyContent: "center",
            // border: "2px solid",
          }}
        >
          <p style={{fontSize:28,fontWeight:600}}>{props.count}</p>
        </div>
        <a onClick={()=>props.onCardClick(props.title)} style={{  justifyContent: "center",  margin: "20px 0px 20px 150px", width: "100px",flexDirection:"row",display:'flex'}}>
          <p>查看详情</p>
          <p>→</p>
        </a>
      </div>
    </div>
  );
}

  