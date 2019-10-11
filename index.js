function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(head, collection){
  let nextAddress = head[1]
  // retrieve the address of the next element
  return collection[nextAddress]
}
