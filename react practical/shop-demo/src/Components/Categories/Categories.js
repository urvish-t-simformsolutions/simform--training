import React from 'react'
import {Link, useParams } from 'react-router-dom';
import items from '../../data/data'
import { useEffect, useState } from 'react';
import ListItems from '../ListItems/ListItems'
import '../Categories/Categories.css'
//import { connect } from "react-redux";
import {fetchValue, ALL,BED,PILLOW} from '../../Action'
import {useDispatch,useSelector} from 'react-redux'



const allCategories=['All', ...new Set(items.map((item) => item.category))];

const Categories = () => {
  let {categoryId}=useParams();
  const [categoryItem,setCategoryItem]= useState(allCategories);
  const [itemList,getItemList] = useState(items);
  const [copyList1,setCopyList1] = useState(items);
  const copyItem=[...items];

  useEffect(()=>{
    fetchValues(categoryId);
   },[])
    //*****************get Items by Category ******************* 

  const fetchValues = (category)=>{
     if(categoryId){
    if(category === 'All') {
      getItemList(copyItem);
      setCopyList1(copyItem);
    }
    else{
      const newItems = items.filter((item) => item.category === category);
      getItemList(newItems);
      setCopyList1(newItems);
    }
  }
   else{
     categoryId='All';
    }
  }


  //************Search Code**************** */
  const searchTerm = value =>{ 
    if(value===''){
     getItemList(copyList1)
    }
      else{
      const newTerm=copyList1.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase()))
      getItemList(newTerm)
     }
  }
  //******************* Array sort******************** 
  const sortArr= type =>{
    if(type === 'desc'){
      const sorted = copyList1.sort((a, b) => b.price - a.price)
      getItemList(JSON.parse(JSON.stringify(sorted)))
    }
    else if(type === 'asc'){
    const sorted = copyList1.sort((a, b) => a.price - b.price) 
    getItemList(JSON.parse(JSON.stringify(sorted)))
  }
    else if(type === 'default'){
      const sorted = copyList1.sort((a, b) => a.id - b.id) 
      getItemList(JSON.parse(JSON.stringify(sorted)))
    }
  }

    return (
      <div className="home-grid"> 
      <div className="top-bar">
        <h1 className="heading">Our Products</h1>
        <hr></hr>
        <div className="below-bar">

         {/* Category button */}

          {categoryItem?.map((categoryItem,index) => {
          return ( 
             <Link to={`/${categoryItem}`}>
            <button 
               className="btn"
              key={index}
              onClick={() => fetchValues(categoryItem)}>
              {categoryItem}
            </button>
            </Link>  
          );
        })}        
        </div>
        </div>
         <div className="func-btn">

       {/* *Sorting dropdown */}

       <div className="sort-btn">
       <label>Sort by</label>
       <select onChange={(e)=>sortArr(e.target.value)} className="sel-sort" >
          <option value="default">Default</option> 
         <option value="asc">By price L-H</option>
         <option value="desc">By price H-L</option>
         </select> 
        </div>

         {/* Searching  */}
         
         <input type='text' 
         placeholder="Search....."
         onChange={(e)=>searchTerm(e.target.value)}
         className="sea-btn"/>
        </div>    
        <ListItems item={itemList} />     
      </div>
    )
  }
  
  export default Categories;