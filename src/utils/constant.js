import {
  AppleOutlined,
  HeatMapOutlined,
  PieChartOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

export const AvatarData = [
  {
    imageUrl: "https://omnifood.dev/img/customers/customer-1.jpg",
  },
  {
    imageUrl: "https://omnifood.dev/img/customers/customer-2.jpg",
  },
  {
    imageUrl: "https://omnifood.dev/img/customers/customer-3.jpg",
  },
  {
    imageUrl: "https://omnifood.dev/img/customers/customer-4.jpg",
  },
  {
    imageUrl: "https://omnifood.dev/img/customers/customer-5.jpg",
  },
  {
    imageUrl: "https://omnifood.dev/img/customers/customer-6.jpg",
  },
];

export const LogoData = [
  {
    width: 200,
    imageUrl: "https://omnifood.dev/img/logos/techcrunch.png",
  },
  {
    width: 100,
    imageUrl: "https://omnifood.dev/img/logos/business-insider.png",
  },
  {
    width: 220,
    imageUrl: "https://omnifood.dev/img/logos/the-new-york-times.png",
  },
  { width: 100, imageUrl: "https://omnifood.dev/img/logos/forbes.png" },
  { width: 180, imageUrl: "https://omnifood.dev/img/logos/usa-today.png" },
];

export const Diet = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-free",
  "lactose-free",
  "Keto",
  "paleo",
  "Low FODMAP",
  "Kid-friendly",
];

export const Test = [
  {
    imageUrl: "https://omnifood.dev/img/customers/customer-1.jpg",
    text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical",
    text2: "— Dave Bryson",
  },
  {
    imageUrl: "https://omnifood.dev/img/customers/customer-2.jpg",
    text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical",
    text2: "— Ben Hadley",
  },
  {
    imageUrl: "https://omnifood.dev/img/customers/customer-3.jpg",
    text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical",
    text2: "— Steve Miller",
  },
  {
    imageUrl: "https://omnifood.dev/img/customers/customer-4.jpg",
    text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical",
    text2: "— Hannah Smith",
  },
];

export const latestMeals = [
  {
    idMeal: "53038",
    strMeal: "Mustard champ",
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-1.jpg",
    strTags: "",
    strArea: "Irish",
    strCategory: "Side",
  },
  {
    idMeal: "53037",
    strMeal: "Coddled pork with cider",
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-2.jpg",
    strTags: "",
    strArea: "Irish",
    strCategory: "Pork",
  },
  {
    idMeal: "53036",
    strMeal: " Boxty Breakfast",
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-3.jpg",
    strTags: "",
    strArea: "Irish",
    strCategory: "Side",
  },
  {
    idMeal: "53035",
    strMeal: "Ham hock colcannon",
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-4.jpg",
    strTags: "",
    strArea: "Irish",
    strCategory: "Pork",
  },
  {
    idMeal: "53034",
    strMeal: "Japanese Katsudon",
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-5.jpg",
    strTags: "",
    strArea: "Japanese",
    strCategory: "Side",
  },
  {
    idMeal: "53033",
    strMeal: "Japanese gohan rice",
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-6.jpg",
    strTags: "",
    strArea: "Japanese",
    strCategory: "Side",
  },
  {
    idMeal: "53032",
    strMeal: "Tonkatsu pork",
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-7.jpg",
    strTags: "",
    strArea: "Japanese",
    strCategory: "Pork",
  },
  {
    idMeal: "53031",
    strMeal: "Egyptian Fatteh",
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-8.jpg",
    strTags: "",
    strArea: "Egyptian",
    strCategory: "Beef",
  },
  {
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-9.jpg",
  },
  {
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-10.jpg",
  },
  {
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-11.jpg",
  },
  {
    strMealThumb: "https://omnifood.dev/img/gallery/gallery-12.jpg",
  },
];

export const CookData = [
  {
    icon: (
      <PieChartOutlined
        style={{ fontSize: "40px", color: "orange", marginBottom: "10px" }}
      />
    ),
    text1: "Never cook again!",
    text2:
      "Our subscriptions cover 365 days per year, even including major holidays.",
  },
  {
    icon: (
      <HeatMapOutlined
        style={{ fontSize: "40px", color: "orange", marginBottom: "10px" }}
      />
    ),
    text1: "Local and organic",
    text2:
      "Our cooks only use local, fresh, and organic products to prepare your meals.",
  },
  {
    icon: (
      <AppleOutlined
        style={{ fontSize: "40px", color: "orange", marginBottom: "10px" }}
      />
    ),
    text1: "No waste",
    text2:
      "All our partners only use reusable containers to package all your meals.",
  },
  {
    icon: (
      <SafetyOutlined
        style={{ fontSize: "40px", color: "orange", marginBottom: "10px" }}
      />
    ),
    text1: "Pause anytime",
    text2:
      "Going on vacation? Just pause your subscription, and we refund unused days.",
  },
];
