import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div >
      <section className='hero bg1' style={{ backgroundImage: 'url("/images/sale1.jpg")' }}>
      <div className="snow">
        <div></div>
      </div>
    </section>


      <section id="category">
      <h2>Categories</h2>
      <p>What you are looking for</p>
      <div className="pro-container">
        <div className="pro">
          <div className="top">
            <Link to="/fashion">
              <img src="images/5222288.jpg" alt="Fashion" />
            </Link>
            <div className="des">
              <span>Fashion</span>
            </div>
          </div>
        </div>
        <div className="pro">
          <Link to="/gifts">
            <img
              src="images/top-view-pink-rose-with-violet-bouquet-with-hypericum-berries-with-leaves-white-surface.jpg"
              alt="Gifts & Flowers"
            />
          </Link>
          <div className="des">
            <span>Gifts & Flowers</span>
          </div>
        </div>
      </div>
    </section>
    <h1 className="heading"><span>About Us</span></h1>
    <div className='ao'>
      <section id="about">
          <div className="content"style={{lineHeight:'1.8rem'}}>
            <h3>Why Choose Us?</h3>
            <p>
              We deliver a wide range of gifts suitable for any occasions like birthday, wedding, anniversary and also for romantic occasions like valentines to anyone - whether it is to affirm a friendship, to celebrate a new beginning, to thank someone, to felicitate a family, to reconnect with your beloved, to extend congratulations, to say a sorry, to give a little encouragement - or because you feel like gifting something to your loved ones either him or for her just like that.
            </p>
            <p>
              The range of gifts we offer, for delivery across 180 countries around the world include chocolates, cakes, soft toys, gift baskets, flowers, and some personalized gifting stuff as well. You may also request for any gift you may think and we will try our best to arrange for the same, provided with some time to be able to let our local shop procure it for you. You can send your personalized message with any gift you select.
            </p>
            <p>
              We deliver your gift from a local gift shop in the country; you would like the gift to. The local gift shops are carefully selected so that the quality of the gifts is of premium quality. The delivery from a local gift shop lets you save time (for a delivery within 24 hours) and money (low shipping charges). The delivery may happen either through direct delivery by local gift shop or by engaging a professional courier service like FedEx or DHL from the local gift shop, who directly deliver the gift at the doorsteps of the recipient, either the address of delivery is a residence or an office.
            </p>
          </div>
   
      </section>
      <section id="offers">
        <div className="offers">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEx0lEQVRoge3YWaiVVRQH8J9dp3JKK7PJcGqiFCQrmq3MMMwsQ6Uy7EGpCIko66V6CCuCJoiMElMqSg2kIppR0dLqVlqWRVekATNzSHO4Xoce1j6cz+s595zDubceOn/YfNPa317zWntTQw011FBDDTVo18r/64F7cT66YQ9W4jGsa+W1DkJrCtIOSwTzc7ETHTASl+FM/NWK67UZBmA3Di/wrR43tuXi7cugGYtZRb7tRe90fyR2YFcBupU4o2LuKkA5gizCiCLfDjR77o4vCtCdkNYaKYS9pFwGy0U1MfIwzk33E9FFBPRY/N2M9jm8gqXCiouqWLcgyrFIMSzFz+l+FzalsQsfZuh6Cou8hjVVrPev4US8h9UiXqAOL+Gj/4qpSjFB+P63aMDveF1YYB1OamsGKnGtfuiVeW4UjJ8jstoYeZe6EmcLoe5Ex6o5LYFKgv0FXJ95XiuYXSQEeBTHYYMoijnMxRZMa/a/jiJBVIKtDs2UrYKe2IezhFAHsBHjMzR34IMCc29O9JWMzsUYOaw6ORyV/jEcX6FTYnwO+iaajun76QXmfyrcNTfW4ro0/8nM+9NKMVKtIEek67XCMnswDx+L2kI0kodhBgbjdrwsXHGvcLvc2IdBOFqk8dz7kj1apYJMTIzOw9AkSCMuEtbJ4W2MyggyXySATzBOaH5B+p51l18wVVhvS4W8VYSLMT2NAaKrbRBuNSlD1w9Nop7MxkPpXTZL3ib8fru8GxZDHyVipNo2/mqx15iPIcK/c/hOZLNLRSarF51xZ7FXGSWSwDg8hVfxeZF1+mB9mr+7EEE1LQrhWjuxUGyocs8wUzSJa4S/9xTa7yJc9HGhgO/RX8TVZLyf5uWwSSilTXGLfAO4VhTFUpiGZQ6NzweFG/YXHXRuzFaGa7VkkXbyPdNeoc3myFpgIabgLexv4b+/ipjoJ+KrTsTeBJHN1oltwzYhbHuRMFpES4J0wuZ0vwLnFREkt5F6BIvxGd5JDNYJl2ov4qJzmnM8fkhM90wMPyNS8iDhjjPwNe5ycOxVLEijfG+1twhN1iIbMUy42zBRU/YJKz2NH0VjuQcv4gKxwRovYiCnkJ/SurvT/HeV0cqUk7VGCG1nsUJU8BmifkwtMrercMneQtAsJuFZYZlS6CCKaVVZa41IsVlsSNesRQoh59uFKvNi3FrG+lk0VUhfNkaIOlEMPXB3Wy3+v8VyEYwPpOcJIm02iAAm6sKwzJwbxGFDX1Hw6nCFSM1dM/MbcBXuz/xvpnD5KeLQYoioJy32heXEyMmihbhHNH3dxQZnuvwmp6+Di1U3sclaL+rFQNFkNiWG+ouUuh2rcDm+wfNJkNGipXkiCb5ay7Wp7BZlidD40CTEsULr+7V8sNAkLDI4jVWZb2NEis/VqoHpn73E6Uy9SDQ34cJSDFbSa9XJa6VJtNktailhlRBiCN7IvN8qUmluW9yY1tghL/Ac4QHLSi1S7n5ktGjZl6fnbUJjX2ZohguNNj8aXZnmn5rus+/rhUCE204WxTeXCf9MoyTKscgqsXG6TxzKHSMsMl1U3gXCv69JYyb+kE8Es3CKON9aK6p0vSioRNf8m9gS78eb8pV8s/IKZg011FBDDTXUAP8A2SEpwhp3gcUAAAAASUVORK5CYII="
            alt='Free Delivery'
            />
          <div>
            <h3>Free Delivery</h3>
            <p>On All Orders</p>
          </div>
        </div>
        <div className="offers">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACVUlEQVRoge2Zu24TQRSGP8ILxAYljgGJR6EiF/MIFBQ0iCrBQEcQ4X2gwlVoIA1BAkUCRUSIOg2FDcGA5KXYf/EEz95mx14D80lHszpnzuz5NePR7BgCgUAgEPDHNWAX+AJEc2oD1dhJE/F4Doosazu2mYiAIdAFVtLUWkgGnRUrwF3iWiP+mJnncnYdBp61kIR7eu+u6RzI2XIYsC4hLb2376uYY1kdTNRdRciirA6chKwDPeAbcEK8NjeM+IZ8J8RLtQes+ak3ldJCHgIj7FvgI5ktNgK2/dZ+ilJC1lXQENgEmsA54i3wh5FrxpvAlnwjYNW3grS6s4T0FNuyxLpG7mZGvOdaaQ6lhPQVa1piy0auLd7EskV65HfdCxUHMrfdz5b4mYrjF6aIkD21NxzGv6n2pUOuE1lLa43xj/0Ok0vIlrtEvBn8VO5Vb5XmvNu2dR4DDcW3Sd9+s2wEPNAYDY05jVNwppAIeAKcVZ9V4Bnjc1mWDdQ3mYkF4OmURFQ6ojSAfeV8lEXyNTLyfFNJyCLwSv0/AZeBS8CRfG+A874qzcFZiDkTH4CLRqwFvFPsLbMR4yRkCThQv0OgLf8VGfIdqs+BcqaJk5Bb6vOe0x9gX2UJLfWJlDNNnJfWbeJjSV7usvpOm8q7lq/cqng7a80NdQvZA16UeE6lbiHJsafocy7/zG9koLbMDWPdXFDbh7GQfbXXZ16OO0mtr01nh3iKhsRXkW2KM+ul1QbuA9/13olb+R2jqL/FJm7jEzrEl2xFvjnqstz/RwKBQCAQ+G/5Ba3bzy7pdjLSAAAAAElFTkSuQmCC"
            alt='Offer & Gifts'
          />
          <div>
            <h3>Offer & Gifts</h3>
            <p>On All Orders</p>
          </div>
        </div>
        <div className="offers">
          <img
            src="data:image/png;base64,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"
            alt='Return'
          />
          <div>
            <h3>10 Days Return</h3>
            <p>Moneyback Guarantee</p>
          </div>
        </div>
        <div className="offers">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADJ0lEQVRoge3YX6hlYxjH8c/e9hjMZHCkMwlD05DmYiaKKJomqVMUyoXIlHKBEDNi/BuhFDfk+NtcipgaueBixoVSR+ZGmEaiyahhaPw3OMY5Lp61Oc7sd621Z8/a65jWt1Z7r/U+a63fs973fd7neWloaGj4P9HKfq/BpTi6Ri2z2Y1n8GkZ4w7uxfUYx2/V6eqbZZjAudhZ5obdOKdKRQPwPB4sY9jGYiU9roGdQl8h7YqFDI1O9rsEx9UpJMEJ/RhPz/HjuTJOHDZDq3FkrnHYONKNWu/gzzqFJFjSj/G0PsPcEFmLp8saz2VHjsVJZQw7xSa1ciam8E2RYcqRNhYV3PuL8vOqg+syYb3Yh8cwOePaLSJhbGE9Xsh7QSpqrcd3BcfLZTzIuBXrcto7M7S0cQ9uxvlYjYdxp3/rp54MY45sFBM3jxYuxja8iuNntC3HdlGfXKiHQ3XOkdOxCqM4DWPYg/vx1izbj7ECt2GTGIJvYhe+xtst0SMjYrhUxUbswBPZ+TxR0G3L3rsdr2c2RbRxgRhyozgFK1M9shQr+xD6A7bktO/HMTPOF4mhM9bHO7pM4d3sID7KZMqR87Cmj4fvke/IJmwWewMTuL3gefPwaGY/JXp0g/ggs/lnvgxrQRwRewOLcWJCVJcHHFiXpKLe/Ky9lpW9yJEPHejI+wnbozDdFgvbwkMosgz7cIT4mqn2MtdgAfa38Ep24W78OJC8ND/hLxFhvsXvmbClInrN5upMV3f8T+EKvNHD9mxsJYbVSyLyVFV335W9dAI3ZP93iAUwxRg+wge4JMfuMryXu+RXwALRE9N4EV/gkRz7x/EH7iuwaQ27QvxVFmHEcLh8wOe1RI9srbPU3SxSk0G2a1eLjfctdToyKVLzh3JsunOsFy2R5j8lAkmtLBSJ35WJ9jNwaqJtDT7BkRXoOijGsFe66OrFCnyPiypRNADr8JlI7Ys4C1/ixkoVDcAGfCVS9BSrxIJ6x1AUDcC1Ysg86b8V4ojYzN6Lq2rQdVCcjNdEWjOOZ/GzyD5GUzcNe2Xvh2W4SeRZ4/i8XjkNDQ0Nh5K/AaLo4Sr89dlkAAAAAElFTkSuQmCC"
          alt='Payments'
          />
        <div>
          <h3>Secure Payments</h3>
          <p>Secure UPI Payments</p>
        </div>
      </div>
      </section>
      </div>
    </div>
  );
};

export default Home;
