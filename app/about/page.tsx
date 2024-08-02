'use client';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Farid Khan',
    position: 'Chief Executive Officer',
    imageUrl: './images/faridceo.png',
    introduction: 'At Ainaya group, we understand the importance of quality and care, whether it\'s in the Healthcare, Gold trading or petroleum industry. Our commitment is to serve both sectors with integrity, safety, and excellence. For Healthcare: In the realm of healthcare, we provide cutting- edge solutions and products that contribute to the well-being of individuals and communities. Our dedication to health and safety drives us to offer the highest quality medical equipment, supplies, and services. We \'re proud to support healthcare professionals in delivering exceptional patient care. For Trading & Petroleum Products: In the world of petroleum products, we are a trusted source for reliablefuel and lubricant solutions. We understand the criticalrole energy plays in powering industries and drivingprogress. Our focus is on delivering top-quality petroleumproducts that keep your operations running smoothly andefficiently.',
  },
  {
    name: 'Mr. Hafiz Ahsan',
    position: 'Managing Director',
    imageUrl: './images/hafizceo.png',
    introduction: 'Hafiz Ahsan brings a wealth of experience and a proven track record in International Business development. His visionary leadership and unwavering commitment to excellence have positioned him as a driving force in our industry. He held key leadership roles at earlier assignments where he successfully completed multiple tasks and achieved notable milestones. With a career spanning over 40 years, he has consistently demonstrated strategic foresight, innovation, and a keen ability to navigate the dynamic landscape of Petroleum and Gold trading. His academic foundation, combined with hands-on experience, has equipped him with a unique blend of theoretical knowledge and practical insights that have proven instrumental in driving organizational success. His commitment to fostering a culture of collaboration, innovation, and employee development aligns seamlessly with our company values. Mr. Ahsan\'s strategic vision includes reinforcing our commitment to Petrojet Gold’s mission or vision.',
  },
  {
    name: 'Mr. Stanley A O',
    position: 'Director of Operation RUSSIA & EUROPE',
    imageUrl: './images/stanley.png',
    introduction:'with a distinguished career spanning over 35 years in operations management and a specialized focus on the dynamic markets of Russia and Europe, Stanley is a seasoned leader in our organization. Prior to joining Petrojet Gold, Stanley held key positions in multinational corporations where he honed expertise in navigating the intricacies of both the Russian and European business landscapes. He is recognized for achievements in several projects that have contributed significantly to operational efficiency and strategic growth in this region. In this pivotal role as Director of Operations for Russia and Europe, Stanley is dedicated to aligning our operational strategies with the unique demands of these regions. His leadership will play a crucial role in driving synergy, efficiency, and sustained success as we navigate the complexities of these diverse markets.',
  },
  {
    name: 'Captian Jamil Rehman',
    position: 'Director of operations AUSTRALIA – ASIA PACIFIC (Including New Zealand & Oceania )',
    imageUrl: './images/jamil.png',
    introduction:'With a formidable background in operational leadership and a proven track record in optimizing business processes, Captain Jamil Rehman brings a wealth of expertise to our organization. Before joining Petrojet Gold, He held pivotal roles in his past assignments, where he spearheaded initiatives that significantly streamlined operations and enhanced overall efficiency. Captain Jamil has consistently demonstrated a keen understanding of operational dynamics, implementing strategies that marry innovation with practicality to drive sustainable growth. As our Director of Operations, Captain Jamil is dedicated to ensuring seamless and agile operational processes that align with our organizational goals. His emphasis on fostering a collaborative and high-performance culture positions us for success in an ever-evolving business landscape.',
  },
  {
    name: 'Aurangzeb Toosi',
    position: 'Director of operations Pakistan & Middle East',
    imageUrl: './images/aurangzeb.png',
    introduction:'Experienced and Dynamic Management Professional with more than 25 years of Senior Management experience within International and Governmental organizations. Demonstrated expertise in the Areas of Corporate Re-Structuring, Equity Financing, Bridge and Project Financing with extensive Business Networks in the Healthcare, Construction, Information Technology and International Trading. Possess strong Interpersonal skills and proven Integrity in working with Multi-cultural and Trans-national organizations in fields ranging from Healthcare, Construction, Petroleum / Petrochemical Trading, Investments, Integrated Information And Broadcast Technology Solutions Provider, Automobiles and Agricultural commodities.',
  },
];

const AboutPage = () => {
  return (
    <main className="container mx-auto p-4 mt-20" >  {/* Adjusted margin-top */}
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p>
      Our strength lies in the professional and experienced
team of professionals, Engineers and Technicians. We
are dedicated and focused to the task for optimum
results and satisfaction of the customers.
We believe in providing quality service and update
ourselves with all the changing international norms and
standards. Our zeal to learn and keep ourselves well
informed makes us different from the rest 
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.slice(0, 2).map((ceo, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={ceo.imageUrl}
                alt={`${ceo.name}'s picture`}
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold">{ceo.name}</h3>
              <p className="text-gray-600">{ceo.position}</p>
              <p className="mt-2">{ceo.introduction}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4"></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.slice(2).map((member, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={member.imageUrl}
                alt={`${member.name}'s picture`}
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <p className="mt-2">{member.introduction}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
