import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function AuthorCard({
  avatar = "https://i.pravatar.cc/150?img=3",
  name = "Floyd Miles",
  likes = "335k",
  socialLinks = [
    { type: "facebook", url: "https://facebook.com/floyd" },
    { type: "twitter", url: "https://twitter.com/floyd" },
    { type: "instagram", url: "https://instagram.com/floyd" },
    { type: "linkedin", url: "https://linkedin.com/in/floyd" },
  ],
}) {
  const iconMap = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
    linkedin: faLinkedinIn,
  };

  return (
    <div className="p-6 bg-gray-100 hover:bg-orange-100/70 rounded-md text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-200 mt-4">
      <img
        src={avatar}
        alt="Avatar"
        className="w-24 h-24 mx-auto rounded-full mb-2"
      />
      <h2 className="text-xl font-semibold text-gray-900 h-20 flex justify-center items-center">{name}</h2>
      <p className="text-gray-500 mb-4 text-xs">{likes} likes</p>

      <div className="flex justify-center gap-4 text-gray-700 text-xl">
        {socialLinks.map(({ type, url }) => {
          const icon = iconMap[type];
          return (
            icon && (
              <a
                href={url}
                key={type}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            )
          );
        })}
      </div>
    </div>
  );
}

export default AuthorCard;
