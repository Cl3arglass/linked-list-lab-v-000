function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection){
  let nextAddress = node[1]
  // retrieve the address of the next element
  return collection[nextAddress]
}
