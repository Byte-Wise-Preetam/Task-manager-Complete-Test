import { SiOpenhab } from "react-icons/si";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFoundPage = () => {
    return (
        <>
            <SEO
                title="Page Not Found"
                description="The page you are looking for could not be found. Return to FlowMate to manage your tasks and team effectively."
            />

            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8">
                    <div className="flex flex-row justify-center items-center">
                        <SiOpenhab className="w-6 h-6 sm:w-8 sm:h-8 mr-2 text-blue-600"/>
                        <span className="text-2xl sm:text-4xl font-semibold text-gray-800">FlowMate</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-400 mt-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
                    <p className="text-gray-500 mt-2">
                        The page you're looking for doesn't exist.
                    </p>
                    <div className="mt-6 space-x-4">
                        {/* <button 
                            onClick={() => window.history.back()} 
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Go Back
                        </button> */}
                        <Link
                            to="/dashboard/tasks" 
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;