import React, { createRef } from 'react' // 1. Добавь createRef
import Postitem from './Postitem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const PostList = ({ posts, title, remove }) => {

  if(!posts.length){
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {

          const nodeRef = createRef(null)

          return (
            <CSSTransition
              key={post.id}
              nodeRef={nodeRef}
              timeout={500}
              classNames="post"
            >

              <div ref={nodeRef}>
                <Postitem
                  remove={remove}
                  number={index + 1}
                  post={post}
                />
              </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  )
}

export default PostList
