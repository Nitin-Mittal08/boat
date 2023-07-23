import { v4 as uuid } from "uuid";

import WE1 from "../../Assests/Images/WE1.webp";
import WE2 from "../../Assests/Images/WE2.webp";
import WE3 from "../../Assests/Images/WE3.webp";
import WE4 from "../../Assests/Images/WE4.webp";
import WE5 from "../../Assests/Images/WE5.webp";
import WE6 from "../../Assests/Images/WE6.webp";
import WE7 from "../../Assests/Images/WE7.webp";
import WE8 from "../../Assests/Images/WE8.avif";
import WE9 from "../../Assests/Images/WE9.webp";
import WE10 from "../../Assests/Images/WE10.avif";
import WE11 from "../../Assests/Images/WE11.webp";

import HP1 from "../../Assests/Images/HP1.avif";
import HP2 from "../../Assests/Images/HP2.webp";
import HP3 from "../../Assests/Images/HP3.avif";
import HP4 from "../../Assests/Images/HP4.avif";
import HP5 from "../../Assests/Images/HP5.avif";
import HP6 from "../../Assests/Images/HP6.avif";
import HP7 from "../../Assests/Images/HP7.avif";
import HP8 from "../../Assests/Images/HP8.avif";
import HP9 from "../../Assests/Images/HP9.avif";
import HP10 from "../../Assests/Images/HP10.avif";
import HP11 from "../../Assests/Images/HP11.avif";

import NB1 from "../../Assests/Images/NB1.webp";
import NB2 from "../../Assests/Images/NB2.webp";
import NB3 from "../../Assests/Images/NB3.avif";
import NB4 from "../../Assests/Images/NB4.webp";
import NB5 from "../../Assests/Images/NB5.webp";
import NB6 from "../../Assests/Images/NB6.avif";
import NB7 from "../../Assests/Images/NB7.webp";
import NB8 from "../../Assests/Images/NB8.avif";
import NB9 from "../../Assests/Images/NB9.avif";
import NB10 from "../../Assests/Images/NB10.avif";
import NB11 from "../../Assests/Images/NB11.avif";

import SP1 from "../../Assests/Images/SP1.avif";
import SP2 from "../../Assests/Images/SP2.avif";
import SP3 from "../../Assests/Images/SP3.avif";
import SP4 from "../../Assests/Images/SP4.avif";
import SP5 from "../../Assests/Images/SP5.avif";
import SP6 from "../../Assests/Images/SP6.avif";
import SP7 from "../../Assests/Images/SP7.avif";
import SP8 from "../../Assests/Images/SP8.avif";
import SP9 from "../../Assests/Images/SP9.avif";
import SP10 from "../../Assests/Images/SP10.avif";
import SP11 from "../../Assests/Images/SP11.avif";

import SW1 from "../../Assests/Images/SW1.webp";
import SW2 from "../../Assests/Images/SW2.webp";
import SW3 from "../../Assests/Images/SW3.avif";
import SW4 from "../../Assests/Images/SW4.webp";
import SW5 from "../../Assests/Images/SW5.webp";
import SW6 from "../../Assests/Images/SW6.webp";
import SW7 from "../../Assests/Images/SW7.webp";
import SW8 from "../../Assests/Images/SW8.webp";
import SW9 from "../../Assests/Images/SW9.webp";
import SW10 from "../../Assests/Images/SW10.webp";
import SW11 from "../../Assests/Images/SW11.webp";


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Airdopes 141",
    price: 1299,
    oldPrice: 4490,
    features: ["ASAP™ Charge", "Clear Calling"],
    categoryName: "wirelessEarbuds",
    img:WE1,
    rating:4.3
  },
  {
    _id: uuid(),
    title: "Airdopes 131",
    price: 999,
    oldPrice: 2990,
    features: ["13mm Drivers", "IWP Technology"],
    categoryName: "wirelessEarbuds",
    img:WE2,
    rating:4.4
  },
  {
    _id: uuid(),
    title: "Airdopes 161",
    price: 999,
    oldPrice: 2490,
    features: ["ASAP™ Charge", "IWP Technology"],
    categoryName: "wirelessEarbuds",
    img:WE3,
    rating:4.3
  },
  {
    _id: uuid(),
    title: "Airdopes 115",
    price: 999,
    oldPrice: 2990,
    features: ["BEAST™ Mode", "13mm Drivers"],
    categoryName: "wirelessEarbuds",
    img:WE4,
    rating:4.2
  },
  {
    _id: uuid(),
    title: "Airdopes Max",
    price: 1499,
    oldPrice: 5490,
    features: ["ASAP™ Charge", "BEAST™ Mode", "ENx™ Technology"],
    categoryName: "wirelessEarbuds",
    img:WE5,
    rating:4.5
  },
  {
    _id: uuid(),
    title: "Airdopes 131 PRO",
    price: 1099,
    oldPrice: 2990,
    features: ["BEAST™ Mode", "Clear Calling"],
    categoryName: "wirelessEarbuds",
    img:WE6,
    rating:4.8
  },
  {
    _id: uuid(),
    title: "Airdopes Atom 83",
    price: 999,
    oldPrice: 3490,
    features: ["ASAP™ Charge", "13mm drivers"],
    categoryName: "wirelessEarbuds",
    img:WE7,
    rating:4.7
  },
  {
    _id: uuid(),
    title: "Airdopes Alpha",
    price: 999,
    oldPrice: 3490,
    features: ["ASAP™ Charge", "ENx™ Technology"],
    categoryName: "wirelessEarbuds",
    img:WE8,
    rating:4.6
  },
  {
    _id: uuid(),
    title: "Airdopes Atom 81",
    price: 1099,
    oldPrice: 3490,
    features: ["ASAP Fast Charge", "ENx™ Technology"],
    categoryName: "wirelessEarbuds",
    img:WE9,
    rating:4.3
  },
  {
    _id: uuid(),
    title: "Airdopes 141 Neo",
    price: 1399,
    oldPrice: 3990,
    features: ["ASAP™ Charge", "BEAST™ Mode", "ENx™ Technology"],
    categoryName: "wirelessEarbuds",
    img:WE10,
    rating:4.4
  },
  {
    _id: uuid(),
    title: "Airdopes 100",
    price: 999,
    oldPrice: 3490,
    features: ["ASAP™ Charge", "Clear Calling"],
    categoryName: "wirelessEarbuds",
    img:WE11,
    rating:4.6
  },
  {
    _id: uuid(),
    title: "Rockerz 235 V2",
    price: 899,
    oldPrice: 2990,
    features: ["Fast Charging", "10mm Drivers"],
    categoryName: "neckband",
    img:NB1,
    rating:4.7
  },
  {
    _id: uuid(),
    title: "Rockerz 255 Pro+",
    price: 1499,
    oldPrice: 3990,
    features: ["boAt Signature Sound", "10mm Drivers"],
    categoryName: "neckband",
    img:NB2,
    rating:4.8
  },
  {
    _id: uuid(),
    title: "Rockerz 330",
    price: 1299,
    oldPrice: 2990,
    features: ["boAt Signature Sound", "Metallic Control Panel"],
    categoryName: "neckband",
    img:NB3,
    rating:4.9
  },
  {
    _id: uuid(),
    title: "Rockerz 333",
    price: 1599,
    oldPrice: 3990,
    features: ["ASAP Charge", "10mm Dynamic Drivers", "Bluetooth v5.0"],
    categoryName: "neckband",
    img:NB4,
    rating:4.2
  },
  {
    _id: uuid(),
    title: "Rockerz 103 Pro",
    price: 1099,
    oldPrice: 2490,
    features: ["boAt Signature Sound", "10mm Drivers"],
    categoryName: "neckband",
    img:NB5,
    rating:4.6
  },
  {
    _id: uuid(),
    title: "Rockerz 255",
    price: 1299,
    oldPrice: 2990,
    features: ["IPX5 Water Resistance", "10mm Drivers"],
    categoryName: "neckband",
    img:NB6,
    rating:4.7
  },
  {
    _id: uuid(),
    title: "Rockerz 255R",
    price: 1499,
    oldPrice: 3990,
    features: ["boAt Signature Sound", "10mm Drivers"],
    categoryName: "neckband",
    img:NB7,
    rating:4.8
  },
  {
    _id: uuid(),
    title: "Rockerz 335",
    price: 1399,
    oldPrice: 3990,
    features: ["boAt Signature Sound", "10mm Drivers"],
    categoryName: "neckband",
    img:NB8,
    rating:4.4
  },
  {
    _id: uuid(),
    title: "Rockerz 235 Pro",
    price: 999,
    oldPrice: 1990,
    features: ["Voice Assistant", "BEAST™ Mode", "ENx™ Technology"],
    categoryName: "neckband",
    img:NB9,
    rating:4.5
  },
  {
    _id: uuid(),
    title: "Rockerz 260",
    price: 1299,
    oldPrice: 2499,
    features: ["Fast Charging", "10mm Drivers", "ENx™Technology"],
    categoryName: "neckband",
    img:NB10,
    rating:4.6
  },
  {
    _id: uuid(),
    title: "Rockerz 255 Neo",
    price: 1299,
    oldPrice: 2990,
    features: ["BEAST™ Mode", "10mm Drivers", "ENx™Technology"],
    categoryName: "neckband",
    img:NB11,
    rating:4.7
  },
  {
    _id: uuid(),
    title: "Wave Call",
    price: 1799,
    oldPrice: 7990,
    features: ["HD Curved Display", "Save upto 10 contacts"],
    categoryName: "smartWatch",
    img:SW1,
    rating:4.8
  },
  {
    _id: uuid(),
    title: "Wave Fury",
    price: 1399,
    oldPrice: 6999,
    features: ["30 Days Battery Life", '1.83" HD Display'],
    categoryName: "smartWatch",
    img:SW2,
    rating:4.5
  },
  {
    _id: uuid(),
    title: "Lunar Connect Ace",
    price: 2499,
    oldPrice: 9499,
    features: ['1.43" AMOLED Display', "100+ Sports Modes"],
    categoryName: "smartWatch",
    img:SW3,
    rating:4.6
  },
  {
    _id: uuid(),
    title: "Wave Call 2",
    price: 1299,
    oldPrice: 9499,
    features: ['1.83" HD Display', "Crest OS+", "700+ Active Modes"],
    categoryName: "smartWatch",
    img:SW4,
    rating:4.7
  },
  {
    _id: uuid(),
    title: "Wave Flex Connect",
    price: 1499,
    oldPrice: 7990,
    features: ["HD Curved Display", "Save upto 10 contacts"],
    categoryName: "smartWatch",
    img:SW5,
    rating:4.7
  },
  {
    _id: uuid(),
    title: "Lunar Call Plus",
    price: 2999,
    oldPrice: 9999,
    features: ["ENx™ Technology", "100 Watch Faces"],
    categoryName: "smartWatch",
    img:SW6,
    rating:4.5
  },
  {
    _id: uuid(),
    title: "Wave Stride Voice",
    price: 1999,
    oldPrice: 6990,
    features: ["100+ Sports Modes", "100+ Watch Faces"],
    categoryName: "smartWatch",
    img:SW7,
    rating:4.8
  },
  {
    _id: uuid(),
    title: "Storm Call",
    price: 1799,
    oldPrice: 7990,
    features: ["2.5D Curved Display", "Save upto 10 contacts"],
    categoryName: "smartWatch",
    img:SW8,
    rating:4.4
  },
  {
    _id: uuid(),
    title: "Wave Leap Call",
    price: 1499,
    oldPrice: 6990,
    features: ["100+ Sports Modes", "100+ Watch Faces"],
    categoryName: "smartWatch",
    img:SW9,
    rating:4.7  
  },
  {
    _id: uuid(),
    title: "Lunar Connect Pro",
    price: 4299,
    oldPrice: 10999,
    features: ["700+ Active Modes", "Bluetooth Calling", "ASAP™ Charge"],
    categoryName: "smartWatch",
    img:SW10,
    rating:4.5
  },
  {
    _id: uuid(),
    title: "Xtend Plus",
    price: 2299,
    oldPrice: 8999,
    features: ['1.78" AMOLED display', "700 nits brightness"],
    categoryName: "smartWatch",
    img:SW11,
    rating:4.6
  },
  {
    _id: uuid(),
    title: "Rockerz 450 Polo",
    price: 2290,
    oldPrice: 3999,
    features: ["40mm Drivers", "Bluetooth v4.2", "300mAh Battery"],
    categoryName: "headphones",
    img:HP1,
    rating:4.7
  },
  {
    _id: uuid(),
    title: "Rockerz 410",
    price: 1599,
    oldPrice: 2990,
    features: ["Work from Home Pro", "40mm Dynamic Drivers"],
    categoryName: "headphones",
    img:HP2,
    rating:4.8
  },
  {
    _id: uuid(),
    title: "Rockerz 440",
    price: 999,
    oldPrice: 2999,
    features: ["40mm Drivers", "Bluetooth v5.0", "Lightweight design"],
    categoryName: "headphones",
    img:HP3,
    rating:4.2
  },
  {
    _id: uuid(),
    title: "Rockerz 400",
    price: 999,
    oldPrice: 2999,
    features: ["40mm Drivers", "Voice Assistant", "300mAh Battery"],
    categoryName: "headphones",
    img:HP4,
    rating:4.9
  },
  {
    _id: uuid(),
    title: "Rockerz 518",
    price: 2290,
    oldPrice: 3999,
    features: ["40mm Drivers", "Bluetooth v4.2", "300mAh Battery"],
    categoryName: "headphones",
    img:HP5,
    rating:4.6
  },
  {
    _id: uuid(),
    title: "Rockerz 450 - Masaba Edition",
    price: 1999,
    oldPrice: 3990,
    features: ["8 Hours Playback", "300mAh Battery"],
    categoryName: "headphones",
    img:HP6,
    rating:4.7
  },
  {
    _id: uuid(),
    title: "Nirvana 751 ANC",
    price: 4599,
    oldPrice: 7990,
    features: ["40mm Drivers", "ASAP Charge", "ANC Technology"],
    categoryName: "headphones",
    img:HP7,
    rating:4.5
  },
  {
    _id: uuid(),
    title: "Rockerz 558 Sunburn Edition",
    price: 2099,
    oldPrice: 4999,
    features: ["50mm Drivers", "20 Hours Playback", "500mAh Battery"],
    categoryName: "headphones",
    img:HP8,
    rating:4.4
  },
  {
    _id: uuid(),
    title: "Rockerz 650 Sunburn Edition",
    price: 1999,
    oldPrice: 4999,
    features: ["40mm Drivers", "60 Hours Playback", "Dual EQ Modes"],
    categoryName: "headphones",
    img:HP9,
    rating:4.6
  },
  {
    _id: uuid(),
    title: "Rockerz 650 DC Edition",
    price: 1999,
    oldPrice: 3990,
    features: ["40mm Drivers", "ASAP™ Charge", "Dual EQ Modes"],
    categoryName: "headphones",
    img:HP10,
    rating:4.4
  },
  {
    _id: uuid(),
    title: "Rockerz 450R",
    price: 1599,
    oldPrice: 3990,
    features: ["40mm Drivers", "Bluetooth v4.2", "300mAh Battery"],
    categoryName: "headphones",
    img:HP11,
    rating:4.8
  },
  {
    _id: uuid(),
    title: "Stone 1200",
    price: 2999,
    oldPrice: 6990,
    features: ["14W Signature Sound", "IPX7 Water Resistance"],
    categoryName: "speakers",
    img:SP1,
    rating:4.6
  },
  {
    _id: uuid(),
    title: "Stone 650R",
    price: 1999,
    oldPrice: 4990,
    features: ["Travel & Party Booster", "IPX7 Water Resistance"],
    categoryName: "speakers",
    img:SP2,
    rating:4.3
  },
  {
    _id: uuid(),
    title: "Stone 1208",
    price: 4099,
    oldPrice: 6990,
    features: ["RGB LEDs", "Bluetooth v5.0","76mm Drivers"],
    categoryName: "speakers",
    img:SP3,
    rating:4.2
  },
  {
    _id: uuid(),
    title: "Stone 500",
    price: 1999,
    oldPrice: 2990,
    features: ["RGB LEDs", "TWS Technology","10W Powerful Sound"],
    categoryName: "speakers",
    img:SP4,
    rating:4.4
  },
  {
    _id: uuid(),
    title: "Stone 190",
    price: 999,
    oldPrice: 2990,
    features: ["52mm Dynamic Driver", "IPX7 Water Resistance"],
    categoryName: "speakers",
    img:SP5,
    rating:4.3
  },
  {
    _id: uuid(),
    title: "Stone 180",
    price: 899,
    oldPrice: 2490,
    features: ["Lightweight Design", "IPX7 Water Resistance"],
    categoryName: "speakers",
    img:SP6,
    rating:4.7
  },
  {
    _id: uuid(),
    title: "Rugby Plus FM",
    price: 2999,
    oldPrice: 4990,
    features: ["52mm Drivers", "Type C interface","2000 mAh battery"],
    categoryName: "speakers",
    img:SP7,
    rating:4.6
  },
  {
    _id: uuid(),
    title: "Partypal 53",
    price: 3799,
    oldPrice: 7990,
    features: ["Bluetooth v5.1", "RGB LEDs","4.5H Playback"],
    categoryName: "speakers",
    img:SP8,
    rating:4.7
  },
  {
    _id: uuid(),
    title: "Stone 1200F",
    price: 3999,
    oldPrice: 6990,
    features: ["Up to 09HRS Playback", "RGB LED Lights"],
    categoryName: "speakers",
    img:SP9,
    rating:4.3
  },
  {
    _id: uuid(),
    title: "Partypal 50",
    price: 3999,
    oldPrice: 7990,
    features: ["RGB LED Lights", "IPX5 Water Resistance"],
    categoryName: "speakers",
    img:SP10,
    rating:4.4
  },
  {
    _id: uuid(),
    title: "Stone 1010",
    price: 3099,
    oldPrice: 6990,
    features: ["14W Signature Sound", "Huge 3000 mAh Battery"],
    categoryName: "speakers",
    img:SP11,
    rating:4.5
  },
];
