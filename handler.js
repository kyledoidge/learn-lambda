function random(num1, num2) {
  return Math.random() * num2 + num1;
}


module.exports.random = async (event, context) => {
  const error = undefined;
  const {num1, num2} = event.queryStringParameters;
  
  const body = {
    message: random(Number(num1), Number(num2)),
    error: error || 0,
    environment: process.env.ENVIRONMENT
  }
  
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body, null, 2)
  };
};
