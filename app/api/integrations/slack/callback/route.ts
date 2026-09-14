import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    return new NextResponse(
      `Slack authorization failed: ${error}`,
      { status: 400 }
    );
  }

  if (!code) {
    return new NextResponse(
      "Missing Slack authorization code.",
      { status: 400 }
    );
  }

  const clientId = process.env.SLACK_CLIENT_ID;
  const clientSecret = process.env.SLACK_CLIENT_SECRET;
  const redirectUri = process.env.SLACK_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return new NextResponse(
      "Slack environment variables are not configured.",
      { status: 500 }
    );
  }

  const response = await fetch(
    "https://slack.com/api/oauth.v2.access",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
      }),
    }
  );

  const data = await response.json();

  if (!data.ok) {
    console.error("Slack OAuth error:", data);

    return new NextResponse(
      `Slack OAuth failed: ${data.error ?? "Unknown error"}`,
      { status: 400 }
    );
  }

  console.log("Slack OAuth successful:", {
    team: data.team,
    authed_user: data.authed_user,
  });

  return NextResponse.redirect(
    new URL("/dashboard", request.url)
  );
}