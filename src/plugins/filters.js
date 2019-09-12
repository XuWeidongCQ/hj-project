
const correctECUStatus = function (value) {
  switch (value) {
    case 0:
      return '报警';
      break
    case 1:
      return '正常';
      break
    default:
      return '未知状态'
  }
};

const correctRotateSpeed = function (value) {
  return value + 'rpm'
};

const correctGreasePressure = function (value) {
  return value + 'kpa'
};
const correctCoolingWater = function (value) {
  return value + '℃'
};
export default {
  correctECUStatus,
  correctRotateSpeed,
  correctGreasePressure,
  correctCoolingWater
}