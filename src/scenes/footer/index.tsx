import Logo from "@/assets/Logo.png";
const Footer = () => {
return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                    At Evogym, we are committed to providing the best fitness experience with top-quality equipment, expert trainers, and a supportive community. Join us to transform your fitness journey and achieve your goals.
                </p>
                <p>© Evogym No Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <div>
                    <a href="https://cardify-store.de/" className="my-5 block">Cardify Store</a>
                </div>
                <div>
                    <a href="http://dominickandaleenasaidyes.de/" className="my-5 block">Dominick and Aleena Said Yes</a>
                </div>
                <div>
                    <a href="https://www.dominick-grodkowski.de/" className="my-5 block">Dominick Grodkowski</a>
                </div>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Henriette-Herz-Ring 11</p>
                <p>(+49)173 979 3403</p>
            </div>
        </div>
    </footer>
);
};

export default Footer;