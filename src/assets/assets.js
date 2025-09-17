import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import starIconOutlined from './starIconOutlined.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import roomImg1 from './roomImg1.jpg'
import roomImg2 from './roomImg2.jpg'
import roomImg3 from './roomImg3.jpg'
import roomImg4 from './roomImg4.jpg'
import poolImage from'./poolImage.jpg'
import viewImage from'./viewImage.jpg'
import lobbyImage from "./lobbyImage.jpg"
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.jpg";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.jpg";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.jpg";


export const assets = {
  
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
   
    starIconOutlined,
   
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    
    
}



// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "The Exclusive Escape Offer", description: "enjoy handcrafted luxury, exquisite dining, and unmatched comfort, all with special privileges designed just for you.", priceOff: 25, expiryDate: "Sep 25", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Your Private Luxury Getaway", description: "where every moment is designed to pamper you, and every detail whispers sophistication.", priceOff: 20, expiryDate: "oct 5", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Royal Retreat Special", description: "embrace refined living, indulgent relaxation, and personalized service with our limited-time luxury offer.", priceOff: 30, expiryDate: "oct 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "From the moment we arrived, we were treated like royalty. The attention to detail and elegance of every corner made our stay unforgettable." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "Our stay felt like stepping into a dream — luxury, comfort, and genuine hospitality all in one place.This hotel redefines luxury." },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "From the spa to the suites, everything was designed for pure indulgence. I left refreshed, pampered, and already planning my return." }
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Irfan",
    "email": "user.irfanjumail@gmail.com",    
    "__v": 1,
    
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name":"Hotel Booking & Resort",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1,poolImage, viewImage, lobbyImage],
        "isAvailable": true,
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 299,
        "amenities": ["Room Service", "Pool Access"],
        "images": [roomImg2,poolImage, viewImage, lobbyImage],
        "isAvailable": true,
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": hotelDummyData,
        "roomType": "Suite Room",
        "pricePerNight": 499,
        "amenities": ["Free WiFi", "Free Breakfast","Pool Access"],
        "images": [roomImg3,poolImage, viewImage, lobbyImage],
        "isAvailable": true,
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "hotel": hotelDummyData,
        "roomType": "Twin Bed",
        "pricePerNight": 399,
        "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        "images": [roomImg4, poolImage, viewImage, lobbyImage],
        "isAvailable": true,
        "__v": 0
    }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
  
]


