// 재귀함수
var inorderTraversal = function (root) {
  let solution = [];

  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    solution.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return solution;
};
