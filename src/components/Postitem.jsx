import Mybutton from './UI/button/Mybutton'

const Postitem = (props) => {
  return (
    <div>
      <div className='post'>
        <div className='post__content'>
          <strong>
            {props.number}.{props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className='post__btns'>
          <Mybutton
            onClick={() => {
              props.remove(props.post)
            }}
          >
            {' '}
            Удалить
          </Mybutton>
        </div>
      </div>
    </div>
  )
}

export default Postitem
