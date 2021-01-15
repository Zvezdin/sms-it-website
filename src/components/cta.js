import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="We're Active!"
      description="Check out our latest developments"
    />
    <a href="https://blog.sms-it.io">
      <Button >Read Blog</Button>
    </a>
    <div style={{padding: "1em"}}></div>
    <SectionHeader
      title="Let's Keep In Touch!"
      description="Reach us at team@sms-it.io or at the button below"
    />
    <a href="mailto:team@sms-it.io">
      <Button >Contact Us</Button>
    </a>
  </div>
)

export default CallToAction
