import * as React from 'react';

interface SocialMediaItem {
  name: string;
  handle: string;
  logo: React.ReactNode;
  link: string;
}

const socialMedia: SocialMediaItem[] = [
  {
    name: 'X.com',
    handle: '@ksa_salic',
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50"><path d="M11 4a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h28a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7zm2.086 9h7.937l5.637 8.01L33.5 13H36l-8.21 9.613L37.913 37H29.98l-6.541-9.293L15.5 37H13l9.309-10.896zm3.828 2 14.107 20h3.065L19.979 15z"/></svg>,
    link: 'https://x.com/ksa_salic',
  },
  {
    name: 'LinkedIn',
    handle: '@salic',
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48"><path fill="#0288D1" d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5z"/><path fill="#FFF" d="M12 19h5v17h-5zm2.485-2h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17M36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99-.144.35-.101 1.318-.101 1.807v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274z"/></svg>,
    link: 'https://linkedin.com/company/salic',
  },
  {
    name: 'Instagram',
    handle: '@ksa_salic',
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48"><radialGradient id="a" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#a)" d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008"/><radialGradient id="b" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#b)" d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008"/><path fill="#fff" d="M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7m0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7M18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5z"/></svg>,
    link: 'https://instagram.com/ksa_salic',
  },
  {
    name: 'YouTube',
    handle: '@ksa_salic',
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48"><path fill="#FF3D00" d="M43.2 33.9c-.4 2.1-2.1 3.7-4.2 4-3.3.5-8.8 1.1-15 1.1-6.1 0-11.6-.6-15-1.1-2.1-.3-3.8-1.9-4.2-4-.4-2.3-.8-5.7-.8-9.9s.4-7.6.8-9.9c.4-2.1 2.1-3.7 4.2-4C12.3 9.6 17.8 9 24 9s11.6.6 15 1.1c2.1.3 3.8 1.9 4.2 4 .4 2.3.9 5.7.9 9.9-.1 4.2-.5 7.6-.9 9.9"/><path fill="#FFF" d="M20 31V17l12 7z"/></svg>,
    link: 'https://youtube.com/@ksa_salic',
  },
];

const SocialMedia = () => {
  return (
    <div className="bg-sky-50 border border-sky-100 rounded-lg p-6 w-full max-w-3xl mx-auto h-full">
      <h2 className="text-lg font-semibold text-salic mb-4">Social Media</h2>
      <div className="space-y-3">
        {socialMedia.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 flex items-center justify-between rounded-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md flex items-center justify-center">
                {item.logo}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-salic m-0 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500  m-0">{item.handle}</p>
              </div>
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <button
                type="button"
                className="font-medium text-xs px-3 py-2 text-white bg-salic-primary hover:bg-salic rounded flex items-center gap-1"
              >
                <span>Explore</span>
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
