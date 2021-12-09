module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const { answer1 } = helper.validationFields;

  // Next, you test the user input - fail fast if they get one of the
  // answers wrong, or some aspect is wrong! Don't provide too much
  // negative feedback at once, have the player iterate.
  if (!answer1 || !Number(answer1) || Number(answer1) != 25) {
    return helper.fail(`
      不正解です。Jeffの基調講演を視聴し、正しい値を丹生路y区してください。
    `);
  }
  helper.success(`
    正解です！今年は既に25億コールを捌いています。
  `);
};
