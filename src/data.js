import gantryMachineOne from "./assets/gantry-machine-1.png";
import gantryMachineTwo from "./assets/gantry-machine-2.png";

const stockPlasma =
  "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80";
const stockLaser =
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80";
const stockIndustrial =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80";
const stockFactory =
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80";

export const company = {
  name: "PLAZMA ARK INDUSTRY",
  tagline: "CNC Plasma, Flame & Laser Cutting Solution",
  phone: "8010390316",
  whatsapp: "918010390316",
  email1: "avichal_ranu@yahoo.com",
  email2: "plazmarkindustry1075@gmail.com",
  address:
    "G/F., Kh. No. 35/32, F-21, Brahampuri Colony, Near Rathi Hospital, Ranholla, Nangloi, New Delhi-110041",
};

export const categories = [
  {
    id: "cnc-plasma-cutting-machine",
    name: "CNC Plasma Cutting Machine",
    short: "Heavy-duty plasma machines for fabrication and metal cutting.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/1/478195538/LP/MD/MV/18078518/heavy-duty-plasma-cutting-machine-1000x1000.jpeg",
    specTable: [
      ["Category", "CNC Plasma Cutting Machine"],
      ["Cutting Thickness", "Up to 10 mm and above as per machine configuration"],
      ["Automation Grade", "Fully Automatic / CNC Controlled"],
      ["Material Support", "MS, SS, Aluminium and industrial metals"],
      ["Best For", "Fabrication, plate cutting, gates, grills and signage"],
      ["Customization", "Custom table size and power source available"],
    ],
    products: [
      {
        name: "Heavy Duty Plasma Cutting Machine",
        price: "₹ 6,50,000 / Piece",
        image: "https://forsuncnc.com/wp-content/uploads/2021/05/Plasma-machine-4.jpg",
        desc:
          "Well engineered, robust in design and user friendly plasma cutting machine for industrial projects and requirements.",
        specs: [
          "Cutting Thickness: 10 mm",
          "Automation Grade: Fully Automatic",
          "Power: 2HP",
          "Voltage: 240 V",
          "Material: Stainless Steel",
          "Frequency: 60 Hz",
          "MOQ: 1 Piece",
        ],
      },
      {
        name: "Stainless Steel Plasma Cutting Machine",
        price: "Get Latest Price",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXAioQrGR_osu2FpAV650qkJ4f8MzSrfX0hQsPcc7-b2KUmXQ9tYUQcc-cqvbFLcFl82qh0ZVru74QLISXG06YElNnf_targ",
        desc:
          "Designed for stainless steel cutting with smooth performance, clean finish and stable industrial output.",
        specs: ["SS Cutting", "Clean Finish", "High Accuracy", "Industrial Grade"],
      },
      {
        name: "Gantry Type CNC Plasma Cutting Machine",
        price: "Get Latest Price",
        image: "https://cpimg.tistatic.com/07212153/b/4/CNC-Gantry-Type-Plasma-Cutting-Machine.png",
        desc:
          "Gantry type CNC plasma machine for large plate cutting, fabrication and custom industrial production.",
        specs: ["Gantry Structure", "Large Plate Cutting", "Custom Bed Size", "Heavy Duty Frame"],
      },
      {
        name: "Portable Plasma Cutting Machine",
        price: "Get Latest Price",
        image: "https://www.yomicnc.com/Uploads/image/20211029/1635493537758384.jpg",
        desc:
          "Compact and movable plasma cutting solution for workshop, site work and flexible production jobs.",
        specs: ["Portable Design", "Easy Operation", "Compact Size", "Workshop Use"],
      },
      {
        name: "CNC Portable Plasma Cutting Machine",
        price: "Get Latest Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/1/DV/WC/ZV/125575064/cnc-portable-plasma-cutting-machine-1000x1000.jpeg",
        desc:
          "Portable CNC cutting machine for accurate profile cutting and on-site fabrication requirements.",
        specs: ["CNC Control", "Portable Setup", "Profile Cutting", "Easy Handling"],
      },
    ],
  },
  {
    id: "cnc-laser-cutting-machine",
    name: "CNC Laser Cutting Machine",
    short: "Laser and profile cutting solutions for accurate production.",
    image: "https://5.imimg.com/data5/LS/MX/MY-1668228/cnc-metal-laser-cutting-machine-500x500.jpg",
    specTable: [
      ["Category", "CNC Laser Cutting Machine"],
      ["Cutting Type", "Laser / Profile / Table type cutting"],
      ["Operation", "CNC controlled smooth motion system"],
      ["Material Support", "Sheet metal, MS, SS and other industrial metals"],
      ["Best For", "Fine cutting, profile cutting and production work"],
      ["Customization", "Custom bed size and power option available"],
    ],
    products: [
      {
        name: "CNC Plasma Profile Cutting Machine",
        price: "Get Latest Price",
        image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/heavy-duty-cnc-plasma-with-oxy-20241217223903103.jpeg",
        desc:
          "Profile cutting machine for repeat production, accurate shapes and fabrication projects.",
        specs: ["Profile Cutting", "Smooth Motion", "High Accuracy", "Custom Design"],
      },
      {
        name: "CNC Flame Cutting Machine",
        price: "Get Latest Price",
        image: "https://cpimg.tistatic.com/01919808/b/9/CNC-Flame-Cutting-Machine.jpg",
        desc:
          "Reliable flame cutting machine for thick plate cutting and heavy metal fabrication.",
        specs: ["Thick Plate Cutting", "Flame Cutting", "Heavy Structure", "Industrial Use"],
      },
      {
        name: "CNC Laser Cutting Machine",
        price: "Get Latest Price",
        image: "https://prototool.com/wp-content/uploads/2023/05/CNC-laser-cutting-machine-display-1024x576.webp",
        desc:
          "Modern CNC laser cutting solution for fine cutting, smooth finish and precise production.",
        specs: ["Laser Cutting", "Fine Finish", "High Precision", "Low Wastage"],
      },
      {
        name: "Table Type CNC Plasma Cutting Machine",
        price: "Get Latest Price",
        image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/table-type-cnc-plasma-cutting--20241111175105285.jpg",
        desc:
          "Table type CNC plasma machine for stable cutting, easy handling and industrial fabrication.",
        specs: ["Table Type Design", "Stable Cutting", "Easy Handling", "Custom Size"],
      },
    ],
  },
  {
    id: "fiber-laser-cutting-machine",
    name: "Fiber Laser Cutting Machine",
    short: "High power fiber laser machines for precise sheet metal cutting.",
    image: "https://image.made-in-china.com/2f0j00wJOWydbKBAcD/1500W-3000W-Metal-Laser-Cutter-3015-Fiber-Laser-Cutting-Machine-for-Sale-in-Azerbaijan-Bahrain-Bangladesh.webp",
    specTable: [
      ["Category", "Fiber Laser Cutting Machine"],
      ["Power Options", "1500W, 3000W, 6000W and custom options"],
      ["Cutting Type", "High precision fiber laser cutting"],
      ["Material Support", "MS, SS, aluminium and sheet metal"],
      ["Best For", "High speed production and smooth finishing"],
      ["Customization", "Power, bed size and accessories as required"],
    ],
    products: [
      {
        name: "Fiber Laser Cutting Machine",
        price: "Get Latest Price",
        image: "https://5.imimg.com/data5/ANDROID/Default/2023/3/QS/HE/WA/2646395/product-jpeg-1000x1000.jpg",
        desc:
          "High-performance fiber laser machine for accurate sheet metal cutting and smooth finishing.",
        specs: ["Fiber Laser", "High Speed", "Smooth Cutting", "Modern Technology"],
      },
      {
        name: "1500W Fiber Laser Cutting Machine",
        price: "Get Latest Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2025/11/562969374/NV/BY/PB/15165941/1500w-fiber-laser-cutting-machine-1000x1000.jpg",
        desc:
          "1500W fiber laser machine for precision cutting and medium production requirements.",
        specs: ["1500W Power", "Precision Cutting", "Low Maintenance", "Good Finish"],
      },
      {
        name: "3000W Fiber Laser Cutting Machine",
        price: "Get Latest Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/5/SB/IL/TK/119946722/industrial-laser-cutting-machine-1000x1000.jpg",
        desc:
          "3000W fiber laser cutting solution for faster production and clean cutting results.",
        specs: ["3000W Power", "Fast Production", "Clean Cut", "Heavy Usage"],
      },
      {
        name: "CNC 1.5 Kw Fiber Laser Cutting Machine",
        price: "Get Latest Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/5/417089872/JF/BD/XU/39883502/cnc-laser-cutting-machine-500x500.webp",
        desc:
          "CNC 1.5 Kw fiber laser machine for accurate cutting and efficient production workflow.",
        specs: ["1.5 Kw Power", "CNC Control", "Fine Finish", "Sheet Metal Cutting"],
      },
      {
        name: "6000W Fiber Laser Cutting Machine",
        price: "Get Latest Price",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbijEByNxSfmz7shNh7iKpLojSZp5n-x7Jw&s",
        desc:
          "Powerful 6000W fiber laser machine for heavy production and high-speed cutting.",
        specs: ["6000W Power", "High Speed", "Heavy Production", "Industrial Grade"],
      },
    ],
  },
  {
    id: "air-plasma-cutting-machine",
    name: "Air Plasma Cutting Machine",
    short: "Air plasma machines and trolley solutions for workshop cutting.",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/11/UG/XZ/BS/163385715/devam-cut-100-i-plasma-cutting-machine.png",
    specTable: [
      ["Category", "Air Plasma Cutting Machine"],
      ["Machine Type", "Air plasma, inverter plasma and trolley type"],
      ["Technology", "IGBT / inverter based options available"],
      ["Material Support", "MS, SS and fabrication metals"],
      ["Best For", "Workshop cutting, repair jobs and fabrication"],
      ["Customization", "Machine capacity and trolley setup as required"],
    ],
    products: [
      {
        name: "Heavy Duty Air Plasma Cutting Machine",
        price: "Get Latest Price",
        image: "https://cpimg.tistatic.com/08792960/b/4/air-plasma-cutting-machine.jpeg",
        desc:
          "Heavy-duty air plasma cutting machine for metal cutting, fabrication and workshop production.",
        specs: ["Air Plasma", "Heavy Duty", "Fast Cutting", "Workshop Use"],
      },
      {
        name: "LG IGBT Inverter Air Plasma Cutting Machine",
        price: "Get Latest Price",
        image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/lg-igbt-inverter-air-plasma-cu-20241111175607018.jpg",
        desc:
          "IGBT inverter based air plasma cutting machine for smooth performance and reliable output.",
        specs: ["IGBT Technology", "Inverter Based", "Smooth Output", "Reliable Cutting"],
      },
      {
        name: "Inverter Air Plasma Cutting Machine",
        price: "Get Latest Price",
        image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/inverter-based-air-plasma-cutt-20240524101736249.png",
        desc:
          "Compact inverter air plasma cutting machine for workshop, fabrication and repair cutting jobs.",
        specs: ["Inverter Machine", "Compact Design", "Easy Operation", "Metal Cutting"],
      },
      {
        name: "Air Plasma Cutting Trolley",
        price: "Get Latest Price",
        image: "https://www.bhavintech.com/upload/product-img/large/bhavin-tech-0b3635-plasma-cutting-trolley.webp",
        desc:
          "Air plasma cutting trolley for easy movement, flexible handling and workshop convenience.",
        specs: ["Trolley Type", "Easy Movement", "Flexible Handling", "Strong Body"],
      },
    ],
  },
];
