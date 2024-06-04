import "./Footer.css";

export default function Footer() {
	return (
		<footer className="f-wrapper">
			<div className="paddings innerWidth f-container">
				{/* left side */}
				<div className="f-left">
					<img src="./logo2.png" alt="" width={120} />

					<span className="secondaryText">
						Our vision is to make all people <br />
						the best place to live for them.
					</span>
				</div>

				{/* right side */}
				<div className="f-right">
					<span className="primaryText">Information</span>
					<span className="secondaryText">123 QuangNgai, VietNam</span>

					<div className="flexCenter f-menu">
						<span>Property</span>
						<span>Services</span>
						<span>Product</span>
						<span>About</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
