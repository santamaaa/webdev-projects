import maknewsImg from './maknews.jpeg'
import tokotokImg from './tokotok.jpeg'
import infrientoryAPIImg from './infriendtory-api.jpeg'

const webdevProjects = [
    {
        "id": 1,
        "title": "News Portal",
        "name": "Maknews",
        "desc": "Maknews is a project developed using ReactJS that aims to deliver the latest news quickly and accurately. By leveraging the services of currentsapi.services, Maknews can display up-to-date news from various reliable sources. Users can easily access the latest information presented in a responsive and intuitive interface, ensuring a pleasant and efficient news-reading experience.",
        "img": maknewsImg,
        "url": "https://santamaa.github.io/maknews",
        "tech": ["React", "Tailwind CSS", "Currents API"]
    },
    {
        "id": 2,
        "title": "Online Shop Landing Page",
        "name": "Tokotok",
        "desc": "The TokoTok landing page project involves creating an engaging and modern entry point for the brand using ReactJS and TailwindCSS. The landing page will feature a captivating hero section, a product showcase with data from dummyjson.com. By integrating dynamic ReactJS components and leveraging TailwindCSS for a responsive design, the page will provide a visually appealing and functional experience that highlights TokoTok's key offerings and enhances user engagement.",
        "img": tokotokImg,
        "url": "https://santamaa.github.io/tokotok",
        "tech": ["React", "Tailwind CSS", "DummyJSON"]
    },
    {
        "id": 3,
        "title": "Warehouse API",
        "name": "Infriendtory API",
        "desc": "Infriendtory API is a comprehensive backend system designed to manage warehouse operations, built using Flask, MongoDB, and JWT Extended. The API provides powerful CRUD (Create, Read, Update, Delete) functionality to handle key data entities within the warehouse environment, including items, item categories, and suppliers. Utilizing MongoDB for flexible data storage and Flask to create scalable and efficient endpoints, this API ensures secure and smooth data operations. JWT Extended is used for authentication and authorization.",
        "img": infrientoryAPIImg,
        "url": "https://santamaa-infriendtory-api.vercel.app",
        "tech": ["Flask", "MongoDB", "JWT Extended"]
    }
]

export default webdevProjects