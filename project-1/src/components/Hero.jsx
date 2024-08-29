function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          excepturi repellat delectus facilis veritatis exercitationem dicta
        </p>
        <div className="hero-btn">
          <button className="red-btn" >Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also available on</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe_image" />
      </div>
    </main>
  );
}

export default HeroSection;
