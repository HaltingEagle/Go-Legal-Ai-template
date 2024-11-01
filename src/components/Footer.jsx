import logo from '../assets/white-logo.png';
import { Link } from 'react-router-dom';
import award from '../assets/award.png';
import cyberAward from '../assets/cyberAward.png';
import gdpr from '../assets/gdpr.png';
const Footer = () => {
    return (
        <div className='bottom-0 bg-blue-950 lg:mt-4 md:p-5 max-md:p-4'>
            <div className="flex gap-4 lg:p-8 lg:flex-row max-md:flex-col max-lg:justify-center max-lg:items-center max-md:gap-7">
                <div className="">
                    <div className="flex flex-col gap-4 max-md:items-center max-lg:my-4">
                        <img src={logo} alt="" className='w-80' />
                        <p className='text-gray-400 lg:w-[70%] font-semibold '>Our award-winning legal AI & expert lawyers are at your service.</p>
                        <p className='font-semibold text-gray-400'>Sign up for Free today!</p>
                        <div className="flex flex-row gap-4">
                            <img src={award} className='w-20' alt="" />
                            <img src={cyberAward} className='w-20' alt="" />
                            <img src={gdpr} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:my-8 lg:my-0 max-md:items-center max-md:justify-center max-md:text-center">
                    <h1 className='font-semibold text-white'>Legal Solutions</h1>
                    <div className="flex flex-col gap-4 font-semibold text-gray-400">
                        <Link to={'/templates'} className='mt-2'>Templates</Link>
                        <Link to={'/how-it-works'}>How It Works</Link>
                        <Link to={'/case-studies'}>Case Studies</Link>
                        <Link to={'/partners'}>Partners</Link>
                        <Link to={'/referral'}>Referral Scheme</Link>
                        <Link to={'/lawyers'}>Lawyers</Link>
                    </div>
                </div>
                <div className="flex flex-col max-md:items-center max-md:justify-center max-md:text-center ">
                    <h1 className='font-semibold text-white'>Legal Hub</h1>
                    <div className="flex flex-col gap-4 font-semibold text-gray-400">
                        <Link className='mt-2'>Insights</Link>
                        <Link>Guides</Link>
                        <Link>Glossary</Link>
                    </div>
                </div>
                <div className="flex flex-col max-md:items-center max-md:justify-center max-md:text-center">
                    <h1 className='font-semibold text-white'>Contact Us</h1>
                    <div className="flex flex-col gap-4 font-semibold text-gray-400">
                        <p className='mt-2'>Longbow House, 20 Chiswell St, London, UK</p>
                        <p>+(44) 207 459 4037</p>
                        <p>support@go-legal.ai</p>
                        <p></p>
                    </div>
                </div>
            </div>
            <hr className='w-[95%] mx-auto md:my-3 max-md:my-3' />
            <div className="flex flex-row justify-between lg:p-8 max-md:flex-col max-md:gap-4 max-md:items-center md:pb-3">
                <div className="">
                    <p className="text-white">© 2024 Go Legal Ai. All rights reserved.</p>
                </div>
                <div className="flex gap-4 max-md:items-center max-md:justify-center max-md:flex-col ">
                    <Link to="/terms-and-conditions" className='text-white'>Terms & Conditions</Link>
                    <Link to="/privacy-policy" className='text-white'>Privacy Policy</Link>
                    <Link to='/free-consultation' className='text-white'>Free Consultation</Link>
                </div>
                <div className="text-white">
                    <select className='text-white bg-transparent' name="" id="">
                        <option value="">English</option>
                        <option value="">Mandarin</option>
                        <option value="">French</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Footer;
