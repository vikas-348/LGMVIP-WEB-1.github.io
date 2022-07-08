import React, { useState } from 'react'
import Listcom from './Listcom';

const Home = () => {

    const [ClickItem, setClickItem] = useState('');
    const [Itemlist, setItemlist] = useState([]);
    const [editItems, seteditItems] = useState(null);
    const [toggleSubmit, settoggleSubmit] = useState(true);



    const handleinput = (event) => {
        setClickItem(event.target.value);
    }


    const ListofItem = () => {
        if (!ClickItem)
        {
            window.alert("Can't add empty data");
        } 
        else if(ClickItem && !toggleSubmit){
            setItemlist(
                Itemlist.map((elem,ind)=>{
                    // error on this point
                    // check the index of item element with index of element to update
                    if(ind=== editItems){
                        return ClickItem;
                      
                    }
                    

                     console.log("this is update Element value: "+editItems);
                    // console.log("This is update Item of clickItem: "+ClickItem);
                    return elem;
                
                })
             
            )
            
           
            settoggleSubmit(true);
            setClickItem("");
            seteditItems(null);
        }
        else {
            
            // always use this single line
            setItemlist([...Itemlist, ClickItem]);
            //     setClickItem((oldItems) => {
            //     return [...oldItems, Itemlist];
            // });
        }
        //set value of first array *Itemlist* then write setItemlist("")
        //show that input field become empty after add the items into the list
        setClickItem("");

    };
    const deleteItem = (id) => {
        const updateItem = Itemlist.filter((elem, ind) => {
            return ind !== +id;

        });
        setItemlist(updateItem);
        // console.log(ClickItem);
    }

    //***************/Edit your data*************///////////////
    //  1] Get the id and name of the data which uer clicked to edit
    // 2] Get the toggle mode to change the submit the button into edit button
    // 3] now update the value of the setinput with the new updated value to edit
    //4] to pass the current id to new state variable for reference

    const editItem = (id) => {
        //  1] Get the id and name of the data which uer clicked to edit
        let newEditItems = Itemlist.find((elem, ind) => {
            return ind === id;
        });

        //2] Get the toggle mode to change the submit the button into edit button
        settoggleSubmit(false);
        //console.log(newEditItems);
        //3]Now update the value of the setClickItem with the new updated value to edit
        setClickItem(newEditItems); 

        seteditItems(id);
    }

    const removeAll = () => {
        if (!Itemlist.length) {
            window.alert("Sorry.. No data found for delete.");
        } else {
            setItemlist([]);
            window.alert("Do you want to delete all data ?");
        }
    }
    return (
        <>
            <div className="container-fluid  ">
                <div className="container">
                    <div className="container my-3 shadow mb-5 bg-light rounded ">
                        <h1 className="text-center text-danger" >Todo List</h1>
                    </div>

                    <div className="container  shadow p-3 mb-5 bg-whites rounded">
                        <div className="form mb-1 d-flex justify-content-center">
                            <div className="custom-input">
                                <input type="text" name="name" value={ClickItem}
                                    onChange={handleinput}

                                    className="input-fleild  " placeholder="Add an items" />


                            </div>
                            <div className="btn1">
                                <button className="btn-icon">  {
                                    toggleSubmit ? <i className=" far add-icon fa-check-circle" onClick={ListofItem} ></i> : <i onClick={ListofItem} className="far edit-icon-add fa-edit"></i>
                                }</button>
                            </div>
                        </div>

                        <div className="to-do">
                            <ol>
                                {/* // if you want to show widows alert for data is empty then use Itemlist//             */}
                                {Itemlist?.map((val, index) => {
                                    return <Listcom id={index}
                                        deleteItem={(id) => deleteItem(id)}
                                        editItem={(id) => editItem(id)}
                                        text={val} />;
                                })}





                            </ol>
                            <div className="remove-all text-center ">
                                <button className="btn btn-danger" onClick={removeAll}>Remove All</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )

}

export default Home
