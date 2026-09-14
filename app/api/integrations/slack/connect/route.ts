import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.SLACK_CLIENT_ID;
  const redirectUri = process.env.SLACK_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return new NextResponse(
      "Slack environment variables are not configured.",
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,

    // Start with the minimum permissions we need.
    scope: "channels:read,chat:write",
  });

  const slackAuthorizationUrl =
    `https://slack.com/oauth/v2/authorize?${params.toString()}`;

  return NextResponse.redirect(slackAuthorizationUrl);
}