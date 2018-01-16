module.exports = {
  getPosts(req, res) {
       console.log("Hi you call me")
	   res.status(200).send(req.store.posts)
  },
  addPost(req, res) {
       console.log("in add post")
	   let newPost = req.body
	   let id = req.store.posts.length
	   req.store.posts.push(newPost)
	   res.status(201).send({id: id})
  },
  updatePost(req, res) {
       console.log("in update")
	   req.store.posts[req.params.postId] = req.body
	   res.status(200).send(req.store.posts[req.params.postID])
  },
  removePost(req, res) {
      console.log("In delete")
	  req.store.posts.splice(req.params.postId,1)
	  res.status(200).send(req.store)
  }
}