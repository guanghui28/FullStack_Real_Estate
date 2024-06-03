import "./Value.css";
import {
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
	AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";

export default function AccordionMap({ item }) {
	const [className, setClassName] = useState(null);

	return (
		<AccordionItem className={`${className} accordionItem`}>
			<AccordionItemHeading>
				<AccordionItemButton className=" accordionButton">
					<AccordionItemState>
						{({ expanded }) =>
							setClassName(expanded ? "expanded" : "collapsed")
						}
					</AccordionItemState>

					<div className="flexCenter icon">{item.icon}</div>
					<span className="primaryText">{item.heading}</span>
					<div className="flexCenter icon">
						<MdOutlineArrowDropDown size={20} />
					</div>
				</AccordionItemButton>
			</AccordionItemHeading>

			<AccordionItemPanel>
				<p className="secondaryText">{item.detail}</p>
			</AccordionItemPanel>
		</AccordionItem>
	);
}
