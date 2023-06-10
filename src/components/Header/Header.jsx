import Navbar from "@/components/Navbar/Navbar";
import Styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={Styles["primary-header"]}>
			<div className="container">
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
