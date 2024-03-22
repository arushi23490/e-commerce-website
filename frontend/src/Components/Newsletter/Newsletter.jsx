import React from "react";
import "./Newsletter.css";
function Newsletter() {
  return (
    <div className="newsletter">
      <h1>GET EXCLUSIVE OFFERS ON YOUR Email</h1>
      <p>Subscribe To Our Newsletter And Stay Updated</p>
      <div>
        <input type="email" placeholder="your email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
