/**
 * Daily contact form E2E email test — calls /api/send-mail directly with X-Automation-Secret.
 * Browser form submissions cannot send the secret header; use this from CI only.
 */

export const CONTACT_AUTOMATION_EMAIL = 'automated-test@example.com';

export const CONTACT_DAILY_API_PAYLOAD = {
  name: 'QA Automation',
  email: CONTACT_AUTOMATION_EMAIL,
  phone: '0000000000',
  message: '[E2E-DAILY] Contact form delivery test',
  token: '',
};

export const CONTACT_SEND_MAIL_PATH = '/api/send-mail';

/**
 * @param {{ secret: string, baseURL?: string, fetchImpl?: typeof fetch }} options
 * @returns {Promise<{ ok: boolean, status: number, message: string, mode: 'success' | 'already_ran' | 'failed' | 'skipped', body?: unknown }>}
 */
export async function runContactDailyE2eMail({
  secret,
  baseURL = process.env.CONTACT_API_BASE_URL || 'https://www.shunyalabs.ai',
  fetchImpl = fetch,
} = {}) {
  if (!secret) {
    return {
      ok: true,
      status: 0,
      message: 'CONTACT_AUTOMATION_SECRET not set — daily API test skipped',
      mode: 'skipped',
    };
  }

  const url = `${baseURL.replace(/\/$/, '')}${CONTACT_SEND_MAIL_PATH}`;
  const response = await fetchImpl(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Automation-Secret': secret,
    },
    body: JSON.stringify(CONTACT_DAILY_API_PAYLOAD),
  });

  const raw = await response.text();
  let body = {};
  try {
    body = raw ? JSON.parse(raw) : {};
  } catch {
    body = { message: raw.slice(0, 300) };
  }

  const apiMessage =
    typeof body.message === 'string' && body.message.length > 0
      ? body.message
      : typeof body.error === 'string'
        ? body.error
        : raw.slice(0, 300);

  if (response.status === 200 && body.success === true) {
    return {
      ok: true,
      status: response.status,
      message: apiMessage || 'Emails sent successfully!',
      mode: 'success',
      body,
    };
  }

  if (response.status === 429) {
    return {
      ok: true,
      status: response.status,
      message: apiMessage || 'Automation test already ran today.',
      mode: 'already_ran',
      body,
    };
  }

  return {
    ok: false,
    status: response.status,
    message: apiMessage || `Unexpected HTTP ${response.status}`,
    mode: 'failed',
    body,
  };
}

/**
 * Whether this CI run is the daily E2E email slot (first ~2-hourly run after midnight IST).
 */
export function isContactDailyE2eSlot({
  timeZone = process.env.CONTACT_MAIL_LIVE_TZ || 'Asia/Kolkata',
  now = new Date(),
} = {}) {
  const hour = Number(
    new Intl.DateTimeFormat('en-GB', { timeZone, hour: 'numeric', hour12: false }).format(now)
  );
  return hour < 2;
}

/** CI sets CONTACT_DAILY_E2E=true|false; locally falls back to IST slot check. */
export function shouldRunContactDailyE2e() {
  if (process.env.CONTACT_DAILY_E2E === 'true') return true;
  if (process.env.CONTACT_DAILY_E2E === 'false') return false;
  return isContactDailyE2eSlot();
}
