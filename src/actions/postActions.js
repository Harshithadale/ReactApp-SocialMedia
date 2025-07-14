export const fetchPosts = ()=>{
    return async (dispatch) =>{
        dispatch({type:'FETCH_POSTS_START'})
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            dispatch({type:"FETCH_POSTS_SUCCESS",payload:data})
        }
        catch(error){
            dispatch({type:"FETCH_POSTS_ERROR",payload:error})
        }
    }
}

export const setSearch=(term)=>{
    return async(dispatch)=>{
         dispatch({type:"SET_SEARCH",payload:term})
    }
}
export default {fetchPosts,setSearch}