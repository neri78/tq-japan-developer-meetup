module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const { answer1 } = helper.validationFields;

  if (!answer1 || answer1.toLowerCase() !== 'd') {
    return helper.fail(`
      残念ながら違います。特にBはジェフ・ローソン（Jeff Lawson）のイニシャルを考えると...
    `);
  }
  helper.success(`
    正解です。特に意味はないそうです。敢えていうなら名前が簡潔だったのとドメインがとれたから・・・とのことです。
  `);
};
