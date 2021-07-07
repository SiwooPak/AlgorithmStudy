/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 const isSameTree = (p, q) => {
  // 두 노드가 모두 null => true
  if(!p && !q) return true;
  
  // 둘 중 한 개의 노드가 null => false
  if ((!p && q) || (p && !q)) return false;
 
  
  // 두 노드의 값이 다르면 => false
  if (p.val !== q.val) return false;
  
  
  // 이진트리를 탐색하므로 왼쪽, 오른쪽을 재귀적으로 순회해서 트리의 왼쪽 자식 노드들과 오른쪽 자식 노드들이 모두 같을 때만 true를 리턴
  return  isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
  
