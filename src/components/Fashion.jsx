import React, { useEffect, useState } from 'react';
import '../style.css';
import { useNavigate } from 'react-router-dom';

const Fashion = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/products');
                const data = await response.json();

                const shuffledProducts = data.sort(() => 0.5 - Math.random());
                setProducts(shuffledProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleClick = (productId) => {
        navigate(`/products/${productId}`);
    };

    const banners = [
        {
            imgSrc: 'https://img.freepik.com/free-vector/modern-exchange-offer-background-design_1017-33512.jpg?size=626&ext=jpg&uid=R85597136&ga=GA1.2.1386683871.1668942690&semt=sph',
            title: 'Seasonal Sale',
            subtitle: 'Winter Collection - 50% Off',
        },
        {
            imgSrc: 'https://img.freepik.com/free-photo/stylish-european-brunette-woman-red-coat-black-hat-posing-white-wall_273443-4654.jpg?size=626&ext=jpg&uid=R85597136&ga=GA1.2.1386683871.1668942690&semt=sph',
            title: 'New Footwear Collection',
            subtitle: 'All Seasons 2022',
        },
        {
            imgSrc: 'https://img.freepik.com/free-photo/footwear_1303-5880.jpg?size=626&ext=jpg&uid=R85597136&ga=GA1.2.1386683871.1668942690&semt=sph',
            title: 'Kids Sweatshirts & More',
            subtitle: 'From ₹99',
        },
    ];

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <section className='hero bg2'>
        {/*
        <h4 style={{ fontSize: '7.5rem', fontFamily: "'Explora', cursive" }}>
          "Massive Price Drop Alert"
        </h4>
        <h2 style={{ paddingBottom: '10px' }}>Super value deals</h2>
        <h1>On all products</h1>
        <p>save more with coupons & up to 70% off!</p>
        <button><a href='#p1' style={{color:'white',textDecoration:'None'}}>Shop Now →</a></button>
        */}
      </section>

      <section id="gender">
        <div className="pro-container">
          <div className="pro">
            <a href="men.html">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAATLklEQVR4nO2deXxV1Z3Av+fe+7YkEMgLWchOWBKigqgoIAouiFYrDoKgZVEqte3YsXVqa2daaT/O2FqpHcepVaeVTWmxlVrrQgURFKNA3DAatpCQBLLwQva33nvmjyAQsr777gt0Pu/7X+4553d+9/5y7++c3/md8yBGjBgxYsSIESNGjBgxYsSIESNGL4izrcA/Op5NI7NsqnxcwiwACVsURfxw6FVH9pqRFzNImDRvTt8BGInXHJ3u2TQyS1Plx0DSGdWOh3QxwX3dkapw5WuWaBllZOkGeyih4xKBMl5KxgkoEJJsKYgHhgPxJ6q2A8eFpF0KKiWyTAixT0pRqrU7doui+QEL1DEACXDizTjTGADDbSorgfnhCj9n3xBZsabQkNwsFTETKS8H4iIU2Y7gXYHYqhihl0XenWWR6ti8Ob0FGNJLcUviNUcTw5V5ThlEHnkh2QgGF0pDLEJwSVQ7E+wUUqxVNGO9yFziMSOib4OI5sRrjgwLX61zAHnoubQQyn1CiHuJ/E0IFz+S1aoeeliMviusb37T5vSNAub0WCjEhsSrj9wWrjJn1SDywJoUXeNhYAlgP5u6AAGEeE4NBH8sxtzVMJAGLW+NHCcNWUynHzsdT0hVJrpn1lSHq8RZMYiUKxT9cP7XkHIlkHw2dOiDJiHECiXb8aQQ8/X+KncOe1kpkdcBIMQbIUXcb8YYcBYMIqvWjtYN+TySyYPdd3jI91Wh3SFy7igfzF6VwewsVLH6Fl2Xu859YwCIy3SpfxQ6tDpsPxBRr4PRiZQbVL3S9zhw72D0ZzVS8Gstu/x+IVYY0e4r6gaRpRvsepx3LUKEPUk6x/iLKvWFIu9OX38VG6fP+wpCPg1IBMuTtv3p9YF2EtVPliz73RA93vf6/wNjAMzRhfI3Wfa73iaCpxDyt0AGkImUT4fTSdQMIks32HWX/U/AVdHqY/ARV+tO28ty/xOOaPUQlViWlCsUvdK3DtkZAY0GNTWN7NlzmKqqY3S0eXE47WRmJXP+eVnk5KZEq1uAmbpt2B+k3HBrr8NiwXIkz4CUUlGWhyM8Kj4kVLHmCaLkwIuL97H++W20Hm/lwhwXyQkqNk1gGJKGNoNPDntRHC4W3jGdK68Yj1Ci4yYlPG7LXfw9q+WGpe1AnFWocs08JBss0xBobGzjvR1lbNn8KbKjjWuL4hjiVHut3x4w2L63g3Zc3POt2YwvyrRSndOZq+UufslKgeEZ5Ipbq4ATdyerkrb/Ofv0cnl4Vb5uKCVA2FHOnmhr97P++e28tWUPU0bHMSrZxlDXwN1eU4fOK5+0kZmbzl13X0NWptsKtbp0oQr1Iisnj5YZpDMcMqrYqklfXV0zP/rhOiZlqJyXYUcIk58eCYcbg7zxWStOp5OhiS7cSUNY9o1rSUsNOxjbE8VqTvnlVs1RwhtlCZYD1SCrznRWRmXePVYZo6XFywP3r+L68XbOz3SYNwaAgGy3jeVXJrHwIiezR0lGhDy8sHabFaoCTNEPj1pmlTBLPN6JqG0Z3aOepnj0FxtJ9tUzOjU6AWBPm05ZYDgP/miuVSIb1WCoYKBR4r6wZB5yIoRuiTEqKxr4/NNDUTMGQG2LTmFhlpUik3SbbYUVgiI2iKxel0nneoYlbN78KVcVxvdfMQLe39/G9CsKI5ajpM1GSbvuxF9ymaxanRGxzEgF6CHjASxcXNrzySHSE6OXe+EPGgxLTsTt7j8C0j/y9D8cIV3cH6nEiAwij7yQDFjm0ADqj7XisHVVSzcku6sMmr2RD2SEIggGQxHLATBqN2HUbjolG5bL6tURja0jMogRDC7EwjXwkG7g93V9WIaEHZUKC+6+G++IiXxUa8MbMG8Yuyqob2jF5wtGqm5PxBshIlo/iewNMcSiSNqfiSIA0eUzwCfVQRYtu4OMjDRuu+0m7rz3W9S7Cth91E5ty8D+09v8kr11p+qOSY+jsjLiAVGPSIjomZj+WMuKNYU61qbqKIqCcVq4LqhLtMQ0cvNyTl5LHJrA4qXzCASCvLdjF3s++Qx/WxNx+BjmNHDaFRQBvoBBc0ClTSaQlpOHz1eHN1CPy66Q6FJpbfFaqfppiMtk+dpxYtQiU6mkpg1iSOZEIzQ5dKiTkAGaAmVHAlx3+7U91rPbbcyYOZUZM6cCUFvv4dDBSlpbWggGgmQlu7k8O5OMjM7I72d7vuCdjc8zPsOFwwZerxVJjD1jKMZXgV+aaWv+DYGZZtv2RUbGcHyBAAlOhVbDyZix+QDohsGRmnqam9uQhs6wYUMZmZGCqnYGGdNS3KSOSKK29hjHjzejh3T8fj9+fxCHw0ZRUQEb13b24QtI4uKjtqSBRJnJYBpElm6w68I31Uzb/sgfPZKmhoMkOBUc8QkAhEI6//6jXxMX58LtHo6qCerrGvmnW2dx3nmjT7b91WOraWpqJiXVjd1mo7GxmcmXXsDV11yGUATC1jk697SHGD4smnMdeYUs3WA3k0tsyiCheP/F4lSCs6VcMCGH19fvJSlexe3uTNnSNJWfP9r/EP/+7y/ts1yqdqQMUV7rIzPL8sjv6cQH4wKTgPfDbWhqlKUIzjPTbiDk5qWwp7IdT2uIkZmpXcrKvihn2dJ/o2R3aZ8yXn9tOz/4/mMEAl2HtprNTm2Lwcj0RGy23tdTrEARRpGpdmYaGZJxZtr1RSiks/Kx1/jnb/2epCQ3B48FycnN6VKnoHAUTqeDbW/v7FWOzx8gLy+TgweqOHDwcJcyXTeo9Tro8MLyu5/lwIFaq2/jJBJh6hmZMohAWm6QV14pobUlxLrnHuap/36QeHcWyakjutR59ZW3qavzUFCY37sgKVn5y+dISIgjKzOtS1F8QgK3LV3Cc8+sYOmiOTz6i79afRsnEdIw9YxM+ZATm2UspaPDT8G4bOx2O8899Rs0h53hiUO71Lnhxiu58KLxjBzZexKD0+ng8ScexDAkQ4Z0dXNFEyZQXVXJ4fL9XDDhQlrbojUXASFETv+1umNulCUY2n+t8MjKTua9dw8BkJGVRYo2rFuCghCiT2N8SUJCz9GcuHgncS4b1cfqqTh8lJycET3WswKJuWdkNnRiRai0C3l5Kezf37k9I3/MWBRhfcqYzaYxIi2NpCQ3+w9UkJcX1cR7U8/I7F0nmGzXK1mZbgypc7iqlvxxlrsoADRVQ6gal0ydys7dn3HRpD58UeQMqkGiwowZRWx6890B1z96tIFdO/ewe9dnfFjyOdKQfdbXVJWQHqKmpp7qmnomTMyNVGXLMRs6aePL3adaPIp7KsKRjPQ3YHiKIdRuSuiNN07ivvtWkTdq5IDqp6ePID19BLphoCr9/28pmkJtXQOr1rzM3FsvjfZcpNVMI7NvyMnOFPdUhDMNhIZwpqO4p5gUCW73EH72s9t4+W9b2br9g27l0pA0NXW/z56Mcfx4S7dr1TW1PPLo77lyZgFzbo7unlIG0yBCcvJuhaOrYxT2yBxlXl4Kv1q5mKO1Hmpq6rvKVgQeTxMfvP8pBw9WoetdU2ubm9v4qKSUXTv34HB0X1XevqOEe++9gVvmTI4stWgACOj+HzEAzA57DwPnA0h/A8KZfqoscMyMyK5KaSrTpo1ly9vFLL7j5i5l+flZ5OdnUV1dxzvbSvD5/EgkAkFKqpvC8fm4XM5uMusbjlNeXsPkybdErN9AkFJWmmlnziBQJuArAIanGMU9BeEYgfTVYzSGHU/rkTlzJnPffau49upppKd1f+syM1PJPCPW1au+UvK/q17kppsuwm4fnMMrJMLUwQTmPlmCU6thoXaMus3oh9dj1G8x7dDPJDU1kXnzLmPFw7+hrT2yGfX6F1+lqqaWefMus0S3gSCENLViaMogUoq+w60WccstkyksTOfhX/yW1raOHuvUN3ioq/PQ1IMTB3ht03Ze3/QeP/nJrdjttmiq2wVDqp+baWfKIFq7YzedB71EFSEE937nekaPHsG/3P9z9u3v/llub/XS1taB1+vvcj0QCPJf/7OOv766lUceud2qxOqB0mbztJeYaRj2QFzuXJAVMsqexVdehLdcIdQM2lCEEp3UTyEEkyblkZIylJ8+vAZvh5eCgjxsWqcvGD58KElJiV0CiQcPVfOTnz6JK17w0EPzSUqyPLDQH5vV8cvWmmkYloeTOxdkhTTxMZIk5IncqEAdBBth2OWgdB/dWMWUKWNRFcGsicN4Yd1GckblMePKi9HUU/9TxzzHef21t3G7AthVg/nzpuJyDf6JHQKx1WzbsAwSUsXjyB7Oh5JBZMcXiIQLzerRL8GgTjCkk+a2s3R2NhX1XtatfhHN7sDhcNDR1kKCU3LLlJG4nDZKPjtMzdHj5I9O61+4xSgGr5htG+4YsPdNnBbMP3pCSsnnpdW8+McdXFh46uHmptjJnZWNNCS+QAiXs6uPmD1tFE8+8ybBQIjp0wsG06EXm83JAkt34Vo7862u8bDpzVJ2vL0Hp13l+mmjmDW1e3RWKAKXs/vDnlSYzncXXcrGTR/x7NNvMnlKAbOvu4Dx46O237BTHylM+Y6T7cOpHCxZuJHezodypCMSJkaiC21tPrZuK+ONzZ9T39BM0sXTGHPxBdycEyA/dMSUTI86lLc6Min+8BAN72xGCXZw1ZXjuX5WUTRGXu2qGsgWWV9vNCsgLIP4dn1tnKro3c+HUmyIRHNOXRqSrdu/4LU3P6d8XzVJF15CyrQZDC86HyFOOWy33sJFwX0UBitRZf/J1lVqCiWOsZRr6V2utxzcT+07b+HZ+S45eencNLuIaVPHWjKDl7DSlrv4XyOREfZ35sRIayWSE+dDadvEsOmzUTq/G97q34AQuDK+2a+syop6/uPRV/E6Ekm/9kbcEy9GdfSdUeiQQfJCR8kPHSHZaGaI0YFdhuhQnDSIRA7Z0tmvZdCq9J2UbwQDNJTspP6dLbRXHGDmVeezYO7Fkewb8auKbZTIXmjuVT6BJR/+UOXa3yLlNwC8NU8BAlfGPX22+by0mhUPbyRrwZ2kXx6VrNQB4/Mco+bN12gsfov/fGgu+WPMjMzkk1rukogPS7Bm02f1arceEmUM8HS4jg4/y+/5Hdlfv4+koglWqGAJ9R/soOEva3j2qbvQ1LCCGB7VrhWIkbdHPNS0ZAlXZC7xCMmPB1r/zb9/SvzYonPKGAApl07DiBvGxx8eCrOlfMAKY4CFa+pKbvkzIAcUe9+yfR/uK3reZnC2SZw0hQ9KwjGI2KHmLH7Oqv4tM4gQKwzV0BYAfQ75pCGpqqglMX+sVV1bisOdjMcz4Lhpk4pcJIToO7siDCzNOhGj7qhEdDr33vA0tmKLi0N1uqzs2jI0l4uOgW3mkSDvErmLw/2+9YnlaUBazpI/ScGveytvafbiHDLo0dcBozpcA9pdJZErtdwlG63uPyrrmVp2+f16Rd7Ino72a23zocWfuwbRXAMyyB+0nEM/CO1e8BUpxNNIpFCM5dqkPw74bMXeiEqinBArDLXDtQjBpjPL/P4gqiN6YfpIUZ0u/L4+DbJVDTYtFWKFIRGdZysKMg2phHW2Ym9ELXNRFM0PqN7gPJBbTr8eDIZObi07F1GdTny9vyGb1TjnV8WY7/h7qxApUU0lFQXLWtV21w3AH768FgzqCNvgrW2HS+cb0uPzfkmV+k0iZX7blxeEYixHUi2hSkBYZyv2RtRzYkTR/ICUK+4IVY46KuC7waCO0M5dgyh2O6GQjmEYKJ0ZkVIiV2o5h35w5iFlJ3yGpccKDUqS0okb+V7o0Optfn/wBYToMfLXEgzgVDXsA8jTjQQpJY3BAG5790CmEAK704HXFyA+ztmC4Ou2nCUvRlWh0xjU7Hctb8nL+/Ydndf08a5Q1bqn0b1dU3vK2luoD/R7cHTEeKXBrqbeIx2aw0lrs3eXKvUJWs7iQTMGnIXtCA88seE1IbVU48An75b88NvyWPE2MKJ+pPqAaa+uIhTwB7993zNLRd6dFYPd/1n5UbAXi4sbgenfnjvzhoa/Pr/qyKt/Ts6cu0iQl3c21EFKHc+Hu6h9Y6PPc6iiXQ8EHguMSNt3NnQ5F37ySCybNeXOjqD4ebtiSx4+4zoxZuYsNFf0TlroMHS2NxzlsuMttO7eJmuKi4OGrn/h83of8TjiXiopKYnK2U0D4VwwyEkWzp+9ML7N+2BDfUtRalGhEj/hUoZdcDGO4T39Ml34BJqO07S3lI6yDzm8c7eR4FDqZCDwbHN7x6q/f7rX0piUWaJqELM/2zBj4sRhhdnDvymFvL22trVAtdlUd16ecGbnoSSlYhuejNOdjOKwo9qdKKcNo6U0CHnbCba04m2oQz92lFB9NY1790pfS5uemjp0rx4wXqqqPrZmU2npgWjdu1mia5B+TsIeIGLhtEvGjysceXMgGLrU1xHM94dkantHYEjAH9S8Pr8ijS93zUupCCEdToeuaqo/Ls7miXeq+xVN211RXr/+zx98uIczDko81/hH+KVPuX7HrlJ2MCgZ92eb6A57+zgJO0aMGDFixIgRI0aMGDFixIgRI0aMMPk/980Pf1m8WAcAAAAASUVORK5CYII=" alt="Men's Fashion" />
            </a>
            <div className="des">
              <span>MEN</span>
            </div>
          </div>
          <div className="pro">
            <a href="women.html">
              <img src="data:image/png;base64,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" alt="Women's Fashion" />
            </a>
            <div className="des">
              <span>WOMEN</span>
            </div>
          </div>
          <div className="pro">
            <a href="kids.html">
              <img src="data:image/png;base64,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" alt="Kids' Fashion" />
            </a>
            <div className="des">
              <span>KIDS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="p1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Winter Collection New Modern Styles</p>
                <div className="pro-container">
                    {products.map(product => (
                        <div className="pro" key={product._id} onClick={() => handleClick(product._id)}>
                            <img src={product.image[0]} alt={product.name} />
                            <div className="des">
                                <span>{product.brand}</span>
                                <h5>{product.name}</h5>
                                <div className="star">
                                    {[...Array(product.rating)].map((_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>
                                <p>Selling Price Rs. {product.price}</p>
                                <h4>MRP ₹{product.mrp} ({product.discount})</h4>
                                <h5>(Incl. of all taxes)</h5>
                            </div>
                            <div className="cart">♡</div>
                        </div>
                    ))}
                </div>
            </section>

      {/* Deals Section */}
      <div
        id="deals"
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          margin: '1rem 1rem',
          justifyContent: 'center',
          backgroundImage: 'none',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img
            src="images/rm422-socialmedia-04.jpg"
            style={{ width: '100%', height: '60vh' }}
            alt="Deals Image"
          />
        </div>
        <section id="banner" className="section-m1">
          <div className="top">
            <h4>Repair Services</h4>
            <h2>
              Up to <span>70% OFF</span> - All t-shirts & Accessories
            </h2>
            <button>Explore More →</button>
          </div>
        </section>
      </div>

      {/* New Arrivals Section */}
      <section id="p1" className="section-p1">
                <h2>New Arrivals</h2>
                <p>Winter Collection New Modern Styles</p>
                <div className="pro-container">
                    {products.map(product => (
                        <div className="pro" key={product._id} onClick={() => handleClick(product._id)}>
                            <img src={product.image[0]} alt={product.name} />
                            <div className="des">
                                <span>{product.brand}</span>
                                <h5>{product.name}</h5>
                                <div className="star">
                                    {[...Array(product.rating)].map((_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>
                                <p>Selling Price Rs. {product.price}</p>
                                <h4>MRP ₹{product.mrp} ({product.discount})</h4>
                                <h5>(Incl. of all taxes)</h5>
                            </div>
                            <div className="cart">♡</div>
                        </div>
                    ))}
                </div>
            </section>

      {/* Additional Deals Section */}
      <section id="deals">
        <div className="banner-box1">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at KR</span>
          <a href="b1g1.html">
            <button>Learn More</button>
          </a>
        </div>
        <div className="banner-box2">
          {/* Additional Banner Box */}
        </div>
      </section>

      {/* Additional Deals Section 2 */}
      <section id="deals2">
      {banners.map((banner, index) => (
        <div
          key={index}
          className='banner-box1'
          style={{
            backgroundImage: `url(${banner.imgSrc})`
            
          }}
        >
          <h2>{banner.title}</h2>
          <h3>{banner.subtitle}</h3>
        </div>
      ))}
    </section>
    </div>
  );
};

export default Fashion;
