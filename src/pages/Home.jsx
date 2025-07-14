import React, { useState } from 'react'
import PostsList from '../components/PostsList'
import { setSearch } from '../actions/postActions'
import { useDispatch } from 'react-redux'

function Home() {
    const dispatch = useDispatch()
  return (
    <>
    <div className='home'>
        <h2 style={{marginTop:"60px"}}>Social Media For Travellers</h2>
        <input type="text"  onChange={(e)=>{dispatch(setSearch(e.target.value))}} className='search-bar'/>
        <PostsList/>
    </div>
      </>
  )
}

export default Home