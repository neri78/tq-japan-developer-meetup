module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const { birthday } = helper.validationFields;
  const answer = new Date(2008, 10, 20);

  try {
    const birthdayStr = birthday.split('-');
    let inputDate = new Date(Number(birthdayStr[0]), Number(birthdayStr[1])-1, Number(birthdayStr[2]));
   
    if (inputDate.getTime() !== answer.getTime()) {
      return helper.fail(
        `残念、その日付ではありません。`);
    }
    return helper.success(
      `正解です！ Twilioの誕生日は2008年11月20日です。`);

  } catch (e) { 
    return helper.fail(
      `正しい日付形式で入力してください。`);
  }

};
