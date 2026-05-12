import React from 'react'
import { getPagesArray } from '../../utils/pages'

const Pagination = ({totalPage, page, changePage}) => {
  let pageArray = getPagesArray(totalPage)
  return (
    <div className='page__wrapper' >
      {pageArray.map(p=>
        <span
          onClick={()=>changePage(p)}
          key={p}
          className={page === p ? 'page page__current' : 'page'} >
          {p}
        </span>
      )}
    </div>
  )
}

export default Pagination