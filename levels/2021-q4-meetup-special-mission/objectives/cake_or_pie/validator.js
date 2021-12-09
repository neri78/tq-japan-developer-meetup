module.exports = async function (helper) {
  // validation_fieldsに入力された値を取得
  const { team } = helper.validationFields;

  if (team !== 'ケーキ') {
    return helper.fail(`ケーキこそ究極のデザートなり！`);
  }

  // 正しい派閥を入力した場合
  helper.success(`
    ケーキ万歳！
  `);
};
