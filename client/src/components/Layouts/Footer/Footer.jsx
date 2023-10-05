import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TikTok from '../../../assets/images/tiktok.svg'
import Facebook from '../../../assets/images/facebook.svg'


const footerLinks = [
  // {
  //   title: "A propos",
  //   links: [
  //     {
  //       name: "Contatez-nous",
  //       redirect: "#",
  //     },
  //     {
  //       name: "Qui sommes-nous",
  //       redirect: "#",
  //     },
  //   ]
  // },
  // {
  //   title: "policy to delete or modify",
  //   links: [
  //     {
  //       name: "Return Policy",
  //       redirect: "/returnpolicy",
  //     },
  //     {
  //       name: "Terms Of Use",
  //       redirect: "/terms",
  //     },
  //     {
  //       name: "Security",
  //       redirect: "/paymentsecurity",
  //     },
  //     {
  //       name: "Privacy",
  //       redirect: "/privacypolicy",
  //     },
  //   ]
  // },
  {
    title: "",
    links: [
      {
        name: "Facebook",
        redirect: "https://www.facebook.com/profile.php?id=61551466563794",
        image: <img src={Facebook} alt="Facebook" className="social-icon"/>,
      },
      {
        name: "TikTok",
        redirect: "https://www.tiktok.com/@electrozayn7",
        image: <img src={TikTok} alt="TikTok" className="social-icon"/>,
      },
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-6/12 flex flex-col justify-center sm:flex-row">

              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-2/5 flex flex-row gap-20 sm:my-6 ml-5" key={i}>
                  {/* <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2> */}
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline hover:text-primary-blue flex flex-col items-center" key={i}>
                      {item.image}
                      {item.name}
                      </a>
                  ))}

                </div>
              ))}

            </div>

            <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Contactez Nous:</h2>
                <p className="mt-2 leading-5">Electrozayn@gmail.com
                  
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Addresse:</h2>
                <p className="mt-2 leading-5">Rue d'Athènes, 1 Rue de Piree, Tunis 1001
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Téléphone:</h2>
                <p className="mt-2 leading-5">+216 51 511 966</p>
                <p className="mt-2 leading-5">+216 55 181 417</p>
              </div>
            </div>
            <style>
              {`
                .social-icon {
                  width: 30px; 
                  height: 30px; 
                  margin-right: 5px; 
                }
              `}
            </style>
          </footer>
          {/* <!-- footer ends --> */}

          
        </>
      )}
    </>
  )
};

export default Footer;
