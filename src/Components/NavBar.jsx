import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import boards from '../pages/boards.json'



function NavBar () {
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
 

  // const handelSearch = () => {
  //   setSearch(!search)
  //   item = boards.find((item) => searchValue === item.name);

  //   return (
  //     <div className="board-params">
  //       <Link to={`/Board/${item.id}`}>
  //         <img src={item.image} />
  //       </Link>
  //       <h1>{item.brand}</h1>
  //       <p>{item.model}</p>
  //       <p>{item.type}</p>
  //       <p>{item.price}$</p>
  //       <button onClick={() => addOrder(item)}> Add prouct</button>
  //     </div>
  //   );
  // }

  
  
  

  return (
    <nav className='navBar'>
      <div className='navBar-container '>
        {/* {
         search ? <div className='search-container'>
                    <button className="search-button" onClick={handelSearch}>
                     <i className="fas fa-search"></i>
                    </button>  <input type='text' placeholder='search' onChange={(e) => setSearchValue(e.target.value)}/>
                  </div>
                : <button className="search-button" onClick={handelSearch}>
                   <i className="fas fa-search"></i>
                  </button>
        } */}

        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Shoping">Shoping</NavLink>
        <NavLink to="/Orders">Orders</NavLink>
        <NavLink to="/">Login</NavLink>

      </div>
    </nav>
  )
}

export default NavBar