const sampleListings = [
  {
    title: "Heritage Palace Hotel",
    description: "Experience the royal lifestyle of Rajasthan in this beautifully preserved lake-view palace. Includes traditional folk dances and royal dining.",
    image: {
      url: "https://images.unsplash.com/photo-1598977123418-45f04b615e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWRhaXB1ciUyMHBhbGFjZXxlbnwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 8500,
    location: "Udaipur, Rajasthan",
    country: "India",
    category: "castles",
    localInsights: {
      languages: ["Mewari", "Hindi", "English"],
      cuisine: ["Dal Baati Churma", "Laal Maas", "Gatte ki Sabzi", "Ker Sangri"],
      tradition: "Bandhani turbans, Ghoomar and Kalbeliya folk dances during Mewar festivals.",
      artCraft: ["Miniature Pichwai Paintings", "Blue Pottery", "Silver Handicrafts"],
      attractions: [
        { name: "City Palace Museum", distance: "1.2 km", category: "Museum" },
        { name: "Jagdish Temple", distance: "0.8 km", category: "Religious" },
        { name: "Ambrai Restaurant & Cafe", distance: "1.5 km", category: "Cafe/Restaurant" },
        { name: "Celebration Mall", distance: "5.5 km", category: "Mall" },
        { name: "Luv Kush Cricket Stadium", distance: "3.2 km", category: "Stadium" }
      ]
    }
  },
  {
    title: "Goan Beachside Heritage Cottage",
    description: "Wake up to the sound of waves in this cozy, Portuguese-style villa right on Calangute beach. Perfect for relaxing sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3500,
    location: "Calangute, Goa",
    country: "India",
    category: "trending",
    localInsights: {
      languages: ["Konkani", "Marathi", "English", "Hindi"],
      cuisine: ["Fish Curry Rice", "Bebinca Dessert", "Pork Vindaloo", "Feni Drink"],
      tradition: "Western beachwear blended with traditional Kunbi sarees, Shigmo spring festival.",
      artCraft: ["Coconut Shell Carving", "Terracotta Pottery", "Seashell Handicrafts"],
      attractions: [
        { name: "St. Alex Church", distance: "1.8 km", category: "Religious" },
        { name: "Museum of Goa", distance: "6.2 km", category: "Museum" },
        { name: "Curlies Beach Shack & Cafe", distance: "3.5 km", category: "Cafe/Restaurant" },
        { name: "Mall de Goa", distance: "8.5 km", category: "Mall" },
        { name: "Fatorda Football Stadium", distance: "35 km", category: "Stadium" }
      ]
    }
  },
  {
    title: "Alleppey Luxury Houseboat",
    description: "Glide through the peaceful backwaters of Kerala in a traditional luxury Kettuvallam houseboat. Fresh local Toddy and Karimeen meals included.",
    image: {
      url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhJTIwaG91c2Vib2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 5500,
    location: "Alleppey, Kerala",
    country: "India",
    category: "pools",
    localInsights: {
      languages: ["Malayalam", "English", "Tamil"],
      cuisine: ["Karimeen Pollichathu", "Appam with Stew", "Banana Chips", "Toddy"],
      tradition: "Mundu wear, Kasavu sarees, Vallam Kali (Nehru Trophy boat race).",
      artCraft: ["Coir Mats & Weaves", "Coconut Leaf Handicrafts", "Wood Carvings"],
      attractions: [
        { name: "Mullakkal Temple", distance: "3.0 km", category: "Religious" },
        { name: "Revi Karunakaran Memorial Museum", distance: "4.2 km", category: "Museum" },
        { name: "Cassia Backwater Cafe", distance: "3.8 km", category: "Cafe/Restaurant" },
        { name: "Alleppey Town Mall", distance: "4.5 km", category: "Mall" },
        { name: "Nehru Trophy Boat Race Pavilion", distance: "2.5 km", category: "Stadium" }
      ]
    }
  },
  {
    title: "Himalayan Cedar Log Cabin",
    description: "Stay in a cozy wooden cabin surrounded by tall deodar forests in Manali. Enjoy spectacular snow peaks views and fireside tea.",
    image: {
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbmFsaSUyMGNhYmlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4200,
    location: "Manali, Himachal Pradesh",
    country: "India",
    category: "mountains",
    localInsights: {
      languages: ["Pahari", "Hindi", "English"],
      cuisine: ["Siddu with Ghee", "Trout Fish Curry", "Madra Curry", "Chha Gosht"],
      tradition: "Himachali caps, warm wool shawls, Dussehra folk dances.",
      artCraft: ["Kullu Shawl Weaving", "Wooden Woodwork Carvings", "Handmade Carpets"],
      attractions: [
        { name: "Hadimba Temple", distance: "1.5 km", category: "Religious" },
        { name: "Museum of Himachal Culture", distance: "1.4 km", category: "Museum" },
        { name: "Johnson's Cafe", distance: "2.2 km", category: "Cafe/Restaurant" },
        { name: "Mall Road Shopping Complex", distance: "2.0 km", category: "Mall" },
        { name: "Manali Sports Complex", distance: "3.0 km", category: "Stadium" }
      ]
    }
  },
  {
    title: "Thar Desert Luxury Camp",
    description: "Sleep under a canopy of stars in the sand dunes of Sam. Features authentic camel safaris, Rajasthani folk music, and campfires.",
    image: {
      url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpc2FsbWVyJTIwZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4500,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    category: "camping",
    localInsights: {
      languages: ["Marwari", "Hindi", "English"],
      cuisine: ["Ker Sangri", "Dal Baati Churma", "Mutton Saag", "Makhania Lassi"],
      tradition: "Bright turbans, embroidered skirts, desert folk songs.",
      artCraft: ["Leather Messenger Bags", "Stone Carved Jaali work", "Puppets"],
      attractions: [
        { name: "Jaisalmer Golden Fort", distance: "4.5 km", category: "Museum" },
        { name: "Tanot Mata Temple", distance: "120 km", category: "Religious" },
        { name: "Desert Boy's Dhaba & Cafe", distance: "4.8 km", category: "Cafe/Restaurant" },
        { name: "Sadri Market Plaza", distance: "5.0 km", category: "Mall" },
        { name: "Indira Gandhi Sports Stadium", distance: "6.2 km", category: "Stadium" }
      ]
    }
  },
  {
    title: "Coorg Coffee Estate Villa",
    description: "Immerse yourself in a lush green coffee plantation. Wake up to fresh estate brews, birds chirping, and organic local meals.",
    image: {
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3800,
    location: "Coorg, Karnataka",
    country: "India",
    category: "farms",
    localInsights: {
      languages: ["Kodava", "Kannada", "English", "Malayalam"],
      cuisine: ["Pandi Curry (Pork)", "Kadambuttu (Rice balls)", "Noolputtu", "Filter Coffee"],
      tradition: "Kodava sarees draped differently, traditional Huttari harvest festivals.",
      artCraft: ["Traditional Kodava daggers", "Handcrafted Rosewood crafts", "Coffee root sculptures"],
      attractions: [
        { name: "Talakaveri Temple", distance: "38 km", category: "Religious" },
        { name: "Madikeri Fort Museum", distance: "6.0 km", category: "Museum" },
        { name: "The Big Cup Cafe", distance: "5.5 km", category: "Cafe/Restaurant" },
        { name: "City Center Arcade", distance: "6.2 km", category: "Mall" },
        { name: "General Thimayya District Stadium", distance: "6.8 km", category: "Stadium" }
      ]
    }
  },
  {
    title: "Urban Skyline Loft",
    description: "Stay in a stylish, modern high-rise loft in Bandra. Features spectacular views of the Mumbai skyline and close to trendy cafes.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwbG9mdHxlbnwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 7500,
    location: "Bandra, Mumbai",
    country: "India",
    category: "rooms",
    localInsights: {
      languages: ["Marathi", "Hindi", "English", "Gujarati"],
      cuisine: ["Vada Pav", "Pav Bhaji", "Bhel Puri", "Bombay Sandwich"],
      tradition: "Fusion casualwear, Ganesh Chaturthi street processions.",
      artCraft: ["Leather products at Dharavi", "Custom boutique fashion", "Retro posters"],
      attractions: [
        { name: "Mount Mary Basilica", distance: "2.1 km", category: "Religious" },
        { name: "Mani Bhavan Gandhi Museum", distance: "12 km", category: "Museum" },
        { name: "Candies Cafe Bandra", distance: "0.8 km", category: "Cafe/Restaurant" },
        { name: "Phoenix Marketcity Mall", distance: "11 km", category: "Mall" },
        { name: "Wankhede Cricket Stadium", distance: "16 km", category: "Stadium" }
      ]
    }
  },
  {
    title: "Snowy Gulmarg Timber Lodge",
    description: "Live inside a beautiful heated glass-timber lodge overlooking the snow-covered slopes of Gulmarg. Direct access to skiing gondolas.",
    image: {
      url: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3clMjBob3VzZXxlbnwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 6500,
    location: "Gulmarg, Jammu & Kashmir",
    country: "India",
    category: "arctic",
    localInsights: {
      languages: ["Kashmiri", "Urdu", "Hindi", "English"],
      cuisine: ["Kashmiri Rogan Josh", "Yakhni Pulav", "Gustaba", "Kahwa Tea"],
      tradition: "Phiran woolen gowns, Kashmiri woodcarving history.",
      artCraft: ["Pashmina Wool Shawls", "Papier-mâché crafts", "Hand-knotted Silk Carpets"],
      attractions: [
        { name: "Baba Reshi Shrine", distance: "5.0 km", category: "Religious" },
        { name: "Srinagar SPS Museum", distance: "52 km", category: "Museum" },
        { name: "Bakshi Highland Cafe", distance: "1.2 km", category: "Cafe/Restaurant" },
        { name: "Gulmarg Gondola Shopping Complex", distance: "0.5 km", category: "Mall" },
        { name: "Gulmarg Ice Skating Stadium", distance: "0.8 km", category: "Stadium" }
      ]
    }
  },
  {
    title: "Lonavala Luxury Pool Villa",
    description: "A gorgeous private villa with an infinity swimming pool overlooking the green hills of the Western Ghats. Perfect weekend escape.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBwb29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 5800,
    location: "Lonavala, Maharashtra",
    country: "India",
    category: "pools",
    localInsights: {
      languages: ["Marathi", "Hindi", "English"],
      cuisine: ["Lonavala Chikki", "Batata Vada", "Misal Pav", "Kanda Bhaji"],
      tradition: "Traditional Maharashtrian Nauvari drapes, monsoon trekking culture.",
      artCraft: ["Wooden toys", "Kolhapuri leather chappals", "Chikki packages"],
      attractions: [
        { name: "Karla Caves & Ekvira Temple", distance: "9.5 km", category: "Religious" },
        { name: "Lonavala Wax Museum", distance: "4.2 km", category: "Museum" },
        { name: "German Bakery Wunderbar Cafe", distance: "3.5 km", category: "Cafe/Restaurant" },
        { name: "Triose Plaza Mall", distance: "2.8 km", category: "Mall" },
        { name: "Lonavala Cricket Ground", distance: "3.1 km", category: "Stadium" }
      ]
    }
  },
  {
    title: "Royal Jaipur Heritage Haveli",
    description: "Immerse yourself in history in a 150-year-old Rajasthani Haveli featuring beautiful arches, colorful frescoes, and central courtyards.",
    image: {
      url: "https://images.unsplash.com/photo-1477584305590-38772fc21132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyJTIwaGF2ZWxpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4900,
    location: "Jaipur, Rajasthan",
    country: "India",
    category: "iconic_cities",
    localInsights: {
      languages: ["Dhundhari", "Hindi", "English"],
      cuisine: ["Pyaz Kachori", "Ghevar Sweet", "Dal Baati Churma", "Lassi"],
      tradition: "Ghoomar dance, colorful pagris, Teej and Gangaur festivals.",
      artCraft: ["Gemstone Jewelry", "Block Printed Cotton Quilts", "Blue Pottery"],
      attractions: [
        { name: "Govind Dev Ji Temple", distance: "2.5 km", category: "Religious" },
        { name: "Albert Hall Museum", distance: "3.8 km", category: "Museum" },
        { name: "Tapri The Tea House Cafe", distance: "2.0 km", category: "Cafe/Restaurant" },
        { name: "MGF Metropolitan Mall", distance: "4.5 km", category: "Mall" },
        { name: "Sawai Mansingh Cricket Stadium", distance: "5.0 km", category: "Stadium" }
      ]
    }
  },
  {
    title: "Munnar Tea Valley Chalet",
    description: "Nestled in the endless rolling green tea plantations of Munnar. Enjoy fresh tea leaf picking sessions and misty mountain walks.",
    image: {
      url: "https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyZWVob3VzZXxlbnwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3600,
    location: "Munnar, Kerala",
    country: "India",
    category: "mountains",
    localInsights: {
      languages: ["Malayalam", "Tamil", "English"],
      cuisine: ["Idiyappam with Curry", "Malabar Parotta", "Ela Ada", "Spiced Tea"],
      tradition: "Saree and Mundu wear, Kathakali folk performing arts.",
      artCraft: ["Natural Sandalwood oil", "Homemade Chocolates", "Spices packages"],
      attractions: [
        { name: "Subrahmanya Temple", distance: "4.2 km", category: "Religious" },
        { name: "Tata Tea Museum", distance: "3.5 km", category: "Museum" },
        { name: "Hill Spice Cafe", distance: "2.8 km", category: "Cafe/Restaurant" },
        { name: "Munnar Shopping Bazaar", distance: "3.0 km", category: "Mall" },
        { name: "Munnar Outdoor Sports Ground", distance: "4.0 km", category: "Stadium" }
      ]
    }
  },
  {
    title: "Pondicherry French Quarter Villa",
    description: "A bright yellow heritage villa located in the quiet streets of the French Quarter. Close to beaches and cafes.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4600,
    location: "Pondicherry, Tamil Nadu",
    country: "India",
    category: "iconic_cities",
    localInsights: {
      languages: ["Tamil", "French", "English", "Telugu"],
      cuisine: ["Crepes", "Croissants", "French Onion Soup", "Pondy Prawn Curry"],
      tradition: "French-colonial architecture walk, spiritual ashram teachings.",
      artCraft: ["Handmade Auroville Paper", "Handmade terracotta dolls", "Aromatic incense"],
      attractions: [
        { name: "Manakula Vinayagar Temple", distance: "0.8 km", category: "Religious" },
        { name: "Pondicherry Museum", distance: "0.5 km", category: "Museum" },
        { name: "Cafe Des Arts", distance: "0.3 km", category: "Cafe/Restaurant" },
        { name: "Providence Mall", distance: "2.5 km", category: "Mall" },
        { name: "Pondicherry Cricket Stadium", distance: "4.2 km", category: "Stadium" }
      ]
    }
  }
];

module.exports = { data: sampleListings };
