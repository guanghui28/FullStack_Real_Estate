import "./Value.css";
import { Accordion } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/accordion";
import AccordionMap from "./Accordion";

export default function Value() {
	return (
		<section className="v-wrapper">
			<div className="paddings innerWidth v-container">
				{/* left side */}
				<div className="v-left">
					<div className="image-container">
						<img src="./value.png" alt="value" />
					</div>
				</div>

				{/* right side */}
				<div className="flexColStart v-right">
					<span className="orangeText">Our Value</span>
					<span className="primaryText">Value We Give to You</span>
					<span className="secondaryText">
						We always ready to help by providing the best services for you.
						<br />
						We believe a good place to live can make your life better.
					</span>

					<Accordion
						className="accordion"
						allowMultipleExpanded={false}
						preExpanded={[0]}
					>
						{data.map((item, i) => (
							<AccordionMap item={item} key={i} uuid={i} />
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
