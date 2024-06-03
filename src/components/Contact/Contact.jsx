import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

export default function Contact() {
	return (
		<section className="c-wrapper">
			<div className="paddings innerWidth flexCenter c-container">
				{/* left side */}
				<div className="c-left flexColStart">
					<span className="orangeText">Our Contacts</span>
					<span className="primaryText">Easy to Contact us</span>
					<span className="secondaryText">
						We always ready to help by providing the best service that believes
						a good place to live can make your life better.
					</span>

					<div className="flexColStart contactModes">
						{/* first row */}
						<div className="flexStart row">
							{/* first mode */}
							<div className="flexColCenter mode">
								<div className="flexStart">
									<div className="flexCenter icon">
										<MdCall size={25} />
									</div>
									<div className="flexColStart detail">
										<span className="primaryText">Call</span>
										<span className="secondaryText">021 123 145 14</span>
									</div>
								</div>
								<div className="flexCenter button">Call Now</div>
							</div>

							{/* second mode */}
							<div className="flexColCenter mode">
								<div className="flexStart">
									<div className="flexCenter icon">
										<BsFillChatDotsFill size={25} />
									</div>
									<div className="flexColStart detail">
										<span className="primaryText">Chat</span>
										<span className="secondaryText">021 123 145 14</span>
									</div>
								</div>
								<div className="flexCenter button">Chat Now</div>
							</div>
						</div>

						{/* second row */}
						<div className="flexStart row">
							{/* first mode */}
							<div className="flexColCenter mode">
								<div className="flexStart">
									<div className="flexCenter icon">
										<HiChatBubbleBottomCenter size={25} />
									</div>
									<div className="flexColStart detail">
										<span className="primaryText">Video</span>
										<span className="secondaryText">021 123 145 14</span>
									</div>
								</div>
								<div className="flexCenter button">Video Now</div>
							</div>

							{/* second mode */}
							<div className="flexColCenter mode">
								<div className="flexStart">
									<div className="flexCenter icon">
										<BsFillChatDotsFill size={25} />
									</div>
									<div className="flexColStart detail">
										<span className="primaryText">Message</span>
										<span className="secondaryText">021 123 145 14</span>
									</div>
								</div>
								<div className="flexCenter button">Message Now</div>
							</div>
						</div>
					</div>
				</div>
				{/* Right side */}
				<div className="c-right">
					<div className="image-container">
						<img src="./contact.jpg" alt="contact img" />
					</div>
				</div>
			</div>
		</section>
	);
}
