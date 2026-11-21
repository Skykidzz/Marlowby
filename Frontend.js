const SERVER_URL = "https://65.31.106.3:25565";

async function sendInfo(payload, waitForReply) {
  const response = await fetch(`${SERVER_URL}/api/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'bypass-tunnel-reminder': 'true'
    },
    body: JSON.stringify(payload)
  });

  if (waitForReply) {
    const reply = await response.json();
    console.log("Backend replied:", reply);
    return reply;
  }
}

async function receiveInfo() {
  const response = await fetch(`${SERVER_URL}/api/receive`, {
    method: 'GET',
    headers: {
      'bypass-tunnel-reminder': 'true'
    }
  });

  const data = await response.json();
  console.log("Data from backend:", data);
  return data;
}
