import React from "react"

import feature from "../images/feature.png"
import reach from "../images/bullet-icons/reach.png"
import reliable from "../images/bullet-icons/reliable.png"
import engage from "../images/bullet-icons/engage.png"
import automatic from "../images/bullet-icons/automatic.png"
import management from "../images/bullet-icons/management.png"
import analytics from "../images/bullet-icons/analytics.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

import styles from "./content.module.css";

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="What We Offer"
      description="We help you to expand the reach of your bots and to nearly any person on this planet"
    />

    <content
      className={styles.bullet}
    >
      <div>
        <img className={styles.bulletImage} src={reach} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <h3>Reach More</h3>
        <p style={{ color: COLORS.gray }}>
          Tap into new markets of users who would not or cannot use traditional media 
        </p>
      </div>
    </content>

    <content
      className={styles.bullet}
    >
      <div>
        <h3>Be Reliable</h3>
        <p style={{ color: COLORS.gray }}>
          Your users can count on you more if they can use your product or service wherever they are
        </p>
      </div>
      <div>
        <img className={styles.bulletImage} src={reliable} alt="a blank card floating over colorful graphics" />
      </div>
    </content>

    <content
      className={styles.bullet}
    >
      <div>
        <img className={styles.bulletImage} src={engage} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <h3>Be Engaging</h3>
        <p style={{ color: COLORS.gray }}>
          Interfacing with SMS allows you to engage with your users more often, growing your venture
        </p>
      </div>
    </content>

    <div style={{height: "6vh"}}></div>

    <SectionHeader
      title="How We Deliver That"
      description="We provide you with the infrastructure to convert any voice and chat bot into an SMS bot. "
    />
    <content
      className={styles.bullet}
    >
      <div>
        <h3>Automatic Bot Deployment</h3>
        <p style={{ color: COLORS.gray }}>
          Our platform seamlessly converts and deploys bots from many platforms into SMS
        </p>
      </div>
      <div>
        <img className={styles.bulletImage} src={automatic} alt="a blank card floating over colorful graphics" />
      </div>
    </content>

    <content
      className={styles.bullet}
    >
      <div>
        <img className={styles.bulletImage} src={management} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <h3>Advanced Bot Management</h3>
        <p style={{ color: COLORS.gray }}>
          Manage your deployed SMS bots with a set of powerful tools
        </p>
      </div>
    </content>

    <content
      className={styles.bullet}
    >
      <div>
        <h3>Analytics</h3>
        <p style={{ color: COLORS.gray }}>
          Monitor and analyze how users interact with your bots
        </p>
      </div>
      <div>
        <img className={styles.bulletImage} src={analytics} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
