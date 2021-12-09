module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const { brand } = helper.validationFields;

  if (!brand || brand !== 'パタゴニア') {
    return helper.fail(`
      残念ながら不正解です！
    `);
  }

  helper.success(`
    その通り、彼がよく着用するベストはパタゴニア製です。お土産にたくさん貰うとか？
  `);
};
