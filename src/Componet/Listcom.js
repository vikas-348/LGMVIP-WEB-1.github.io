// import React, { useState } from 'react'
// const Listcom = (props) => {

//     const [line, setline] = useState(false);

//     const clickCut = () => {
//         setline(true);
//     }

//  return (
//         <> <div style={{ backgroundColor: line ? "white " : "none" }} className="todo_style d-flex align-items-center my-1 p-1 ">
//             <div className="todo-icon">
//                 <span onClick={clickCut} className="trash-icon" >
//                     <i class="fas fa-trash"></i>
//                 </span> 
              
//             </div>
//             <li className="px-1" style={{ textDecoration: line ? "line-through red " : "none" }}>{props.text}</li>
//             <div className="edit d-block">
//             <span className="" ><i className="far edit-icon fa-edit"></i></span>
//             </div>
//         </div>
//         </>
//     )
// }
// export default Listcom;

/****************With internal csss */
// import React, { useState } from 'react'

// const Listcom = (props) => {

//     const [del, setDel] = useState();

//     const clickCut = (id) => {
//         setDel(id);

//     }

//     const mystyle={
//         textDecoration:"line-through red ",
//         backgroundColor:"white"
//     };
//     const divstyle={
//         backgroundColor:"white"
//     };
//     const iconstyle={
//         color:"red"
//     };
//  return (
//         <> <div style={del===props.index ? null:divstyle} className="todo_style d-flex align-items-center my-1 p-1 ">
//             <div className="todo-icon">
//                 <span onClick={()=>{clickCut(props.id)}} className="trash-icon" >
//                     <i style={del===props.index ? null:iconstyle}  class="fas fas-icon fa-trash"></i>
//                 </span> 
              
//             </div>
//             <li className="px-1" style={del===props.index ? null:mystyle}>{props.text}</li>
//             <div className="edit d-block">
//             <span  ><i  style={del===props.index ? null:iconstyle} className="far edit-icon fa-edit"></i></span>
//             </div>
//         </div>
//         </>
//     )
// }
// export default Listcom;
import React from 'react'

const Listcom = (props) => {

    const clickCut = (id) => {
        props.deleteItem(id)     
    }

  const Clickedit=(id)=>{
      props.editItem(id)
  }
   return (
        <> <div  className="todo_style  d-flex align-items-center my-1 p-1 ">
            <div className="todo-icon">
                <span onClick={()=>{clickCut(props.id)}} className="trash-icon" >
                    <i  className="fas fas-icon fa-trash"></i>
                </span> 
              
            </div>
            <li className="px-1" >{props.text}</li>
            <div className="edit d-block">
            <span onClick={()=>Clickedit(props.id)}><i className="far edit-icon fa-edit"></i></span>
            </div>
        </div>
        </>
    )
}
export default Listcom;
