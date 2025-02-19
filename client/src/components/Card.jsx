import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FiExternalLink, FiBookmark, FiShare2 } from 'react-icons/fi';

const Card = ({
    title, description, image, tags,
    to, icons, onClick, variant = 'default'
}) => {
    const variants = {
        default: 'bg-white shadow-md hover:shadow-xl',
        elevated: 'bg=white shadow-lg hover:shadow-2xl',
        outline: 'border border-gray-200 hover:border-indigo-200',
        minimal: 'bg-gray-50 hover:bg-gray-100',
    };

    return (
        <article className={`relative rounded-lg transition-all duration-300 ${variants[variant]}`}
        onClick={onClick}
        >
            {/* Image Section */}
            {image && (
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img src={image} alt={title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    />
                    {/* Image Overlay icons */}
                    <div className="absolute top-2 right-2 flex space-x-2">
                        {icons?.map((Icon, index) => (
                            <button
                                key={index}
                                className="p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white"
                            >
                                <Icon className="w-4 h-4 text-gray-700" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className={`p-6 ${image ? 'pt-4' : 'pt-6'}`}>
                {/* header Section */}
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {to ? (
                            <Link to={to} className="hover:text-indigo-600">
                                {title}
                            </Link>
                        ) : title}
                    </h3>
                    <div className="flex space-x-2">
                        <FiBookmark className="text-gray-400 hover:text-indigo-600 cursor-pointer" />
                        <FiShare2 className="text-gray-400 hover:text-indigo-600 cursor-pointer" />
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Tags */}
                {tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer Actions */}
                {to && (
                    <div className="mt-4 flex items-center justify-end space-x-2">
                        <Link
                            to={to}
                            className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm"
                        >
                            View Details
                            <FiExternalLink className="ml-1 w-4 h-4" />
                        </Link>
                    </div>
                )}
            </div>
        </article>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    to: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.elementType),
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['default', 'elevated', 'outline', 'minimal'])
};

export default Card;