import React from 'react'
import {useSearchParams} from 'react-router'
function Profile() {

    let [searchParam , setSearchParam] = useSearchParams()
    let search = searchParam.get("search");
    let cata = searchParam.get("cata");
    console.log(search);
    console.log(cata);
    
  return (
    <div>Profile</div>
  )
}

export default Profile
