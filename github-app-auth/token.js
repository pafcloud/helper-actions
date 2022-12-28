import { App } from "octokit";

const appId = process.env.APP_ID;
const privateKey = process.env.PRIVATE_KEY;
const installationId = process.env.INSTALLATION_ID;

const app = new App({ appId, privateKey });

const octokit = await app.getInstallationOctokit(installationId);

const response = await octokit.request('POST /app/installations/{installation_id}/access_tokens', {
  installation_id: installationId
});

console.log(response.token);
