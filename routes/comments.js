module.exports = {
  getComments(req, res) {
    console.log("In get comment section")
	res.status(200).send(req.store.posts[req.params.postId].comments)
  }, 
  addComment(req, res) {
    console.log("in add comment")
	let newComment = req.body
	let id = req.store.posts[req.params.postId].comments.length
	req.store.posts[req.params.postId].comments.push(newComment)
	res.status(201).send({id: id})
  },
  updateComment(req, res) {
    console.log("in update")
	req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
	res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId])
  },
  removeComment(req, res) {
    console.log("In comment delete")
	req.store.posts[req.params.postId].comments.splice(req.params.commentId,1)
	res.status(200).send(req.store)
  }  
}
