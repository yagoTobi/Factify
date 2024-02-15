import React from 'react';
import Navbar from '../components/Navbar';
import PricingPanel from '../components/PricingPanel';
import './css/PricingPage.css'; // Path to the CSS file for styling the pricing page

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <Navbar />
      <div className="pricing-container">
        <PricingPanel
          title="Free"
          image="free-tier-image.jpg"
          text={`Basic Fact Comparison: Access to articles that synthesize facts from up to 3 different news sources, providing a straightforward, unbiased account of daily news.
                Limited Article Access: Users can read a certain number of reconstructed articles per month, encouraging regular engagement while incentivizing premium upgrades.
                Community Features: Basic access to comment sections and forums, allowing users to discuss articles and share insights, fostering a community of informed readers.`}
          onSelect={() => console.log("Free selected")}
          isPremiumPlus={false}
        />
        <PricingPanel
          title="Premium"
          image="premium-tier-image.jpg"
          text={`Enhanced Fact Comparison: Access to articles with facts synthesized from a wider range of sources (over 3), including niche and international news outlets, offering a more comprehensive view.
                Unlimited Article Access: Removes the monthly limit on article reads, offering unrestricted access to the platform's content.
                Ad-Free Experience: Provides a cleaner, more focused reading experience by removing advertisements from the site.`}
          onSelect={() => console.log("Premium selected")}
          isPremiumPlus={false}
        />
        <PricingPanel
          title="Premium +"
          image="premium-plus-tier-image.jpg"
          text={`Exclusive Insights and Analysis: Offers in-depth analyses, expert opinions, and commentary on news stories, adding context and depth to the basic facts.
                Early Access to Features: Subscribers get early access to new features and updates, placing them at the forefront of Factify's evolving service.
                Personalized News Digest: Customizable news feeds and daily/weekly digest emails tailored to the user's interests, optimizing their news consumption experience.`}
          onSelect={() => console.log("Premium + selected")}
          isPremiumPlus={true}
        />
      </div>
    </div>
  );
};

export default PricingPage;
