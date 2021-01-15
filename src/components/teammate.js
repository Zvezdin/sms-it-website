import React from "react"

import { COLORS } from "../styles/constants"

const Teammate = ({name, img, description}) =>
	<div>
		<h3>{name}</h3>
  	<img style={{width: "50%", height: "auto"}} src={img}/>
		<p style={{ color: COLORS.gray }}>
			{description}
		</p>
		<div>
		</div>
	</div>

export default Teammate