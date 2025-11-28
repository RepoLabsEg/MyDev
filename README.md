function showResult(){
  document.getElementById("puzzles").style.display="none";
  document.getElementById("submit-btn").style.display="none";
  document.getElementById("result-modal").style.display="flex";

  const acceptedCode = "PUT-YOUR-SPECIAL-CODE-HERE";

  if (user.code === acceptedCode) {

    document.getElementById("result-content").innerHTML = `
      <h2 style="color:#00e6a8; margin-bottom:5px;">Welcome, ${user.name}</h2>

      <div style="
        color:#00e6a8;
        font-size:22px;
        margin-bottom:25px;
        text-align:left;
        font-weight:bold;
        text-shadow:0 0 8px rgba(0,255,180,0.4);
      ">
        ACCEPTED
      </div>

      <p style="margin-top:10px; line-height:1.7; opacity:0.95;">
      In the quiet space between reason and instinct, your answers revealed something rare…  
      a mind that does not simply choose — but understands.  
      A thinker who does not just observe — but perceives what others overlook.
      </p>

      <p style="margin-top:15px; line-height:1.7; opacity:0.9;">
      Your responses were examined by the analysts of <b>Repo Lab</b>,  
      and the pattern of your decisions reflected depth, clarity, and controlled intuition.  
      Not everyone reaches this stage — but you did.
      </p>

      <p style="margin-top:15px; line-height:1.7; opacity:0.8;">
      This message is shown only to you, and to the very few who qualified for <b>HUNT 0</b>.  
      Soon, the official list of accepted challengers will be revealed through our channels…  
      but for now, consider this your silent nod — your invitation into the unknown.
      </p>

      <img src="https://i.ibb.co/TMctgg22/Whats-App-Image-2025-11-26-at-3-00-23-PM-1.jpg"
      class="result-image" alt="Accepted">
    `;

  } else {

    document.getElementById("result-content").innerHTML = `
      <h2>Your Session Completed</h2>
      <p>Name: ${user.name}</p>
      <p>Code: ${user.code}</p>
      <p>Your answers have been submitted successfully.</p>
      <img src="https://i.ibb.co/TMctgg22/Whats-App-Image-2025-11-26-at-3-00-23-PM-1.jpg" class="result-image" alt="Success">
    `;
  }
}
