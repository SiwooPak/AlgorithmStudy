//https://leetcode.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//이진트리의 순회방법에는 inorder, preorder, postorder
//inorder(left, root, right)
//preorder(root, left, right)
//postorder(left, right, root)
//morris traversal



const inorderTraversal = (root) => {
  // 1단계: 관광객을 루트로 초기화.
  let tourlist = root;
  let solution = [];
  
  // 2단계: 관광객이 길을 잃지 않았는지.
  while (tourlist !== null) {
    // 왼쪽 하위 트리를 살펴보도록 가이드를 설정합니다.
    let guide = tourlist.left;

    if (tourlist.left !== null) {
      while (guide.right !== null && guide.right !== tourlist) {
        // 가이드가 가장 오른쪽으로 걸어갈 것이다.
        guide = guide.right;
      }
      if (guide.right === null) {
        // 가이드가 투어리스트로 가는 다리를 만들고
        guide.right = tourlist;
        // 관광객들은 왼쪽으로 걸어간다.
        tourlist = tourlist.left;
      // 만약 다리가 있다면, 그것을 파괴하라! 그것이 오른쪽으로 가는 것을 주목하라.
      } else {
        // 가이드가 없어지면
        guide.right = null;
        // 관광객들은 이것이 끝이라는 것을 알게 될 것이다.
        solution.push(tourlist.val);
        // 관광객들은 오른쪽으로 걸어갈 것이다.
        tourlist = tourlist.right;
      }
    
    } else {
        // root값을 push
        solution.push(tourlist.val);
        // 관광객을 오른쪽으로 향한다.
        tourlist = tourlist.right;
    }
  }
  return solution;
};