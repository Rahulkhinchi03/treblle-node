const { generatePayload } = require("./generate-payload");
const { sendPayloadToTreblleApi } = require("../sender");

async function sendPayload(
  request,
  response,
  {
    apiKey,
    projectId,
    additionalFieldsToMask,
    showErrors = true,
    requestExecutionTime,
    error,
  }
) {
  const trebllePayload = await generatePayload(request, response, {
    apiKey,
    projectId,
    additionalFieldsToMask,
    requestExecutionTime,
    error,
  });

  sendPayloadToTreblleApi({ apiKey, trebllePayload, showErrors });
}

module.exports = {
  sendPayload,
};
