import { App } from "octokit";
const core = require('@actions/core');
const github = require('@actions/github');

try {
  
  const appId = core.getInput('app-id', { required: true });
  const privateKey = core.getInput('private-key', { required: true });
  const installationId = core.getInput('installation-id', { required: true });
  
  const app = new App({ appId, privateKey });
  const octokit = await app.getInstallationOctokit(installationId);
  const response = await octokit.request('POST /app/installations/{installation_id}/access_tokens', {
    installation_id: installationId
  });
  const token = response.token;
  core.setSecret(token);
  core.setOutput('token', token);
} catch (error) {
  core.setFailed(error.message);
}
