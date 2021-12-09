module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const { answer1 } = helper.validationFields;

  // Next, you test the user input - fail fast if they get one of the
  // answers wrong, or some aspect is wrong! Don't provide too much
  // negative feedback at once, have the player iterate.
  console.log(answer1.toLowerCase());
  if (!answer1 || !answer1.toLowerCase().includes('twilio champions')) {
    return helper.fail(`
      不正解です。Objectiveタブと関連リンクを読み、再度回答してください。
    `);
  }

  helper.success(`
    正解です。Twilio Championsプログラムはみなさんの応募をお待ちしています。
  `);
};
