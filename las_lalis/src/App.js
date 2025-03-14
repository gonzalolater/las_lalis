import React from 'react';

const App = () => {
  return (
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
      <h1 style={{ color: 'purple', fontSize: '48px', textAlign: 'center' }}>
        Las Lalis ❤️❤️❤️
      </h1>
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
    display: 'inline-block',
    whiteSpace: 'nowrap',
    minWidth: '100px',
    fontWeight: '600', // Hace el texto más grueso (600 o 700 para más grosor)
    textShadow: '1px 1px 0 red, -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red', // Borde rojo
  }}
  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  Llámame
</button>
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
          className="col-md-5"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://postimg.cc/kBvjzgr0"
            alt="Camperas"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
            Camperas
          </h3>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            Consultar
          </p>
        </div>
        <div
          className="col-md-5"
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
          <h3 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
            Vestidos
          </h3>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            Consultar
          </p>
        </div>
        <div
          className="col-md-5"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/cgLTF4gd/462518987-1716320375870375-2855178953111451866.jpg"
            alt="Tops"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
            Top
          </h3>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            Consultar
          </p>
        </div>
        <div
          className="col-md-5"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/DWgBQbzC/470357006-604598422062569-8898303796837868436-n.jpg"
            alt="Tops"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
            Jeans
          </h3>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            Consultar
          </p>
        </div>
        <div
          className="col-md-5"
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
          <h3 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
            Top y Pollera
          </h3>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            Consultar
          </p>
        </div>
        <div
          className="col-md-5"
          style={{
            margin: '10px',
            flexBasis: 'calc(50% - 20px)',
            maxWidth: '300px',
          }}
        >
          <img
            src="https://i.postimg.cc/FfBJQ9Cr/481424748-17997037529756224-5146194311171822458.jpg"
            alt="Tops"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
            Top
          </h3>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            Consultar
          </p>
        </div>
        <div
          className="col-md-5"
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
          <h3 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
            Camperas de Moda
          </h3>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            Consultar
          </p>
        </div>
        <div
          className="col-md-5"
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
          <h3 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
            Remeras De Moda
          </h3>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            Consultar
          </p>
        </div>
        <div
          className="col-md-5"
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
          <h3 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
            Remeras y Gorras Alternativas
          </h3>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            Consultar
          </p>
          <div
          className="col-md-5"
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
          <h3 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
            Buzos Rompeviento
          </h3>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            Consultar
          </p>
        </div>
        </div>
        </div>
        </div>
  );
};

export default App;

