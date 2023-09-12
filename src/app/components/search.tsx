'use client'

import { useState } from "react";


const Search = ()=>{
    const [search, setSearch]=useState();
    console.log(search)
    return(
        <input type='text' onChange={(e:any) => setSearch(e.target.value)} id='search' placeholder='Name Search'/>
    )

}

export default Search;