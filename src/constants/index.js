import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/assets/images";

import menShoe from '../assets/assets/images/men-shoe.jpg';
import menShoeOne from '../assets/assets/images/men-shoe1.jpg';
import menShoeTwo from '../assets/assets/images/men-shoe2.jpg';
import menShoeThree from '../assets/assets/images/men-shoe3.jpg';
import menShoeFour from '../assets/assets/images/men-shoe4.jpg';
import menShoeFive from '../assets/assets/images/men-shoe5.jpg';

import pumaShoe1 from '../assets/assets/images/PumaShoes1.jpg';
import pumaShoe2 from '../assets/assets/images/PumaShoes2.jpg';
import pumaShoe3 from '../assets/assets/images/PumaShoes3.jpg';
import pumaShoe4 from '../assets/assets/images/PumaShoes4.jpg';
import pumaShoe5 from '../assets/assets/images/PumaShoes5.jpg';
import pumaShoe6 from '../assets/assets/images/PumaShoes6.jpg';

import NikeShoes1 from '../assets/assets/images/NikeShoes1.jpg';
import NikeShoes2 from '../assets/assets/images/NikeShoes2.jpg';
import NikeShoes3 from '../assets/assets/images/NikeShoes3.jpg';
import NikeShoes4 from '../assets/assets/images/NikeShoes4.jpg';
import NikeShoes5 from '../assets/assets/images/NikeShoes5.jpg';
import NikeShoes6 from '../assets/assets/images/NikeShoes6.jpg';

import NBshoes1 from '../assets/assets/images/NBshoes1.jpg'
import NBshoes2 from '../assets/assets/images/NBshoes2.jpg'
import NBshoes3 from '../assets/assets/images/NBshoes3.jpg'
import NBshoes4 from '../assets/assets/images/NBshoes4.jpg'
import NBshoes5 from '../assets/assets/images/NBshoes5.jpg'
import NBshoes6 from '../assets/assets/images/NBshoes6.jpg'

import JordanShoes1 from '../assets/assets/images/JordanShoes1.jpg'
import JordanShoes2 from '../assets/assets/images/JordanShoes2.jpg'
import JordanShoes3 from '../assets/assets/images/JordanShoes3.jpg'
import JordanShoes4 from '../assets/assets/images/JordanShoes4.jpg'
import JordanShoes5 from '../assets/assets/images/JordanShoes5.jpg'
import JordanShoes6 from '../assets/assets/images/JordanShoes6.jpg'

import AdidasShoes1 from '../assets/assets/images/AdidasShoes1.jpg'
import AdidasShoes2 from '../assets/assets/images/AdidasShoes2.jpg'
import AdidasShoes3 from '../assets/assets/images/AdidasShoes3.jpg'
import AdidasShoes4 from '../assets/assets/images/AdidasShoes4.jpg'
import AdidasShoes5 from '../assets/assets/images/AdidasShoes5.jpg'
import AdidasShoes6 from '../assets/assets/images/AdidasShoes6.jpg'

import BalanciagaShoe1 from '../assets/assets/images/BalanciagaShoe1.jpg'
import BalanciagaShoe2 from '../assets/assets/images/BalanciagaShoe2.jpg'
import BalanciagaShoe3 from '../assets/assets/images/BalanciagaShoe3.jpg'
import BalanciagaShoe4 from '../assets/assets/images/BalanciagaShoe4.jpg'
import BalanciagaShoe5 from '../assets/assets/images/BalanciagaShoe5.jpg'
import BalanciagaShoe6 from '../assets/assets/images/BalanciagaShoe6.jpg'


export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/women", label: "Women" },
    { href: "/men", label: "Men" },
    { href: "/contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    }, 
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

//men page

export const menShoeHeader = [
    {
        imgURL: menShoe,
        type: '3XL',
    },
    {
        imgURL: menShoeOne,
        type: 'Runner',
    },
    {
        imgURL:  menShoeTwo,
        type: 'Speed',
    },
    {
        imgURL: menShoeThree,
        type: 'Triple',
    },
    {
        imgURL: menShoeFour,
        type: 'track',
    },
    {
        imgURL: menShoeFive,
        type: 'Crocs',
    },
]


export const shoeBrand = [
    { href: "/men/nike", name: "Nike" }, 
    { href: "/men/adidas", name: "Adidas" }, 
    { href: "/men/jordan", name: "Jordan" }, 
    { href: "/men/puma", name: "Puma" },
    { href: "/men/balanciaga", name: "Balanciaga" },
    { href: "/men/newbalance", name: "New Balance" },
]

export const listOfMenShoes = [
     { imgURL: pumaShoe1, rating: 4.5, },
    { imgURL: pumaShoe2,  rating: 4.5, },
    { imgURL: pumaShoe3,  rating: 4.5, },
    { imgURL: pumaShoe4,   rating: 4.5, },
    { imgURL: pumaShoe5,  rating: 4.5, },
    { imgURL: pumaShoe6,  rating: 4.5, },
    { imgURL: AdidasShoes1,  rating: 4.5, },
    { imgURL: AdidasShoes2,  rating: 4.5, },
    { imgURL: AdidasShoes3, rating: 4.5, },
    { imgURL: AdidasShoes4,  rating: 4.5, },
    { imgURL: AdidasShoes5,  rating: 4.5, },
    { imgURL: AdidasShoes6,  rating: 4.5, },
    { imgURL: BalanciagaShoe1, rating: 4.5, },
    { imgURL: BalanciagaShoe2,  rating: 4.5, },
    { imgURL: BalanciagaShoe3,  rating: 4.5, },
    { imgURL: BalanciagaShoe4,  rating: 4.5, },
    { imgURL: BalanciagaShoe5,  rating: 4.5, },
    { imgURL: BalanciagaShoe6,  rating: 4.5, },
    { imgURL: NBshoes1,  rating: 4.5, },
    { imgURL: NBshoes2,  rating: 4.5, },
    { imgURL: NBshoes3,  rating: 4.5, },
    { imgURL: NBshoes4,  rating: 4.5, },
    { imgURL: NBshoes5,  rating: 4.5, },
    { imgURL: NBshoes6,  rating: 4.5, },
    { imgURL: NikeShoes1, rating: 4.5, },
    { imgURL: NikeShoes2, rating: 4.5, },
    { imgURL: NikeShoes3, rating: 4.5, },
    { imgURL: NikeShoes4, rating: 4.5, },
    { imgURL: NikeShoes5, rating: 4.5, },
    { imgURL: NikeShoes6, rating: 4.5, },
    { imgURL: JordanShoes1, rating: 4.5, },
    { imgURL: JordanShoes2, rating: 4.5, },
    { imgURL: JordanShoes3,  rating: 4.5, },
    { imgURL: JordanShoes4, rating: 4.5, },
    { imgURL: JordanShoes5, rating: 4.5, },
    { imgURL: JordanShoes6, rating: 4.5, },
]