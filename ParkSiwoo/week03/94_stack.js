// stack을 이용해서 하는 법
var inorderTraversal = function (root) {
    let result = [];
    let stack = [];
    let current = root;
    
    // current가 null일때까지
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
  
    while (stack.length > 0) {
      let node = stack.pop();
      result.push(node.val);
  
      node = node.right;
      while (node !== null) {
        stack.push(node);
        node = node.left;
      }
    }
  
    return result;
};
