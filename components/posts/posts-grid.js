import PostItem from './post-item'
import classes from './posts-grid.module.css'

function PostsGrid(props) {
    const {posts} = props
  return (
    <ul className={classes.grid}>
        {posts.map(singlePost => <PostItem key={singlePost.slug} post={singlePost} />)}
    </ul>
  )
}

export default PostsGrid