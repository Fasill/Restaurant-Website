import axios from 'axios'; 

const OPENAI_API_KEY = "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";

let conversationHistory = [];
const responses = Object.values({
    "amenities": "Grilli Restaurant offers various amenities, including cozy seating for 100 guests, a diverse menu featuring local and international cuisine, a refreshing swimming pool, rejuvenating spa services, and complimentary Wi-Fi access.",
    "contact address": "Grilli Restaurant is located at  8487 bole Street, Addis Ababa, Ethiopia. You can reach us at +251-940-798-785 or via email at info@grillirestaurant.com.",
    "restaurant": "Yes, Grilli Restaurant offers a delightful dining experience with a menu that caters to both local and foreign tastes. Explore our menu filled with a wide range of dishes crafted to tantalize your palate.",
    "room options": "At Grilli Restaurant, we ensure a comfortable dining experience with various seating options, including intimate tables for two, spacious family seating, and private dining areas for special occasions.",
    "location location": "Grilli Restaurant is conveniently situated at 8487 bole Street, Addis Ababa, Ethiopia. If you need assistance locating us, feel free to contact our staff for directions.",
    "check-in": "Check-in at Grilli Restaurant begins at 3:00 PM. Should you require early seating, please inform us in advance, and we will do our best to accommodate your request.",
    "check-out": "Check-out time at Grilli Restaurant is at 12:00 PM. If you wish to extend your dining experience, please let us know, and we will make the necessary arrangements.",
    "parking": "Grilli Restaurant provides complimentary onsite parking for our guests' convenience. Additionally, valet parking services are available to enhance your dining experience.",
    "wifi": "Enjoy seamless connectivity throughout Grilli Restaurant with our complimentary Wi-Fi service. Stay connected and share your memorable dining moments with friends and family.",
    "pet policy": "Unfortunately, Grilli Restaurant does not permit pets on the premises. However, we welcome service animals and can provide recommendations for nearby pet-friendly dining options.",
    "special packages": "Discover exclusive dining packages and promotions at Grilli Restaurant, ranging from prix fixe menus to seasonal culinary events. Indulge in a memorable dining experience with our enticing offers.",
    "booking": "Reserve your table at Grilli Restaurant effortlessly through our website or by contacting our reservation team directly. For larger groups or special occasions, inquire about our group booking discounts.",
    "room service": "Indulge in the convenience of in-room dining at Grilli Restaurant. Our room service menu features an array of delectable options for breakfast, lunch, and dinner, delivered straight to your door.",
    "activities": "Enhance your dining experience at Grilli Restaurant with leisurely activities such as lounging by the pool, enjoying a workout session at the fitness center, or pampering yourself with spa treatments. We also offer guided culinary tours and cooking classes for food enthusiasts.",
    "business facilities": "Grilli Restaurant provides versatile spaces and modern amenities to cater to your business needs. Whether you're hosting a corporate luncheon or a networking event, our dedicated team ensures seamless execution and professional service.",
    "restaurants nearby": "Explore the culinary diversity of Addis Ababa with numerous dining options within walking distance of Grilli Restaurant. Consult our knowledgeable staff for personalized recommendations based on your preferences.",
    "local attractions": "Discover the charm of Addis Ababa with its array of local attractions, including museums, parks, shopping districts, and entertainment venues. Let our concierge desk assist you in planning memorable excursions and sightseeing adventures.",
    "public transportation": "Accessible via various modes of public transportation, Grilli Restaurant is conveniently located near bus stops and train stations. For assistance with navigating the area, our staff is readily available to provide guidance and information.",
    "medical assistance": "Should you require medical assistance during your visit to Grilli Restaurant, our staff can assist you in locating nearby medical facilities, including hospitals, clinics, and pharmacies. In case of emergencies, dial [Emergency Number] for immediate assistance.",
    "lost and found": "If you have misplaced or found any items while dining at Grilli Restaurant, please notify our staff for prompt assistance. We maintain a meticulous record of lost and found items to ensure their safe return to their rightful owners.",
    "housekeeping services": "Our dedicated team at Grilli Restaurant ensures a pristine dining environment with regular housekeeping services. Should you have any specific preferences or requests, please inform us, and we will strive to accommodate them.",
    "complaints": "At Grilli Restaurant, we are committed to providing exceptional dining experiences. If you encounter any issues or concerns during your visit, please inform our management team immediately. Your feedback allows us to continuously improve and exceed your expectations.",
    "feedback": "Your feedback is invaluable to us at Grilli Restaurant. Share your thoughts, suggestions, and compliments with us, as we continually strive to enhance our services and offerings. You can also leave a review on our website or social media platforms to share your dining experience with others.",
    "event hosting services": "Grilli Restaurant offers comprehensive event hosting services, including private parties, corporate events, and weddings. Our experienced team will work closely with you to tailor every detail to your specific requirements, ensuring a seamless and memorable occasion.",
    "culinary experiences": "Immerse yourself in the culinary arts with our range of interactive experiences, such as chef-led cooking classes, wine tastings, and food pairing events. Delve into the intricacies of local and international cuisine under the guidance of our expert chefs.",
    "sustainability initiatives": "As part of our commitment to sustainability, Grilli Restaurant implements eco-friendly practices throughout our operations. From sourcing locally grown ingredients to minimizing food waste, we strive to minimize our environmental footprint while delivering exceptional dining experiences.",
    "accessibility features": "Grilli Restaurant is dedicated to ensuring accessibility for all guests. Our premises are equipped with ramps, wide doorways, and accessible restrooms to accommodate individuals with mobility challenges. Please inform our staff of any specific accessibility requirements, and we will gladly assist you.",
    "cultural events and celebrations": "Experience the vibrant culture of Ethiopia through our curated cultural events and celebrations. From traditional music and dance performances to themed dining experiences, immerse yourself in the rich heritage of our local community.",
    "seasonal menus and ingredients": "Savor the flavors of the season with our rotating seasonal menus, showcasing the freshest local ingredients and culinary inspirations. Our chefs craft innovative dishes that reflect the essence of each season, ensuring a dynamic and unforgettable dining experience.",
    "health and wellness offerings": "Nurture your well-being at Grilli Restaurant with our range of health-conscious menu options and wellness services. From nutritious salads and smoothies to yoga classes and mindfulness sessions, prioritize your health and vitality during your visit.",
    "catering services": "Grilli Restaurant offers professional catering services for off-site events, ranging from intimate gatherings to large-scale celebrations. Our experienced team will create a customized menu to suit your preferences and dietary requirements, ensuring a memorable dining experience for your guests.",
    "entertainment options": "Elevate your dining experience with live entertainment at Grilli Restaurant. From live music performances to cultural shows, enjoy an immersive atmosphere while indulging in delicious cuisine and refreshing beverages.",
    "loyalty program": "Join our loyalty program at Grilli Restaurant and unlock exclusive rewards with every visit. Earn points for every dollar spent, redeemable for discounts, complimentary meals, and special offers. Sign up today and start enjoying the benefits of being a valued member.",
    "family-friendly amenities": "Grilli Restaurant welcomes families with children and offers a range of amenities to ensure a comfortable dining experience for guests of all ages. From kids' menus to high chairs and designated play areas, we cater to the needs of families dining with us.",
    "gift cards": "Give the gift of exceptional dining with Grilli Restaurant gift cards. Perfect for any occasion, our gift cards can be purchased in various denominations and redeemed for memorable dining experiences at our restaurant.",
    "private chef services": "Experience the ultimate in luxury dining with our private chef services. Whether hosting an intimate dinner party or a special celebration, our skilled chefs will create a bespoke menu tailored to your tastes and preferences, ensuring an unforgettable culinary experience.",
    "beverage options": "Complement your meal with our extensive selection of beverages at Grilli Restaurant. From handcrafted cocktails and premium wines to artisanal beers and non-alcoholic options, discover the perfect pairing to enhance your dining experience.",
    "community engagement initiatives": "At Grilli Restaurant, we are dedicated to giving back to the community. Through various initiatives such as charity events, fundraisers, and volunteer programs, we strive to make a positive impact and support local causes.",
    "technology integration": "Stay connected and informed with our innovative technology integration at Grilli Restaurant. From digital menus and online reservations to interactive dining experiences, we leverage technology to enhance efficiency and convenience for our guests.",
    "culinary certifications and awards": "Grilli Restaurant is proud to be recognized for our culinary excellence with various certifications and awards. Our talented chefs and dedicated team continuously strive for culinary innovation and excellence, ensuring a world-class dining experience for our guests."
}).join(" ");

export const chat = (req, res) => {
    const { prompt } = req.body;
    console.log("got a request")

    // Append user prompt to conversation history
    conversationHistory.push({ role: "user", content: prompt });



    const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [
            ...conversationHistory, // Include conversation history in messages
            {
                role: "assistant",
                content: responses 
            },
  
        ],
        temperature: 0.7
    };

    axios.post('https://api.openai.com/v1/chat/completions', requestBody, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        }
    })
    .then(response => {
        // Append assistant response to conversation history
        conversationHistory.push({ role: "assistant", content: response.data.choices[0].message.content });
        // Send assistant response along with previous chats
        res.json({ message: response.data.choices[0].message.content, conversationHistory });
    })
    .catch(error => {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
};