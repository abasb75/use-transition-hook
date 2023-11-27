function PostsTab(){
    
    let items = [];
        for (let i = 0; i < 500; i++) {
        items.push(<SlowPost key={i} index={i} />);
    }

    return (<>
        <h1>Posts</h1>
        <ul>
            {items}
        </ul>
    </>);

}

function SlowPost({ index }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // Do nothing for 1 ms per item to emulate extremely slow code
    }
  
    return (
      <li className="item">
        Post #{index + 1}
      </li>
    );
}

export default PostsTab;