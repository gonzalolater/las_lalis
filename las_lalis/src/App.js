import React from 'react';

const App = () => {
  return (
    <div
    style={{
      background: 'linear-gradient(to bottom, #FFE4E1, #FF69B4, #9370DB)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}>
      <div>
    <h1 style={{ color: 'purple', fontSize: '48px', textAlign: 'center' }}>
        Las Lalis ❤️❤️❤️
      </h1>
<div style={{ textAlign: 'center' }}>
  <button
    onClick={() => window.location.href = "tel:+5491163041486"}
    style={{
      background: 'linear-gradient(to right, #800080, #C71585)',
      color: 'white',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.2s ease-in-out',
      display: 'inline-block', // Mantenemos inline-block
      whiteSpace: 'nowrap',
      minWidth: '100px',
      fontWeight: '600',
      textShadow: '1px 1px 0 red, -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red',
    }}
    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    Llámame o escribime por WhatsApp - click aca -
  </button>
</div>
</div>
    <div
    className="container"
    style={{
      background: 'linear-gradient(to bottom, #FFE4E1, #FF69B4, #9370DB)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}
    >
      <div/>
        <span></span>
      <div
        className="row"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div
        className="row"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/X7TTZrsY/445793074-2246891308997298-185742756448443142-n.jpg"
            alt="Camperas"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{
            color: 'white', // Texto blanco
            fontSize: '24px',
            textAlign: 'center',
            textShadow: '1px 1px 0 purple, -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple' // Borde violeta
          }}>
            Camperas
          </h3>
        </div>
        <div
          className="row"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/5Y4KDSGd/461413403-1903189713441840-3321121879768918574.jpg"
            alt="Vestidos"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{
            color: 'white', // Texto blanco
            fontSize: '24px',
            textAlign: 'center',
            textShadow: '1px 1px 0 purple, -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple' // Borde violeta
          }}>
            Vestidos
          </h3>
        </div>
        <div
          className="row"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/1RggPd21/Jeans-las-locas.jpg"
            alt="Tops"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{
            color: 'white', // Texto blanco
            fontSize: '24px',
            textAlign: 'center',
            textShadow: '1px 1px 0 purple, -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple' // Borde violeta
          }}>
            Jeans Las Locas
          </h3>
        </div>
        <div
          className="row"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/SXTcNLRp/480799490-17997037517756224-2437143644224178773.jpg"
            alt="Tops"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{
            color: 'white', // Texto blanco
            fontSize: '24px',
            textAlign: 'center',
            textShadow: '1px 1px 0 purple, -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple' // Borde violeta
          }}>
            Top y Pollera
          </h3>
        </div>
        <div
          className="row"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/FfBJQ9Cr/481424748-17997037529756224-51461  94311171822458.jpg"
            alt="Tops"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{
            color: 'white', // Texto blanco
            fontSize: '24px',
            textAlign: 'center',
            textShadow: '1px 1px 0 purple, -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple' // Borde violeta
          }}>
            Top
          </h3>
        </div>
        <div
          className="row"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/LhZj21Mr/482167115-17998649339756224-8587668982438195848.jpg"
            alt="Tops"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{
            color: 'white', // Texto blanco
            fontSize: '24px',
            textAlign: 'center',
            textShadow: '1px 1px 0 purple, -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple' // Borde violeta
          }}>
            Camperas de Moda
          </h3>
        </div>
        <div
          className="row"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/kD8RkPQC/482182192-17998141427756224-128363380833746588.webp"
            alt="Tops"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{
            color: 'white', // Texto blanco
            fontSize: '24px',
            textAlign: 'center',
            textShadow: '1px 1px 0 purple, -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple' // Borde violeta
          }}>
            Remeras De Moda
          </h3>
        </div>
                  <div
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/Gh8v7tdY/Jeans-cortos-Las-Locas.jpg"
            alt="Jeans Cortos"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{
            color: 'white', // Texto blanco
            fontSize: '24px',
            textAlign: 'center',
            textShadow: '1px 1px 0 purple, -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple' // Borde violeta
          }}>
            Jeans Cortos Las Locas
          </h3>
          
        </div>
        <div
          cclassName="row"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/hf1zt8Z3/482385014-17998141271756224-611523558227153336.webp"
            alt="Tops"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{
            color: 'white', // Texto blanco
            fontSize: '24px',
            textAlign: 'center',
            textShadow: '1px 1px 0 purple, -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple' // Borde violeta
          }}>
            Remeras y Gorras Alternativas
          </h3>
          <div
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        ><div
          cclassName="row"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/zbh3ZTR7/482517872-17998649126756224-6862288880360804860.jpg"
            alt="Tops"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{
            color: 'white', // Texto blanco
            fontSize: '24px',
            textAlign: 'center',
            textShadow: '1px 1px 0 purple, -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple' // Borde violeta
          }}>
            Buzos Rompeviento
          </h3>
           <div
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        ></div>
        </div>
        <div
          cclassName="row"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        ></div>
        </div>
        </div>
        </div>
        </div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <a
    href="https://www.instagram.com/las_lalis_/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      margin: '10px',
      fontSize: '70px',
      color: '#E1306C',
      textDecoration: 'none',
    }}
  >
    <i className="fa fa-instagram" aria-hidden="true"></i>
    <span
      style={{
        color: 'white',
        marginLeft: '5px',
        fontSize: '16px',
        padding: '5px',
        borderRadius: '5px',
      }}
    >
      Instagram
    </span>
  </a>
  <a
    href="https://www.facebook.com/profile.php?id=100084184864438"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      margin: '10px',
      fontSize: '70px',
      color: '#1877F2',
      textDecoration: 'none',
    }}
  >
    <i className="fa fa-facebook-official" aria-hidden="true"></i>
    <span
      style={{
        color: 'white',
        marginLeft: '5px',
        fontSize: '16px',
        padding: '5px',
        borderRadius: '5px',
      }}
    >
      Facebook
    </span>
  </a>
</div>
        </div>
  );
};

export default App;

