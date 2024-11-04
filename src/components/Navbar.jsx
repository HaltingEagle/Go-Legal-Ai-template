import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ai from "../assets/ai.png";
import downArrow from "../assets/down-arrow.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => document.removeEventListener("click", handleClickOutside);
    }, [open]);
    return (
        <div className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-purple-300 shadow-lg"}`}>
            <div className="flex flex-row items-center no-underline bg-white border rounded-full max-lg:justify-evenly md:justify-between lg:px-8 lg:py-7 max-lg:px-6 max-lg:py-5 lg:mt-4 lg:mb-2 lg:mx-4 max-lg:mx-2 max-lg:my-2 max-md:p-2">
                <div className="max-md:w-[40%] items-center justify-center">
                    <Link to={'/'} className="cursor-pointer"><img src={logo} className="m-2 cursor-pointer w-60" alt="" /></Link>
                </div>
                <div className="hidden grid-cols-5 gap-4 lg:grid">
                    <div className="relative group">
                        <div className="flex flex-row items-center cursor-pointer">
                            <Link to="/overwiew">Platform</Link>
                            <img
                                src={downArrow}
                                className="w-5 ml-2 transition-transform duration-300 ease-in-out group-hover:rotate-180"
                                alt=""
                            />
                        </div>
                        <div className="absolute left-0 hidden w-full min-w-full top-10 group-hover:block">
                            <ul className="flex flex-grow min-w-[400px] bg-slate-50 group-hover:block rounded-md p-2">
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/templates">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/templates">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/overwiew">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/overwiew">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/templates">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/how-it-works">How It Works</Link>
                    <Link to="/case-studies">Case Studies</Link>
                    <div className="relative group">
                        <div className="flex flex-row items-center cursor-pointer">
                            <Link to="/overwiew">Legal Hub</Link>
                            <img
                                src={downArrow}
                                className="w-5 ml-2 transition-transform duration-300 ease-in-out group-hover:rotate-180"
                                alt=""
                            />
                        </div>
                        <div className="absolute left-0 hidden w-full min-w-full top-10 group-hover:block">
                            <ul className="flex min-w-[420px] bg-slate-50 group-hover:block rounded-md p-2">
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/overwiew">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/overwiew">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/overwiew">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="flex flex-row items-center cursor-pointer">
                            <Link to="/overwiew">Join Us</Link>
                            <img
                                src={downArrow}
                                className="w-5 ml-2 transition-transform duration-300 ease-in-out group-hover:rotate-180"
                                alt=""
                            />
                        </div>
                        <div className="absolute left-0 hidden w-full min-w-full top-10 group-hover:block">
                            <ul className="flex flex-grow min-w-[200px] bg-slate-50 group-hover:block rounded-md p-2">
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/overwiew">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/overwiew">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/overwiew">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3">
                                    <div className="flex flex-row items-start hover:bg-slate-100">
                                        <img src={ai} className="mt-3" alt="" />
                                        <div className="flex flex-col ml-2">
                                            <Link to="/overwiew">Smart Templates</Link>
                                            <p>Generate legal documents 10x faster with our award-winning legal AI.</p>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 max-md:flex-row">
                    <Link to="/login" className="py-2 mx-3 cursor-pointer max-lg:py-3 max-md:py-8">Login</Link>
                    <button className="p-2 duration-300 bg-purple-500 border rounded-full hover:-translate-y-2 max-md:">
                        <Link to="/signup" className="text-white max-md:text-md">Try for Free</Link>
                    </button>
                    <div className="relative hidden py-2 max-md:my-auto max-md:mx-auto max-lg:block">
                        <img onClick={() => setOpen(!open)} src={downArrow} className={`m-3 cursor-pointer w-7 ${open ? 'rotate-180' : 'rotate-0'}`} alt="Toggle Menu"/>
                        <div className={`absolute top-20 md:left-[-900px] max-md:left-[-300px] max-md:mx-auto max-md:my-auto max-md:py-5 md:min-w-full ${open ? 'block' : 'hidden'}`}>
                            <ul className="p-4 max-lg:w-[1000px] max-md:max-w-[300px] max-md:mx-auto max-md:my-auto items-center justify-center text-center bg-white">
                                <li><Link to="/overview">Overview</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/features">Features</Link></li>
                                <li><Link to="/integrations">Integrations</Link></li>
                                <li><Link to="/legal-hub">Legal Hub</Link></li>
                                <li><Link to="/case-studies">Case Studies</Link></li>
                                <li><Link to="/join-us">Join Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden py-2 mx-2 text-center lg:block">
                            <select className='text-center text-black bg-transparent' name="" id="">
                            <option value="">English</option>
                            <option value="">Mandarin</option>
                            <option value="">French</option>
                            </select>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
