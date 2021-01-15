import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Let's Keep In Touch!"
      description="Reach us at team@sms-it.io or at the button below"
    />
    <a href="mailto:team@sms-it.io">
      <Button >Contract Us</Button>
    </a>
  </div>
)

export default CallToAction
