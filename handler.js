function random(num1, num2) {
  return Math.random() * num2 + num1;
}


module.exports.random = async (event, context, callback) => {
  const error = undefined;
  const {num1, num2} = event.queryStringParameters;
  return {
    statusCode: 200,
    "content-type": "application/json",
    body: 
      {
        message: random(Number(num1), Number(num2)),
        error: error || 0,
        environment: process.env.ENVIRONMENT
      },
  };
};
