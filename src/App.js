import React, { useState } from 'react';
import Menu from '../Menu';
import Categories from '../Categories';
import items from '../data';

//Dynamic categories:
const allCategories=['all', ...new Set(items.map(item=>item.category))];

function App() {
  const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]=useState([]);
  setCategories(allCategories);

  const filter=(category)=>{
     if(category==='all'){
        setMenuItems(items)
        return
     }
     const newItems=category.filter(item=>{
        return item.category===category
     })
     setMenuItems(newItems);
  }
   
  return (
   <main>
      <section className='menu section'>
         <div className='title'>
            <h2>Our menu</h2>
            <div className='underline'></div>
         </div>
         <Categories
            categories={categories}
            filterItems={filter}
         />
         <Menu
            items={menuItems}
         />
      </section>
   </main>
  )
}

export default App;