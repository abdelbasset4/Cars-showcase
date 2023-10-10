"use client"

import { useState } from "react"
import { SearchManifacteurs } from "."

const SearchBar = () => {
    const [manifacteur, setManifacteur] = useState('')
    const handelSubmit = ()=>{}
  return (
    <form onSubmit={handelSubmit}>
        <div className="searchbar__item">
            <SearchManifacteurs
               manufacturerSelected={manifacteur}
               setManufacturerSelected={setManifacteur}
            />
        </div>

    </form>
  )
}

export default SearchBar