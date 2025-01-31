import React from 'react';
import './FirstPage.css'; // Custom styles for the page
import { QRCodeCanvas } from 'qrcode.react'; // Ensure QRCodeCanvas is imported correctly
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <div className="blog-container">  

      <section className="blog-section">
        {/* Post 1 */}
        <div className="blog-post">
          <div className="post-header">
            <h2 className="post-title">Exploring the Future of AI</h2>
            <p className="post-meta">Posted on January 29, 2025 by Mythili</p>
          </div>
          <img 
            src="https://media.licdn.com/dms/image/v2/D5612AQFKPcqEmLH-5A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712561293388?e=2147483647&v=beta&t=BbxzswMgXwguPKpCWj7HzRkYRyZkiNe3X2KXWMMNikk"
            alt="AI Future Trends"
            className="post-image"
          />
          <p className="post-excerpt">
            Artificial Intelligence (AI) is rapidly reshaping industries, from healthcare to finance, and even creativity. In this post, we dive into the transformative impact AI will have on the future and how we can prepare for this technological revolution.
          </p>
          <QRCodeCanvas value="https://en.wikipedia.org/wiki/Artificial_intelligence" className="qr-code" />

        </div>

        {/* Post 2 */}
        <div className="blog-post">
          <div className="post-header">
            <h2 className="post-title">5 Tips for a Healthier Lifestyle</h2>
            <p className="post-meta">Posted on January 28, 2025 by Mythili</p>
          </div>
          <img 
            src="https://austinmdclinic.com/wp-content/uploads/2021/09/5-Tips-for-Healthy-Eating.jpg"
            alt="Healthy Lifestyle Tips"
            className="post-image"
          />
          <p className="post-excerpt">
            Living a healthy life doesn't have to be complicated. From small daily changes to mindful habits, this post provides five actionable tips to help you live a healthier, happier life, focusing on both physical and mental well-being.
          </p>
          <QRCodeCanvas value="https://en.wikipedia.org/wiki/Healthy_lifestyle" className="qr-code" />
        </div>

        {/* Post 3 */}
        <div className="blog-post">
          <div className="post-header">
            <h2 className="post-title">The Rise of Web Development Frameworks</h2>
            <p className="post-meta">Posted on January 27, 2025 by Mythili</p>
          </div>
          <img 
            src="https://www.globalhunttechnologies.com/blog/wp-content/uploads/2022/08/Banner-1-1.jpg"
            alt="Web Development Frameworks"
            className="post-image"
          />
          <p className="post-excerpt">
            Web development frameworks have revolutionized how developers build modern websites and applications. From React to Vue.js, this post explores the top frameworks and what makes them so powerful for building scalable applications.
          </p>
          <QRCodeCanvas value="https://en.wikipedia.org/wiki/Web_development" className="qr-code" />
        </div>

        {/* Post 4 */}
        <div className="blog-post">
          <div className="post-header">
            <h2 className="post-title">Mastering Time Management as a Developer</h2>
            <p className="post-meta">Posted on January 25, 2025 by Mythili</p>
          </div>
          <img 
            src="https://fastercapital.com/i/Tips-for-Overcoming-Common-startup-Obstacles--Mastering-time-management.webp"
            alt="Time Management for Developers"
            className="post-image"
          />
          <p className="post-excerpt">
            Time management is a vital skill for developers, especially with deadlines and multiple projects. In this post, I share strategies for managing your time effectively, staying productive, and avoiding burnout while maintaining a balanced lifestyle.
          </p>
          <QRCodeCanvas value="https://en.wikipedia.org/wiki/Time_management" className="qr-code" />
        </div>

        {/* Post 5 */}
        <div className="blog-post">
          <div className="post-header">
            <h2 className="post-title">Understanding Quantum Computing</h2>
            <p className="post-meta">Posted on January 30, 2025 by Mythili</p>
          </div>
          <img 
            src="https://techmag.com.pk/wp-content/uploads/2023/03/11-Best-Practices-for-Quantum-Computing-in-2023..webp"
            alt="Quantum Computing"
            className="post-image"
          />
          <p className="post-excerpt">
            Quantum computing is one of the most promising areas of technology, with the potential to revolutionize fields like cryptography and machine learning. This post explores the basics of quantum computing and its future applications.
          </p>
          <QRCodeCanvas value="https://en.wikipedia.org/wiki/Quantum_computing" className="qr-code" />
        </div>

        {/* Post 6 */}
        <div className="blog-post">
          <div className="post-header">
            <h2 className="post-title">The Impact of 5G on Modern Connectivity</h2>
            <p className="post-meta">Posted on January 29, 2025 by Mythili</p>
          </div>
          <img 
            src="https://media.springernature.com/lw1200/springer-static/image/art%3A10.1007%2Fs12652-020-02521-x/MediaObjects/12652_2020_2521_Fig3_HTML.png"
            alt="5G Technology"
            className="post-image"
          />
          <p className="post-excerpt">
            5G is set to transform how we connect to the internet, offering faster speeds and more reliable connections. This post dives into how 5G will impact industries such as IoT, healthcare, and smart cities.
          </p>
          <QRCodeCanvas value="https://en.wikipedia.org/wiki/5G" className="qr-code" />
        </div>

        {/* Post 7 */}
        <div className="blog-post">
          <div className="post-header">
            <h2 className="post-title">Building Scalable Applications with Microservices</h2>
            <p className="post-meta">Posted on January 28, 2025 by Mythili</p>
          </div>
          <img 
            src="https://i0.wp.com/blog.apilayer.com/wp-content/uploads/2024/02/Building-Scalable-Apps-with-Microservices-Currency-API-Fixer.jpg?resize=1140%2C694&ssl=1"
            alt="Microservices Architecture"
            className="post-image"
          />
          <p className="post-excerpt">
            Microservices architecture is a game-changer for building scalable applications. This post provides a detailed overview of microservices, their benefits, and how to implement them in your projects.
          </p>
          <QRCodeCanvas value="https://en.wikipedia.org/wiki/Microservices" className="qr-code" />
        </div>

        {/* Post 8 */}
        <div className="blog-post">
          <div className="post-header">
            <h2 className="post-title">The Power of Data Analytics in Business</h2>
            <p className="post-meta">Posted on January 27, 2025 by Mythili</p>
          </div>
          <img 
            src="https://images.pexels.com/photos/278893/pexels-photo-278893.jpeg"
            alt="Data Analytics"
            className="post-image"
          />
          <p className="post-excerpt">
            Data analytics is transforming the way businesses make decisions. In this post, we explore the importance of data analytics in modern business strategies and how it drives growth and innovation.
          </p>
          <QRCodeCanvas value="https://en.wikipedia.org/wiki/Data_analysis" className="qr-code" />
        </div>

      </section>
    </div>
  );
};

export default FirstPage;
