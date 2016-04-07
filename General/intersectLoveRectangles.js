// rectanle format
// var myRectangle =  {leftX: 1, bottomY : 5, width : 10, height : 4}
// pass in a rectangle and the other rectangle's points
const containsAtLeastOnePoint = (rect, overLapperPoints) => {
  for (let i = 0; i < overLapperPoints.length; i++) {
    if (overLapperPoints[i][0] >= rect.leftX && overLapperPoints[i][0] <= rect.leftX + rect.width) {
      if (overLapperPoints[i][1] >= rect.leftY && overLapperPoints[i][1] <= rect.leftY + rect.height) {
        return true;
      }
    }
  }
  return false;
}


const intersectLoveRectangles = (rect1, rect2) => {
  // order rectangles for my sanity
  let {leftRect, rightRect} = (rect1.leftX < rect2.leftX) ? { rect1, rect2 } : { rect2, rect1 };

  // this is the left rectangle points
  let leftRectBottomLeft = [ leftRect.leftX, leftRect.bottomY ];
  let leftRectTopLeft = [ leftRect.leftX, leftRect.bottomY + leftRect.height];
  let leftRectBottomRight = [ leftRect.leftX+leftRect.width, leftRect.bottomY ];
  let leftRectTopRight = [ leftRect.leftX+leftRect.width, leftRect.bottomY + leftRect.height ];

  // this is the right rectanle points
  let rightRectBottomLeft = [ rightRect.leftX, rightRect.bottomY ];
  let rightRectTopLeft = [ rightRect.leftX, rightRect.bottomY + rightRect.height];
  let rightRectBottomRight = [ rightRect.leftX+rightRect.width, rightRect.bottomY ];
  let rightRectTopRight = [ rightRect.leftX+rightRect.width, rightRect.bottomY + rightRect.height ];

  let leftRectContainsRightRect = containsAtLeastOnePoint();
  let rightRectContainsLeftRect = containsAtLeastOnePoint();
}
