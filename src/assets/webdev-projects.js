import maknewsImg from './maknews.jpeg'
import tokotokImg from './tokotok.jpeg'
import infrientoryAPIImg from './infriendtory-api.jpeg'
import infrientoryDashboardImg from './infriendtory-dashboard.png'

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
    },
    {
        "id": 4,
        "title": "Warehouse Dashboard",
        "name": "Infriendtory Dashboard",
        "desc": "Infriendtory Dashboard is a warehouse application developed using ReactJS and TailwindCSS. This application is designed to streamline inventory management for retail stores by offering CRUD (Create, Read, Update, Delete) features. The Infriendtory Dashboard application integrates with the Infriendtory API to fetch and manage inventory data in real-time, allowing users to easily add, update, and delete product information. With a responsive and user-friendly interface, this application helps retail stores maintain their stock efficiently.",
        "img": infrientoryDashboardImg,
        "url": "https://santamaa.github.io/infriendtory-dashboard/",
        "tech": ["React", "TailwindCSS"]
    }
]

export default webdevProjects