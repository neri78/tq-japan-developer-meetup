module.exports = async function (helper) {
  const { holiday } = helper.validationFields;

  if (!holiday || holiday.toLowerCase() !== 'b'){
    return helper.fail(`
      残念ながら不正解です！
    `);
  }

  // The way we usually write validators is to fail fast, and then if we reach
  // the end, we know the user got all the answers right!
  helper.success(`
    正解です。Twilioは毎年、電話の誕生日を祝っています！
  `);
};
