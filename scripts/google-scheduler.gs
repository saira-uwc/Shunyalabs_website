function triggerRunTests() {
  triggerWorkflow('scheduled-tests.yml');
}

function triggerSendEmail() {
  triggerWorkflow('daily-email-report.yml');
}

function triggerWorkflow(workflowFile) {
  const props = PropertiesService.getScriptProperties();
  const owner = props.getProperty('GITHUB_OWNER');
  const repo = props.getProperty('GITHUB_REPO');
  const pat = props.getProperty('GITHUB_PAT');
  const ref = props.getProperty('GITHUB_REF') || 'saira-website';

  if (!owner || !repo || !pat) {
    throw new Error('Missing script properties: GITHUB_OWNER, GITHUB_REPO, GITHUB_PAT');
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowFile}/dispatches`;
  const payload = JSON.stringify({ ref });

  const response = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload,
    headers: {
      Authorization: `Bearer ${pat}`,
      Accept: 'application/vnd.github+json',
    },
    muteHttpExceptions: true,
  });

  if (response.getResponseCode() !== 204) {
    throw new Error(`GitHub dispatch failed: ${response.getResponseCode()} ${response.getContentText()}`);
  }
}
